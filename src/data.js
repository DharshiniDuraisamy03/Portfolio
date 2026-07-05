import profileImg from './assets/profile.jpg'
import rhymeImg from './assets/rhyme_video_builder.jpg'
import builditImg from './assets/buildit.webp'
import medicImg from './assets/medic_1.jpg'
import syncteImg from './assets/synte.jpg'

const withBase = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '')

export const profile = {
  name: 'Dharshini Duraisamy',
  roles: ['Software Engineer', 'Full Stack Engineer', 'AI Engineer'],
  tagline: 'I build scalable full-stack applications and AI-powered SaaS platforms.',
  bio: 'Software Engineer with 3 years of experience designing and delivering scalable full-stack applications and AI-powered SaaS platforms. Expertise in TypeScript, JavaScript, React.js, Node.js, Express.js, Agentic AI, Large Language Models (OpenAI, Gemini, Anthropic), Retrieval-Augmented Generation (RAG), Vector Databases, and event-driven microservices. Experienced in developing production-ready AI products, distributed backend systems, cloud-native applications, and modern frontend architectures using industry-standard engineering practices.',
  email: 'dharshiniduraisamy2801@gmail.com',
  phone: '+91 63834 81417',
  website: 'https://dharshiniduraisamy.framer.website',
  resumeUrl: 'https://drive.google.com/uc?export=download&id=1RqNZlSM0yuF5oiDBx2DtaoIMxo70LM6Q',
  avatar: profileImg,
  socials: {
    linkedin: 'https://linkedin.com/in/dharshini-duraisamy-313768224',
    github: 'https://github.com/DharshiniDuraisamy03',
  },
}

export const skillGroups = [
  {
    category: 'Languages',
    icon: withBase('/assets/skills/languages.svg'),
    items: ['TypeScript', 'JavaScript (ES6+)', 'SQL', 'Java', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    icon: withBase('/assets/skills/frontend.svg'),
    items: ['React.js', 'Vite', 'TanStack Query', 'TanStack Router', 'Redux', 'Tailwind CSS', 'React Flow', 'Lexical', 'Storybook'],
  },
  {
    category: 'Backend',
    icon: withBase('/assets/skills/backend.svg'),
    items: ['Node.js', 'Express.js', 'REST APIs', 'Microservices', 'WebSockets', 'Swagger/OpenAPI'],
  },
  {
    category: 'AI & Data',
    icon: withBase('/assets/skills/ai-data.svg'),
    items: ['LLMs (Gemini, OpenAI, Claude)', 'Agentic AI', 'Prompt Engineering', 'RAG', 'Pinecone', 'ChromaDB', 'Langfuse', 'Semantic Search', 'Vector Embeddings'],
  },
  {
    category: 'Databases',
    icon: withBase('/assets/skills/databases.svg'),
    items: ['MySQL', 'Redis', 'Pinecone', 'ChromaDB'],
  },
  {
    category: 'Cloud & DevOps',
    icon: withBase('/assets/skills/cloud-devops.svg'),
    items: ['Docker', 'BullMQ', 'Git', 'GitHub Actions', 'TurboRepo', 'AWS', 'GCP', 'Firebase', 'Google Cloud Run'],
  },
  {
    category: 'Integrations & Platforms',
    icon: withBase('/assets/skills/integrations.svg'),
    items: ['Composio', 'CRM Systems', 'HubSpot'],
  },
  {
    category: 'Tools',
    icon: withBase('/assets/skills/tools.svg'),
    items: ['Puppeteer', 'BrightData', 'Cheerio', 'Turndown', 'FFmpeg', 'Google Cloud Storage', 'Postman', 'NewRelic Logging Library'],
  },
]

export const experience = [
  {
    company: 'Nagent AI',
    logo: withBase('/assets/logos/nagent.svg'),
    role: 'Software Engineer',
    period: '06/2025 — Present',
    subProjects: [
      {
        name: 'Prompt World — Agentic AI Platform',
        points: [
          'Spearhead the development of Prompt World, an Agentic AI platform for autonomous workflow orchestration and intelligent task automation.',
          'Architect Retrieval-Augmented Generation (RAG) pipelines using Gemini, OpenAI, and Anthropic models for context-aware AI responses.',
          'Engineer semantic search capabilities with ChromaDB and vector embeddings to improve contextual information retrieval.',
          'Design scalable event-driven backend services using Node.js, Express.js, MySQL, Redis, and BullMQ.',
          'Orchestrate asynchronous background processing pipelines for compute-intensive AI workflows.',
          'Modernize frontend architecture using React 18, Vite, TurboRepo, TanStack Router, and TanStack Query.',
          'Create visual workflow editors with React Flow and rich-text editing interfaces using Lexical.',
          'Integrate Langfuse observability for tracing LLM interactions, latency monitoring, and token usage analytics.',
        ],
      },
      {
        name: 'Convexa — AI Chatbot SaaS Platform',
        points: [
          'Deliver a production-grade multi-tenant AI chatbot SaaS platform with embeddable website widgets and customer-specific knowledge bases.',
          'Construct Retrieval-Augmented Generation (RAG) pipelines using OpenAI embeddings and Pinecone Vector Database.',
          'Establish automated knowledge ingestion pipelines supporting HTML, PDF, DOCX, and CSV content through Puppeteer, BrightData, Cheerio, and Turndown.',
          'Automate asynchronous scraping and embedding generation with BullMQ and Redis.',
          'Secure application access using JWT, OTP verification, API key management, Helmet, and Redis-backed rate limiting.',
          'Implement subscription billing and usage tracking through Dodo Payments.',
          'Integrate conversational voice capabilities using ElevenLabs Voice AI.',
          'Deploy containerized services with Docker, GitHub Actions, and Google Cloud Run.',
        ],
      },
    ],
  },
  {
    company: 'Palo Alto Networks',
    logo: withBase('/assets/logos/palo-alto-networks.svg'),
    role: 'Software Engineer',
    period: '07/2023 — 06/2025',
    points: [
      'Engineered enterprise-grade full-stack applications using React.js, Node.js, SQL, and REST APIs.',
      'Designed reusable frontend components and scalable backend services for enterprise security platforms.',
      'Optimized application performance through frontend enhancements and database query tuning.',
      'Implemented real-time communication features using WebSockets.',
      'Collaborated with cross-functional Agile teams using Git, Jenkins, and CI/CD pipelines.',
      'Contributed to feature design, code reviews, testing, deployment, and production support.',
    ],
  },
]

export const projects = [
  {
    name: 'Rhyme Video Builder',
    description: 'Full-stack AI application that generates personalized nursery rhyme videos using Gemini, with a resilient multi-provider TTS pipeline and server-side video rendering.',
    tech: ['React 19', 'Node.js', 'Express.js', 'Gemini API', 'Azure Cognitive Services', 'FFmpeg', 'GCS', 'Docker'],
    link: 'https://rhyme-app-201324446023.us-central1.run.app/',
    image: rhymeImg,
  },
  {
    name: 'Buildit',
    description: 'Responsive full-stack application for construction project management with secure backend APIs and user-friendly interfaces.',
    tech: ['Full Stack'],
    link: 'https://dharshiniduraisamy03.github.io/Buildit/home',
    image: builditImg,
  },
  {
    name: 'Medic',
    description: 'Frontend application for patient registration with client-side persistence and multi-tab synchronization.',
    tech: ['Frontend'],
    link: 'https://dharshiniduraisamy03.github.io/Medic/#/home',
    image: medicImg,
  },
  {
    name: 'Syncte',
    description: 'Full-stack employee management application featuring scalable backend services and responsive frontend components.',
    tech: ['Full Stack'],
    link: 'https://dharshiniduraisamy03.github.io/Sync/',
    image: syncteImg,
  },
]

export const education = [
  {
    school: 'PSNA College of Engineering and Technology',
    degree: 'Bachelor of Engineering, Computer Science and Engineering',
    period: '06/2019 — 06/2023',
    detail: 'CGPA: 8.45',
  },
]

export const certifications = [
  { name: 'Claude with the Anthropic API', issuer: 'Anthropic' },
  { name: 'Claude Code in Action', issuer: 'Anthropic' },
  { name: 'Introduction to Model Context Protocol (MCP)', issuer: 'Anthropic' },
  { name: 'Introduction to Agent Skills', issuer: 'Anthropic' },
  { name: 'Database with SQL', issuer: 'Oracle' },
  { name: 'Bootcamp on JavaScript & React JS', issuer: 'Google Developers' },
  { name: 'React JS', issuer: 'Internshala Trainings' },
  { name: 'JAVA Programming Course', issuer: 'Coursera' },
]
