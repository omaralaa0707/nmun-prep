// Interview plan, 4–12 Nov 2026 (interview Thursday 12 Nov, 1:45 pm). Mozambique: GA1 + UNHCR.
// Read 7–8 Nov, one mock a day 9–11 Nov, final review 12 Nov. Cards: each day's new cards plus anything due.
// newCards: cumulative new flashcards allowed per day, in deck order (see units.js); unused ones roll over. After the last date there is no limit.
// kind: cards | read | voice | write | other. "when" is the time slot; "say" starts a Claude Project voice session. Never change an existing task key.
window.PLAN = {
  "interviewDate": "2026-11-12",
  "newCards": {
    "2026-11-04": 231,
    "2026-11-05": 127,
    "2026-11-06": 88,
    "2026-11-07": 91
  },
  "levels": {
    "some": {
      "label": "Free except 3–6 pm",
      "hours": "~10 h"
    },
    "interview": {
      "label": "Interview 1:45 pm",
      "hours": "light"
    }
  },
  "rules": [
    "New cards follow the day's reading. If you miss a day, its cards roll over to the next day. Every card that's due comes up each day until the interview.",
    "Read a section, then do its cards straight away, so every new card is something you have just read.",
    "After each section, close the Doc, say the main points out loud from memory, then check what you missed.",
    "Study in 45–60 minute blocks with 10–15 minute breaks. On uni days, do due cards in class on your phone.",
    "Voice sessions run in the NMUN Interview Coach Claude Project: start a chat, tap voice, say the phrase.",
    "After every mock, add the suggested line to the session log in 04_my_profile.md.",
    "Real interviews last year often ran 1–2 hours (rarely 3–4)."
  ],
  "days": [
    {
      "date": "2026-11-07",
      "level": "most",
      "title": "Mozambique, GA1 + flashcards",
      "tasks": [
        {
          "kind": "read",
          "text": "Read Mozambique: country profile",
          "mins": 36,
          "key": "v9:2026-11-05#6"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Mozambique: country profile (47 new + any due)",
          "mins": 28,
          "href": "#cards/session/unit:moz",
          "key": "v9:2026-11-05#7"
        },
        {
          "kind": "read",
          "text": "Read Mozambique in GA1 and UNHCR: its record and statements",
          "mins": 18,
          "key": "v9:2026-11-05#8"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Mozambique record (10 new + any due)",
          "mins": 6,
          "href": "#cards/session/unit:mozrecord",
          "key": "v9:2026-11-05#9"
        },
        {
          "kind": "read",
          "text": "Read GA First Committee: full committee sheet",
          "mins": 44,
          "key": "v9:2026-11-06#0"
        },
        {
          "kind": "cards",
          "text": "Flashcards: GA First Committee (40 new + any due)",
          "mins": 24,
          "href": "#cards/session/unit:ga1",
          "key": "v9:2026-11-06#1"
        },
        {
          "kind": "read",
          "text": "Read Topic: private military and security companies",
          "mins": 31,
          "key": "v9:2026-11-06#2"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Private military and security companies (28 new + any due)",
          "mins": 17,
          "href": "#cards/session/unit:pmsc",
          "key": "v9:2026-11-06#3"
        },
        {
          "kind": "read",
          "text": "Read Topic: lethal autonomous weapon systems",
          "mins": 26,
          "key": "v9:2026-11-06#4"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Lethal autonomous weapon systems (20 new + any due)",
          "mins": 12,
          "href": "#cards/session/unit:laws",
          "key": "v9:2026-11-06#5"
        }
      ]
    },
    {
      "date": "2026-11-08",
      "level": "least",
      "title": "UNHCR + flashcards",
      "tasks": [
        {
          "kind": "read",
          "text": "Read UNHCR: full committee sheet",
          "mins": 46,
          "key": "v9:2026-11-07#0"
        },
        {
          "kind": "cards",
          "text": "Flashcards: UNHCR (43 new + any due)",
          "mins": 26,
          "href": "#cards/session/unit:unhcr",
          "key": "v9:2026-11-07#1"
        },
        {
          "kind": "read",
          "text": "Read Topic: psychosocial support for refugees and displaced persons",
          "mins": 35,
          "key": "v9:2026-11-07#2"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Psychosocial support (22 new + any due)",
          "mins": 13,
          "href": "#cards/session/unit:mhpss",
          "key": "v9:2026-11-07#3"
        },
        {
          "kind": "read",
          "text": "Read Topic: protection along migration routes",
          "mins": 29,
          "key": "v9:2026-11-07#4"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Protection along migration routes (26 new + any due)",
          "mins": 16,
          "href": "#cards/session/unit:routes",
          "key": "v9:2026-11-07#5"
        }
      ]
    },
    {
      "date": "2026-11-09",
      "level": "least",
      "title": "Mock 1",
      "tasks": [
        {
          "kind": "voice",
          "text": "Mock 1: 60 minutes",
          "mins": 60,
          "say": "Full mock, 60 minutes.",
          "when": "9:30 pm",
          "key": "v9:2026-11-08#0"
        }
      ]
    },
    {
      "date": "2026-11-10",
      "level": "most",
      "title": "Mock 2",
      "tasks": [
        {
          "kind": "voice",
          "text": "Mock 2: 60 minutes",
          "mins": 60,
          "say": "Full mock, 60 minutes.",
          "when": "9:30 pm",
          "key": "v9:2026-11-09#0"
        }
      ]
    },
    {
      "date": "2026-11-11",
      "level": "least",
      "title": "Mock 3",
      "tasks": [
        {
          "kind": "voice",
          "text": "Mock 3: 60 minutes",
          "mins": 60,
          "say": "Full mock, 60 minutes.",
          "when": "1:45 pm",
          "key": "v9:2026-11-10#0"
        }
      ]
    },
    {
      "date": "2026-11-12",
      "level": "interview",
      "title": "Final review, then the interview",
      "tasks": [
        {
          "kind": "read",
          "text": "Quick review of the delegation sections",
          "mins": 40,
          "when": "Before leaving",
          "key": "v8:2026-11-12#1"
        },
        {
          "kind": "other",
          "text": "Interview at 1:45 pm. Confirm the room first (last known: Nadia Younes P131, HUSS)",
          "when": "1:45 pm",
          "key": "v8:2026-11-12#2"
        }
      ]
    }
  ]
};
