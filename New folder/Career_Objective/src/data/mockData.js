
export const skillsList = [
  "JavaScript",
  "Python",
  "Java",
  "SQL",
  "React",
  "Node.js",
  "Machine Learning",
  "Data Analysis",
  "UI/UX Design",
  "Communication",
  "Problem Solving",
  "Cloud Computing",
  "Cybersecurity",
  "Mobile Development",
  "DevOps",
  "Statistics",
];

export const interestsList = [
  "Web Development",
  "AI & ML",
  "Data Science",
  "Cybersecurity",
  "Game Development",
  "Mobile Apps",
  "Cloud & DevOps",
  "Product Design",
  "Robotics",
  "Finance Tech",
];

export const assessmentQuestions = [
  {
    id: 1,
    question: "Which activity do you enjoy most?",
    options: [
      "Building apps & websites",
      "Analyzing data & finding patterns",
      "Designing user interfaces",
      "Securing systems & networks",
    ],
  },
  {
    id: 2,
    question: "How do you prefer to solve problems?",
    options: [
      "Writing logical code",
      "Using statistical models",
      "Sketching visual mockups",
      "Investigating root causes",
    ],
  },
  {
    id: 3,
    question: "Which subject interests you the most?",
    options: [
      "Programming",
      "Mathematics & Statistics",
      "Art & Psychology",
      "Networking & Systems",
    ],
  },
  {
    id: 4,
    question: "What kind of work environment do you prefer?",
    options: [
      "Collaborative engineering team",
      "Research-focused lab",
      "Creative studio",
      "Operations / SOC team",
    ],
  },
  {
    id: 5,
    question: "Pick a project you'd love to build:",
    options: [
      "A social media app",
      "A fraud-detection model",
      "A redesigned banking app",
      "A penetration testing tool",
    ],
  },
  {
    id: 6,
    question: "How important is creativity in your work?",
    options: [
      "Somewhat important",
      "Less important",
      "Extremely important",
      "Moderately important",
    ],
  },
];

export const careers = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    description:
      "Build and maintain scalable software applications used by millions.",
    match: 92,
    overview:
      "Software Engineers design, develop, test, and maintain applications and systems across web, mobile, and backend platforms.",
    requiredSkills: [
      "JavaScript",
      "Python",
      "Data Structures",
      "System Design",
      "Git",
    ],
    roadmap: [
      {
        title: "Programming Fundamentals",
        desc: "Master one language deeply (Python or JS) and core CS concepts.",
      },
      {
        title: "Data Structures & Algorithms",
        desc: "Practice problem-solving on LeetCode / HackerRank.",
      },
      {
        title: "Build Real Projects",
        desc: "Ship 3-5 portfolio projects with frontend + backend.",
      },
      {
        title: "Version Control & Collaboration",
        desc: "Learn Git, GitHub workflows, and code reviews.",
      },
      {
        title: "System Design",
        desc: "Understand scalability, databases, caching, and APIs.",
      },
    ],
    salary: "₹6 – ₹25 LPA",
    futureScope:
      "Strong demand across industries; opens paths to architect, tech lead, and CTO roles.",
    resources: [
      "freeCodeCamp",
      "The Odin Project",
      "CS50 by Harvard",
      "Cracking the Coding Interview",
    ],
  },

  {
    id: "data-scientist",
    title: "Data Scientist",
    description:
      "Turn raw data into actionable insights using statistics and machine learning.",
    match: 88,
    overview:
      "Data Scientists analyze large datasets, build predictive models, and translate findings into business impact.",
    requiredSkills: [
      "Python",
      "SQL",
      "Statistics",
      "Machine Learning",
      "Data Visualization",
    ],
    roadmap: [
      {
        title: "Statistics & Probability",
        desc: "Build a strong math foundation.",
      },
      {
        title: "Python for Data",
        desc: "NumPy, Pandas, Matplotlib.",
      },
      {
        title: "Machine Learning",
        desc: "Scikit-learn, regression, classification, clustering.",
      },
      {
        title: "Deep Learning",
        desc: "TensorFlow / PyTorch fundamentals.",
      },
      {
        title: "End-to-End Projects",
        desc: "Kaggle competitions and case studies.",
      },
    ],
    salary: "₹8 – ₹30 LPA",
    futureScope:
      "Booming field with applications in every industry — healthcare, finance, retail, AI.",
    resources: [
      "Andrew Ng ML Course",
      "Kaggle Learn",
      "Fast.ai",
      "Hands-On ML Book",
    ],
  },

  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    description:
      "Design intuitive, beautiful interfaces that users love to interact with.",
    match: 81,
    overview:
      "UI/UX Designers research users, prototype experiences, and craft visual interfaces for digital products.",
    requiredSkills: [
      "Figma",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
    ],
    roadmap: [
      {
        title: "Design Principles",
        desc: "Color, typography, hierarchy, gestalt.",
      },
      {
        title: "UX Research",
        desc: "Interviews, personas, journey maps.",
      },
      {
        title: "Tool Mastery",
        desc: "Figma + Auto Layout, components, variants.",
      },
      {
        title: "Prototyping",
        desc: "Interactive flows and usability testing.",
      },
      {
        title: "Portfolio",
        desc: "3-4 case studies with measurable outcomes.",
      },
    ],
    salary: "₹5 – ₹20 LPA",
    futureScope:
      "Every digital product needs designers — strong growth in product, fintech, and SaaS.",
    resources: [
      "Refactoring UI",
      "Don't Make Me Think",
      "Nielsen Norman Group",
      "Figma Community",
    ],
  },

  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    description:
      "Protect systems, networks, and data from digital threats and attacks.",
    match: 76,
    overview:
      "Cybersecurity Analysts monitor, detect, and respond to security threats while hardening organizational defenses.",
    requiredSkills: [
      "Networking",
      "Linux",
      "Security Tools",
      "Cryptography",
      "Incident Response",
    ],
    roadmap: [
      {
        title: "Networking Basics",
        desc: "TCP/IP, DNS, HTTP, firewalls.",
      },
      {
        title: "Operating Systems",
        desc: "Linux command line, Windows internals.",
      },
      {
        title: "Security Fundamentals",
        desc: "CIA triad, OWASP Top 10, threat modeling.",
      },
      {
        title: "Hands-On Labs",
        desc: "TryHackMe, HackTheBox, CTFs.",
      },
      {
        title: "Certifications",
        desc: "CompTIA Security+, CEH, OSCP.",
      },
    ],
    salary: "₹6 – ₹22 LPA",
    futureScope:
      "Acute global talent shortage — high job security and growing demand.",
    resources: [
      "TryHackMe",
      "HackTheBox",
      "Cybrary",
      "SANS Cyber Aces",
    ],
  },

  {
    id: "cloud",
    title: "Cloud Engineer",
    description:
      "Architect and operate scalable cloud infrastructure on AWS, Azure, or GCP.",
    match: 72,
    overview:
      "Cloud Engineers design, deploy, and manage cloud-native systems, automation, and infrastructure as code.",
    requiredSkills: [
      "AWS/Azure/GCP",
      "Linux",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    roadmap: [
      {
        title: "Cloud Fundamentals",
        desc: "Pick one provider — start with AWS.",
      },
      {
        title: "Containers",
        desc: "Docker, image lifecycle, registries.",
      },
      {
        title: "Orchestration",
        desc: "Kubernetes basics, deployments, services.",
      },
      {
        title: "Infrastructure as Code",
        desc: "Terraform, CloudFormation.",
      },
      {
        title: "CI/CD",
        desc: "GitHub Actions, GitLab CI, observability.",
      },
    ],
    salary: "₹7 – ₹28 LPA",
    futureScope:
      "Cloud adoption is accelerating — one of the highest-paid IT specializations.",
    resources: [
      "AWS Skill Builder",
      "A Cloud Guru",
      "KodeKloud",
      "Kubernetes Docs",
    ],
  },
];

export const projectIdeas = {
  Beginner: [
    {
      title: "Portfolio Website",
      desc: "Build your personal portfolio with HTML/CSS/JS.",
      career: "Software Engineer",
    },
    {
      title: "Calculator App",
      desc: "A responsive calculator with theme toggle.",
      career: "Software Engineer",
    },
    {
      title: "Iris Dataset Analysis",
      desc: "Explore and visualize the classic Iris dataset.",
      career: "Data Scientist",
    },
    {
      title: "Mobile App UI Kit",
      desc: "Design a 6-screen mobile UI kit in Figma.",
      career: "UI/UX Designer",
    },
  ],

  Intermediate: [
    {
      title: "Full-Stack Blog Platform",
      desc: "Auth, CRUD posts, comments, and tags.",
      career: "Software Engineer",
    },
    {
      title: "Movie Recommendation System",
      desc: "Collaborative filtering using Python.",
      career: "Data Scientist",
    },
    {
      title: "Banking App Redesign",
      desc: "Full UX case study with user research.",
      career: "UI/UX Designer",
    },
    {
      title: "Web Vulnerability Scanner",
      desc: "Scan websites for common OWASP issues.",
      career: "Cybersecurity Analyst",
    },
  ],

  Advanced: [
    {
      title: "Real-time Chat with WebSockets",
      desc: "Scalable chat with rooms and presence.",
      career: "Software Engineer",
    },
    {
      title: "Image Captioning Model",
      desc: "CNN + LSTM trained on COCO dataset.",
      career: "Data Scientist",
    },
    {
      title: "Kubernetes Multi-Service App",
      desc: "Deploy microservices with Helm.",
      career: "Cloud Engineer",
    },
    {
      title: "Custom CTF Challenge",
      desc: "Design and host a capture-the-flag event.",
      career: "Cybersecurity Analyst",
    },
  ],
};

export const internships = [
  {
    company: "TechCorp",
    role: "Frontend Developer Intern",
    duration: "3 months",
    location: "Remote",
    stipend: "₹15,000/mo",
  },
  {
    company: "DataWiz",
    role: "Data Science Intern",
    duration: "6 months",
    location: "Bangalore",
    stipend: "₹25,000/mo",
  },
  {
    company: "PixelLabs",
    role: "UI/UX Design Intern",
    duration: "3 months",
    location: "Remote",
    stipend: "₹12,000/mo",
  },
  {
    company: "SecureNet",
    role: "Cybersecurity Analyst Intern",
    duration: "4 months",
    location: "Hyderabad",
    stipend: "₹20,000/mo",
  },
  {
    company: "CloudNova",
    role: "Cloud Engineer Intern",
    duration: "6 months",
    location: "Pune",
    stipend: "₹22,000/mo",
  },
  {
    company: "InnovateX",
    role: "Full-Stack Developer Intern",
    duration: "3 months",
    location: "Remote",
    stipend: "₹18,000/mo",
  },
];

export const features = [
  {
    icon: "🎯",
    title: "Career Assessment",
    desc: "Discover careers that fit your skills, interests, and personality.",
  },
  {
    icon: "🗺️",
    title: "Personalized Roadmaps",
    desc: "Step-by-step learning paths tailored to your chosen career.",
  },
  {
    icon: "📊",
    title: "Skill Gap Analysis",
    desc: "Identify exactly what to learn next to land your dream role.",
  },
  {
    icon: "💼",
    title: "Internship Opportunities",
    desc: "Browse handpicked internships from leading companies.",
  },
  {
    icon: "🧠",
    title: "Smart Project Ideas",
    desc: "Build a portfolio with curated beginner-to-advanced projects.",
  },
  {
    icon: "📈",
    title: "Track Your Progress",
    desc: "A clean dashboard to monitor your career journey.",
  },
];
