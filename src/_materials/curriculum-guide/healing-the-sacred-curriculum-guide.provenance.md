# Provenance: Healing the Sacred curriculum guide

Draft of November 15, 2026. This file records how `healing-the-sacred-curriculum-guide.md` was made, what was checked, and what is still open. It follows the Feynman convention of a provenance file beside every research output.

**Status: cleared for publication.** On November 16, 2026, Adam DJ Brett confirmed that the American Indian Law Alliance had cleared the guide, and the draft notice was removed from the cover and the PDF footer. The supporting files are in `provenance/`.

## How it was made

The guide was drafted by Claude agents working in four roles. The Feynman research engine was not run, because it needs a human to approve each plan. The agents instead followed Feynman's role files (`feynman-adjb/.feynman/agents/`) and the citation standards of the academic-research-skills plugin.

| Role | Model | Work |
|---|---|---|
| Professor | Fable | Template, shared brief, Series Details, Key Resources selection, editorial decisions, final pass with the `adam-voice` and `academic-humanizer` skills, assembly, link and name checks |
| Teaching assistant | Opus (7 agents) | Drafted the 11 episode sections, revised them after the student read, and verified citations and facts |
| Undergraduate assistant | Sonnet (4 agents) | Harvested and verified sources into four ledgers |
| Student | Haiku (2 agents) | Read each section cold, then the transcript, and answered and rated all 55 draft questions |

All agents ran at high effort. The genre was learned from the four Soulforce course packs (*Spirit & Power*, *Sanctuary*, *Miss Information*, *Reign of Error*).

## Sources

- **Episodes:** the 11 transcripts and 11 episode pages in this repo, plus `src/bios/` and `src/pages/about.md`.
- **Ledgers:** about 175 source entries across four ledgers in `provenance/`: aila.ngo and lakeback.org (45), onondaganation.org and the NOON booklet (45), Joseph J. Heath and doctrineofdiscovery.org (45), and Holly Rine, the Matilda Joslyn Gage Foundation and the hl and dome libraries (39). Each entry records how it was opened.
- **Grant and credit line:** the Syracuse University Department of Religion article of November 4, 2026, the United Lutheran Seminary announcement of February 6, 2026, and Adam DJ Brett's instructions in the session.

## What was checked

- **Quotations.** Every quotation from a speaker was matched word for word against the transcript by the drafters and again by the revisers.
- **Key Resources (27 entries).** 22 verified as listed and 5 corrected, then all 27 used in corrected form. Journal articles were confirmed through Crossref, books through library copyright pages or Crossref, and court cases through the U.S. Reports and the Caselaw Access Project.
- **Episode print sources (7).** All confirmed. Noel gained its page range and DOI. Speak and d'Errico, which the harvest could not confirm, were confirmed by the verifier.
- **Facts (58 checked).** 31 verified, 12 corrected, 2 inferred, 13 unverified. Every corrected fact was changed in the guide. Every unverified claim that remains in a description is attributed to the speaker who makes it.
- **Legal chronology.** Each date in episodes 6, 7 and 8 was checked against the complaint, the Second Circuit order, the Nation's releases and Inter-American Commission Report No. 51/23.
- **Links.** 69 distinct URLs were requested on November 15, 2026. 62 returned 200. Six DOIs returned 403 to the checker (publisher blocks) and were confirmed through the Crossref API. One, `https://podcast.lakeback.org/episodes/`, does not resolve because the podcast site is not live yet. Results are in `provenance/link-check-2026-11-15.txt`.
- **Names and spellings.** Skä•noñh, Ganohé:nio, Gayanashagowa, Gaeñ hia uh, Tadodaho and Karonienhawi each appear in one spelling. "Jikonhsaseh" appears once, marked as the Onondaga Nation's spelling.
- **Student read.** Of the 55 draft questions, 25 were fully answerable from the episode alone, 22 were unclear on first reading and 11 were leading. All flagged questions were rewritten. The rewritten questions have not been through a second student read.

## What is not verified

- **Run times.** All are TBD. None were estimated.
- **Sources read in part.** Several books and long documents were checked for publication facts only (front matter, abstract or contents), and the two 2006 declarations are scanned PDFs read by OCR in part. Each ledger entry says how much was read. Annotations in the guide describe only what was read.
- **Speaker claims with no document found.** These remain in descriptions, each attributed to the speaker:
  - Episode 3: New York State "quasi-treaties" signed under the influence of rum, and the Everett report.
  - Episode 6: that the cheapest cleanup option was chosen.
  - Episode 7: Chief Irving Powless Jr.'s role, and the land rights action as a way to gain a voice in the cleanup.
  - Episode 8: County Executive Mahoney's request to rescind, mercury dumping "from 1946 to 1970" (the Nation's own timeline and Rine 2025 give different years), the failed cap, the denied motion to intervene, and the fish advisory not reaching refugee families.
  - Episode 4: the Nationals as "the fifth member nation."
  - Episode 5: the meeting with the president of the International Olympic Committee.
  - Episodes 10 and 11: Lucretia Mott and the London convention, the temperance amendment, and the reasons for Gage's 1890 break.
- **Speaker attribution.** The transcripts have no speaker labels. Attributions were inferred from context. One answer in episode 2 and the opening of episode 8 are left unattributed.
- **The eagle nest.** Episode 1's guests call the 2022 nest the first "in recorded history." Rine 2025 says the first "in over a hundred years." The guide quotes the guest and does not state either as fact.

## Decisions for Adam DJ Brett and AILA

1. **Review by the Nation.** Episode 6 gives Tadodaho Sidney Hill's outline of the Peacemaker narrative, and episode 9 gives Richard Hill's telling of the Two Row. Both stay inside what was said on air. AILA should confirm that the level of detail is acceptable.
2. **Cover credit (settled November 15, 2026).** The cover reads "Adam DJ Brett and Betty Hill (Lyons)." Adam DJ Brett confirmed that Patricia Nolan Vogt is named in full and identified as "(Onondaga descent)," with no nation or clan affiliation. The guide and her bio on the site now follow that.
3. **Two additions to the genre.** The guide has a Guests list and a short "Before You Teach" note, which the example packs do not have.
4. **Transcripts.** The guide links to transcripts and does not embed them.
5. **Sources left out on purpose.** The lakeback.org "Original Instructions" page (a full retelling of the Peacemaker story), the NOON booklet's 1989 belt-return account as an excerpt, and Peter d'Errico's *Federal Anti-Indian Law* (confirmed, but episode 7 already has nine resources).
6. **Gaps no verified source could fill.** The eagle nest in the guests' or the Center's own words, the Olympic campaign and the Haudenosaunee flag and anthem, boarding schools and language loss, the health department's fish study, the cleanup's Record of Decision, a Haudenosaunee-authored source on Jigonsaseh beyond the Nation's page, and a historian's assessment of the influence argument from outside the Wagner circle.

## Problems found outside the guide

These are for whoever maintains the sites and transcripts. During the build nothing outside `curriculum-guide/` was changed. On November 15, 2026, at Adam DJ Brett's request, the episode-page items below were corrected in `src/episodes/` (except the date on Joseph Heath's declaration, whose scan is illegible) and Patricia Nolan Vogt's bio was updated. The other items are still open.

- **Transcripts.** The two halves of episodes 1 and 2, 4 and 5, 7 and 8, and 10 and 11 share their opening and closing passages. Adam DJ Brett confirmed this is intended, since each pair is one conversation in two parts. Where speakers say "land claim" about the Nation's own case (episodes 6 and 7), the words stay as spoken and now link to the Nation's Land Rights page. Episode 2 has a stray production cue ("Patty, take us away"). Episode 7 spells "laches" as "latches." Ganohé:nio is spelled several ways across the transcripts.
- **Episode pages.** Several resource notes call the land rights action a "land claim." The pages cite Wagner's *Sisters in Spirit* as "Book Publishing Company, 2003" with a shortened title (the book is Native Voices, 2001). They date the Tadodaho's declaration "11/16/06" (it is signed November 15, 2006). Episode 8 italicizes a dissertation title. The episode 7 link to Heath's article goes to a mirror with no page numbers (the journal's own page gives *JCRT* 25, no. 1 (Spring 2026): 51–60). The "Sherrill opinion" link goes to a commentary, not the opinion.
- **Bios.** Sidney Hill's bio mentions "the 1984 games in Australia," which conflicts with the Nation's account of a 1990 debut in Perth. Ciarrai Eaton's bio and the transcript give different undergraduate degrees.
- **lakeback.org timeline (corrected November 15, 2026, in the local `lakeback.org` repo, not yet committed or deployed).** The 2014 entry was headed "World Court" and now names the Inter-American Commission on Human Rights. The 1613 entry read "Two Wampum" and now reads "Two Row Wampum." The 1794 entry read "United States of American." The page whose address says 1972 is labelled "1977 CE," and the label is the correct year for the Geneva conference, so only the address is off. It was left alone to avoid breaking the link. Still open: the 2014 entry says 2.5 million acres and the 1790 entry says 2 million.
- **doctrineofdiscovery.org.** Season 1, episode 1 has two different dates across the podcast repo and the main site. Season 6, episode 1's citation block names the wrong episode URL and date.
- **Onondaga Nation releases.** The March 11, 2025 anniversary release gives three dates that differ from the court record (March 28 for *Sherrill*, August 23, 2010 for the dismissal, and 10/13/2013 for the denial of certiorari). The guide uses the court record.

## PDF edition

`healing-the-sacred-curriculum-guide.pdf` is built from the markdown by `pdf/build.sh` (pandoc, then WeasyPrint). Rebuild it after any change to the markdown. Body text uses the Transitional stack from modernfontstacks.com (Charter). Headings and labels use the podcast site's own fonts (Red Hat Display and Atkinson Hyperlegible), and colors are the site's light-mode tokens. Checked on November 15, 2026: veraPDF passes the file as PDF/UA-1, it is tagged with one H1, 14 H2 and 41 H3 headings, it has 56 bookmarks, the language is set to en-US, both logos have alternative text, all fonts are embedded, and every text color is at least 5.3:1 against its background. Not done: a read-through with a screen reader, and language tags on individual Onondaga and Mohawk words.

On November 17, 2026, the teaching companion was renamed "Curriculum Guide" at Adam DJ Brett's request, including the cover, contents, headings, running footers, PDF metadata, filenames, website, and promotional drafts. The 41-page guide and two-page AAR flyer were rebuilt and visually checked; both pass veraPDF's PDF/UA-1 validation. Extracted guide text matches the previous edition apart from the requested name change and whitespace. The site builds successfully, and the new PDF download, citation, and contents anchors were verified. Historical references to the external Soulforce examples retain their original names and filesystem path.

On November 17, 2026, Adam DJ Brett clarified that Patricia Nolan Vogt is a host, not a producer. The guide's cover credit, its web index and announcement, and the draft episode outros now name Betty Hill (Lyons) and Adam DJ Brett as producers. Patricia's host biography and credits for episodes 1, 2, 10, and 11 remain. The PDF was rebuilt and its cover visually checked; it remains 41 pages and passes veraPDF's PDF/UA-1 validation. Extracted PDF text differs only in the producer credit, and the site build and four curriculum tests pass.

On November 19, 2026, the producer confirmed that Joseph J. Heath has served as full-time General Counsel for the Onondaga Nation since 1983. The guide and site biography were corrected from 1982; the recorded transcripts retain their spoken wording.

## Supporting files

All in `provenance/`:

- `BRIEF.md`: the shared brief every agent read.
- `DECISIONS.md`: the editorial decisions that governed the revision.
- `healing-sacred-ledger-*.md`: the four source ledgers.
- `healing-sacred-verification.md`: the verifier's report, claim by claim.
- `healing-sacred-student-read-ep*.md`: the two student reports.
- `healing-sacred-revised-ep*-changes.md`: the revisers' change logs.
- `link-check-2026-11-15.txt`: the status of every link.
