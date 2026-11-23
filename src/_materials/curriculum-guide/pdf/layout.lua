-- Pandoc filter for the curriculum guide PDF. It changes structure only, never wording.
--  1. Cover: everything before the first horizontal rule. The subtitle and
--     "Curriculum Guide" are headings in the markdown but not sections, so they
--     become paragraphs. That keeps one H1 and a clean heading outline.
--  2. Table of contents list gets a class so CSS can add page numbers.
--  3. "Run time / Host / Guests / Key Topics" lines become one labelled block.
--  4. Horizontal rules are dropped. Page breaks come from the stylesheet.
--  5. The arrow in one journal title is wrapped so CSS can pick a font for it.

local stringify = pandoc.utils.stringify
local META = { "^Run time:", "^Hosts?:", "^Guests?:", "^Key Topics:" }

local function is_meta(block)
  if block.t ~= "Para" then return false end
  local text = stringify(block)
  for _, pat in ipairs(META) do
    if text:match(pat) then return true end
  end
  return false
end

-- Bold the label: every inline up to and including the first one ending in ":".
local function label(para)
  local head, rest, done = {}, {}, false
  for _, inl in ipairs(para.content) do
    if done then
      rest[#rest + 1] = inl
    else
      head[#head + 1] = inl
      if inl.t == "Str" and inl.text:match(":$") then done = true end
    end
  end
  local out = { pandoc.Strong(head) }
  for _, inl in ipairs(rest) do out[#out + 1] = inl end
  return pandoc.Para(out)
end

local function div(class, blocks)
  return pandoc.Div(blocks, pandoc.Attr("", { class }))
end

-- Symbols the text fonts lack get a span so CSS can give them a font. Raw HTML,
-- because pandoc's HTML writer adds an invisible variation selector after the
-- arrow, and no font here has a glyph for that.
function Str(el)
  if el.text == "↔" then
    return pandoc.RawInline("html", '<span class="sym">↔</span>')
  end
end

function Pandoc(doc)
  local blocks = doc.blocks
  local first_rule
  for i, b in ipairs(blocks) do
    if b.t == "HorizontalRule" then first_rule = i break end
  end
  assert(first_rule, "cover: no horizontal rule found after the cover block")

  -- Cover. The band holds the title, subtitle and blurb. The rest sits below.
  local band, below, seen_h3 = {}, {}, false
  for i = 1, first_rule - 1 do
    local b = blocks[i]
    if b.t == "Header" and b.level == 2 then
      band[#band + 1] = div("subtitle", { pandoc.Para(b.content) })
    elseif b.t == "Header" and b.level == 3 then
      seen_h3 = true
      below[#below + 1] = div("doctype", { pandoc.Para(b.content) })
    elseif seen_h3 then
      below[#below + 1] = b
    else
      band[#band + 1] = b
    end
  end
  local out = { div("cover", { div("cover-band", band), div("cover-body", below) }) }

  local i = first_rule + 1
  local toc_next = false
  while i <= #blocks do
    local b = blocks[i]
    if b.t == "HorizontalRule" then
      i = i + 1
    elseif is_meta(b) then
      local group = {}
      while i <= #blocks and is_meta(blocks[i]) do
        group[#group + 1] = label(blocks[i])
        i = i + 1
      end
      out[#out + 1] = div("episode-meta", group)
    else
      if b.t == "Header" then
        toc_next = stringify(b) == "Table of Contents"
      elseif toc_next and b.t == "BulletList" then
        b = div("toc", { b })
        toc_next = false
      end
      out[#out + 1] = b
      i = i + 1
    end
  end
  doc.blocks = out
  return doc
end
