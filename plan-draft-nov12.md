# Approved plan for the 12 Nov interview (not built into the app yet)

The user approved this on 1 Nov, but wants to fix the readings Doc and flashcards first. Build it into `app/data/plan.js` only after those fixes, and recount the cards and times below if the fixes change them.

## Available study time
- Mon 2, Wed 4, Thu 5, Sun 8, Mon 9, Wed 11: 5:15–6:15 pm and 9:30 pm–1:30 am
- Tue 3: 1–3 pm and 6 pm–2 am
- Fri 6, Sat 7, Tue 10: totally free
- Thu 12: review 11:30 am–1:30 pm, interview 1:45 pm

## Where the user stands
Read the whole Doc once, but half wasn't retained. Did the UN foundations and principal organs cards well, not the rest. Did one weak mock. Wants to re-read the Doc and redo the flashcards from the start, with voice quizzes out loud for speaking practice, and start mocks only after that.

## Part 1: build the basics (read a section, then its cards straight away)
After each section: close the Doc, say the main points out loud from memory, check what was missed.

| Day | Read, then cards | New cards | Est. time | Voice quiz |
|---|---|---|---|---|
| Mon 2 | UN foundations | 142 | ~3 h | UN foundations |
| Tue 3 | Principal organs; Mozambique profile and record; GA1 sheet | 212 | ~5 h | Organs, then Mozambique |
| Wed 4 | PMSCs; LAWS; UNHCR sheet | 118 | ~3.5 h | The two GA1 topics |
| Thu 5 | MHPSS; migration routes | 57 | ~2.5 h | UNHCR and its two topics |
| Fri 6 | Pitch, rules and situations; Law, rights and security; Speeches and resolutions | 115 | ~3.5 h | Situational questions, then a mixed quiz |

Estimates assume about 130 words a minute and 40 seconds a card, plus due cards. They are estimates, not measurements. On Friday, also re-read anything that still isn't sticking.

## Part 2: mocks and pressure (due cards every day through the interview morning)
| Day | Main task | When |
|---|---|---|
| Sat 7 | Mock (60 min), fix 3 weakest answers, re-read those sections, PMSC and LAWS follow-up questions | Mock at 1:45 pm |
| Sun 8 | MHPSS and migration routes follow-up questions, defending Mozambique's positions | 9:30 pm onward |
| Mon 9 | Mock (90 min, tough panel), then fix answers | 9:30 pm |
| Tue 10 | Dress rehearsal (2 hours), fix what it exposes, teach the coach the four topics in the evening | Rehearsal at 1:45 pm |
| Wed 11 | Polish pitch and personal answers, situational round, delegation cards; no new material, stop by 1 am | 5:15–6:15 and 9:30 pm onward |
| Thu 12 | Due cards, skim delegation sections, voice warm-up, pitch out loud twice | 11:30 until leaving |

## App changes needed when building this
- Bump `CARDS_RESET` in `app/app.js` to restart all flashcards from zero (the user agreed).
- Replace the fixed `NEW_PER_DAY` with per-day new-card numbers that follow the table, so each day's cards match that day's reading.
- Fill `days` and `rules` in `app/data/plan.js`, with new task keys. Bump `?v=` in `app/index.html`.
- `app/api/remind.js` sends "Good luck" at 8:20 pm on interview day, after the 1:45 pm interview. Skip that day's message.
- Update the date in `claude-project/04_my_profile.md` (and in the Doc, if it appears there), then tell the user to re-upload that file. Check `claude-project/INSTRUCTIONS.md` too.
- Room not confirmed: assumed still Nadia Younes P131, HUSS.
