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
    "2026-11-02": 227,
    "2026-11-03": 155,
    "2026-11-04": 118,
    "2026-11-05": 108
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
    "Real interviews last year often ran 1–2 hours (rarely 3–4), so the mocks build from 60 minutes to 2 hours."
  ],
  "days": [
    {
      "date": "2026-11-02",
      "level": "least",
      "title": "UN foundations and principal organs",
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
          "kind": "voice",
          "text": "Voice quiz: UN foundations",
          "mins": 20,
          "say": "Rapid-fire on UN history, the Charter and membership.",
          "when": "Tonight + 5:15–6:15 pm",
          "key": "v6:2026-11-02#9"
        },
        {
          "kind": "read",
          "text": "Read The General Assembly and its six committees",
          "mins": 16,
          "unit": "ga",
          "when": "9:30 pm",
          "key": "v7:2026-11-02#10"
        },
        {
          "kind": "read",
          "text": "Read The Security Council",
          "mins": 17,
          "unit": "sc",
          "when": "9:30 pm",
          "key": "v7:2026-11-02#11"
        },
        {
          "kind": "read",
          "text": "Read ECOSOC and its commissions",
          "mins": 12,
          "unit": "ecosoc",
          "when": "9:30 pm",
          "key": "v7:2026-11-02#12"
        },
        {
          "kind": "read",
          "text": "Read The International Court of Justice",
          "mins": 11,
          "unit": "icj",
          "when": "9:30 pm",
          "key": "v7:2026-11-02#13"
        },
        {
          "kind": "read",
          "text": "Read The Secretariat and the Secretary-General",
          "mins": 15,
          "unit": "secretariat",
          "when": "9:30 pm",
          "key": "v7:2026-11-02#14"
        },
        {
          "kind": "other",
          "text": "Close the Doc: say the main points of the principal organs out loud from memory, then check what you missed",
          "mins": 10,
          "when": "9:30 pm",
          "key": "v7:2026-11-02#15"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Principal organs (99 new + any due)",
          "mins": 66,
          "href": "#cards/session/group:Principal%20organs",
          "when": "9:30 pm",
          "key": "v7:2026-11-02#16"
        },
        {
          "kind": "voice",
          "text": "Voice quiz: principal organs",
          "mins": 20,
          "say": "Rapid-fire on the principal organs.",
          "when": "Before 1:30 am",
          "key": "v7:2026-11-02#17"
        }
      ]
    },
    {
      "date": "2026-11-03",
      "level": "some",
      "title": "Mozambique, the GA1 sheet, PMSCs and LAWS",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 15,
          "href": "#cards/session/due:all",
          "when": "1 pm",
          "key": "v7:2026-11-03#0"
        },
        {
          "kind": "read",
          "text": "Read Mozambique: country profile",
          "mins": 35,
          "unit": "moz",
          "when": "1–3 pm",
          "key": "v7:2026-11-03#1"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Mozambique: country profile (45 new + any due)",
          "mins": 30,
          "href": "#cards/session/unit:moz",
          "when": "1–3 pm",
          "key": "v7:2026-11-03#2"
        },
        {
          "kind": "read",
          "text": "Read Mozambique in GA1 and UNHCR: its record and statements",
          "mins": 15,
          "unit": "mozrecord",
          "when": "6 pm",
          "key": "v7:2026-11-03#3"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Mozambique in GA1 and UNHCR: its record and statements (15 new + any due)",
          "mins": 10,
          "href": "#cards/session/unit:mozrecord",
          "when": "6 pm",
          "key": "v7:2026-11-03#4"
        },
        {
          "kind": "other",
          "text": "Close the Doc: say the main points of Mozambique's profile and record out loud from memory, then check what you missed",
          "mins": 10,
          "when": "6 pm",
          "key": "v7:2026-11-03#5"
        },
        {
          "kind": "voice",
          "text": "Voice quiz: Mozambique",
          "mins": 20,
          "say": "Rapid-fire on Mozambique's profile and its record at the UN.",
          "when": "Evening",
          "key": "v7:2026-11-03#6"
        },
        {
          "kind": "read",
          "text": "Read GA First Committee: full committee sheet",
          "mins": 33,
          "unit": "ga1",
          "when": "Evening",
          "key": "v7:2026-11-03#7"
        },
        {
          "kind": "cards",
          "text": "Flashcards: GA First Committee: full committee sheet (44 new + any due)",
          "mins": 30,
          "href": "#cards/session/unit:ga1",
          "when": "Evening",
          "key": "v7:2026-11-03#8"
        },
        {
          "kind": "read",
          "text": "Read Topic: private military and security companies",
          "mins": 30,
          "unit": "pmsc",
          "when": "Evening",
          "key": "v7:2026-11-03#9"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Topic: private military and security companies (27 new + any due)",
          "mins": 18,
          "href": "#cards/session/unit:pmsc",
          "when": "Evening",
          "key": "v7:2026-11-03#10"
        },
        {
          "kind": "read",
          "text": "Read Topic: lethal autonomous weapon systems",
          "mins": 28,
          "unit": "laws",
          "when": "Evening",
          "key": "v7:2026-11-03#11"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Topic: lethal autonomous weapon systems (24 new + any due)",
          "mins": 16,
          "href": "#cards/session/unit:laws",
          "when": "Evening",
          "key": "v7:2026-11-03#12"
        },
        {
          "kind": "other",
          "text": "Close the Doc: say the main points of PMSCs and LAWS out loud from memory, then check what you missed",
          "mins": 10,
          "when": "Evening",
          "key": "v7:2026-11-03#13"
        },
        {
          "kind": "voice",
          "text": "Voice quiz: the two GA1 topics",
          "mins": 20,
          "say": "Rapid-fire on private military companies and lethal autonomous weapons.",
          "when": "Before 2 am",
          "key": "v7:2026-11-03#14"
        }
      ]
    },
    {
      "date": "2026-11-04",
      "level": "least",
      "title": "UNHCR, MHPSS and migration routes",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "In class",
          "key": "v7:2026-11-04#0"
        },
        {
          "kind": "read",
          "text": "Read UNHCR: full committee sheet",
          "mins": 34,
          "unit": "unhcr",
          "when": "5:15–6:15 pm",
          "key": "v7:2026-11-04#1"
        },
        {
          "kind": "cards",
          "text": "Flashcards: UNHCR: full committee sheet (62 new + any due)",
          "mins": 42,
          "href": "#cards/session/unit:unhcr",
          "when": "9:30 pm",
          "key": "v7:2026-11-04#2"
        },
        {
          "kind": "read",
          "text": "Read Topic: psychosocial support for refugees and displaced persons",
          "mins": 35,
          "unit": "mhpss",
          "when": "9:30 pm",
          "key": "v7:2026-11-04#3"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Topic: psychosocial support for refugees and displaced persons (31 new + any due)",
          "mins": 21,
          "href": "#cards/session/unit:mhpss",
          "when": "9:30 pm",
          "key": "v7:2026-11-04#4"
        },
        {
          "kind": "read",
          "text": "Read Topic: protection along migration routes",
          "mins": 28,
          "unit": "routes",
          "when": "Evening",
          "key": "v7:2026-11-04#5"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Topic: protection along migration routes (25 new + any due)",
          "mins": 17,
          "href": "#cards/session/unit:routes",
          "when": "Evening",
          "key": "v7:2026-11-04#6"
        },
        {
          "kind": "other",
          "text": "Close the Doc: say the main points of MHPSS and migration routes out loud from memory, then check what you missed",
          "mins": 10,
          "when": "Evening",
          "key": "v7:2026-11-04#7"
        },
        {
          "kind": "voice",
          "text": "Voice quiz: UNHCR and its two topics",
          "mins": 20,
          "say": "Rapid-fire on UNHCR, psychosocial support and migration routes.",
          "when": "Before 1:30 am",
          "key": "v7:2026-11-04#8"
        }
      ]
    },
    {
      "date": "2026-11-05",
      "level": "least",
      "title": "Pitch, rules, situations, law and speeches",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "In class",
          "key": "v7:2026-11-05#0"
        },
        {
          "kind": "read",
          "text": "Read Interview: your pitch, NMUN rules and situations",
          "mins": 30,
          "unit": "situations",
          "when": "5:15–6:15 pm",
          "key": "v7:2026-11-05#1"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Interview: your pitch, NMUN rules and situations (29 new + any due)",
          "mins": 20,
          "href": "#cards/session/unit:situations",
          "when": "9:30 pm",
          "key": "v7:2026-11-05#2"
        },
        {
          "kind": "voice",
          "text": "Voice quiz: situational questions",
          "mins": 20,
          "say": "Situational round.",
          "when": "9:30 pm",
          "key": "v7:2026-11-05#3"
        },
        {
          "kind": "read",
          "text": "Read International law essentials",
          "mins": 14,
          "unit": "intlaw",
          "when": "Evening",
          "key": "v7:2026-11-05#4"
        },
        {
          "kind": "read",
          "text": "Read UN vocabulary and documents",
          "mins": 4,
          "unit": "vocab",
          "when": "Evening",
          "key": "v7:2026-11-05#5"
        },
        {
          "kind": "read",
          "text": "Read Use of force and the laws of war",
          "mins": 10,
          "unit": "force",
          "when": "Evening",
          "key": "v7:2026-11-05#6"
        },
        {
          "kind": "read",
          "text": "Read The human rights system and the HRC",
          "mins": 8,
          "unit": "hr",
          "when": "Evening",
          "key": "v7:2026-11-05#7"
        },
        {
          "kind": "read",
          "text": "Read Responsibility to Protect (R2P)",
          "mins": 6,
          "unit": "r2p",
          "when": "Evening",
          "key": "v7:2026-11-05#8"
        },
        {
          "kind": "read",
          "text": "Read Peacekeeping and peacebuilding",
          "mins": 8,
          "unit": "peace",
          "when": "Evening",
          "key": "v7:2026-11-05#9"
        },
        {
          "kind": "read",
          "text": "Read SDGs and climate",
          "mins": 5,
          "unit": "dev",
          "when": "Evening",
          "key": "v7:2026-11-05#10"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Law, rights and security (76 new + any due)",
          "mins": 51,
          "href": "#cards/session/group:Law%2C%20rights%20and%20security",
          "when": "Evening",
          "key": "v7:2026-11-05#11"
        },
        {
          "kind": "other",
          "text": "Close the Doc: say the main points of law, rights and security out loud from memory, then check what you missed",
          "mins": 10,
          "when": "Evening",
          "key": "v7:2026-11-05#12"
        },
        {
          "kind": "read",
          "text": "Read Speeches and resolution writing",
          "mins": 8,
          "unit": "clauses",
          "when": "Evening",
          "key": "v7:2026-11-05#13"
        },
        {
          "kind": "cards",
          "text": "Flashcards: Country and conference skills (3 new + any due)",
          "mins": 2,
          "href": "#cards/session/group:Country%20and%20conference%20skills",
          "when": "Evening",
          "key": "v7:2026-11-05#14"
        },
        {
          "kind": "voice",
          "text": "Voice quiz: mixed",
          "mins": 20,
          "say": "Rapid-fire on my two committees, my four topics and the UN basics.",
          "when": "Before 1:30 am",
          "key": "v7:2026-11-05#15"
        }
      ]
    },
    {
      "date": "2026-11-06",
      "level": "most",
      "title": "First full mock, then PMSCs and LAWS under pressure",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "Morning",
          "key": "v7:2026-11-06#0"
        },
        {
          "kind": "read",
          "text": "Re-read anything that still isn't sticking",
          "mins": 60,
          "when": "Morning",
          "key": "v7:2026-11-06#1"
        },
        {
          "kind": "voice",
          "text": "Mock: 60 minutes",
          "mins": 60,
          "say": "Full mock, 60 minutes.",
          "when": "1:45 pm",
          "key": "v7:2026-11-06#2"
        },
        {
          "kind": "write",
          "text": "Fix your 3 weakest answers from the mock",
          "mins": 45,
          "when": "After the mock",
          "key": "v7:2026-11-06#3"
        },
        {
          "kind": "read",
          "text": "Re-read the Doc sections behind those answers",
          "mins": 45,
          "when": "Afternoon",
          "key": "v7:2026-11-06#4"
        },
        {
          "kind": "voice",
          "text": "Follow-up ladder: private military companies",
          "mins": 20,
          "say": "Follow-up ladder on private military and security companies.",
          "when": "Evening",
          "key": "v7:2026-11-06#5"
        },
        {
          "kind": "voice",
          "text": "Follow-up ladder: autonomous weapons",
          "mins": 20,
          "say": "Follow-up ladder on lethal autonomous weapons.",
          "when": "Evening",
          "key": "v7:2026-11-06#6"
        }
      ]
    },
    {
      "date": "2026-11-07",
      "level": "most",
      "title": "MHPSS, routes and defending Mozambique",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "Morning",
          "key": "v7:2026-11-07#0"
        },
        {
          "kind": "voice",
          "text": "Follow-up ladder: psychosocial support",
          "mins": 20,
          "say": "Follow-up ladder on psychosocial support for refugees.",
          "when": "Morning",
          "key": "v7:2026-11-07#1"
        },
        {
          "kind": "voice",
          "text": "Follow-up ladder: migration routes",
          "mins": 20,
          "say": "Follow-up ladder on protection along migration routes.",
          "when": "Morning",
          "key": "v7:2026-11-07#2"
        },
        {
          "kind": "voice",
          "text": "Defend Mozambique's positions under pressure",
          "mins": 20,
          "say": "Follow-up ladder on my country's positions.",
          "when": "Afternoon",
          "key": "v7:2026-11-07#3"
        },
        {
          "kind": "voice",
          "text": "Deep dive: GA1 (mandate, bodies, both topics)",
          "mins": 30,
          "say": "Deep dive on my first committee.",
          "when": "Afternoon",
          "key": "v7:2026-11-07#4"
        },
        {
          "kind": "voice",
          "text": "Deep dive: UNHCR (mandate, ExCom, both topics)",
          "mins": 30,
          "say": "Deep dive on my second committee.",
          "when": "Evening",
          "key": "v7:2026-11-07#5"
        }
      ]
    },
    {
      "date": "2026-11-08",
      "level": "least",
      "title": "UN basics and situations",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "In class",
          "key": "v7:2026-11-08#0"
        },
        {
          "kind": "voice",
          "text": "Rapid-fire on UN history and the principal organs",
          "mins": 20,
          "say": "Rapid-fire on UN history and the principal organs.",
          "when": "5:15–6:15 pm",
          "key": "v7:2026-11-08#1"
        },
        {
          "kind": "voice",
          "text": "Situational round",
          "mins": 20,
          "say": "Situational round.",
          "when": "9:30 pm",
          "key": "v7:2026-11-08#2"
        },
        {
          "kind": "read",
          "text": "Re-read whatever the last two days exposed",
          "mins": 45,
          "when": "Evening",
          "key": "v7:2026-11-08#3"
        }
      ]
    },
    {
      "date": "2026-11-09",
      "level": "least",
      "title": "Tough 90-minute mock",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "5:15–6:15 pm",
          "key": "v7:2026-11-09#0"
        },
        {
          "kind": "voice",
          "text": "Mock: 90 minutes, tough panel",
          "mins": 90,
          "say": "Full mock, 90 minutes. Be tough.",
          "when": "9:30 pm",
          "key": "v7:2026-11-09#1"
        },
        {
          "kind": "write",
          "text": "Fix your weakest answers from the mock",
          "mins": 60,
          "when": "After the mock",
          "key": "v7:2026-11-09#2"
        }
      ]
    },
    {
      "date": "2026-11-10",
      "level": "most",
      "title": "Two-hour dress rehearsal",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "Morning",
          "key": "v7:2026-11-10#0"
        },
        {
          "kind": "voice",
          "text": "Dress rehearsal: 2 hours",
          "mins": 120,
          "say": "Full mock, 2 hours. Final dress rehearsal.",
          "when": "1:45 pm",
          "key": "v7:2026-11-10#1"
        },
        {
          "kind": "write",
          "text": "Fix what the rehearsal exposed",
          "mins": 90,
          "when": "After the rehearsal",
          "key": "v7:2026-11-10#2"
        },
        {
          "kind": "voice",
          "text": "Explain it back: teach the coach your four topics",
          "mins": 45,
          "say": "Explain it back: I'll teach you my four topics.",
          "when": "Evening",
          "key": "v7:2026-11-10#3"
        }
      ]
    },
    {
      "date": "2026-11-11",
      "level": "least",
      "title": "Polish; no new material",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 30,
          "href": "#cards/session/due:all",
          "when": "In class",
          "key": "v7:2026-11-11#0"
        },
        {
          "kind": "voice",
          "text": "Polish your pitch and personal answers",
          "mins": 45,
          "say": "Answer polish: tell us about yourself and why NMUN.",
          "when": "5:15–6:15 pm",
          "key": "v7:2026-11-11#1"
        },
        {
          "kind": "voice",
          "text": "Situational round",
          "mins": 20,
          "say": "Situational round.",
          "when": "9:30 pm",
          "key": "v7:2026-11-11#2"
        },
        {
          "kind": "cards",
          "text": "Flashcards: review the delegation cards",
          "mins": 45,
          "href": "#cards/session/group:My%20delegation%3A%20Mozambique",
          "when": "Evening",
          "key": "v7:2026-11-11#3"
        },
        {
          "kind": "other",
          "text": "Stop by 1 am and sleep",
          "when": "1 am",
          "key": "v7:2026-11-11#4"
        }
      ]
    },
    {
      "date": "2026-11-12",
      "level": "interview",
      "title": "Interview day",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 20,
          "href": "#cards/session/due:all",
          "when": "11:30 am",
          "key": "v7:2026-11-12#0"
        },
        {
          "kind": "read",
          "text": "Skim the delegation sections",
          "mins": 40,
          "unit": "moz",
          "when": "Before leaving",
          "key": "v7:2026-11-12#1"
        },
        {
          "kind": "voice",
          "text": "Voice warm-up",
          "mins": 15,
          "say": "Rapid-fire on my four topics.",
          "when": "Before leaving",
          "key": "v7:2026-11-12#2"
        },
        {
          "kind": "write",
          "text": "Say your pitch out loud twice",
          "mins": 5,
          "when": "Before leaving",
          "key": "v7:2026-11-12#3"
        },
        {
          "kind": "other",
          "text": "Interview at 1:45 pm. Confirm the room first (last known: Nadia Younes P131, HUSS)",
          "when": "1:45 pm",
          "key": "v7:2026-11-12#4"
        }
      ]
    }
  ]
};
