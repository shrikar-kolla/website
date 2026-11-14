// ---------------------------------------------------------------
// EDIT THIS FILE. All the text on the site comes from here.
// ---------------------------------------------------------------

export const profile = {
  name: "Shrikar Kolla",
  initials: "SK",
  headline: "Computer Science @ Georgia Tech",
  status: "Open to Summer 2027 SWE Internships",
  bio: [
    "I'm Shrikar Kolla, a computer science student at Georgia Tech interested in AI, machine learning, and full-stack software. I enjoy building things people can actually use, from a computer vision boxing trainer to football fan experience and analytics models for Georgia Tech football.",
    "Outside engineering, I tutor math, cook, hike, travel, and avidly follow football.",
  ],
  email: "shrikar.kolla67@gmail.com",
  resume: "/Shrikar_Kolla_Resume.pdf", // lives in the public/ folder
  photo: "/profile.jpg", // lives in the public/ folder
  links: {
    github: "https://github.com/shrikar-kolla",
    linkedin: "https://www.linkedin.com/in/shrikar-kolla-0b013b302/",
    devpost: "https://devpost.com/shrikar-kolla67",
  },
};

export const experience = [
  {
    role: "Undergraduate Researcher, Sports Intelligence Platforms",
    org: "Georgia Tech Vertically Integrated Projects (VIP) Program",
    location: "Atlanta, GA",
    period: "Jan 2026 to Present",
    summary: "Building AI and prediction tools for Georgia Tech football.",
    bullets: [
      "Built an LLM-powered chatbot for football matchup analysis, feeding structured game data into prompts and retrieval-augmented generation (RAG) pipelines.",
      "Engineered 15+ predictive features from 10+ seasons of CollegeFootballData API data, including ELO ratings, recruiting rankings, and team performance metrics.",
      "Trained and calibrated a logistic regression win probability model with recency weighting, reaching 83.3% accuracy on out-of-sample games.",
    ],
    tags: ["LLMs", "RAG", "Logistic Regression", "Feature Engineering"],
  },
  {
    role: "Software Developer, PerfectPunch",
    org: "Big Data Big Impact",
    location: "Atlanta, GA",
    period: "Sep 2025 to Present",
    summary: "Developing a computer vision based boxing training app.",
    bullets: [
      "Developed React Native components for authentication, camera capture, and performance dashboards.",
      "Integrated Supabase authentication and cloud storage to manage user sessions, training history, and real-time performance analytics.",
      "Engineered computer vision and machine learning pipelines with MediaPipe for real-time punch detection across 3 punch types, reaching up to 89.5% accuracy.",
    ],
    tags: ["React Native", "Supabase", "MediaPipe", "Computer Vision"],
  },
  {
    role: "Math Tutor",
    org: "Knack, Georgia Tech",
    location: "Atlanta, GA",
    period: "Sep 2025 to Present",
    summary: "Tutoring Georgia Tech students in Calculus II, Linear Algebra, and Multivariable Calculus.",
    bullets: [
      "Help students build conceptual understanding and prepare for exams in MATH 1552, 1554, and 2551.",
    ],
    tags: ["Calculus", "Linear Algebra", "Teaching"],
  },
  {
    role: "Machine Learning Intern",
    org: "Kennesaw State University",
    location: "Marietta, GA",
    period: "Aug 2024 to Dec 2024",
    summary: "Machine learning research on multi-omics data for breast cancer classification.",
    bullets: [
      "Optimized the MOGONET multi-omics deep learning model for breast cancer (BRCA) classification by testing 10 hyperparameter configurations, reaching 81.7% accuracy and an 80.0% weighted F1 score.",
      "Developed a Python uncertainty quantification workflow with pandas and Scikit-learn to evaluate performance across configurations, keeping prediction uncertainty below 5%.",
    ],
    tags: ["Python", "pandas", "Scikit-learn", "Deep Learning"],
  },
  {
    role: "Eagle Scout",
    org: "Boy Scouts of America, Troop 433",
    location: "Kennesaw, GA",
    period: "Aug 2021 to Mar 2024",
    summary: "Leadership through a community service project.",
    bullets: [
      "Led a 200-foot fencing project at Kennesaw Mountain National Battlefield Park, coordinating 15 volunteers through planning, execution, and reconstruction.",
    ],
    tags: ["Leadership", "Project Management"],
  },
];

export const projects = [
  {
    title: "Parodipi",
    label: "Hackathon project",
    year: "2026",
    description:
      "Turns math concepts into parody songs to help students learn, remember, and enjoy studying math. Built at Hacklytics 2026.",
    tags: ["Flask", "Gemini API", "Genius API", "Python", "pandas"],
    links: {
      devpost: "https://devpost.com/software/parodipi",
      github: "https://github.com/shrikar-kolla/Parodipi",
    },
  },
  {
    title: "Hearo",
    label: "Hackathon project",
    year: "2025",
    description:
      "A voice-first accessibility app that helps visually impaired users learn about their surroundings, using Google Gemini Vision for real-time image understanding and ElevenLabs speech-to-text and text-to-speech for hands-free interaction. Built at AI ATL 2025.",
    tags: ["React Native", "Gemini Vision", "ElevenLabs", "Google Cloud Run"],
    links: {
      devpost: "https://devpost.com/software/hearo-adknqr",
      github: "https://github.com/shrikar-kolla/Hearo",
    },
  },
  {
    title: "SnapFind",
    label: "Hackathon project",
    year: "2025",
    description:
      "A full-stack lost-and-found platform. A CNN classifies uploaded photos into searchable object categories with 85% accuracy, backed by FastAPI services and Supabase workflows for images and metadata. Built at HackGT 12.",
    tags: ["React", "FastAPI", "PyTorch", "TypeScript", "Supabase"],
    links: {
      devpost: "https://devpost.com/software/snapfind-jmwr3t",
      github: "https://github.com/shrikar-kolla/SnapFind",
    },
  },
  {
    title: "Staged Multi-Omics Data Classification for Breast Cancer Diagnosis",
    label: "Research paper",
    year: "2025",
    description:
      "Research paper from my machine learning work at Kennesaw State University, published through the ACM. My part focused on optimizing the MOGONET multi-omics deep learning model for breast cancer classification and evaluating prediction uncertainty across hyperparameter configurations.",
    tags: ["Multi-omics", "Deep Learning", "Python", "Uncertainty Quantification"],
    links: {
      paper: "https://dl.acm.org/doi/10.1145/3696673.3723081",
    },
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "C/C++", "HTML", "C#", "CSS"],
  },
  {
    group: "Frameworks and Libraries",
    items: [
      "React.js",
      "Node.js",
      "FastAPI",
      "Flask",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "JUnit",
    ],
  },
  {
    group: "Developer Tools",
    items: [
      "Git",
      "Docker",
      "CI/CD",
      "Supabase",
      "MySQL",
      "PostgreSQL",
      "Google Cloud Run",
      "AWS",
      "Unix/Linux",
      "Azure",
    ],
  },
];
