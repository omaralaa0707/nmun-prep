# The NMUN Interview Coach Project on claude.ai

The Project is only an interview coach: mocks, drills and feedback. Study planning and the app live elsewhere.

## Files
1. **Instructions:** paste everything from `INSTRUCTIONS.md`.
2. **Project knowledge** (upload these four; replace a file when it changes):
   - `04_my_profile.md` (who I am, delegation, topics, weak spots, session log)
   - `05_mozambique_and_topics.md` (Mozambique, GA1 and UNHCR sheets, the four topics, situations and NMUN rules)
   - `01_un_core.md` (UN history, Charter, organs, law and security, speeches)
   - `02_question_bank.md` (questions, follow-ups, what a strong answer must hit)

`01` and `05` are generated from the readings Google Doc, which is the source of truth. After the Doc changes, read it with the Google Docs connector, save the `documents.get` JSON, and run:

    node claude-project/build-from-doc.mjs <doc.json> claude-project

## Use it on the phone
Claude app → Projects → NMUN Interview Coach → new chat → tap the voice button and say, for example, "Full mock, 60 minutes. Include my country." Say "pause", "resume" and "end".

## After each mock
Add the suggested line to the session log in `04_my_profile.md`, then replace that file in Project knowledge.
