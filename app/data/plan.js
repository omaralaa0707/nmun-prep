// Interview plan (interview Thursday 12 Nov 2026, 1:45 pm). Mozambique: GA1 + UNHCR. Being rebuilt; the old plan is in archive/plan-v5-nov8.js.
// kind: cards | read | voice | write | other. "when" is the time slot; "say" starts a Claude Project voice session.
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
      "label": "Interview 1:45 pm",
      "hours": "light"
    }
  },
  "rules": [],
  "days": []
};
