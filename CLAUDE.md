# NMUN 2027 interview prep

This folder is a study system for one goal: the user's NMUN 2027 delegation selection interview on **Thursday 12 November 2026 at 1:45 pm** (postponed from 8 November; last known room: Nadia Younes Conference Room P131, HUSS). Delegation: **Mozambique**, committees **GA1** (first preference) and **UNHCR** (second). Acceptance is to the delegation as a whole. Interviews last year often ran 1–2 hours, rarely 3–4. The user has no real MUN experience; weak spots are speaking confidence, facts and country policy.

## How the user likes to work
- Discuss before building. Propose, then wait for a yes on anything big.
- Keep the readings Doc's format exactly as it is. The user edits the Doc directly, so never rebuild or re-paste the whole Doc; make targeted edits only.
- No second reading pass and no news checks in the plan.
- Never invent statistics, resolution numbers or quotes. Check current figures against primary sources (World Bank, IMF, UNDP, UN) and cite them.

## What's in here
- `app/`: the study web app, live at https://nmun-prep.vercel.app (Vercel project `nmun-prep`). Vanilla JS with hash routing. Two tabs: **Plan** and **Flashcards**.
  - `app/data/plan.js`: the day-by-day plan, `interviewDate`, `readingsUrl`, `docLinks` (unit id → Doc heading URL). Every task has an explicit `key` so ticks survive reshuffles: never change an existing key. Tasks support `when`, `unit`, `href`, `say`, `mins`.
  - Unit content: `units.js`, `units2.js`, `depth1.js`, `depth2.js` (UN foundations, organs, law, skills) and `mine1.js` / `mine2.js` (`window.UNITS_MINE`, group "My delegation: Mozambique": moz, mozrecord, ga1, pmsc, laws, unhcr, mhpss, routes, situations).
  - Flashcards: `cards.js`, `cards2.js`, `cards_mine.js` as `[unitId, front, back]`. Card IDs derive from unit id + front text, so edit fronts sparingly (editing a back is safe). 644 cards in total.
  - `app.js`: `NEW_PER_DAY` (currently 401) and `CARDS_RESET` (progress older than this timestamp is ignored). Cards are introduced in reading order. There is a "Due only" deck at `#cards/session/due:all`.
  - After any change to `app/`, bump the `?v=N` cache-buster on every script tag in `app/index.html` (currently `v=28`).
  - `app/api/progress.js` syncs progress to Vercel Blob; `app/api/remind.js` + `push.js` send the 8:20 pm Cairo push reminder. Secrets (`APP_PASSWORD`, `REMIND_SECRET`, `BLOB_READ_WRITE_TOKEN`) live only in Vercel env vars. Never write them into files, commits or chat.
- `claude-project/`: instructions and knowledge files for the claude.ai Project "NMUN Interview Coach", which is only an interview coach (no study planning). `01_un_core.md` and `05_mozambique_and_topics.md` are generated from the readings Google Doc: after Doc changes, save the Docs connector's `read_doc` JSON and run `node claude-project/build-from-doc.mjs <doc.json> claude-project`, then tell the user which files to re-upload. See `claude-project/SETUP.md`.
- `docs/`, `archive/`: generated Doc HTML and older versions of files (plans, data) kept for reference.

## Deploying
Pushing to `main` deploys to production automatically (Vercel is linked to this GitHub repo with root directory `app`). On the user's Mac, `vercel deploy --prod --yes` from `app/` also works.

## The readings Google Doc
"NMUN 2027 Interview Readings (Mozambique · GA1 · UNHCR)": https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit
- Order: UN foundations → Principal organs → My delegation: Mozambique → Law, rights and security → Country and conference skills (same order as the flashcards).
- Red "▶ FRIDAY / SATURDAY …" markers show which part to read on which day.
- The Doc is separate from the app: when unit content changes, the Doc needs the same change. Edit it with a Google Docs connector if one is available (targeted `batchUpdate` requests with `writeControl.requiredRevisionId`). If no connector is available, give the user the exact text to add and where.
- On 31 Oct the user trimmed the GA1 sheet, the UNHCR sheet and the Law section in the Doc only (the Disarmament unit was removed from the Doc). The app's unit text for those still has the cut parts, so the Doc is the source of truth there; the matching flashcards were deleted.

## NMUN rules facts (easy to get wrong)
No moderated or unmoderated caucuses: informal debate is a "motion to suspend the meeting". Only points of order exist (no personal privilege, inquiry or information). Working papers need sponsors plus signatories equal to 20% of the committee. Closure of debate needs a two-thirds vote. No pre-written or AI-written clauses.

## The plan (summary)
- The old plan (to 8 Nov) was deleted on 1 Nov. The new plan is approved but not built yet: see `plan-draft-nov12.md`. Fix the Doc and flashcards first. A copy is in `archive/plan-v5-nov8.js`.
- Availability: Sun/Wed/Thu uni until 5:15, study 5:15–6:30, calisthenics 6:30–8:30, then study; Mon uni 10:30–5:15, then study; Tue free except 3–6; Fri and Sat full days; bedtime around 2 am. Cards can be done in class on the phone.
