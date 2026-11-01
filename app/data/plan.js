// Interview plan, 2–12 Nov 2026 (interview Thursday 12 Nov, 1:45 pm). Mozambique: GA1 + UNHCR.
// newCards: new flashcards per day, matching that day's reading; unused ones roll over.
// kind: cards | read | voice | write | other. "when" is the time slot; "say" starts a Claude Project voice session. Never change an existing task key.
window.PLAN = {
  "interviewDate": "2026-11-12",
  "readingsUrl": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit",
  "docLinks": {
    "moz": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.gu21iomqzcvy",
    "mozrecord": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.wxyd367omuup",
    "ga1": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.fmh03r197qrz",
    "pmsc": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.fhlg9pg86k5l",
    "laws": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.8vc740nqgnb4",
    "unhcr": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.ca5hqisgvmte",
    "mhpss": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.1k0pkeqz1n6a",
    "routes": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.3x9htwsb2ykm",
    "situations": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.gg76ff8vfliu",
    "lon": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.61mqankw0ilq",
    "founding": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.w1oxc23sdzwk",
    "charter": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.c5x4wcntpzxc",
    "membership": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.pr19a0pswdm2",
    "system": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.4fgeg1x8x5l2",
    "ga": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.umgmg9qkxqjy",
    "sc": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.5b8szrn84x8",
    "ecosoc": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.tz8v0338gswj",
    "icj": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.15ltmlwbzla9",
    "secretariat": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.12dw1agzf27j",
    "intlaw": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.brkpykum8o09",
    "force": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.meguucxoug2q",
    "hr": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.97nb98ob57lc",
    "r2p": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.8rhmsn76ngz0",
    "peace": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.dutx7fcybw6",
    "disarm": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.fmh03r197qrz",
    "dev": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.f3bp3t7k7s0n",
    "clauses": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.7x9dbe1ax982",
    "groups": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.y2kckvr8sis0",
    "agencies": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.qlcfmkp092zw",
    "vocab": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.b2jg6bbrykny"
  },
  "newCards": {
    "2026-11-02": 382,
    "2026-11-03": 118,
    "2026-11-04": 108
  },
  "levels": {
    "most": {
      "label": "Full study day",
      "hours": "all day"
    },
    "some": {
      "label": "Free except 3–6 pm",
      "hours": "~10 h"
    },
    "least": {
      "label": "Uni + calisthenics",
      "hours": "~5 h"
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
      "date": "2026-11-02",
      "level": "least",
      "title": "UN foundations, organs, Mozambique, GA1, PMSCs and LAWS",
      "tasks": [
        {
          "kind": "read",
          "text": "Read The League of Nations (1920–1946)",
          "mins": 14,
          "unit": "lon",
          "when": "Tonight + 5:15–6:15 pm",
          "key": "v6:2026-11-02#0"
        },
        {
          "kind": "read",
          "text": "Read Road to the UN, 1941–1946",
          "mins": 14,
          "unit": "founding",
          "when": "Tonight + 5:15–6:15 pm",
          "key": "v6:2026-11-02#1"
        },
        {
          "kind": "read",
          "text": "Read The UN Charter",
          "mins": 15,
          "unit": "charter",
          "when": "Tonight + 5:15–6:15 pm",
          "key": "v6:2026-11-02#2"
        },
        {
          "kind": "read",
          "text": "Read Membership, observers and non-members",
          "mins": 12,
          "unit": "membership",
          "when": "Tonight + 5:15–6:15 pm",
          "key": "v6:2026-11-02#3"
        },
        {
          "kind": "read",
          "text": "Read The UN system, money and current agenda",
          "mins": 10,
          "unit": "system",
          "when": "Tonight + 5:15–6:15 pm",
          "key": "v6:2026-11-02#4"
        },
        {
          "kind": "read",
          "text": "Read Regional groups and negotiating blocs",
          "mins": 8,
          "unit": "groups",
          "when": "Tonight + 5:15–6:15 pm",
          "key": "v6:2026-11-02#5"
        },
        {
          "kind": "read",
          "text": "Read Agencies, funds and programmes",
          "mins": 10,
          "unit": "agencies",
          "when": "Tonight + 5:15–6:15 pm",
          "key": "v6:2026-11-02#6"
        },
        {
          "kind": "other",
          "text": "Close the Doc: say the main points of UN foundations out loud from memory, then check what you missed",
          "mins": 10,
          "when": "Tonight + 5:15–6:15 pm",
          "key": "v6:2026-11-02#7"
        },
        {
          "kind": "cards",
          "text": "Flashcards: UN foundations (128 new + any due)",
          "mins": 86,
          "href": "#cards/session/group:UN%20foundations",
          "when": "Tonight + 5:15–6:15 pm",
          "key": "v6:2026-11-02#8"
        },
        {
          "kind": "read",
          "text": "Read The General Assembly and its six committees",
          "mins": 16,
          "unit": "ga",
          "when": "9:30 pm",
          "key": "v8:2026-11-02#10"
        },
        {
          "kind": "read",
          "text": "Read The Security Council",
          "mins": 17,
          "unit": "sc",
          "when": "9:30 pm",
          "key": "v8:2026-11-02#11"
        },
        {
          "kind": "read",
          "text": "Read ECOSOC and its commissions",
          "mins": 12,
          "unit": "ecosoc",
          "when": "9:30 pm",
          "key": "v8:2026-11-02#12"
        },
        {
          "kind": "read",
          "text": "Read The International Court of Justice",
          "mins": 11,
          "unit": "icj",
          "when": "9:30 pm",
          "key": "v8:2026-11-02#13"
        },
        {
          "kind": "read",
          "text": "Read The Secretariat and the Secretary-General",
          "mins": 15,
          "unit": "secretariat",
          "when": "9:30 pm",
          "key": "v8:2026-11-02#14"
        },
        {
          "kind": "other",
          "text": "Close the Doc: say the main points of the principal organs out loud from memory, then check what you missed",
          "mins": 10,
          "when": "9:30 pm",
          "key": "v8:2026-11-02#15"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Principal organs (99 new + any due)",
          "mins": 66,
          "href": "#cards/session/group:Principal%20organs",
          "when": "9:30 pm",
          "key": "v8:2026-11-02#16"
        },
        {
          "kind": "read",
          "text": "Read Mozambique: country profile",
          "mins": 35,
          "unit": "moz",
          "when": "Evening",
          "key": "v8:2026-11-02#18"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Mozambique: country profile (45 new + any due)",
          "mins": 30,
          "href": "#cards/session/unit:moz",
          "when": "Evening",
          "key": "v8:2026-11-02#19"
        },
        {
          "kind": "read",
          "text": "Read Mozambique in GA1 and UNHCR: its record and statements",
          "mins": 15,
          "unit": "mozrecord",
          "when": "Evening",
          "key": "v8:2026-11-02#20"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Mozambique in GA1 and UNHCR: its record and statements (15 new + any due)",
          "mins": 10,
          "href": "#cards/session/unit:mozrecord",
          "when": "Evening",
          "key": "v8:2026-11-02#21"
        },
        {
          "kind": "other",
          "text": "Close the Doc: say the main points of Mozambique's profile and record out loud from memory, then check what you missed",
          "mins": 10,
          "when": "Evening",
          "key": "v8:2026-11-02#22"
        },
        {
          "kind": "read",
          "text": "Read GA First Committee: full committee sheet",
          "mins": 33,
          "unit": "ga1",
          "when": "Evening",
          "key": "v8:2026-11-02#24"
        },
        {
          "kind": "cards",
          "text": "Flashcards: GA First Committee: full committee sheet (44 new + any due)",
          "mins": 30,
          "href": "#cards/session/unit:ga1",
          "when": "Evening",
          "key": "v8:2026-11-02#25"
        },
        {
          "kind": "read",
          "text": "Read Topic: private military and security companies",
          "mins": 30,
          "unit": "pmsc",
          "when": "Late",
          "key": "v8:2026-11-02#26"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Topic: private military and security companies (27 new + any due)",
          "mins": 18,
          "href": "#cards/session/unit:pmsc",
          "when": "Late",
          "key": "v8:2026-11-02#27"
        },
        {
          "kind": "read",
          "text": "Read Topic: lethal autonomous weapon systems",
          "mins": 28,
          "unit": "laws",
          "when": "Late",
          "key": "v8:2026-11-02#28"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Topic: lethal autonomous weapon systems (24 new + any due)",
          "mins": 16,
          "href": "#cards/session/unit:laws",
          "when": "Late",
          "key": "v8:2026-11-02#29"
        },
        {
          "kind": "other",
          "text": "Close the Doc: say the main points of PMSCs and LAWS out loud from memory, then check what you missed",
          "mins": 10,
          "when": "Late",
          "key": "v8:2026-11-02#30"
        }
      ]
    },
    {
      "date": "2026-11-03",
      "level": "some",
      "title": "UNHCR sheet, MHPSS and migration routes",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "1 pm",
          "key": "v8:2026-11-03#0"
        },
        {
          "kind": "read",
          "text": "Read UNHCR: full committee sheet",
          "mins": 34,
          "unit": "unhcr",
          "when": "1–3 pm",
          "key": "v8:2026-11-03#1"
        },
        {
          "kind": "cards",
          "text": "Flashcards: UNHCR: full committee sheet (62 new + any due)",
          "mins": 42,
          "href": "#cards/session/unit:unhcr",
          "when": "1–3 pm",
          "key": "v8:2026-11-03#2"
        },
        {
          "kind": "read",
          "text": "Read Topic: psychosocial support for refugees and displaced persons",
          "mins": 35,
          "unit": "mhpss",
          "when": "6 pm",
          "key": "v8:2026-11-03#3"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Topic: psychosocial support for refugees and displaced persons (31 new + any due)",
          "mins": 21,
          "href": "#cards/session/unit:mhpss",
          "when": "6 pm",
          "key": "v8:2026-11-03#4"
        },
        {
          "kind": "read",
          "text": "Read Topic: protection along migration routes",
          "mins": 28,
          "unit": "routes",
          "when": "Evening",
          "key": "v8:2026-11-03#5"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Topic: protection along migration routes (25 new + any due)",
          "mins": 17,
          "href": "#cards/session/unit:routes",
          "when": "Evening",
          "key": "v8:2026-11-03#6"
        },
        {
          "kind": "other",
          "text": "Close the Doc: say the main points of UNHCR, MHPSS and migration routes out loud from memory, then check what you missed",
          "mins": 10,
          "when": "Evening",
          "key": "v8:2026-11-03#7"
        }
      ]
    },
    {
      "date": "2026-11-04",
      "level": "least",
      "title": "Pitch, rules, situations, law, speeches and model answers",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "In class",
          "key": "v8:2026-11-04#0"
        },
        {
          "kind": "read",
          "text": "Read Interview: your pitch, NMUN rules and situations",
          "mins": 30,
          "unit": "situations",
          "when": "5:15–6:15 pm",
          "key": "v8:2026-11-04#1"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Interview: your pitch, NMUN rules and situations (29 new + any due)",
          "mins": 20,
          "href": "#cards/session/unit:situations",
          "when": "9:30 pm",
          "key": "v8:2026-11-04#2"
        },
        {
          "kind": "read",
          "text": "Read International law essentials",
          "mins": 14,
          "unit": "intlaw",
          "when": "Evening",
          "key": "v8:2026-11-04#4"
        },
        {
          "kind": "read",
          "text": "Read UN vocabulary and documents",
          "mins": 4,
          "unit": "vocab",
          "when": "Evening",
          "key": "v8:2026-11-04#5"
        },
        {
          "kind": "read",
          "text": "Read Use of force and the laws of war",
          "mins": 10,
          "unit": "force",
          "when": "Evening",
          "key": "v8:2026-11-04#6"
        },
        {
          "kind": "read",
          "text": "Read The human rights system and the HRC",
          "mins": 8,
          "unit": "hr",
          "when": "Evening",
          "key": "v8:2026-11-04#7"
        },
        {
          "kind": "read",
          "text": "Read Responsibility to Protect (R2P)",
          "mins": 6,
          "unit": "r2p",
          "when": "Evening",
          "key": "v8:2026-11-04#8"
        },
        {
          "kind": "read",
          "text": "Read Peacekeeping and peacebuilding",
          "mins": 8,
          "unit": "peace",
          "when": "Evening",
          "key": "v8:2026-11-04#9"
        },
        {
          "kind": "read",
          "text": "Read SDGs and climate",
          "mins": 5,
          "unit": "dev",
          "when": "Evening",
          "key": "v8:2026-11-04#10"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Law, rights and security (76 new + any due)",
          "mins": 51,
          "href": "#cards/session/group:Law%2C%20rights%20and%20security",
          "when": "Evening",
          "key": "v8:2026-11-04#11"
        },
        {
          "kind": "other",
          "text": "Close the Doc: say the main points of law, rights and security out loud from memory, then check what you missed",
          "mins": 10,
          "when": "Evening",
          "key": "v8:2026-11-04#12"
        },
        {
          "kind": "read",
          "text": "Read Speeches and resolution writing",
          "mins": 8,
          "unit": "clauses",
          "when": "Evening",
          "key": "v8:2026-11-04#13"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Country and conference skills (3 new + any due)",
          "mins": 2,
          "href": "#cards/session/group:Country%20and%20conference%20skills",
          "when": "Evening",
          "key": "v8:2026-11-04#14"
        },
        {
          "kind": "read",
          "text": "Read Model answers",
          "mins": 30,
          "unit": "modelanswers",
          "when": "Evening",
          "key": "v8:2026-11-04#15"
        }
      ]
    },
    {
      "date": "2026-11-05",
      "level": "least",
      "title": "Mock 1",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "In class",
          "key": "v8:2026-11-05#0"
        },
        {
          "kind": "voice",
          "text": "Mock 1: 60 minutes",
          "mins": 60,
          "say": "Full mock, 60 minutes.",
          "when": "9:30 pm",
          "key": "v8:2026-11-05#1"
        },
        {
          "kind": "write",
          "text": "Fix your weakest answers from the mock",
          "mins": 45,
          "when": "After the mock",
          "key": "v8:2026-11-05#2"
        }
      ]
    },
    {
      "date": "2026-11-06",
      "level": "most",
      "title": "Mock 2",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "Morning",
          "key": "v8:2026-11-06#0"
        },
        {
          "kind": "voice",
          "text": "Mock 2: 60 minutes",
          "mins": 60,
          "say": "Full mock, 60 minutes.",
          "when": "1:45 pm",
          "key": "v8:2026-11-06#1"
        },
        {
          "kind": "write",
          "text": "Fix your weakest answers from the mock",
          "mins": 45,
          "when": "After the mock",
          "key": "v8:2026-11-06#2"
        }
      ]
    },
    {
      "date": "2026-11-07",
      "level": "most",
      "title": "Mock 3",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "Morning",
          "key": "v8:2026-11-07#0"
        },
        {
          "kind": "voice",
          "text": "Mock 3: 60 minutes",
          "mins": 60,
          "say": "Full mock, 60 minutes.",
          "when": "1:45 pm",
          "key": "v8:2026-11-07#1"
        },
        {
          "kind": "write",
          "text": "Fix your weakest answers from the mock",
          "mins": 45,
          "when": "After the mock",
          "key": "v8:2026-11-07#2"
        }
      ]
    },
    {
      "date": "2026-11-08",
      "level": "least",
      "title": "Mock 4",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "In class",
          "key": "v8:2026-11-08#0"
        },
        {
          "kind": "voice",
          "text": "Mock 4: 60 minutes",
          "mins": 60,
          "say": "Full mock, 60 minutes.",
          "when": "9:30 pm",
          "key": "v8:2026-11-08#1"
        },
        {
          "kind": "write",
          "text": "Fix your weakest answers from the mock",
          "mins": 45,
          "when": "After the mock",
          "key": "v8:2026-11-08#2"
        }
      ]
    },
    {
      "date": "2026-11-09",
      "level": "least",
      "title": "Mock 5",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "5:15–6:15 pm",
          "key": "v8:2026-11-09#0"
        },
        {
          "kind": "voice",
          "text": "Mock 5: 60 minutes",
          "mins": 60,
          "say": "Full mock, 60 minutes.",
          "when": "9:30 pm",
          "key": "v8:2026-11-09#1"
        },
        {
          "kind": "write",
          "text": "Fix your weakest answers from the mock",
          "mins": 45,
          "when": "After the mock",
          "key": "v8:2026-11-09#2"
        }
      ]
    },
    {
      "date": "2026-11-10",
      "level": "most",
      "title": "Mock 6",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "Morning",
          "key": "v8:2026-11-10#0"
        },
        {
          "kind": "voice",
          "text": "Mock 6: 60 minutes",
          "mins": 60,
          "say": "Full mock, 60 minutes.",
          "when": "1:45 pm",
          "key": "v8:2026-11-10#1"
        },
        {
          "kind": "write",
          "text": "Fix your weakest answers from the mock",
          "mins": 45,
          "when": "After the mock",
          "key": "v8:2026-11-10#2"
        }
      ]
    },
    {
      "date": "2026-11-11",
      "level": "least",
      "title": "Mock 7",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "In class",
          "key": "v8:2026-11-11#0"
        },
        {
          "kind": "voice",
          "text": "Mock 7: 60 minutes",
          "mins": 60,
          "say": "Full mock, 60 minutes.",
          "when": "9:30 pm",
          "key": "v8:2026-11-11#1"
        },
        {
          "kind": "write",
          "text": "Fix your weakest answers from the mock",
          "mins": 45,
          "when": "After the mock",
          "key": "v8:2026-11-11#2"
        }
      ]
    },
    {
      "date": "2026-11-12",
      "level": "interview",
      "title": "Quick review, then the interview",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 20,
          "href": "#cards/session/due:all",
          "when": "11:30 am",
          "key": "v8:2026-11-12#0"
        },
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
