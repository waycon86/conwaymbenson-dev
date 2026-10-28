export const featuredProjects = [
  {
    id: 'student-on-the-go', title: 'Student on the Go', category: 'Student planning', status: 'Live app', visual: 'student',
    image: { src: '/projects/student-on-the-go.webp', alt: 'Student on the Go campus artwork with its diploma mascot, a calendar phone, and the words Your syllabus. Your campus. Your plan.', width: 1200, height: 800, kind: 'PROJECT ARTWORK', caption: 'The Student on the Go campus mascot and app branding.' },
    subtitle: 'A deadline-first planner for a full student life.',
    shortDescription: 'Study plans that fit around real commitments.',
    description: 'Built for students balancing classes, work, and everything in between. Student on the Go works backward from assignment deadlines to find study time around fixed commitments and makes it clear when the work will not fit.',
    highlights: [
      'Study sessions that avoid classes, work shifts, and other protected time.',
      'Syllabus text and PDF import with editable assignments and confirmation.',
      'Shared calendar, assignment milestones, and missed-session rescheduling.',
      'College themes, campus building search, and walking directions handoff.',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Leaflet', 'PDF.js', 'Render'],
    links: [
      { label: 'Try the app', href: 'https://student-on-the-go.onrender.com/', primary: true },
      { label: 'View code', href: 'https://github.com/waycon86/student-on-the-go' },
      { label: 'Watch demo', href: 'https://www.loom.com/share/8b7e3bd2341540ea902f238c497ff12f' },
    ],
    note: 'No account required. Plans are saved in your current browser; cloud sync is not included. Campus building coverage varies.',
    engineering: [
      { title: 'Scheduling logic.', text: 'Uses study-day preferences, available hours, session lengths, and deadline buffers while protecting fixed commitments. Missed sessions can be replanned.' },
      { title: 'Import workflow.', text: 'Extracted assignments can be edited and reviewed before import, with duplicate prevention. Calendars combine sessions across saved assignments.' },
      { title: 'Mapping.', text: 'Leaflet displays verified building markers where available, with official campus map links and an external Google Maps walking-directions handoff.' },
    ],
  },
  {
    id: 'waycon-daily', title: 'Waycon Daily', category: 'AI & personal planning', status: 'Active development', visual: 'waycon',
    image: { src: '/projects/waycon-daily.webp', alt: 'Official Waycon Daily blue and cyan logo with the tagline Plan. Focus. Achieve.', width: 1400, height: 467, kind: 'OFFICIAL BRANDING', caption: 'Waycon Daily — Plan. Focus. Achieve.', fit: 'logo-image' },
    subtitle: 'A personal assistant with a review step built in.',
    shortDescription: 'Tasks, goals, and AI-assisted daily planning.',
    description: 'A Django application bringing daily tasks, longer-term goals, check-ins, and planning together. I am building AI assistance around structured drafts and clear confirmation, so people can review what will change before it happens.',
    highlights: [
      'Task dashboards, priorities, goals, and daily wellness check-ins.',
      'Natural-language requests turned into validated, editable task drafts.',
      'Planning tools for missed tasks, task moves, and goal breakdowns.',
      'Calendar connection status and conflict checks against saved events.',
    ],
    stack: ['Python', 'Django', 'PostgreSQL', 'OpenAI API', 'JSON Schema', 'Celery', 'Docker'],
    links: [{ label: 'Visit Waycon Daily', href: 'https://waycondaily.com/', primary: true }],
    note: 'Sign-in required. An ongoing personal project with a private source repository; features continue to evolve.',
    engineering: [
      { title: 'AI with boundaries.', text: 'OpenAI Responses API output is checked against a JSON Schema and validated server-side before it reaches a task form. Saving requires user confirmation.' },
      { title: 'Reliable changes.', text: 'Planning proposals enforce user ownership, expire, and are claimed once on confirmation to prevent repeated writes. Conflict checks use the last synced calendar data.' },
      { title: 'Testing and deployment.', text: 'Django tests cover malformed AI output, provider failures, ownership, and duplicate submissions. The Render configuration includes Docker services, PostgreSQL, and Celery workers.' },
    ],
  },
  {
    id: 'training-hub', title: 'Training Hub / AppBar', category: 'Hospitality operations', status: 'Deployed project', visual: 'training',
    image: { src: '/projects/training-hub.webp', alt: 'Training Hub employee sign-in screen with the Bar, Kitchen, and Service navigation and dark gold interface.', width: 1200, height: 824, kind: 'APP SCREENSHOT', caption: 'The live Training Hub employee sign-in screen.', fit: 'screen-image' },
    subtitle: 'Built around the realities of a restaurant shift.',
    shortDescription: 'Employee training and operations in one platform.',
    description: 'A full-stack hospitality platform shaped by my experience working in restaurants. It connects employee training, menus, quizzes, scheduling, and manager workflows in a mobile-friendly application.',
    highlights: [
      'Employee accounts, profiles, and manager administration.',
      'Food, cocktail, wine, beer, and service training with quizzes.',
      'PDF ingestion for training content, plus pre-shift read tracking.',
      'Schedules, time-off workflows, messaging, and booking forecasts.',
    ],
    stack: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'Render', 'PWA', 'Capacitor'],
    links: [{ label: 'Open project', href: 'https://properbar.onrender.com/', primary: true }],
    note: 'Employee platform with sign-in. Source repository is private.',
    engineering: [
      { title: 'Content workflows.', text: 'Admin upload and PDF parsing turn training documents into structured content and quiz material, supported by database-backed employee and manager workflows.' },
      { title: 'Operations.', text: 'Employee imports, schedules, availability, pre-shift acknowledgements, and booking forecasts connect training with day-to-day work.' },
      { title: 'Mobile packaging.', text: 'PWA manifests, icons, and service-worker support accompany Capacitor packaging work for Android and iOS, including mobile layout and safe-area adjustments.' },
    ],
  },
]

export const foundationProjects = [
  {
    title: 'GoalTracker', category: 'Coursework',
    image: { src: '/projects/goaltracker.webp', alt: 'GoalTracker dashboard showing daily habits, monthly targets, yearly milestones, and progress navigation.', width: 1100, height: 755 },
    description: 'My CS50 final project: daily, monthly, and yearly goal management, a Python-generated calendar, and Chart.js statistics. SQLite stores completion history for streaks and monthly totals; goal lists are in memory in this version.',
    stack: ['Python', 'Flask', 'Jinja', 'SQLite', 'Chart.js'],
    links: [
      { label: 'View code', href: 'https://github.com/waycon86/goal_tracker' },
      { label: 'Watch demo', href: 'https://www.loom.com/share/d15ecb3758c5427198052268ad08a180' },
    ],
  },
  {
    title: 'Little Lemon', category: 'Coursework',
    image: { src: '/projects/little-lemon.webp', alt: 'Little Lemon restaurant website with its lemon logo, green navigation, dining-room banner, and booking button.', width: 1200, height: 455 },
    description: 'Projects from the Meta Back-End Developer curriculum, including a Django restaurant website with database-driven menus and booking pages, plus REST API coursework covering menus, orders, permissions, filtering, and pagination.',
    stack: ['Python', 'Django', 'Django REST Framework', 'SQL'],
    links: [
      { label: 'Website code', href: 'https://github.com/waycon86/django-little_lemon-backend_certification' },
      { label: 'API code', href: 'https://github.com/waycon86/littlelemon-API' },
    ],
  },
  {
    title: 'This portfolio', category: 'Portfolio',
    image: { src: '/projects/portfolio.webp', alt: 'Conway Benson portfolio homepage with the Practical software. Built from real life. headline and featured project list.', width: 1100, height: 756 },
    description: 'A React and Vite site bringing my applications, technical background, and resume together. Built with responsive layouts, keyboard-accessible navigation, project details, and a GitHub-to-Vercel deployment workflow.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS', 'Vercel'],
    links: [{ label: 'View code', href: 'https://github.com/waycon86/conwaymbenson-dev' }],
  },
]

export const skillGroups = [
  { number: '01', title: 'Backend & data', context: 'Database-backed applications and the workflows behind them.', skills: ['Python', 'Django', 'Django REST Framework', 'Flask', 'PostgreSQL', 'SQLite', 'REST APIs'] },
  { number: '02', title: 'Frontend & experience', context: 'Interfaces for planning, learning, and getting work done.', skills: ['React', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Responsive design', 'Leaflet', 'PDF.js'] },
  { number: '03', title: 'AI & reliability', context: 'Structured output, validation, and review before a change.', skills: ['OpenAI Responses API', 'JSON Schema', 'Server-side validation', 'Django testing', 'User ownership checks'] },
  { number: '04', title: 'Shipping & tools', context: 'Deploying, debugging, and adapting applications for mobile.', skills: ['Git & GitHub', 'Linux', 'Render', 'Vercel', 'Docker', 'Celery', 'PWA & Capacitor'] },
]
