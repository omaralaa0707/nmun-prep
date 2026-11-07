# NMUN 2027 interview prep

This folder is a study system for one goal: the user's NMUN 2027 delegation selection interview on **Thursday 12 November 2026 at 1:45 pm** (postponed from 8 November; last known room: Nadia Younes Conference Room P131, HUSS). Delegation: **Mozambique**, committees **GA1** (first preference) and **UNHCR** (second). Acceptance is to the delegation as a whole. Interviews last year often ran 1–2 hours, rarely 3–4. The user has no real MUN experience; weak spots are speaking confidence, facts and country policy.

## How the user likes to work
- Discuss before building. Propose, then wait for a yes on anything big.
- Keep the readings Doc's format exactly as it is. The user edits the Doc directly, so never rebuild or re-paste the whole Doc; make targeted edits only.
- No second reading pass and no news checks in the plan.
- Never invent statistics, resolution numbers or quotes. Check current figures against primary sources (World Bank, IMF, UNDP, UN) and cite them.

## What's in here
- `app/`: the study web app, live at https://nmun-prep.vercel.app (Vercel project `nmun-prep`). Vanilla JS with hash routing. Two tabs: **Plan** and **Flashcards**.
  - `app/data/plan.js`: the day-by-day plan, `interviewDate`, `newCards` (cumulative new cards per day, in deck order; unused ones roll over). The app has no links to the Doc (removed 4 Nov). Every task has an explicit `key` so ticks survive reshuffles: never change an existing key. Tasks support `when`, `href`, `say`, `mins`.
  - `units.js`: the deck list only (id, group, title), in the Doc's reading order. The last six decks (groups, agencies, vocab, force, disarm, clauses) are no longer in the Doc and sit at the end. The app has no reading text; the readings live in the Google Doc. The old text is in `archive/app-reading-text-nov2/` (`claude-project/build-doc.mjs` still expects the old files and should not be used).
  - Flashcards: `cards.js` as `[unitId, front, back]`, rebuilt 4 Nov from the Doc (537 cards, trimmed from a 1,089-card first draft, interview-question cards removed 6 Nov; the old 608 were removed). Card IDs derive from unit id + front text, so edit fronts sparingly (editing a back is safe). Every card has a Delete button (5-second Undo); deleted IDs sync in progress section `deleted`. Previous/Next buttons (and arrow keys) move through a session without grading; skipped cards keep their schedule.
  - `app.js`: `CARDS_RESET` (progress older than this timestamp is ignored). Cards are introduced in reading order. There is a "Due only" deck at `#cards/session/due:all`.
  - After any change to `app/`, bump the `?v=N` cache-buster on every script tag in `app/index.html` (currently `v=42`).
  - `app/api/progress.js` syncs progress to Vercel Blob; `app/api/remind.js` + `push.js` send the 8:20 pm Cairo push reminder. Secrets (`APP_PASSWORD`, `REMIND_SECRET`, `BLOB_READ_WRITE_TOKEN`) live only in Vercel env vars. Never write them into files, commits or chat.
- `claude-project/`: instructions and knowledge files for the claude.ai Project "NMUN Interview Coach", which is only an interview coach (no study planning). `01_un_core.md` and `05_mozambique_and_topics.md` are generated from the readings Google Doc: after Doc changes, save the Docs connector's `read_doc` JSON and run `node claude-project/build-from-doc.mjs <doc.json> claude-project`, then tell the user which files to re-upload. See `claude-project/SETUP.md`.
- `docs/`, `archive/`: generated Doc HTML and older versions of files (plans, data) kept for reference.

## Deploying
Pushing to `main` deploys to production automatically (Vercel is linked to this GitHub repo with root directory `app`). On the user's Mac, `vercel deploy --prod --yes` from `app/` also works.

## The readings Google Doc
"NMUN 2027 Interview Readings (Mozambique · GA1 · UNHCR)": https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit
- Order: UN foundations → Principal organs → Law, rights and security → My delegation: Mozambique (same order as the flashcards). "Country and conference skills", "Model Answers" and the high-yield article table were removed on 3 Nov.
- Red "▶ FRIDAY / SATURDAY …" markers show which part to read on which day.
- When the Doc's content changes, update the matching flashcards. The app holds no reading text.
- On 31 Oct the user trimmed the GA1 sheet, the UNHCR sheet and the Law section in the Doc only (the Disarmament unit was removed from the Doc). The matching flashcards were deleted.

## NMUN rules facts (easy to get wrong)
No moderated or unmoderated caucuses: informal debate is a "motion to suspend the meeting". Only points of order exist (no personal privilege, inquiry or information). Working papers need sponsors plus signatories equal to 20% of the committee. Closure of debate needs a two-thirds vote. No pre-written or AI-written clauses.

## The plan (summary)
- Built into `app/data/plan.js` (replaced 4 Nov; 4–6 Nov days removed 7 Nov, along with the app's "Earlier days" section). Sat 7 ("GA1"): GA1, PMSCs, LAWS (the finished Mozambique tasks were removed). Sun 8 ("UNHCR"): UNHCR, psychosocial, migration routes (each reading with its flashcards). Mon 9 to Wed 11: Mocks 1–3, 60 minutes each (Mock 4 cancelled 8 Nov). Thu 12: final review, then the interview. Older versions are in `archive/`.
- Availability: Sun/Wed/Thu uni until 5:15, study 5:15–6:30, calisthenics 6:30–8:30, then study; Mon uni 10:30–5:15, then study; Tue free except 3–6; Fri and Sat full days; bedtime around 2 am. Cards can be done in class on the phone.
