// Interview plan, 30 Oct – 8 Nov 2026 (interview Sunday 8 Nov, 8:30 pm, P131 HUSS). Mozambique: GA1 + UNHCR.
// Fri 30 Oct and Sat 31 Oct each read half of the readings Doc (400 new flashcards a day); then mocks, voice quizzes and deep dives.
// kind: cards | read | voice | write | other. "when" is the time slot; "say" starts a Claude Project voice session.
window.PLAN = {
  "interviewDate": "2026-11-08",
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
    "disarm": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.ve6df2st2op3",
    "dev": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.f3bp3t7k7s0n",
    "clauses": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.7x9dbe1ax982",
    "groups": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.y2kckvr8sis0",
    "agencies": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.qlcfmkp092zw",
    "vocab": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit?tab=t.0#heading=h.b2jg6bbrykny"
  },
  "parts": {
    "2026-10-30": [
      "lon",
      "founding",
      "charter",
      "membership",
      "system",
      "groups",
      "agencies",
      "ga",
      "sc",
      "ecosoc",
      "icj",
      "secretariat"
    ],
    "2026-10-31": [
      "moz",
      "mozrecord",
      "ga1",
      "pmsc",
      "laws",
      "unhcr",
      "mhpss",
      "routes",
      "situations",
      "intlaw",
      "vocab",
      "force",
      "hr",
      "r2p",
      "peace",
      "disarm",
      "dev",
      "clauses"
    ]
  },
  "levels": {
    "most": {
      "label": "Full study day",
      "hours": "~6 h + breaks"
    },
    "some": {
      "label": "Uni, then evening",
      "hours": "~6 h"
    },
    "least": {
      "label": "Uni + calisthenics",
      "hours": "~5 h"
    },
    "interview": {
      "label": "Interview 8:30 pm",
      "hours": "light"
    }
  },
  "rules": [
    "Flashcards: 400 new on Friday and the remaining 312 on Saturday (matching that day's reading), then everything due every day. On uni days, do them in class on your phone.",
    "Read the day's part of the Google Doc first, then its flashcards, so every new card is something you have just read.",
    "Study in 45–60 minute blocks with 10–15 minute breaks.",
    "A 20-minute voice quiz every day, except on mock days. Voice sessions run in the NMUN Interview Coach Claude Project: start a chat, tap voice, say the phrase.",
    "After every mock, add the suggested line to the session log in 04_my_profile.md.",
    "Real interviews last year often ran 1–2 hours (rarely 3–4). The mocks build up from 45 minutes to 2 hours to train stamina."
  ],
  "days": [
    {
      "date": "2026-10-30",
      "level": "most",
      "title": "Parts 1 + 2: UN foundations to the Secretariat",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: 400 new + everything due",
          "mins": 180,
          "href": "#cards/session/all",
          "key": "v4:2026-10-30#2"
        },
        {
          "kind": "read",
          "text": "Read The League of Nations (1920–1946)",
          "mins": 14,
          "unit": "lon",
          "key": "v4:2026-10-30#3"
        },
        {
          "kind": "read",
          "text": "Read Road to the UN, 1941–1946",
          "mins": 14,
          "unit": "founding",
          "key": "v4:2026-10-30#4"
        },
        {
          "kind": "read",
          "text": "Read The UN Charter",
          "mins": 15,
          "unit": "charter",
          "key": "v4:2026-10-30#5"
        },
        {
          "kind": "read",
          "text": "Read Membership, observers and non-members",
          "mins": 14,
          "unit": "membership",
          "key": "v4:2026-10-30#6"
        },
        {
          "kind": "read",
          "text": "Read The UN system, money and current agenda",
          "mins": 10,
          "unit": "system",
          "key": "v4:2026-10-30#7"
        },
        {
          "kind": "read",
          "text": "Read Regional groups and negotiating blocs",
          "mins": 8,
          "unit": "groups",
          "key": "v4:2026-10-30#8"
        },
        {
          "kind": "read",
          "text": "Read Agencies, funds and programmes",
          "mins": 10,
          "unit": "agencies",
          "key": "v4:2026-10-30#9"
        },
        {
          "kind": "read",
          "text": "Read The General Assembly and its six committees",
          "mins": 16,
          "unit": "ga",
          "key": "v4:2026-10-30#10"
        },
        {
          "kind": "read",
          "text": "Read The Security Council",
          "mins": 17,
          "unit": "sc",
          "key": "v4:2026-10-30#11"
        },
        {
          "kind": "voice",
          "text": "Voice quiz on today's reading",
          "mins": 20,
          "say": "Rapid-fire on UN foundations, the General Assembly and the Security Council.",
          "key": "v4:2026-10-30#12"
        },
        {
          "kind": "read",
          "text": "Read ECOSOC and its commissions",
          "mins": 12,
          "unit": "ecosoc",
          "key": "v4:2026-10-31#1"
        },
        {
          "kind": "read",
          "text": "Read The International Court of Justice",
          "mins": 11,
          "unit": "icj",
          "key": "v4:2026-10-31#2"
        },
        {
          "kind": "read",
          "text": "Read The Secretariat and the Secretary-General",
          "mins": 17,
          "unit": "secretariat",
          "key": "v4:2026-10-31#3"
        }
      ]
    },
    {
      "date": "2026-10-31",
      "level": "most",
      "title": "Mozambique, GA1, PMSCs + Mock #1 (45 min), then autonomous weapons to the end",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: 312 new (the rest) + everything due",
          "mins": 150,
          "href": "#cards/session/all",
          "key": "v4:2026-11-01#0"
        },
        {
          "kind": "read",
          "text": "Read Mozambique: country profile",
          "mins": 35,
          "unit": "moz",
          "key": "v4:2026-10-31#4"
        },
        {
          "kind": "read",
          "text": "Read Mozambique in GA1 and UNHCR: its record and statements",
          "mins": 15,
          "unit": "mozrecord",
          "key": "v4:2026-10-31#5"
        },
        {
          "kind": "read",
          "text": "Read GA First Committee: full committee sheet",
          "mins": 35,
          "unit": "ga1",
          "key": "v4:2026-10-31#6"
        },
        {
          "kind": "read",
          "text": "Read Topic: private military and security companies",
          "mins": 30,
          "unit": "pmsc",
          "key": "v4:2026-10-31#7"
        },
        {
          "kind": "voice",
          "text": "Mock #1: 45 minutes (after the reading)",
          "mins": 50,
          "say": "Full mock, 45 minutes. Include my country.",
          "key": "v4:2026-10-31#8"
        },
        {
          "kind": "write",
          "text": "Write better versions of your 3 weakest mock answers",
          "mins": 20,
          "key": "v4:2026-10-31#9"
        },
        {
          "kind": "read",
          "text": "Read Topic: lethal autonomous weapon systems",
          "mins": 28,
          "unit": "laws",
          "key": "v4:2026-11-01#1"
        },
        {
          "kind": "read",
          "text": "Read UNHCR: full committee sheet",
          "mins": 40,
          "unit": "unhcr",
          "key": "v4:2026-11-01#2"
        },
        {
          "kind": "read",
          "text": "Read Topic: psychosocial support for refugees and displaced persons",
          "mins": 35,
          "unit": "mhpss",
          "key": "v4:2026-11-01#3"
        },
        {
          "kind": "read",
          "text": "Read Topic: protection along migration routes",
          "mins": 28,
          "unit": "routes",
          "key": "v4:2026-11-01#4"
        },
        {
          "kind": "read",
          "text": "Read Interview: your pitch, NMUN rules and situations",
          "mins": 30,
          "unit": "situations",
          "key": "v4:2026-11-01#5"
        },
        {
          "kind": "write",
          "text": "Draft your personal answers: about you, why NMUN, why Mozambique, why GA1 and UNHCR, your weakness",
          "mins": 30,
          "unit": "situations",
          "key": "v4:2026-11-01#6"
        },
        {
          "kind": "voice",
          "text": "Voice quiz on today's reading",
          "mins": 20,
          "say": "Rapid-fire on UNHCR, psychosocial support and migration routes.",
          "key": "v4:2026-11-01#7"
        },
        {
          "kind": "read",
          "text": "Read International law essentials",
          "mins": 15,
          "unit": "intlaw",
          "key": "v4:2026-11-02#1"
        },
        {
          "kind": "read",
          "text": "Read UN vocabulary and documents",
          "mins": 4,
          "unit": "vocab",
          "key": "v4:2026-11-02#2"
        },
        {
          "kind": "read",
          "text": "Read Use of force and the laws of war",
          "mins": 10,
          "unit": "force",
          "key": "v4:2026-11-02#3"
        },
        {
          "kind": "read",
          "text": "Read The human rights system and the HRC",
          "mins": 8,
          "unit": "hr",
          "key": "v4:2026-11-02#4"
        },
        {
          "kind": "read",
          "text": "Read Responsibility to Protect (R2P)",
          "mins": 6,
          "unit": "r2p",
          "key": "v4:2026-11-02#5"
        },
        {
          "kind": "read",
          "text": "Read Peacekeeping and peacebuilding",
          "mins": 8,
          "unit": "peace",
          "key": "v4:2026-11-02#6"
        },
        {
          "kind": "read",
          "text": "Read Disarmament and non-proliferation",
          "mins": 5,
          "unit": "disarm",
          "key": "v4:2026-11-02#7"
        },
        {
          "kind": "read",
          "text": "Read SDGs and climate",
          "mins": 6,
          "unit": "dev",
          "key": "v4:2026-11-02#8"
        },
        {
          "kind": "read",
          "text": "Read Speeches and resolution writing",
          "mins": 8,
          "unit": "clauses",
          "key": "v4:2026-11-02#9"
        },
        {
          "kind": "voice",
          "text": "Voice quiz on today's reading",
          "mins": 20,
          "say": "Rapid-fire on international law, human rights, peacekeeping and disarmament.",
          "key": "v4:2026-11-02#10"
        }
      ]
    },
    {
      "date": "2026-11-01",
      "level": "least",
      "title": "Mock #2: 60 minutes",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 45,
          "href": "#cards/session/all",
          "when": "In class",
          "key": "v4:2026-11-03#0"
        },
        {
          "kind": "voice",
          "text": "Mock #2: 60 minutes",
          "mins": 65,
          "when": "After 8:30",
          "say": "Full mock, 60 minutes.",
          "key": "v4:2026-11-03#1"
        },
        {
          "kind": "write",
          "text": "Fix your 3 weakest answers from mock #2",
          "mins": 20,
          "when": "After 8:30",
          "key": "v4:2026-11-03#2"
        },
        {
          "kind": "read",
          "text": "Re-read the units behind your weakest answers",
          "mins": 30,
          "when": "After 8:30",
          "href": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit",
          "key": "v4:2026-11-03#3"
        }
      ]
    },
    {
      "date": "2026-11-02",
      "level": "some",
      "title": "Situational questions",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 45,
          "href": "#cards/session/all",
          "when": "In class",
          "key": "v4:2026-11-04#0"
        },
        {
          "kind": "voice",
          "text": "Voice quiz: NMUN situational questions",
          "mins": 20,
          "when": "Evening",
          "say": "Situational round.",
          "key": "v4:2026-11-04#1"
        }
      ]
    },
    {
      "date": "2026-11-03",
      "level": "most",
      "title": "Defending Mozambique's positions",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 45,
          "href": "#cards/session/all",
          "key": "v4:2026-11-05#0"
        },
        {
          "kind": "voice",
          "text": "Voice quiz: defend Mozambique's positions under pressure",
          "mins": 20,
          "say": "Follow-up ladder on my country's positions.",
          "key": "v4:2026-11-05#1"
        }
      ]
    },
    {
      "date": "2026-11-04",
      "level": "least",
      "title": "Mock #3: 90 minutes, tough",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 45,
          "href": "#cards/session/all",
          "key": "v4:2026-11-06#0",
          "when": "5:15–6:30"
        },
        {
          "kind": "voice",
          "text": "Mock #3: 90 minutes, tough panel",
          "mins": 95,
          "say": "Full mock, 90 minutes. Be tough.",
          "key": "v4:2026-11-06#1",
          "when": "After 8:30"
        },
        {
          "kind": "write",
          "text": "Redo the 3 weakest answers",
          "mins": 30,
          "key": "v4:2026-11-06#2",
          "when": "After 8:30"
        },
        {
          "kind": "read",
          "text": "Re-read the units behind your weakest answers",
          "mins": 30,
          "href": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit",
          "key": "v4:2026-11-06#3",
          "when": "After 8:30"
        }
      ]
    },
    {
      "date": "2026-11-05",
      "level": "least",
      "title": "Mock #4: 2-hour dress rehearsal",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 45,
          "href": "#cards/session/all",
          "key": "v4:2026-11-07#0",
          "when": "In class"
        },
        {
          "kind": "voice",
          "text": "Mock #4: 2-hour dress rehearsal (real interviews often run 1–2 hours)",
          "mins": 125,
          "say": "Full mock, 2 hours. Final dress rehearsal.",
          "key": "v4:2026-11-07#1",
          "when": "After 8:30"
        },
        {
          "kind": "write",
          "text": "Fix anything the last mock exposed",
          "mins": 20,
          "key": "v4:2026-11-07#2",
          "when": "After 8:30"
        }
      ]
    },
    {
      "date": "2026-11-06",
      "level": "most",
      "title": "Deep dives on both committees and all four topics",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 45,
          "href": "#cards/session/all",
          "key": "v5:2026-11-06#0"
        },
        {
          "kind": "voice",
          "text": "Deep dive: GA1 (mandate, bodies, both topics)",
          "mins": 30,
          "say": "Deep dive on my first committee.",
          "key": "v5:2026-11-06#1"
        },
        {
          "kind": "voice",
          "text": "Deep dive: UNHCR (mandate, ExCom, both topics)",
          "mins": 30,
          "say": "Deep dive on my second committee.",
          "key": "v5:2026-11-06#2"
        },
        {
          "kind": "voice",
          "text": "Follow-up ladder: private military companies",
          "mins": 15,
          "say": "Follow-up ladder on private military and security companies.",
          "key": "v5:2026-11-06#3"
        },
        {
          "kind": "voice",
          "text": "Follow-up ladder: autonomous weapons",
          "mins": 15,
          "say": "Follow-up ladder on lethal autonomous weapons.",
          "key": "v5:2026-11-06#4"
        },
        {
          "kind": "voice",
          "text": "Follow-up ladder: psychosocial support",
          "mins": 15,
          "say": "Follow-up ladder on psychosocial support for refugees.",
          "key": "v5:2026-11-06#5"
        },
        {
          "kind": "voice",
          "text": "Follow-up ladder: migration routes",
          "mins": 15,
          "say": "Follow-up ladder on protection along migration routes.",
          "key": "v5:2026-11-06#6"
        },
        {
          "kind": "read",
          "text": "Re-read the units behind your weakest answers so far",
          "mins": 45,
          "href": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit",
          "key": "v5:2026-11-06#7"
        },
        {
          "kind": "cards",
          "text": "Cram your delegation decks",
          "mins": 40,
          "href": "#cards/session/group:My%20delegation%3A%20Mozambique",
          "key": "v5:2026-11-06#8"
        }
      ]
    },
    {
      "date": "2026-11-07",
      "level": "most",
      "title": "Final polish",
      "tasks": [
        {
          "kind": "cards",
          "text": "Flashcards: everything due",
          "mins": 45,
          "href": "#cards/session/all",
          "key": "v5:2026-11-07#0"
        },
        {
          "kind": "voice",
          "text": "Rapid-fire on UN history and the principal organs",
          "mins": 20,
          "say": "Rapid-fire on UN history and the principal organs.",
          "key": "v5:2026-11-07#1"
        },
        {
          "kind": "voice",
          "text": "Situational round",
          "mins": 20,
          "say": "Situational round.",
          "key": "v5:2026-11-07#2"
        },
        {
          "kind": "voice",
          "text": "Explain it back: teach the coach your four topics",
          "mins": 30,
          "say": "Explain it back: I'll teach you my four topics.",
          "key": "v5:2026-11-07#3"
        },
        {
          "kind": "voice",
          "text": "Polish your pitch and personal answers",
          "mins": 20,
          "say": "Answer polish: tell us about yourself and why NMUN.",
          "key": "v5:2026-11-07#4"
        },
        {
          "kind": "cards",
          "text": "Cram all decks",
          "mins": 60,
          "href": "#cards/session/all",
          "key": "v5:2026-11-07#5"
        },
        {
          "kind": "read",
          "text": "Re-read the units behind any answer you still find hard",
          "mins": 30,
          "href": "https://docs.google.com/document/d/1p-mkQqUD9IqeHiZYBUCTP-XiItM0lBJLlkMHKHeB3hc/edit",
          "key": "v5:2026-11-07#6"
        },
        {
          "kind": "other",
          "text": "Stop by midnight and sleep",
          "mins": 0,
          "key": "v5:2026-11-07#7"
        }
      ]
    },
    {
      "date": "2026-11-08",
      "level": "interview",
      "title": "Interview day (free all day, interview 8:30 pm)",
      "tasks": [
        {
          "kind": "cards",
          "text": "Due flashcards only",
          "mins": 20,
          "when": "Morning",
          "href": "#cards/session/due:all",
          "key": "v4:2026-11-08#0"
        },
        {
          "kind": "read",
          "text": "Skim your delegation units in the Doc (Mozambique, GA1, UNHCR, four topics): headings and bold facts only",
          "mins": 45,
          "when": "Afternoon",
          "unit": "moz",
          "key": "v5:2026-11-08#skim"
        },
        {
          "kind": "voice",
          "text": "Voice warm-up",
          "mins": 20,
          "when": "Late afternoon",
          "say": "Rapid-fire on my four topics.",
          "key": "v4:2026-11-08#1"
        },
        {
          "kind": "other",
          "text": "Say your pitch out loud twice",
          "mins": 5,
          "when": "Late afternoon",
          "key": "v4:2026-11-08#2"
        },
        {
          "kind": "other",
          "text": "Rest: walk, shower, no new material after 6 pm",
          "mins": 0,
          "when": "6:00",
          "key": "v5:2026-11-08#rest"
        },
        {
          "kind": "other",
          "text": "Eat, then be at Nadia Younes Conference Room P131, HUSS by 8:15",
          "mins": 0,
          "when": "8:15",
          "key": "v4:2026-11-08#3"
        }
      ]
    }
  ]
};
