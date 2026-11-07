// Interview plan, 4–12 Nov 2026 (interview Thursday 12 Nov, 1:45 pm). Mozambique: GA1 + UNHCR.
// Read 7–8 Nov, one mock a day 9–11 Nov. Cards: each day's new cards plus anything due.
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
    }
  },
  "days": [
    {
      "date": "2026-11-07",
      "level": "most",
      "title": "GA1",
      "tasks": [
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
      "title": "UNHCR",
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
    }
  ]
};
