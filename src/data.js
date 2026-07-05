/* ─────────────────────────────────────────────────────────────────────────
   Portfolio content — SINGLE SOURCE OF TRUTH.
   Everything you see on the page is driven from this file. To change copy,
   add a project, a job, a skill group, or a nav item, edit the arrays below —
   no JSX changes needed. Add/remove array items to add/remove cards & rows.
   ───────────────────────────────────────────────────────────────────────── */
export const PORTFOLIO = {
  identity: {
    name: 'Fahad Shaikh',
    role: 'Full-Stack Engineer',
    location: 'Mumbai, India',
    available: true,
    tagline: 'I build scalable web apps, AI-driven tools, and robust data pipelines that streamline how businesses work.',
    email: 'skfahadco@gmail.com',
    phone: '+91 84248 19943',
    resume: '/Resume.pdf',
    links: [
      { label: 'Email', href: 'mailto:skfahadco@gmail.com', kind: 'email' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/fahad-shaikh-951a25166', kind: 'linkedin' },
    ],
  },

  stats: [
    { value: '6+', label: 'Years shipping' },
    { value: '5', label: 'Companies' },
    { value: '3', label: 'Multi-tenant SaaS built' },
    { value: '1', label: 'Excellence award' },
  ],

  // Headline case studies — the work worth leading with.
  projects: [
    {
      id: 'email-platform',
      name: 'Email Marketing Platform',
      context: 'Independent consulting',
      year: '2026',
      summary: 'A production-grade, multi-tenant email marketing SaaS built from scratch — campaign management, contact segmentation, and sequence automation.',
      highlights: [
        'Amazon SES with SNS webhook handlers for bounce, complaint & delivery events (signed-message validation).',
        'Redis-backed queue with a Laravel scheduler + worker containers for scheduled dispatch and retry logic.',
        'Rich WYSIWYG template editor with merge tags, image uploads and responsive preview.',
        'Dockerized full stack + GitHub Actions CI/CD publishing to Oracle Cloud (OCI) Container Registry.',
      ],
      stack: ['Laravel 12', 'React 19', 'TypeScript', 'PostgreSQL', 'Redis', 'Amazon SES', 'Docker', 'Playwright'],
      accent: 'acid',
    },
    {
      id: 'k12-stem',
      name: 'K-12 STEM Learning Platform',
      context: 'LearningMate · AccelerateLearning',
      year: '2022–25',
      summary: 'Backend microservices and an AI support layer for a K-12 STEM platform serving classrooms at scale.',
      highlights: [
        'PHP/Symfony microservices over PostgreSQL exposing strongly-typed gRPC APIs.',
        'Science chatbot using RAG + LangChain + OpenSearch with DynamoDB-backed conversation memory.',
        'ChatGPT-assisted academic support with content-moderation safeguards for age-appropriate interactions.',
        'End-to-end AWS analytics pipeline: S3 data lake → Glue → dbt on Athena → QuickSight dashboards.',
      ],
      stack: ['PHP', 'Symfony', 'gRPC', 'LangChain', 'OpenSearch', 'AWS Glue', 'Athena', 'QuickSight'],
      accent: 'flare',
    },
    {
      id: 'secure-lms',
      name: 'Secure Video LMS',
      context: 'Seeken Enterprise',
      year: '2021–22',
      summary: 'A production LMS with globally-delivered, DRM-style protected video and flexible monetization.',
      highlights: [
        'Secure video streaming with HLS/AES encryption delivered via AWS CloudFront for low-latency, protected playback.',
        'Multi-gateway payments (Razorpay, Stripe, Paytm) and social authentication for frictionless onboarding.',
        'Multi-tenant architecture with a built-in affiliate/referral system driving user growth.',
      ],
      stack: ['Laravel', 'React', 'Next.js', 'MySQL', 'HLS/AES', 'CloudFront'],
      accent: 'acid',
    },
  ],

  // Full career timeline.
  experience: [
    {
      company: 'Independent Software Consultant',
      role: 'Full-Stack Engineer',
      period: 'Nov 2025 — Jun 2026',
      location: 'Remote',
      current: true,
      points: [
        'Architected and shipped a multi-tenant email marketing SaaS end to end (Laravel 12, React 19, TypeScript, PostgreSQL).',
        'Built Redis-backed queue infrastructure, containerized the stack with Docker Compose, and automated deploys via GitHub Actions → OCI.',
      ],
      stack: ['Laravel', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    },
    {
      company: 'LearningMate Solutions',
      role: 'Senior Software Engineer',
      period: 'Dec 2022 — Nov 2025',
      location: 'Mumbai, India',
      points: [
        'Built PHP/Symfony microservices with gRPC APIs for a K-12 STEM platform, plus a RAG/LangChain science chatbot.',
        'Architected an end-to-end AWS analytics pipeline (S3 → Glue → dbt/Athena → QuickSight) for cross-team reporting.',
      ],
      stack: ['PHP', 'Symfony', 'gRPC', 'LangChain', 'AWS'],
      award: 'Individual Excellence Award',
    },
    {
      company: 'Seeken Enterprise',
      role: 'Software Engineer',
      period: 'Jan 2021 — Dec 2022',
      location: 'Mumbai, India',
      points: [
        'Built a production LMS (Laravel, React, Next.js, MySQL) with HLS/AES-encrypted video over CloudFront.',
        'Integrated multi-gateway payments and a multi-tenant affiliate/referral system.',
      ],
      stack: ['Laravel', 'Next.js', 'MySQL', 'CloudFront'],
    },
    {
      company: 'DustValue',
      role: 'Web Developer',
      period: 'Dec 2019 — Jan 2021',
      location: 'Mumbai, India',
      points: [
        'Engineered a rebate-calculation tool for sales-incentive forecasting and an automated ticket system for Dell support teams.',
        'Designed a self-service HR platform with payroll and leave modules.',
      ],
      stack: ['PHP', 'MySQL', 'jQuery'],
    },
    {
      company: 'Gratitude India',
      role: 'Web Developer',
      period: 'Mar 2019 — Dec 2019',
      location: 'Mumbai, India',
      points: [
        'Automated candidate tracking and interview reminders with a custom web portal, cutting manual errors.',
      ],
      stack: ['PHP', 'MySQL'],
    },
  ],

  // Skills grouped by concern.
  skills: [
    { group: 'Backend', items: ['Laravel', 'Symfony', 'Flask', 'REST', 'GraphQL', 'gRPC'] },
    { group: 'Frontend', items: ['React', 'Next.js', 'Redux', 'TypeScript', 'Material UI', 'Bootstrap'] },
    { group: 'Languages', items: ['JavaScript', 'PHP', 'Python', 'HTML', 'CSS'] },
    { group: 'Data', items: ['PostgreSQL', 'MySQL', 'OpenSearch', 'DynamoDB', 'Firestore', 'Redis'] },
    { group: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Pulumi', 'Firebase', 'GitHub Actions', 'Supervisor'] },
    { group: 'AI', items: ['LangChain', 'RAG', 'OpenAI', 'GitHub Copilot'] },
    { group: 'Media & Security', items: ['FFmpeg', 'AES', 'HLS', 'CloudFront'] },
    { group: 'Payments', items: ['Razorpay', 'Stripe', 'Paytm'] },
  ],

  // Marquee tech strip (expressive banner).
  marquee: ['Laravel', 'React', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker', 'gRPC', 'LangChain', 'Redis', 'Next.js', 'Symfony', 'Python'],

  education: [
    { school: 'Kalsekar Technical Campus', detail: 'B.E. Electrical Engineering', period: '2015 — 2018' },
    { school: 'M.H. Saboo Siddik Polytechnic', detail: 'Diploma, Electrical Engineering', period: '2011 — 2014' },
  ],

  // Section nav order — reorder/remove to change the nav bar links + scroll-spy.
  nav: [
    { id: 'top', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
};

/* Shared smooth-scroll helper — used by Nav, Hero and Footer so sections stay
   decoupled (no prop drilling). Scroll to a section by its DOM id. */
export const scrollToSection = (id) => {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 56;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
