// Ported verbatim from reference/prototype. Keep [BRACKET] placeholders until Den fills them.
import type { Book, Cause, Language, Leg, Shift, TimelineYear, TypingLevel, TypingTopic } from "./types";

// Hero greeting cycler.
export const LANGS: Language[] = [
  {
    hi: "Hello!",
    name: "ENGLISH",
    level: "Native / bilingual · born and raised in NYC",
  },
  {
    hi: "¡Hola!",
    name: "ESPAÑOL",
    level: "Native / bilingual · 5 years of bilingual facilitation",
  },
  {
    hi: "Ciao!",
    name: "ITALIANO",
    level: "Elementary · currently learning",
  },
];

// 01 The Long Run: TCS NYC Marathon, Nov 7, 2027. Goal time 4:35 (275 min).
export const MARATHON_DATE_UTC = Date.UTC(2027, 10, 7, 12, 0, 0);
export const GOAL_MINUTES = 275;

export const LEGS: Leg[] = [
  {
    name: "Staten Island",
    abbr: "SI",
    miles: "MILES 0–2",
    len: 2,
    note: "The start on the Verrazzano Bridge. Hold back, stay patient, soak it in.",
    color: "wine",
  },
  {
    name: "Brooklyn",
    abbr: "BROOKLYN",
    miles: "MILES 2–13",
    len: 11,
    note: "The longest stretch and some of the loudest crowds. Settle into goal pace here.",
    color: "deep",
  },
  {
    name: "Queens",
    abbr: "QN",
    miles: "MILES 13–15",
    len: 2,
    note: "Halfway point, then the quiet climb over the Queensboro Bridge.",
    color: "wine",
  },
  {
    name: "Manhattan",
    abbr: "MANHATTAN",
    miles: "MILES 16–20",
    len: 4,
    note: "Coming off the bridge onto First Avenue: the famous wall of sound.",
    color: "deep",
  },
  {
    name: "The Bronx",
    abbr: "BX",
    miles: "MILES 20–21",
    len: 1,
    note: "Home turf. Mile 20 is where it gets hard, and it happens in my borough.",
    color: "cream",
  },
  {
    name: "Manhattan",
    abbr: "TO THE FINISH",
    miles: "MILES 21–26.2",
    len: 5.2,
    note: "Fifth Avenue, Central Park and the finish line. Every early morning run was for this.",
    color: "deep",
  },
];

// 02 Giving Back.
export const CAUSES: Cause[] = [
  {
    kicker: "RUNNING FOR A CAUSE",
    title: "Team for Kids",
    front: "Running my first TCS NYC Marathon with Team for Kids, fundraising for youth programs.",
    back: "[WHY YOU CHOSE TEAM FOR KIDS, IN YOUR WORDS]",
    bg: "deep",
  },
  {
    kicker: "COMMUNITY POP-UP",
    title: "Social Café Pop-Up No. 001",
    front: "Work & Brew’s first pop-up doubled as a fundraiser toward a $4K goal for Team for Kids.",
    back: "Community building is the part of product work I love most: getting real people in a real room, around a good cup.",
    bg: "cream",
  },
  {
    kicker: "CAMP · SUMMER 2025",
    title: "Steve's Camp at Horizon Farms",
    front:
      "Head Chef, Summer 2025, plus mentoring youth in outdoor leadership, resilience and community building.",
    back: "[A MOMENT FROM CAMP THAT STUCK WITH YOU]",
    bg: "wine",
  },
  {
    kicker: "COLLEGE ACCESS",
    title: "CARA Youth Leader",
    front: "Guided 30+ high school students through college applications and FAFSA, one-on-one.",
    back: "[WHY HELPING STUDENTS GET TO COLLEGE MATTERS TO YOU]",
    bg: "cream",
    dashed: true,
  },
];

// 03 Daily Rituals.
export const SHIFTS: Shift[] = [
  {
    id: "am",
    label: "OPENING SHIFT · AM",
    name: "OPENING",
    stamp: "READY FOR SERVICE",
    items: [
      {
        label: "Screen-free first hour",
        sub: "Phone stays in another room",
        time: "WAKE",
      },
      {
        label: "Audio briefing from Gwen",
        sub: "The AI assistant I built for my mornings",
        time: "AM",
      },
      {
        label: "Review my Top 3 must-dos",
        sub: "Set the night before",
        time: "AM",
      },
      {
        label: "Training run or Solidcore",
        sub: "Marathon plan, 6 days a week",
        time: "AM",
      },
      {
        label: "Café work session",
        sub: "Laptop, café con leche, deep work",
        time: "MID",
      },
    ],
  },
  {
    id: "pm",
    label: "CLOSING SHIFT · PM",
    name: "CLOSING",
    stamp: "KITCHEN CLOSED",
    items: [
      {
        label: "Hit 12k+ steps",
        sub: "Every day, no exceptions",
        time: "DAY",
      },
      {
        label: "Done-list review",
        sub: "Celebrate what shipped today",
        time: "PM",
      },
      {
        label: "Journal & brain dump",
        sub: "Everything out of my head, onto paper",
        time: "PM",
      },
      {
        label: "Set tomorrow’s Top 3",
        sub: "Three must-dos, nothing more",
        time: "PM",
      },
      {
        label: "Wind down",
        sub: "Focus mode on, jazz on, screens off",
        time: "LATE",
      },
    ],
  },
];

// 05 The Shelf.
export const BOOKS: Book[] = [
  {
    title: "Inspired",
    author: "Marty Cagan",
    spine: "INSPIRED",
    note: "[YOUR BIGGEST TAKEAWAY]",
    color: "cream",
    h: 190,
  },
  {
    title: "The Lean Product Playbook",
    author: "Dan Olsen",
    spine: "LEAN PRODUCT PLAYBOOK",
    note: "[YOUR BIGGEST TAKEAWAY]",
    color: "wine",
    h: 176,
  },
  {
    title: "Cracking the PM Interview",
    author: "Gayle Laakmann McDowell & Jackie Bavaro",
    spine: "CRACKING THE PM INTERVIEW",
    note: "[YOUR BIGGEST TAKEAWAY]",
    color: "cream",
    h: 200,
  },
  {
    title: "Design for How People Learn",
    author: "Julie Dirksen",
    spine: "DESIGN FOR HOW PEOPLE LEARN",
    note: "Five years of teaching workshops made this one personal. [YOUR TAKEAWAY]",
    color: "wine",
    h: 184,
  },
];

export const SERIES: string[] = [
  "Project Me",
  "Marathon Training",
  "Tech With Den",
  "Real Talk With Den",
  "Small Business Saturdays",
];

// ---------------------------------------------------------------- 2026-10 update
// Ported verbatim from the updated reference/prototype/About.dc.html.

// Hero: lanyard staff badge.
export const BADGE = {
  top: "STAFF · ALL ACCESS",
  no: "NO. 001",
  first: "Denisse",
  last: "Medina Flores",
  currentlyLabel: "CURRENTLY",
  currently: "Founder, Work & Brew",
  role: "Product & Project Manager",
  alsoLabel: "ALSO RUNNING",
  also: ["Seven Solace Co.", "DensDigitalDiary"],
  place: "BRONX · NYC",
  hint: "grab my badge ↗",
  aria: "Den's staff badge. Drag it or press Enter to give it a swing.",
};

export const OFF_SHIFT = "OFF SHIFT · NYC";
export const BIG_NAME = "Denisse Medina Flores";

// 00 Two timelines, one Den.
export const TIMELINE_COPY = {
  kicker: "00 · HOW I GOT HERE",
  title: "Two ",
  em: "timelines",
  after: ", one Den",
  intro:
    "Career on the left, life on the right, on the same years, so you can see how the kitchen, the classroom, the content and the café platform all connect.",
  careerHead: "CAREER ·  WORK, SCHOOL & VENTURES",
  lifeHead: "PERSONAL · COMMUNITY, CRAFT & MILES",
  filters: [
    { id: "both", label: "BOTH TIMELINES" },
    { id: "career", label: "CAREER" },
    { id: "personal", label: "PERSONAL" },
  ],
  careerTag: "CAREER",
  lifeTag: "PERSONAL",
  outro: "The next stop on the left could be your team. ↗",
};

export const TIMELINE: TimelineYear[] = [
  {
    year: "BEFORE TECH",
    career: [
      {
        when: "THE KITCHEN YEARS · [YEARS]",
        title: "Culinary arts & line cook",
        org: "Freelance line chef",
        body: "Where I learned speed, systems and calm under pressure. A busy line is a live product launch every night.",
        tags: ["OPS", "PRESSURE", "SYSTEMS"],
      },
    ],
    life: [
      {
        when: "ROOTS",
        title: "Born & raised in the Bronx",
        org: "NYC · bilingual EN / ES",
        body: "Grew up switching between English and Spanish, which is why I still build and teach for both.",
        tags: ["HOME", "EN / ES"],
      },
    ],
  },
  {
    year: "2019",
    career: [
      {
        when: "2019 – 2020",
        title: "Youth Leader",
        org: "College Access: Research and Action (CARA)",
        body: "Guided 30+ high school students through college applications and FAFSA, with templates and checklists so no deadline was missed.",
        tags: ["MENTORING", "PROCESS"],
      },
    ],
    life: [],
  },
  {
    year: "2020",
    career: [
      {
        when: "2020 – 2022",
        title: "Lehman College & Peer Educator",
        org: "CUNY Lehman College",
        body: "Coursework while running events, Canva promo, outreach campaigns and Excel tracking for the Career Exploration & Development Center.",
        tags: ["EVENTS", "OUTREACH"],
      },
    ],
    life: [],
  },
  {
    year: "2021",
    career: [
      {
        when: "2021 – 2022",
        title: "Development",
        org: "Museum of Jewish Heritage",
        body: "Kept donor databases accurate and secure, built reports for senior management and automated routine data entry.",
        tags: ["DATA", "REPORTING"],
      },
      {
        when: "SEPT 2021 – JUNE 2026",
        title: "Presenter",
        org: "Elevate Education",
        body: "Bilingual study-skills workshops across NYC schools, a multi-site schedule and feedback data used to refine every session.",
        tags: ["FACILITATION", "EN / ES"],
      },
    ],
    life: [
      {
        when: "[YEARS] · 5 YEARS",
        title: "Theta Phi Gamma",
        org: "Sorority sister",
        body: "Five years of sisterhood, events and showing up for each other. [ROLE / WHAT YOU LED]",
        tags: ["COMMUNITY"],
      },
    ],
  },
  {
    year: "2023",
    career: [],
    life: [
      {
        when: "[YEAR]",
        title: "Became a creator on Lemon8",
        org: "DensDigitalDiary",
        body: "Started posting and grew to 1.8M+ reach, which turned into UGC work for startups like Love8 and xTiles.",
        tags: ["CONTENT", "1.8M+ REACH"],
      },
    ],
  },
  {
    year: "2024",
    career: [
      {
        when: "2024 – 2025",
        title: "Coordinator of Religious Education",
        org: "Christ the King",
        body: "Financial operations for 300+ families, progress tracking for 300+ students across three programs, and a team of volunteers.",
        tags: ["OPS", "STAKEHOLDERS"],
      },
      {
        when: "[YEAR] · 2.5+ YEARS",
        title: "Social media manager & brand strategist",
        org: "Freelance · now DensDigitalDiary Agency",
        body: "Strategy and content for small brands and independent music talent.",
        tags: ["BRAND", "GROWTH"],
      },
    ],
    life: [],
  },
  {
    year: "2025",
    career: [
      {
        when: "MARCH 2025",
        title: "Founded Work & Brew",
        org: "Co-founder & product lead",
        body: "A platform for vetted, work-friendly independent NYC cafés. I lead a team of under ten scouts, designers and developers.",
        tags: ["0→1", "LEADERSHIP", "DISCOVERY"],
      },
      {
        when: "DECEMBER 2025",
        title: "Full-stack graduate",
        org: "BloomTech",
        body: "React, JavaScript, SQL and REST APIs, so I can talk to engineers in their language.",
        tags: ["REACT", "SQL"],
      },
    ],
    life: [
      {
        when: "SUMMER 2025",
        title: "Steve's Camp at Horizon Farms",
        org: "Head chef & mentor",
        body: "Cooked for camp and mentored youth in outdoor leadership, resilience and community building.",
        tags: ["KITCHEN", "MENTORING"],
      },
    ],
  },
  {
    year: "2026",
    career: [
      {
        when: "2026",
        title: "PM certifications",
        org: "UVA · Google · Atlassian",
        body: "Digital Product Management (UVA), Google AI Essentials, Jira Service Management and Google Analytics fundamentals.",
        tags: ["PM", "AI", "ANALYTICS"],
      },
      {
        when: "2026",
        title: "Building in public",
        org: "Seven Solace Co. · Runner’s Hub · this site",
        body: "A handmade charms shop getting ready to launch, tools for runners, and this portfolio, built with Claude Code and Cursor.",
        tags: ["SHIP", "AI-AUGMENTED"],
      },
    ],
    life: [
      {
        when: "2026",
        title: "Social Café Pop-Up No. 001",
        org: "Fundraiser for Team for Kids",
        body: "Work & Brew’s first pop-up raised money toward a $4K goal for youth running programs.",
        tags: ["COMMUNITY", "EVENTS"],
      },
      {
        when: "2026",
        title: "Imparando l’italiano",
        org: "Third language",
        body: "Learning Italian, one café at a time.",
        tags: ["LANGUAGES"],
      },
      {
        when: "Q4 2026",
        title: "Back on Lemon8",
        org: "Content comeback",
        body: "Rebuilding my content portfolio by featuring startup apps I actually use.",
        tags: ["CONTENT"],
      },
    ],
  },
  {
    year: "2027",
    career: [
      {
        when: "NEXT",
        title: "APM / PM on your team",
        org: "NYC · open to it",
        body: "Bringing founder instincts, a builder’s toolkit and a lot of user empathy to a product team.",
        tags: ["APM", "PM"],
      },
    ],
    life: [
      {
        when: "NOV 7, 2027",
        title: "TCS NYC Marathon",
        org: "Running with Team for Kids",
        body: "Officially deferred from 2026. All five boroughs, 26.2 miles, mile 20 in the Bronx.",
        tags: ["26.2", "FIVE BOROUGHS"],
      },
    ],
  },
];

// 04 Typing test.
export const TYPING_COPY = {
  kicker: "04 · FUN FACT",
  title: "I type 108 WPM. ",
  em: "Your turn.",
  intro:
    "My average is 108 words per minute and my record is 158. Pick a topic from my world and a level, then type. The timer starts on your first key.",
  pickTopic: "1 · PICK A TOPIC",
  pickLevel: "2 · PICK A LEVEL",
  typeHere: "3 · TYPE HERE: ",
  yourTime: "YOUR TIME",
  yourWpm: "YOUR WPM",
  accuracy: "ACCURACY",
  densTime: "DEN'S TIME",
  newPhrase: "NEW PHRASE ↻",
  retry: "RETRY SAME",
  noPaste: "Nice try. No pasting at this café.",
  verdicts: {
    record: "BEYOND DEN’S RECORD. HIRED.",
    beatDen: "YOU BEAT DEN!",
    cleared: "LEVEL CLEARED · ",
    close: "SO CLOSE. GOAL IS ",
    again: ". AGAIN?",
  },
};

/** Den's average and record, in WPM. */
export const DEN_WPM = 108;
export const DEN_RECORD_WPM = 158;

export const TYPING_TOPICS: TypingTopic[] = [
  {
    id: "mix",
    label: "SURPRISE ME",
  },
  {
    id: "coffee",
    label: "CAFÉS & COFFEE",
    phrases: [
      "order a cafe con leche",
      "find a seat with an outlet",
      "the wifi password is on the menu",
      "laptops are welcome until noon",
      "one oat milk latte to go",
      "matcha first then emails",
      "save me a table by the window",
      "cold brew makes deep work easier",
      "every good idea starts with coffee",
      "the best cafes are a little hidden",
    ],
    spice: ["2 lattes & 1 matcha: $14.50", "Table #7 has 3 outlets!", "Open 7am-7pm (Mon-Fri)"],
  },
  {
    id: "product",
    label: "PRODUCT & TECH",
    phrases: [
      "talk to users before you build",
      "ship the smallest useful version",
      "write the problem down first",
      "the roadmap is a guess not a promise",
      "measure what matters",
      "say no to most good ideas",
      "the user is not always you",
      "test the riskiest assumption first",
      "a clear spec saves a long meeting",
      "push the code and open a pull request",
    ],
    spice: ["P0 bugs first; P2 can wait.", "v1.0 ships Friday @ 9am!", 'const order = { size: "L" };'],
  },
  {
    id: "running",
    label: "RUNNING",
    phrases: [
      "easy miles build the base",
      "slow down on the hills",
      "drink water before you feel thirsty",
      "mile twenty is in the Bronx",
      "rest days count as training",
      "lace up and get out the door",
      "the long run is on Sunday",
      "run your own race",
      "every finish line starts with one step",
      "cheer for the runners behind you",
    ],
    spice: ["26.2 miles = 42.2 km!", "Goal pace: 9:30/mile?", "5 boroughs, 1 finish line."],
  },
  {
    id: "kitchen",
    label: "THE KITCHEN",
    phrases: [
      "mise en place before service",
      "taste as you go",
      "salt the pasta water",
      "keep your station clean",
      "behind you with a hot pan",
      "yes chef heard chef",
      "low and slow makes the best sauce",
      "sharp knives are safer knives",
      "plate it like you mean it",
      "the line moves fast on Friday nights",
    ],
    spice: ["Bake at 425F for 12-15 min.", "2 cups flour + 1 tsp salt", "86 the salmon @ table 4!"],
  },
  {
    id: "content",
    label: "CONTENT",
    phrases: [
      "post the draft not the perfect one",
      "hook them in three seconds",
      "batch film on Sunday",
      "reply to every comment",
      "show the process not just the result",
      "consistency beats going viral",
      "save this for later",
      "plan the month in Notion",
      "good lighting fixes everything",
      "tell the story behind it",
    ],
    spice: ["Post at 6:30pm (EST)!", "#ProjectMe: day 1/84", "3 hooks, 2 takes & 1 post."],
  },
];

export const TYPING_LEVELS: TypingLevel[] = [
  {
    id: "easy",
    label: "EASY",
    goal: 40,
    words: 12,
    spice: 0,
    note: "warm-up lap",
  },
  {
    id: "hard",
    label: "HARD",
    goal: 80,
    words: 20,
    spice: 0,
    note: "caps & periods",
  },
  {
    id: "extra",
    label: "EXTRA HARD",
    goal: 108,
    words: 28,
    spice: 1,
    note: "Den's level",
  },
  {
    id: "extreme",
    label: "EXTREME",
    goal: 158,
    words: 38,
    spice: 3,
    note: "beyond Den's record",
  },
];
