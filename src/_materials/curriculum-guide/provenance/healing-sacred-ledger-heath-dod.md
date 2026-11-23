# Source ledger: Joseph J. Heath and doctrineofdiscovery.org

Cluster: the writings of Joseph J. Heath, and doctrineofdiscovery.org (including podcast.doctrineofdiscovery.org and the Outcome journal pages).
For: *Healing the Sacred* curriculum guide, episodes 1 to 11 (weight on 7, 8, 3, 6 and 9).
Statuses were taken with curl on 2026-11-14 or 2026-11-15, without following redirects (the two Cornell and Buffalo landing pages answer 301 without the trailing slash, so the slash form is listed). 45 entries.

## Method and flags for the professor

- **Public URLs on doctrineofdiscovery.org** were worked out from `lib/content.js` (`postUrl`) and `lib/site.js` in `/Users/abrett76/github/doctrineofdiscovery.org/`: a post's URL is its `permalink` front matter if present, otherwise `/` plus its `categories` (lower-cased, in order) plus its slug (file name minus the date). Pages in `_pages` use their `permalink` or their path. Every URL below was then fetched.
- **Pointer posts.** Many `blog/link/...` posts on doctrineofdiscovery.org are one-paragraph pointers to the Outcome archive, the podcast site or other hosts. Where that is so, the entry lists the canonical page I fetched, not the pointer.
- **Episode 7 page link.** The listed Outcome URL `outcome.doctrineofdiscovery.org/jcrt/issue2/heath/` is a mirror. Its own "How to cite" gives only the journal and 2026; its tags say JCRT Volume 25, Issue 1; its folder name says "issue2". The full publication facts (vol. 25, no. 1, Spring 2026, pp. 51-60) come from the journal's own page `jcrt.org/archives/25.1/heath/` and the local file `/Users/abrett76/github/jcrt-files/citations/archives/25.1/heath.bib`. The curriculum guide should cite the JCRT form (entry 1).
- **Clean Water Act.** I searched for a Heath statement or article on the Clean Water Act and found none. The only lake-cleanup material quoting Heath is in entries 17, 18, 20 and 23.
- **Not confirmed (left out of the entries):** Heath lists "37 American Indian Law Review 351 (2013)" among his law review articles on the slide in entry 10. I could not find the article or its title in any source I opened (web search found no Heath article in AILR vol. 37). Treat as unverified until someone checks the journal's table of contents.
- **Heath's Buffalo Law Review essay (entry 3):** the landing page opened; the PDF returned HTTP 403, so I did not read the full text. The annotation rests on the page and on Heath's own description of it in entry 5.
- **Date discrepancies to resolve in the guide:** (a) the podcast repo dates S1E01 as March 14, 2022; the doctrineofdiscovery.org pointer post dates it March 22, 2022. I used the podcast page. (b) Episode S06E01's own "Suggested citation" block names a different episode's URL and date (season5/episode-08, May 19, 2025); I used the page's own URL and its dateline (June 27, 2025). (c) Outcome's "Healing the Sacred" page gives 2025-09-01 in its metadata and "(2026)" in its "How to cite".
- **Cultural care.** The guide should present Heath as the Nation's General Counsel speaking about law, not as a source for ceremonial teaching. Where Heath describes the Two Row (entry 6), the passage is his legal summary published by the Onondaga Nation General Counsel Office. Haudenosaunee-voiced or Haudenosaunee-hosted sources are entries 30, 32, 34, 35 (co-author Sandra Bigtree, Mohawk Nation), 41 and 44.
- **Private details.** Several PDFs print a business address, phone number and email for counsel on their first page. None are copied here.

---

## Joseph J. Heath: works

Confirmed items only. Part A is written or signed by Heath; part B is his filings, slides and recorded speech; part C is Heath interviewed, quoted or on a panel.

### A. Written by Heath

1. - **Title**: The Doctrine of Christian Discovery and Domination: How It Has Been Used by United States Courts to Deny Treaty Rights & Dismiss the Haudenosaunee Land Rights Cases
   - **Author or publisher**: Joseph J. Heath, Onondaga Nation General Counsel; *Journal for Cultural & Religious Theory* (Whitestone Foundation)
   - **Date**: 2026-04-16 (Spring 2026, vol. 25, no. 1)
   - **URL**: https://jcrt.org/archives/25.1/heath/ (mirror listed on the episode 7 page: https://outcome.doctrineofdiscovery.org/jcrt/issue2/heath/)
   - **HTTP status**: 200 (jcrt.org); 200 (Outcome mirror). The DOI link https://doi.org/10.17613/578sh-5t175 answered 403 to curl, so it was not confirmed.
   - **Local path read**: `/Users/abrett76/github/jcrt-files/citations/archives/25.1/heath.bib` and `heath.ris`; `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2026-04-16-heath.md` (pointer post)
   - **Chicago citation**: Heath, Joseph J. "The Doctrine of Christian Discovery and Domination: How It Has Been Used by United States Courts to Deny Treaty Rights & Dismiss the Haudenosaunee Land Rights Cases." *Journal for Cultural and Religious Theory* 25, no. 1 (Spring 2026): 51-60. https://jcrt.org/archives/25.1/heath/.
   - **Episodes it supports**: 7, 8, 3, 6
   - **One-sentence annotation**: Heath's most recent and most direct account of how *Johnson v. M'Intosh* leads to *Sherrill* and to the dismissal of the Cayuga, Oneida and Onondaga cases, then to the Nation's Inter-American Commission petition and the 1,000-acre land return.
   - **Verification**: fetched URL (both pages; abstract, citation metadata and page range read); opened local file (bib, ris)

2. - **Title**: The Doctrine of Christian Discovery: Its Fundamental Importance in United States Indian Law and the Need for Its Repudiation and Removal
   - **Author or publisher**: Joseph J. Heath; *Albany Government Law Review*
   - **Date**: April 27, 2017 (vol. 10, issue 1, 2017)
   - **URL**: https://www.albanygovernmentlawreview.org/article/23984-the-doctrine-of-christian-discovery-its-fundamental-importance-in-unitedstates-indian-law-and-the-need-forits-repudiation-and-removal
   - **HTTP status**: 200 (article page and the PDF at /article/23984.pdf, 45 pages)
   - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2021-07-13-algr-doctrine-christian-discovery-indian-law-repuidation.md` (also posted at https://doctrineofdiscovery.org/law/resources/algr-doctrine-christian-discovery-indian-law-repuidation/, 200)
   - **Chicago citation**: Heath, Joseph J. "The Doctrine of Christian Discovery: Its Fundamental Importance in United States Indian Law and the Need for Its Repudiation and Removal." *Albany Government Law Review* 10, no. 1 (2017): 112-56. https://www.albanygovernmentlawreview.org/article/23984.
   - **Episodes it supports**: 7, 8, 3
   - **One-sentence annotation**: A long law-review article tracing the doctrine from *Fletcher v. Peck* and *Johnson v. M'Intosh* through *Sherrill*, ending with a call to press the Vatican to rescind the fifteenth-century bulls and to organize outside the courts; suited to instructors and advanced students.
   - **Verification**: fetched URL (article page; PDF first page and last pages read); opened local file

3. - **Title**: Review of the History of the April 1997 Trade and Commerce Agreement among the Traditional Haudenosaunee Councils of Chiefs and New York State and the Impact Thereof on Haudenosaunee Sovereignty
   - **Author or publisher**: Joseph J. Heath; *Buffalo Law Review* (symposium essay)
   - **Date**: October 1, 1998 (vol. 46, no. 3)
   - **URL**: https://digitalcommons.law.buffalo.edu/buffalolawreview/vol46/iss3/10/
   - **HTTP status**: 200 (the form without the trailing slash answers 301)
   - **Local path read**: none
   - **Chicago citation**: Heath, Joseph J. "Review of the History of the April 1997 Trade and Commerce Agreement among the Traditional Haudenosaunee Councils of Chiefs and New York State and the Impact Thereof on Haudenosaunee Sovereignty." *Buffalo Law Review* 46, no. 3 (1998): 1011-[end page TBD].
   - **Episodes it supports**: 7
   - **One-sentence annotation**: Heath's essay on the 1997 New York State and Haudenosaunee trade agreement, which he describes in entry 5 as the first time the state accepted the Haudenosaunee as Nations rather than "tribes"; useful as an example of the diplomatic route the Nation tried before litigation.
   - **Verification**: fetched URL (landing page and citation metadata only; PDF returned 403, so full text unread)

4. - **Title**: Statement on the Historical Use of the Doctrine of Christian Discovery by the United States Supreme Court Since 1823
   - **Author or publisher**: Joseph J. Heath, Esq., Onondaga Nation General Counsel
   - **Date**: May 24, 2014 (prepared for the conference "Doctrine of Christian Discovery: After Repudiation, What Next?"; the web post is dated 2018-07-27)
   - **URL**: https://doctrineofdiscovery.org/statement-on-the-historical-use-of-the-doctrine-of-christian-discovery-by-the-united-states-supreme-court-since-1823/ (PDF: https://doctrineofdiscovery.org/assets/pdfs/DoctrineOfDiscovery5-24-14.pdf)
   - **HTTP status**: 200 (page); 200 (PDF)
   - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2018-07-27-statement-on-the-historical-use-of-the-doctrine-of-christian-discovery-by-the-united-states-supreme-court-since-1823.md`; `/Users/abrett76/github/doctrineofdiscovery.org/src/assets/pdfs/DoctrineOfDiscovery5-24-14.pdf`
   - **Chicago citation**: Heath, Joseph J. "Statement on the Historical Use of the Doctrine of Christian Discovery by the United States Supreme Court Since 1823." Paper prepared for the conference "Doctrine of Christian Discovery: After Repudiation, What Next?" May 24, 2014. https://doctrineofdiscovery.org/assets/pdfs/DoctrineOfDiscovery5-24-14.pdf.
   - **Episodes it supports**: 7, 3
   - **One-sentence annotation**: A short paper that walks through the Supreme Court decisions that rely on Discovery, written for non-lawyers at a conference and shorter than the law-review article.
   - **Verification**: opened local file; fetched URL

5. - **Title**: Nations Are Sovereign; They Are Not "Tribes"
   - **Author or publisher**: Joseph J. Heath, General Counsel for the Onondaga Nation
   - **Date**: March 6, 2018 (PDF); web post dated 2018-03-18
   - **URL**: https://doctrineofdiscovery.org/law/indigenous-peoples/united-nations/education/resources/nations-are-sovereign-they-are-not-tribes/ (PDF: https://doctrineofdiscovery.org/assets/pdfs/NATION-NOT-TRIBE3-6-18.pdf)
   - **HTTP status**: 200 (page); 200 (PDF)
   - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2018-03-18-nations-are-sovereign-they-are-not-tribes.md`
   - **Chicago citation**: Heath, Joseph J. "Nations Are Sovereign; They Are Not 'Tribes.'" Statement, March 6, 2018. https://doctrineofdiscovery.org/assets/pdfs/NATION-NOT-TRIBE3-6-18.pdf.
   - **Episodes it supports**: 7, 6, 9
   - **One-sentence annotation**: A two-page explanation of why the Haudenosaunee reject the word "tribe" and why traditional Haudenosaunee hear its use as disrespectful, which gives students a reason for the guide's own word choices.
   - **Verification**: opened local file; fetched URL (PDF read)

6. - **Title**: A Brief History of Haudenosaunee Treaty Making and the Obligations of the United States to Protect Haudenosaunee Lands and to Not Disturb the Free Use and Enjoyment Thereof
   - **Author or publisher**: Onondaga Nation General Counsel Office (listed under Joseph J. Heath on the 2018 "United States Indian Law" panel page)
   - **Date**: March 2012
   - **URL**: https://doctrineofdiscovery.org/assets/pdfs/Treaty-history3-19-12xx.pdf
   - **HTTP status**: 200
   - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/assets/pdfs/Treaty-history3-19-12xx.pdf`; listing in `src/_posts/2018-08-08-us-indian-law-panel.md`
   - **Chicago citation**: Heath, Joseph J. "A Brief History of Haudenosaunee Treaty Making and the Obligations of the United States to Protect Haudenosaunee Lands and to Not Disturb the Free Use and Enjoyment Thereof." Onondaga Nation General Counsel Office, March 2012. PDF, 6 pp. https://doctrineofdiscovery.org/assets/pdfs/Treaty-history3-19-12xx.pdf.
   - **Episodes it supports**: 9, 7, 6
   - **One-sentence annotation**: A six-page legal summary that links the 1613 Two Row Wampum and the covenant chain to the 1794 Treaty of Canandaigua and quotes its Article IV pledge not to disturb Haudenosaunee land, so it pairs directly with Richard W. Hill Sr. in episode 9.
   - **Verification**: opened local file; fetched URL (full text read)

7. - **Title**: The Citizenship Act of 1924 Was an Integral Pillar of the Colonization and Forced Assimilation Policies of the United States in Violation of Treaties
   - **Author or publisher**: Onondaga Nation (paper headed "Paper by Onondaga Nation"; listed under Joseph J. Heath on the 2018 panel page)
   - **Date**: May 29, 2018
   - **URL**: https://doctrineofdiscovery.org/assets/pdfs/CITIZENSHIP-ACT-OF-1924Red6-6-18.pdf
   - **HTTP status**: 200
   - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/assets/pdfs/CITIZENSHIP-ACT-OF-1924Red6-6-18.pdf`
   - **Chicago citation**: Onondaga Nation. "The Citizenship Act of 1924 Was an Integral Pillar of the Colonization and Forced Assimilation Policies of the United States in Violation of Treaties." Paper, May 29, 2018. PDF, 25 pp. https://doctrineofdiscovery.org/assets/pdfs/CITIZENSHIP-ACT-OF-1924Red6-6-18.pdf.
   - **Episodes it supports**: 7, 9
   - **One-sentence annotation**: States that the Onondaga Nation and Haudenosaunee never accepted U.S. citizenship and rest that on three treaties (Fort Stanwix 1784, Fort Harmar 1789, Canandaigua 1794), a clear short answer for students who ask why "treaty" matters in these cases.
   - **Verification**: opened local file; fetched URL (first pages read)

8. - **Title**: City of Sherrill v. Oneida Indian Nation, 544 U.S. 197 (2005): The Doctrine of Christian Discovery and Domination and the Denial of Treaty Rights
   - **Author or publisher**: Joseph J. Heath, Onondaga Nation General Counsel; Doctrine of Discovery Project
   - **Date**: 2023-02-06 (post date on the site)
   - **URL**: https://doctrineofdiscovery.org/blog/sherrill-v-oneida-doctrine-christian-discovery-denial-treaty-rights/
   - **HTTP status**: 200
   - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2023-02-06-sherrill-v-oneida-doctrine-christian-discovery-denial-treaty-rights.md`
   - **Chicago citation**: Heath, Joseph J. "*City of Sherrill v. Oneida Indian Nation*, 544 U.S. 197 (2005): The Doctrine of Christian Discovery and Domination and the Denial of Treaty Rights." Doctrine of Discovery Project, February 6, 2023. https://doctrineofdiscovery.org/blog/sherrill-v-oneida-doctrine-christian-discovery-denial-treaty-rights/.
   - **Episodes it supports**: 7, 8
   - **One-sentence annotation**: A plain-language essay explaining that *Sherrill* came three weeks after the Land Rights Action was filed, how the "equitable" bar it created ended the Nation's case in U.S. courts, and why the Nation went to the Inter-American Commission.
   - **Verification**: opened local file; fetched URL

9. - **Title**: The Good, The Bad & The Ugly in McGirt v. Oklahoma
   - **Author or publisher**: Joseph J. Heath, Esq., Onondaga Nation General Counsel
   - **Date**: 2020-08-14 (post date; the memo concerns the Supreme Court decision of July 9, 2020)
   - **URL**: https://doctrineofdiscovery.org/law/resources/event/doctrine-discovery-domination-mother-earth-pandemic/
   - **HTTP status**: 200
   - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2020-08-14-doctrine-discovery-domination-mother-earth-pandemic.md`
   - **Chicago citation**: Heath, Joseph J. "The Good, The Bad & The Ugly in *McGirt v. Oklahoma*." Memo. Doctrine of Discovery Project, August 14, 2020. https://doctrineofdiscovery.org/law/resources/event/doctrine-discovery-domination-mother-earth-pandemic/.
   - **Episodes it supports**: 7
   - **One-sentence annotation**: Heath explains *McGirt* and then compares it with the harmful rulings in *Sherrill* and in the dismissal of the Land Rights Action, and says that "plenary power" remains U.S. law.
   - **Verification**: opened local file; fetched URL

### B. Heath's slides, court filings and recorded speech

10. - **Title**: Doctrine of Christian Discovery (slide presentation, Taking on the Doctrine of Discovery conference)
    - **Author or publisher**: Joe Heath, General Counsel, Onondaga Nation
    - **Date**: August 19, 2018
    - **URL**: https://doctrineofdiscovery.org/assets/pdfs/Doctrine-of-Christian-Discovery-Presentation-Joe-Heath-min.pdf
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/assets/pdfs/Doctrine-of-Christian-Discovery-Presentation-Joe-Heath-min.pdf`; conference listing in `src/_posts/2018-08-08-us-indian-law-panel.md`
    - **Chicago citation**: Heath, Joseph J. "Doctrine of Christian Discovery." Slide presentation, Taking on the Doctrine of Discovery conference, Skä·noñh Great Law of Peace Center, Onondaga Nation Territory, August 19, 2018. PDF, 24 pp. https://doctrineofdiscovery.org/assets/pdfs/Doctrine-of-Christian-Discovery-Presentation-Joe-Heath-min.pdf.
    - **Episodes it supports**: 7, 3, 6
    - **One-sentence annotation**: A 24-slide timeline from the papal bulls to the Land Rights Action that includes a slide on the 1779 Sullivan-Clinton campaigns and the Cayuga Nation's Canandaigua Treaty reservation, easy to project in class.
    - **Verification**: opened local file; fetched URL (text read)

11. - **Title**: Doctrine of Christian Discovery & Domination (slide presentation, Mother Earth's Pandemic conference)
    - **Author or publisher**: Joe Heath, General Counsel, Onondaga Nation
    - **Date**: August 13, 2020
    - **URL**: https://doctrineofdiscovery.org/assets/pdfs/Doctrine-Christian-Discovery-Domination-Joe-Heath-2020.pdf
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/assets/pdfs/Doctrine-Christian-Discovery-Domination-Joe-Heath-2020.pdf`
    - **Chicago citation**: Heath, Joseph J. "Doctrine of Christian Discovery & Domination." Slide presentation, Mother Earth's Pandemic: The Doctrine of Discovery conference, August 13, 2020. PDF, 15 pp. https://doctrineofdiscovery.org/assets/pdfs/Doctrine-Christian-Discovery-Domination-Joe-Heath-2020.pdf.
    - **Episodes it supports**: 7
    - **One-sentence annotation**: Fifteen slides quoting *Johnson v. M'Intosh* and *Sherrill*, a shorter companion to the 2018 slides.
    - **Verification**: opened local file; fetched URL (text read)

12. - **Title**: Declaration of Joseph J. Heath, Esq., General Counsel for the Onondaga Nation, in Opposition to Defendants' Motions to Dismiss
    - **Author or publisher**: Joseph J. Heath, filed in *Onondaga Nation v. State of New York*, Civil Action No. 05-CV-314 (N.D.N.Y.), hosted by the Onondaga Nation
    - **Date**: November 2006 (the day is illegible in the scan; the Nation's legal briefs page lists it as 11/16/06)
    - **URL**: https://www.onondaganation.org/mediafiles/pdfs/lgl_alrtsjoedecl.pdf
    - **HTTP status**: 200
    - **Local path read**: none
    - **Chicago citation**: Declaration of Joseph J. Heath, Esq., General Counsel for the Onondaga Nation, in Opposition to Defendants' Motions to Dismiss, *Onondaga Nation v. New York*, No. 05-CV-314 (N.D.N.Y. Nov. 2006). PDF, 22 pp. https://www.onondaganation.org/mediafiles/pdfs/lgl_alrtsjoedecl.pdf.
    - **Episodes it supports**: 7, 8
    - **One-sentence annotation**: Heath states that the filing of the action had not been disruptive to Central New York, that the Nation's presence is recognized by its neighbors, and that development by non-Indians had been "distinctly and environmentally negative," so students can read the factual answer the Nation gave to the "disruption" argument that later defeated the case.
    - **Verification**: fetched URL (scanned PDF with no text layer; pages 1, 2 and 22 read by OCR; the remaining pages were not read)

13. - **Title**: Onondaga Land Rights Action - US 2nd Court Transcript (oral argument of October 12, 2012)
    - **Author or publisher**: Onondaga Nation (transcript; speakers include Joseph Heath for the Nation and the Second Circuit panel)
    - **Date**: argued October 12, 2012; posted December 10, 2012
    - **URL**: https://www.onondaganation.org/news/2012/onondaga-land-rights-action/
    - **HTTP status**: 200
    - **Local path read**: none
    - **Chicago citation**: Onondaga Nation. "Onondaga Land Rights Action - US 2nd Court Transcript." Oral argument transcript, *Onondaga Nation v. New York*, U.S. Court of Appeals for the Second Circuit, October 12, 2012. Posted December 10, 2012. https://www.onondaganation.org/news/2012/onondaga-land-rights-action/.
    - **Episodes it supports**: 7, 8
    - **One-sentence annotation**: Heath's spoken argument to Chief Judge Jacobs and the panel that the district court had improperly used judicial notice to dismiss, a short readable transcript for a class discussion of how courts reasoned.
    - **Verification**: fetched URL (opening exchange read)

14. - **Title**: Inter-American Commission on Human Rights of the Organization of American States, Case No. P-624-14: The Onondaga Nation and the Haudenosaunee against the United States of America, Supplemental Submission, Brief on the Merits
    - **Author or publisher**: Petitioners' counsel Joseph J. Heath and Andrew B. Reid; representative of petitioners Tadodaho Sidney Hill
    - **Date**: revised December 24, 2023 (file name); web post dated 2023-12-28
    - **URL**: https://doctrineofdiscovery.org/blog/petitioners-merits-brief/ (PDF: https://doctrineofdiscovery.org/assets/pdfs/Petitioners-Merits-Brief-revd-12.24.2023.pdf)
    - **HTTP status**: 200 (page); 200 (PDF)
    - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2023-12-28-petitioners-merits-brief.md`; `src/assets/pdfs/Petitioners-Merits-Brief-revd-12.24.2023.pdf`
    - **Chicago citation**: Onondaga Nation and the Haudenosaunee v. United States, Inter-Am. Comm'n H.R., Case No. P-624-14, Supplemental Submission, Brief on the Merits (rev. Dec. 24, 2023). PDF, 71 pp. https://doctrineofdiscovery.org/assets/pdfs/Petitioners-Merits-Brief-revd-12.24.2023.pdf.
    - **Episodes it supports**: 7
    - **One-sentence annotation**: The 71-page merits brief opens by calling Discovery the first underlying colonial doctrine of federal Indian law; it is advanced reading, best used for the opening argument and the procedural history of the Land Rights Actions.
    - **Verification**: opened local file; fetched URL (contents page and opening read; not read in full)

15. - **Title**: S1E01: The Legal Framework of the Doctrine of Christian Discovery in Practice with Joe Heath
    - **Author or publisher**: *Mapping the Doctrine of Discovery* (podcast), hosts Philip P. Arnold and Sandy Bigtree; guest Joseph J. Heath
    - **Date**: March 14, 2022
    - **URL**: https://podcast.doctrineofdiscovery.org/season1/episode-01/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/podcast-doctrineofdiscovery-v2/src/content/episodes/Season1/2022-03-14-episode-01.md`; pointer post `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2022-03-22-s01e01.md`
    - **Chicago citation**: Arnold, Philip P., and Sandra Bigtree, hosts. "S1E01: The Legal Framework of the Doctrine of Christian Discovery in Practice with Joe Heath." *Mapping the Doctrine of Discovery* (podcast), March 14, 2022. https://podcast.doctrineofdiscovery.org/season1/episode-01/.
    - **Episodes it supports**: 7, 8
    - **One-sentence annotation**: Heath defines the Doctrine of Discovery and traces it from *Johnson v. M'Intosh* in 1823 to the Land Rights Action of 2005 and its dismissal in 2010, with a transcript PDF linked on the page, so students can compare Heath's earlier account with episode 7.
    - **Verification**: opened local file; fetched URL (show notes read; audio and transcript not reviewed)

16. - **Title**: Joe Heath on The Campbell Conversations
    - **Author or publisher**: Onondaga Nation post of a WRVO program with host Grant Reeher
    - **Date**: October 29, 2015
    - **URL**: https://www.onondaganation.org/news/2015/joe-heath-on-the-campbell-conversations/
    - **HTTP status**: 200
    - **Local path read**: none
    - **Chicago citation**: Reeher, Grant, host. "Joe Heath on The Campbell Conversations." *The Campbell Conversations*, WRVO Public Media. Posted by Onondaga Nation, October 29, 2015. https://www.onondaganation.org/news/2015/joe-heath-on-the-campbell-conversations/.
    - **Episodes it supports**: 7
    - **One-sentence annotation**: A page describing a radio conversation in which Heath discusses where the Onondaga Nation fits among Central New York's other communities, land claims and the other Haudenosaunee nations.
    - **Verification**: fetched URL (the description page only; the audio was not opened, so its content is unverified)

### C. Heath interviewed, quoted or on a panel

17. - **Title**: State presents final lake cleanup plan, tribe calls it inadequate
    - **Author or publisher**: William Kates, Associated Press, reposted by the Onondaga Nation
    - **Date**: July 1, 2005 (post date on the Nation's site)
    - **URL**: https://www.onondaganation.org/news/2005/state-presents-final-lake-cleanup-plan-tribe-calls-it-inadequate/
    - **HTTP status**: 200
    - **Local path read**: none
    - **Chicago citation**: Kates, William. "State Presents Final Lake Cleanup Plan, Tribe Calls It Inadequate." Associated Press, July 1, 2005. Reposted by Onondaga Nation. https://www.onondaganation.org/news/2005/state-presents-final-lake-cleanup-plan-tribe-calls-it-inadequate/.
    - **Episodes it supports**: 8
    - **One-sentence annotation**: A wire report of the $451 million state plan in which Heath says capping "will preclude any real cleanup" and the Nation asks for far more dredging, a dated starting point for the cleanup debate in episode 8.
    - **Verification**: fetched URL

18. - **Title**: Honeywell ceases dredging of pollutants in sacred Lake
    - **Author or publisher**: Onondaga Nation (press statement quoting General Counsel Joseph Heath)
    - **Date**: January 14, 2015
    - **URL**: https://www.onondaganation.org/news/2015/honeywell-ceases-dredging-of-pollutants-in-sacred-lake/
    - **HTTP status**: 200
    - **Local path read**: none
    - **Chicago citation**: Onondaga Nation. "Honeywell Ceases Dredging of Pollutants in Sacred Lake." Press statement, January 14, 2015. https://www.onondaganation.org/news/2015/honeywell-ceases-dredging-of-pollutants-in-sacred-lake/.
    - **Episodes it supports**: 8
    - **One-sentence annotation**: Heath is quoted that Honeywell plans to leave more than 80 percent of the contaminated sediments in the lake and that the Nation's comments were mostly ignored, which gives students the Nation's own assessment of the Superfund cleanup.
    - **Verification**: fetched URL (also listed on the episode 8 page)

19. - **Title**: Inter-American Commission on Human Rights Upholds the Onondaga Nation's Right to Challenge Illegal Land Acquisition
    - **Author or publisher**: Camilla Lindschouw (Cultural Survival intern), Cultural Survival
    - **Date**: August 31, 2023
    - **URL**: https://www.culturalsurvival.org/news/inter-american-commission-human-rights-upholds-onondaga-nations-right-challenge-illegal-land
    - **HTTP status**: 200
    - **Local path read**: none
    - **Chicago citation**: Lindschouw, Camilla. "Inter-American Commission on Human Rights Upholds the Onondaga Nation's Right to Challenge Illegal Land Acquisition." Cultural Survival, August 31, 2023. https://www.culturalsurvival.org/news/inter-american-commission-human-rights-upholds-onondaga-nations-right-challenge-illegal-land.
    - **Episodes it supports**: 7
    - **One-sentence annotation**: Heath is quoted on why the Nation calls its case a "land rights action" and not a land claim, on Discovery as a human-rights violation, and on reparations meaning land, so it is the best short news piece on the 2023 Commission ruling.
    - **Verification**: fetched URL (Heath quotations read)

20. - **Title**: Onondagas reclaimed 1K acres of land. Now they seek restoration.
    - **Author or publisher**: Patrick McCarthy, Central Current
    - **Date**: October 7, 2024 (page also shows an update of March 26, 2025)
    - **URL**: https://centralcurrent.org/the-onondaga-nation-reclaimed-1000-acres-of-its-land-now-it-seeks-restoration/
    - **HTTP status**: 200
    - **Local path read**: none
    - **Chicago citation**: McCarthy, Patrick. "Onondagas Reclaimed 1K Acres of Land. Now They Seek Restoration." Central Current, October 7, 2024. https://centralcurrent.org/the-onondaga-nation-reclaimed-1000-acres-of-its-land-now-it-seeks-restoration/.
    - **Episodes it supports**: 7, 8, 6
    - **One-sentence annotation**: Reports the September 30, 2024 transfer of over 1,000 acres from Honeywell, with Tadodaho Sid Hill and Heath at Onondaga Creek, and Heath's account of the sinkholes and mud boils left by salt mining.
    - **Verification**: fetched URL

21. - **Title**: Onondaga Nation hopes to make the most of recently returned land
    - **Author or publisher**: Brennan Matthew Finder, NCC News (video with transcript)
    - **Date**: November 16, 2024
    - **URL**: https://nccnewsonline.com/onondaga-nation-hopes-to-make-the-most-of-recently-returned-land/
    - **HTTP status**: 200
    - **Local path read**: none
    - **Chicago citation**: Finder, Brennan Matthew. "Onondaga Nation Hopes to Make the Most of Recently Returned Land." NCC News, November 16, 2024. https://nccnewsonline.com/onondaga-nation-hopes-to-make-the-most-of-recently-returned-land/.
    - **Episodes it supports**: 7, 8
    - **One-sentence annotation**: A short video story whose transcript has Heath saying New York began taking the land illegally after the Revolutionary War, which makes a short classroom clip for the Sullivan-Clinton and land-takings background.
    - **Verification**: fetched URL (transcript read; video not viewed)

22. - **Title**: Joseph Heath and Lawrence Hauptman's Presentation at the Collaborative Education Series at Syracuse Stage
    - **Author or publisher**: Onondaga Nation (event report)
    - **Date**: posted July 31, 2006 (event of July 11, 2006, sponsored by NOON)
    - **URL**: https://www.onondaganation.org/news/2006/joseph-heath-and-lawrence-hauptmans-presentation-at-the-collaborative-education-series-at-syracuse-stage/
    - **HTTP status**: 200
    - **Local path read**: none
    - **Chicago citation**: Onondaga Nation. "Joseph Heath and Lawrence Hauptman's Presentation at the Collaborative Education Series at Syracuse Stage." Event report, July 31, 2006. https://www.onondaganation.org/news/2006/joseph-heath-and-lawrence-hauptmans-presentation-at-the-collaborative-education-series-at-syracuse-stage/.
    - **Episodes it supports**: 7, 3
    - **One-sentence annotation**: Summarizes Hauptman on New York's post-Revolution land-for-soldiers plan, the surveyors, the salt lake and the canal, and then Heath on the Discovery Doctrine in the courts, tying the lake to the land takings.
    - **Verification**: fetched URL

23. - **Title**: Stewards of Onondaga Lake: Supporting the Restoration Goals of the Onondaga Nation
    - **Author or publisher**: Onondaga Nation (event notice for a SUNY ESF Earth Week panel)
    - **Date**: posted April 16, 2009 (panel April 22, 2009)
    - **URL**: https://www.onondaganation.org/news/2009/stewards-of-onondaga-lake-supporting-the-restoration-goals-of-the-onondaga-nation/
    - **HTTP status**: 200
    - **Local path read**: none
    - **Chicago citation**: Onondaga Nation. "Stewards of Onondaga Lake: Supporting the Restoration Goals of the Onondaga Nation." Event notice, April 16, 2009. https://www.onondaganation.org/news/2009/stewards-of-onondaga-lake-supporting-the-restoration-goals-of-the-onondaga-nation/.
    - **Episodes it supports**: 3, 8
    - **One-sentence annotation**: An event notice that places Jake Edwards and Heath on the same 2009 panel and says the Nation was "effectively shut out" of the 2005 decision on the lake remedy.
    - **Verification**: fetched URL

24. - **Title**: Joseph Heath (faculty biography)
    - **Author or publisher**: Cornell Law School
    - **Date**: TBD (undated)
    - **URL**: https://www.lawschool.cornell.edu/faculty-research/faculty-directory/joseph-heath/
    - **HTTP status**: 200 (the form without the trailing slash answers 301)
    - **Local path read**: none
    - **Chicago citation**: Cornell Law School. "Joseph Heath." Faculty directory. Accessed November 14, 2026. https://www.lawschool.cornell.edu/faculty-research/faculty-directory/joseph-heath/.
    - **Episodes it supports**: 7
    - **One-sentence annotation**: Heath's own biography: his Attica work, more than forty years as General Counsel for the Onondaga Nation, and his focus on sovereignty, return of homelands and environmental protection, for the guest bio in episode 7.
    - **Verification**: fetched URL (first part of the biography read)

---

## Law: primary texts and commentary

25. - **Title**: Johnson v. M'Intosh (page with key excerpts, analysis links and the case text)
    - **Author or publisher**: Indigenous Values Initiative, Doctrine of Discovery Project
    - **Date**: 2018-07-23 (last modified 2024-07-24)
    - **URL**: https://doctrineofdiscovery.org/johnson-v-mcintosh/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2018-07-23-johnson-v-mcintosh.md`
    - **Chicago citation**: *Johnson & Graham's Lessee v. M'Intosh*, 21 U.S. (8 Wheat.) 543 (1823). Excerpts and links at Doctrine of Discovery Project. https://doctrineofdiscovery.org/johnson-v-mcintosh/.
    - **Episodes it supports**: 7, 8, 3
    - **One-sentence annotation**: Gives the passage on Native peoples as "rightful occupants" whose sovereignty was "necessarily diminished" and on "ultimate dominion," with a list of academic responses and a link to the Illinois and Wabash land company papers, which lets students read the holding before they read about it.
    - **Verification**: opened local file; fetched URL

26. - **Title**: City of Sherrill v. Oneida Indian Nation of New York (opinion page, 544 U.S. 197)
    - **Author or publisher**: Doctrine of Discovery Project (author field: Dana Lloyd)
    - **Date**: 2022-10-19 (site date); decision March 29, 2005
    - **URL**: https://doctrineofdiscovery.org/sherrill-v-oneida-opinion-of-the-court/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2018-08-01-sherrill-v-oneida-opinion-of-the-court.md`; PDF `src/assets/pdfs/sherrill-v-oneida-opinion-of-the-court.pdf` (not read)
    - **Chicago citation**: *City of Sherrill v. Oneida Indian Nation of New York*, 544 U.S. 197 (2005). Opinion hosted at Doctrine of Discovery Project. https://doctrineofdiscovery.org/sherrill-v-oneida-opinion-of-the-court/.
    - **Episodes it supports**: 7, 8
    - **One-sentence annotation**: Summarizes the Oneida's 1997 and 1998 purchases of land in the city of Sherrill and links the Court's opinion, the primary text for the decision that Heath says doomed the Land Rights Action.
    - **Verification**: opened local file (page text only); fetched URL

27. - **Title**: Onondaga Nation v. NY (page with excerpt and PDF of the Second Circuit order)
    - **Author or publisher**: Doctrine of Discovery Project; U.S. Court of Appeals for the Second Circuit
    - **Date**: decided October 19, 2012
    - **URL**: https://doctrineofdiscovery.org/onondaga-nation-v-ny/ (PDF: https://doctrineofdiscovery.org/assets/pdfs/onondaga_nation_v._state_of_ny.pdf)
    - **HTTP status**: 200 (page); 200 (PDF)
    - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2018-08-27-onondaga-nation-v-ny.md`; `src/assets/pdfs/onondaga_nation_v._state_of_ny.pdf`
    - **Chicago citation**: *Onondaga Nation v. New York*, 500 F. App'x 87 (2d Cir. 2012) (summary order), No. 10-4273. https://doctrineofdiscovery.org/assets/pdfs/onondaga_nation_v._state_of_ny.pdf.
    - **Episodes it supports**: 7, 8
    - **One-sentence annotation**: A five-page summary order that decides the appeal on the equitable bar in *Sherrill*, *Cayuga* and *Oneida*, with the three factors (time elapsed, disruption, settled expectations) that students can set beside Heath's declaration in entry 12.
    - **Verification**: opened local file; fetched URL (first pages of the PDF read; the "500 F. App'x 87" reporter citation comes from the site's own page and was not checked against a reporter)

28. - **Title**: Onondaga Nation Land Rights Complaint
    - **Author or publisher**: Onondaga Nation, reproduced by the Doctrine of Discovery Project
    - **Date**: 2019-03-10 (site date); complaint filed March 11, 2005
    - **URL**: https://doctrineofdiscovery.org/onondaga-nation-land-rights/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2019-03-10-onondaga-land-rights-complaint.md`
    - **Chicago citation**: Onondaga Nation. "Onondaga Nation Land Rights Complaint." Doctrine of Discovery Project. https://doctrineofdiscovery.org/onondaga-nation-land-rights/.
    - **Episodes it supports**: 7, 3, 6
    - **One-sentence annotation**: Reproduces the Nation's own statement of purpose, healing between the Onondaga and their neighbors and stewardship of the land under the Great Law, in the Nation's words and not in a lawyer's summary.
    - **Verification**: opened local file; fetched URL

29. - **Title**: Inter Caetera (the papal bull of May 4, 1493; new translation by Sebastian Modrow and Melissa Smith)
    - **Author or publisher**: Doctrine of Discovery Project
    - **Date**: 2022-06-13
    - **URL**: https://doctrineofdiscovery.org/inter-caetera/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2018-07-23-inter-caetera.md`
    - **Chicago citation**: Alexander VI. *Inter Caetera*. May 4, 1493. Translated by Sebastian Modrow and Melissa Smith. Doctrine of Discovery Project, 2022. https://doctrineofdiscovery.org/inter-caetera/.
    - **Episodes it supports**: 7, 3
    - **One-sentence annotation**: The primary text of the 1493 bull in a new English translation, with the rest of the papal bulls (*Dum Diversas*, *Romanus Pontifex*) linked from https://doctrineofdiscovery.org/papal-bulls/ (HTTP 200, not separately listed).
    - **Verification**: opened local file (front matter and first lines; the PDF translation was not read); fetched URL

---

## Haudenosaunee voices, the Two Row, Canandaigua, Sullivan-Clinton, democracy

30. - **Title**: Haudenosaunee Statement on the Doctrine of Discovery
    - **Author or publisher**: Haudenosaunee statement to the Eleventh Session of the UN Permanent Forum on Indigenous Issues, posted by the Indigenous Values Initiative
    - **Date**: May 8, 2012 (statement); post dated 2018-07-27
    - **URL**: https://doctrineofdiscovery.org/haudenosaunee-statement-on-the-doctrine-of-discovery/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2018-07-27-haudenosaunee-statement-on-the-doctrine-of-discovery.md`
    - **Chicago citation**: Haudenosaunee. "Haudenosaunee Statement on the Construct Known as the Doctrine of Discovery: A History, A Seat at the Table." Statement to the Eleventh Session of the United Nations Permanent Forum on Indigenous Issues, New York, May 8, 2012. https://doctrineofdiscovery.org/haudenosaunee-statement-on-the-doctrine-of-discovery/.
    - **Episodes it supports**: 6, 3, 7
    - **One-sentence annotation**: A Haudenosaunee delegation's own statement, spoken at the United Nations, on how Discovery dehumanized Indigenous peoples and why the public must be educated about it.
    - **Verification**: opened local file; fetched URL (first section read; the speaker is not named in the portion I read)

31. - **Title**: Stand for Human Rights for Indigenous Peoples and Renounce the "Doctrine of Discovery"
    - **Author or publisher**: Tadodaho (author field on the site); opinion piece mirrored from HuffPost
    - **Date**: 2012-05-06
    - **URL**: https://doctrineofdiscovery.org/blog/human-rights-doctrine-discovery/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2012-05-06-human-rights-doctrine-discovery.md`
    - **Chicago citation**: Tadodaho. "Stand for Human Rights for Indigenous Peoples and Renounce the 'Doctrine of Discovery.'" Opinion piece, May 6, 2012. Doctrine of Discovery Project. https://doctrineofdiscovery.org/blog/human-rights-doctrine-discovery/. Original: https://www.huffpost.com/entry/indigenous-human-rights_b_1491528 (not fetched).
    - **Episodes it supports**: 6, 3
    - **One-sentence annotation**: A short op-ed written as Tadodaho that explains *Dum Diversas* and *Inter Caetera* and urges renunciation ahead of the 2012 UN Permanent Forum, with the byline name to be confirmed against the HuffPost original.
    - **Verification**: opened local file; unverified: author byline beyond "Tadodaho" not confirmed and the HuffPost original was not fetched

32. - **Title**: Declaration of Tadodaho Sidney Hill, Onondaga Nation
    - **Author or publisher**: Tadodaho Sidney Hill, filed in *Onondaga Nation v. State of New York*, No. 05-CV-314 (N.D.N.Y.), hosted by the Onondaga Nation
    - **Date**: November 15, 2006 (signature page); the Nation's legal briefs page lists it as 11/16/06
    - **URL**: https://www.onondaganation.org/mediafiles/pdfs/lgl_alrtssiddecl.pdf
    - **HTTP status**: 200
    - **Local path read**: none
    - **Chicago citation**: Declaration of Tadodaho Sidney Hill, Onondaga Nation, *Onondaga Nation v. New York*, No. 05-CV-314 (N.D.N.Y. Nov. 15, 2006). PDF, 15 pp. https://www.onondaganation.org/mediafiles/pdfs/lgl_alrtssiddecl.pdf.
    - **Episodes it supports**: 6, 3, 9
    - **One-sentence annotation**: In 48 numbered paragraphs the Tadodaho describes the Great Law, consensus decisions by the Council of Chiefs, the 1779 Sullivan/Clinton/Van Schaick raids, Washington's 1790 promise to protect the Nation's lands, and why Onondaga Lake is sacred, which makes it the most direct Onondaga-authored text to read with episode 6.
    - **Verification**: fetched URL (scanned PDF with no text layer; pages 1 to 5 and 15 read by OCR)

33. - **Title**: The Two Row Wampum: a Repudiation of the Doctrine of Discovery
    - **Author or publisher**: Indigenous Values Initiative (excerpt of an article from grandback.org)
    - **Date**: 2022-08-01
    - **URL**: https://doctrineofdiscovery.org/blog/two-row-wampum-doctrine-discovery/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2022-08-01-two-row-wampum-doctrine-discovery.md`
    - **Chicago citation**: Indigenous Values Initiative. "The Two Row Wampum: A Repudiation of the Doctrine of Discovery." Doctrine of Discovery Project, August 1, 2022. Excerpt of an article from grandback.org (archived at https://web.archive.org/web/20221202233920/https://grandback.org/journal.php?id=the_two_row_wampum_a_repudiation_of_the_doctrine_of_discovery). https://doctrineofdiscovery.org/blog/two-row-wampum-doctrine-discovery/.
    - **Episodes it supports**: 9
    - **One-sentence annotation**: A two-paragraph excerpt stating that the Dutch (1613), English (1645) and French (1701) were signatories to the Two Row and that it repudiated Discovery; short, and weaker than the Heath treaty history (entry 6) on the same point.
    - **Verification**: opened local file; fetched URL (the archived full article was not fetched)

34. - **Title**: Digital Wampum: Testimony of the Haudenosaunee
    - **Author or publisher**: Digital Wampum project (Haudenosaunee films; listed by the Doctrine of Discovery Project)
    - **Date**: TBD
    - **URL**: https://www.digitalwampum.org/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2024-12-06-digital-wampum-haudenosaunee-resources.md` (listing)
    - **Chicago citation**: Digital Wampum. "Testimony of the Haudenosaunee." Accessed November 14, 2026. https://www.digitalwampum.org/.
    - **Episodes it supports**: 9, 6
    - **One-sentence annotation**: A film project in which, by its own description, the Haudenosaunee tell the 500-year history of their relationship with Europe and America in their own voices, and which explains wampum belts as records of treaties and events.
    - **Verification**: opened local file; fetched URL (home page only; individual films not viewed)

35. - **Title**: The Haudenosaunee (Iroquois) Great Binding Peace
    - **Author or publisher**: Philip P. Arnold and Sandra L. Bigtree (Mohawk Nation, Akwesasne), *The New Ecozoic Reader*, via Outcome
    - **Date**: 2025-09-05 (Outcome); *New Ecozoic Reader* no. 9, September 2025
    - **URL**: https://outcome.doctrineofdiscovery.org/ecozoic/essay1/haudenosaunee-great-binding-peace/
    - **HTTP status**: 200
    - **Local path read**: pointer post `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2025-09-02-the-haudenosaunee-great-binding-peace.md` (not read in detail)
    - **Chicago citation**: Arnold, Philip P., and Sandra L. Bigtree. "The Haudenosaunee (Iroquois) Great Binding Peace." *The New Ecozoic Reader*, no. 9 (September 2025). https://ecozoicstudies.org/new_ecozoic_reader/the-haudenosaunee-iroquois-great-binding-peace/.
    - **Episodes it supports**: 9, 6
    - **One-sentence annotation**: An essay on Haudenosaunee democratic tradition, matrilineal governance and the protocol of peace as a model of reciprocity with the natural world, written by a Syracuse religion professor and a Mohawk citizen.
    - **Verification**: fetched URL (abstract, author notes and citation read; the full essay was not read)

36. - **Title**: Healing the Sacred: The Fight to Restore Onondaga Lake and Honor Indigenous Land
    - **Author or publisher**: Adam DJ Brett and Betty Hill (Lyons), *International Journal on Responsibility* 9, no. 1, art. 2
    - **Date**: 2025-09-01 in the page metadata; "(2026)" in the page's own "How to cite"
    - **URL**: https://outcome.doctrineofdiscovery.org/ijr/essay2/healing-the-sacred/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2025-09-01-onondaga-lake.md` (abstract)
    - **Chicago citation**: Brett, Adam DJ, and Betty Hill (Lyons). "Healing the Sacred: The Fight to Restore Onondaga Lake and Honor Indigenous Land." *International Journal on Responsibility* 9, no. 1 (2026), art. 2. https://doi.org/10.62365/2576-0955.1133.
    - **Episodes it supports**: 8, 6, 3
    - **One-sentence annotation**: Argues, from the Onondaga Nation's petition to the Organization of American States, that returning the lake to the Nation is a step toward healing; the article is by the series' own host and the series' AILA lead, so the guide should say so when assigning it.
    - **Verification**: opened local file; fetched URL (abstract and citation read; DOI not resolved)

37. - **Title**: Revisiting George Washington's assault on the Haudenosaunee 240 Years Later
    - **Author or publisher**: Doctrine of Discovery Project, event page (sponsored by Syracuse University Humanities Center and Department of Religion, the Skä·noñh Great Law of Peace Center and the Indigenous Values Initiative)
    - **Date**: 2020-09-28
    - **URL**: https://doctrineofdiscovery.org/event/revisiting-washington-assault-haudenosaunee/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2020-09-28-revisiting-washington-assault-haudenosaunee.md`
    - **Chicago citation**: Doctrine of Discovery Project. "Revisiting George Washington's Assault on the Haudenosaunee 240 Years Later." Event page, September 28, 2020. https://doctrineofdiscovery.org/event/revisiting-washington-assault-haudenosaunee/.
    - **Episodes it supports**: 3, 6, 9
    - **One-sentence annotation**: Describes the 1779 Sullivan-Clinton "scorched earth" campaign, the payment of soldiers in land and the Haudenosaunee title Hanadagá·yas, "Town Destroyer," for U.S. presidents.
    - **Verification**: opened local file; fetched URL

38. - **Title**: S06E04: Washington Said Burn The Corn and New Yorkers Brought Surveyors
    - **Author or publisher**: *Mapping the Doctrine of Discovery* (podcast); Lisa Moore hosts Travis Bowman and Matthew Zembo
    - **Date**: January 29, 2026
    - **URL**: https://podcast.doctrineofdiscovery.org/season6/episode-04/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/podcast-doctrineofdiscovery-v2/src/content/episodes/2026-01-26-episode-04.md`
    - **Chicago citation**: Moore, Lisa, host. "S06E04: Washington Said Burn The Corn and New Yorkers Brought Surveyors." *Mapping the Doctrine of Discovery* (podcast), January 29, 2026. https://podcast.doctrineofdiscovery.org/season6/episode-04/.
    - **Episodes it supports**: 3, 6, 7
    - **One-sentence annotation**: The authors of *Clearing Iroquoia* (Lexington Books/Fortress Academic, 2025, as listed on the page) argue that the 1779 campaigns were aimed at taking land and were not simple retaliation.
    - **Verification**: opened local file; fetched URL (show notes read; audio not reviewed; the book was not opened)

39. - **Title**: S06E06: Sacred Waters: Trauma of the Erie Canal (Jake Haiwhagai'i Edwards and Philip P. Arnold)
    - **Author or publisher**: *Mapping the Doctrine of Discovery* (podcast)
    - **Date**: February 12, 2026
    - **URL**: https://podcast.doctrineofdiscovery.org/season6/episode-06/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/podcast-doctrineofdiscovery-v2/src/content/episodes/2026-02-10-episode-06.md`
    - **Chicago citation**: Arnold, Philip P., and Sandra Bigtree, hosts. "S06E06: Sacred Waters: Trauma of the Erie Canal with Jake Edwards." *Mapping the Doctrine of Discovery* (podcast), February 12, 2026. https://podcast.doctrineofdiscovery.org/season6/episode-06/.
    - **Episodes it supports**: 3, 6, 8
    - **One-sentence annotation**: Jake Edwards and Philip P. Arnold discuss how the Erie Canal disrupted Haudenosaunee waterways and was tied to dispossession, a second Jake Edwards conversation that students can compare with episode 3.
    - **Verification**: opened local file; fetched URL (show notes read; audio not reviewed; the page's own citation line names the hosts, its introduction names Edwards and Arnold)

40. - **Title**: S06E01: Defending Mother Earth from The Doctrine of Christian Discovery #NoKings
    - **Author or publisher**: *Mapping the Doctrine of Discovery* (podcast); live recording at the Skä·noñh Great Law of Peace Center
    - **Date**: June 27, 2025 (page dateline); event of June 14, 2025
    - **URL**: https://podcast.doctrineofdiscovery.org/season6/episode-01/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/podcast-doctrineofdiscovery-v2/src/content/episodes/2025-06-27-episode-01.md`
    - **Chicago citation**: Arnold, Philip P., and Sandra Bigtree, hosts. "S06E01: Defending Mother Earth from The Doctrine of Christian Discovery #NoKings." *Mapping the Doctrine of Discovery* (podcast), June 27, 2025. https://podcast.doctrineofdiscovery.org/season6/episode-01/.
    - **Episodes it supports**: 3, 6, 9
    - **One-sentence annotation**: A recording of a public event at which, per the show notes, Oren Lyons and Jake Edwards spoke on the Great Tree of Peace and the Thanksgiving Address, and speakers recounted the 1779 Sullivan-Clinton campaign.
    - **Verification**: opened local file; fetched URL (show notes read; audio not reviewed)

41. - **Title**: S02E07: Exploring the Doctrine of Discovery, Indigenous Struggles, and the Pursuit of Balance, Part 1, with Oren Lyons
    - **Author or publisher**: *Mapping the Doctrine of Discovery* (podcast), hosts Philip P. Arnold and Sandy Bigtree; guest Oren Lyons, Onondaga Nation Turtle Clan Faithkeeper (Part 2 is S02E08 at https://podcast.doctrineofdiscovery.org/season2/episode-08/, HTTP 200)
    - **Date**: August 3, 2023
    - **URL**: https://podcast.doctrineofdiscovery.org/season2/episode-07/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/podcast-doctrineofdiscovery-v2/src/content/episodes/Season2/2023-08-10-episode-07.md` and `2023-08-11-episode-08.md`
    - **Chicago citation**: Arnold, Philip P., and Sandra Bigtree, hosts. "S02E07: Exploring the Doctrine of Discovery, Indigenous Struggles, and the Pursuit of Balance, Part 1, with Oren Lyons." *Mapping the Doctrine of Discovery* (podcast), August 3, 2023. https://podcast.doctrineofdiscovery.org/season2/episode-07/.
    - **Episodes it supports**: 6, 9, 3
    - **One-sentence annotation**: Oren Lyons talks about the Haudenosaunee role at the United Nations, Alcatraz and Indigenous rights work (Part 1), and about eighteenth-century alliances and the Revolutionary War (Part 2, S02E08), according to the show notes.
    - **Verification**: opened local file; fetched URL (show notes of both parts read; audio not reviewed)

42. - **Title**: S1E04: Haudenosaunee Influence on the Women's Rights Movement with Sally Roesch Wagner
    - **Author or publisher**: *Mapping the Doctrine of Discovery* (podcast), hosts Philip P. Arnold and Sandy Bigtree
    - **Date**: August 3, 2022
    - **URL**: https://podcast.doctrineofdiscovery.org/season1/episode-04/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/podcast-doctrineofdiscovery-v2/src/content/episodes/Season1/2022-08-03-episode-04.md`
    - **Chicago citation**: Arnold, Philip P., and Sandra Bigtree, hosts. "S1E04: Haudenosaunee Influence on the Women's Rights Movement with Sally Roesch Wagner." *Mapping the Doctrine of Discovery* (podcast), August 3, 2022. https://podcast.doctrineofdiscovery.org/season1/episode-04/.
    - **Episodes it supports**: 10, 11
    - **One-sentence annotation**: Sally Roesch Wagner, founder of the Matilda Joslyn Gage Foundation, discusses Gage as a visionary and the Haudenosaunee influence on the women's rights movement; the show notes link a transcript PDF.
    - **Verification**: opened local file; fetched URL (show notes read; audio not reviewed)

43. - **Title**: S05E01: Bridging History and Today: Religion, Law, and Indigenous Influences in American Democracy with Winnifred Fallers Sullivan
    - **Author or publisher**: *Mapping the Doctrine of Discovery* (podcast), hosts Philip P. Arnold and Sandy Bigtree
    - **Date**: August 26, 2024
    - **URL**: https://podcast.doctrineofdiscovery.org/season5/episode-01/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/podcast-doctrineofdiscovery-v2/src/content/episodes/Season5/2024-08-26-episode-01.md`
    - **Chicago citation**: Arnold, Philip P., and Sandra Bigtree, hosts. "S05E01: Bridging History and Today: Religion, Law, and Indigenous Influences in American Democracy with Winnifred Fallers Sullivan." *Mapping the Doctrine of Discovery* (podcast), August 26, 2024. https://podcast.doctrineofdiscovery.org/season5/episode-01/.
    - **Episodes it supports**: 9, 10
    - **One-sentence annotation**: The hosts and Sullivan, a scholar of religion and law, discuss religion in the Constitution and the influence of the Haudenosaunee Confederacy on American democracy and the need to re-narrate American history.
    - **Verification**: opened local file; fetched URL (show notes read; audio not reviewed)

44. - **Title**: S06E12: How the Revolutionary War Reshaped Haudenosaunee Governance with Tom Porter
    - **Author or publisher**: *Mapping the Doctrine of Discovery* (podcast); guest Tom Porter (Mohawk)
    - **Date**: June 5, 2026
    - **URL**: https://podcast.doctrineofdiscovery.org/season6/episode-12/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/podcast-doctrineofdiscovery-v2/src/content/episodes/2026-06-05-episode-12.md`
    - **Chicago citation**: Arnold, Philip P., and Sandra Bigtree, hosts. "S06E12: How the Revolutionary War Reshaped Haudenosaunee Governance with Tom Porter." *Mapping the Doctrine of Discovery* (podcast), June 5, 2026. https://podcast.doctrineofdiscovery.org/season6/episode-12/.
    - **Episodes it supports**: 9, 6
    - **One-sentence annotation**: Tom Porter talks about how colonization and the Revolutionary War pressured Mohawk and Haudenosaunee leadership, and about condolence and reconciliation, from a Haudenosaunee speaker; the show notes are the only part reviewed.
    - **Verification**: opened local file; fetched URL (show notes read; audio not reviewed)

45. - **Title**: REL 500/600: The Religious Origins of White Supremacy: Johnson v. M'Intosh and the Doctrine of Christian Discovery (syllabus)
    - **Author or publisher**: Indigenous Values Initiative, Doctrine of Discovery Project
    - **Date**: 2024-08-08 (last modified 2024-08-16)
    - **URL**: https://doctrineofdiscovery.org/blog/doctrine-of-discovery-syllabus/
    - **HTTP status**: 200
    - **Local path read**: `/Users/abrett76/github/doctrineofdiscovery.org/src/_posts/2024-08-08-doctrine-of-discovery-syllabus.md`
    - **Chicago citation**: Indigenous Values Initiative. "REL 500/600: The Religious Origins of White Supremacy: *Johnson v. M'Intosh* and the Doctrine of Christian Discovery Syllabus." Doctrine of Discovery Project, August 8, 2024. https://doctrineofdiscovery.org/blog/doctrine-of-discovery-syllabus/.
    - **Episodes it supports**: 7, 3 (for instructors)
    - **One-sentence annotation**: An open-access, proposed combined undergraduate and graduate syllabus built on the project's podcast, blog and conference materials, useful to an instructor choosing readings.
    - **Verification**: opened local file; fetched URL (the syllabus PDF was not read)

---

## Not found, or left out

- Heath on the **Clean Water Act**: nothing found (see flags).
- Heath, "37 American Indian Law Review 351 (2013)": cited by Heath on his 2018 slide; unverified.
- **Betty Lyons, Oren Lyons, Rick Hill, Sidney Hill, Jake Edwards** material on doctrineofdiscovery.org beyond the entries above: Betty Lyons appears in S02E05 (https://podcast.doctrineofdiscovery.org/season2/episode-05/, HTTP 200) and the special (https://podcast.doctrineofdiscovery.org/special/s01/, HTTP 200), both on the Doctrine of Discovery in general; they were not annotated here. No material by or with **Richard (Rick) W. Hill Sr.** appears in `_posts`, `_pages`, `_authors` or the podcast repo (searched "richard hill" and "rick hill").
- Two Row and Canandaigua: the best material in this cluster is Heath's own treaty history (entry 6) and his Citizenship Act paper (entry 7); the site has no standalone Canandaigua page, and "Sullivan-Clinton" appears only in the entries above.
- Not opened: *Clearing Iroquoia* (entry 38) and the full text of the Buffalo essay (entry 3).

---

## Top 8 for the series-wide Key Resources list

1. **Entry 1, Heath, JCRT 25, no. 1 (2026), 51-60.** The Nation's General Counsel's latest synthesis of Discovery, *Sherrill* and the Land Rights Action, and the article the episode 7 page already points to.
2. **Entry 2, Heath, *Albany Government Law Review* 10 (2017), 112-56.** The fullest Heath account of the doctrine in U.S. law; it supports episodes 3, 7 and 8 and is open access.
3. **Entry 26, *City of Sherrill v. Oneida Indian Nation of New York*, 544 U.S. 197 (2005).** The primary text that Heath says ended the Nation's case in U.S. courts.
4. **Entry 25, *Johnson v. M'Intosh*, 21 U.S. (8 Wheat.) 543 (1823).** The foundation of the doctrine in U.S. law, with the key passages on "ultimate dominion."
5. **Entry 27, *Onondaga Nation v. New York*, 500 F. App'x 87 (2d Cir. 2012).** The five-page order that dismissed the land rights action, short enough for students to read whole.
6. **Entry 6, Heath, "A Brief History of Haudenosaunee Treaty Making" (March 2012).** The clearest short legal account in this cluster of the Two Row, the covenant chain and the Canandaigua pledge, matching episode 9.
7. **Entry 32, Declaration of Tadodaho Sidney Hill (Nov. 15, 2006).** The Tadodaho's own sworn statement on the Great Law, the Peacemaker, Sullivan-Clinton and Onondaga Lake, matching episode 6.
8. **Entry 13, Oral argument transcript, *Onondaga Nation v. New York* (Oct. 12, 2012).** Heath in his own words before the Second Circuit, the most readable primary source for episodes 7 and 8.
   Runners-up: entry 12 (Heath declaration), entry 36 (*Healing the Sacred*), entry 34 (Digital Wampum, if the guide wants a Haudenosaunee-hosted source on wampum).
