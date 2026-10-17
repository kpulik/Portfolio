// SYNTAX AND CAPITALIZATION MATTERS!!!

// Header section - Defines basic website information
const header = {
  "homepage": "https://kpulik.github.io/Portfolio/", // URL for the homepage - !!! IMPORTANT: UPDATE THIS TO YOUR OFFICIAL WEBSITE LINK BEFORE DEPLOYING!!!!
  title: 'Kevin', // Title shown in left of the navigation bar
}

// About section
const about = {
  name: 'Kevin Pulikkottil',
  role: 'Computer Science Graduate',
  description:
    'Computer Science graduate from UT Dallas, based in San Jose, CA, focused on cybersecurity and software engineering. CompTIA Security+ certified, with experience building detection engineering tools, security APIs, and an OP-TEE vehicle communications prototype. Open to entry-level cybersecurity and software engineering roles.',
  resume: '/Portfolio/Kevin_Pulikkottil_Resume.pdf?v=20261017', // Version the link when replacing the PDF
  social: {
    linkedin: 'https://www.linkedin.com/in/kpulik/', // LinkedIn profile link
    github: 'https://github.com/kpulik', // GitHub profile link
    tryhackme: 'https://tryhackme.com/p/kevinpul101', // TryHackMe profile link
    hackerrank: 'https://www.hackerrank.com/profile/kpulik', // HackerRank profile link
  },
}

// Projects section - keep same format per project [sourceCode: github, livePreivew: any link] [Uploading Images: /public/img - using it here follow format ( "./img/<img file>" ) ]
const projects = [
  {
    name: 'AutoSIEM — Detection Engineering & SOC Investigation',
    description:
      'Developed an open-source SIEM MVP with MITRE ATT&CK-mapped rules, seven UEBA signals, entity risk scoring, and 24-hour incident correlation. Built log ingestion for Syslog/CEF, Okta, Entra ID, GitHub, and AWS CloudTrail, with role-based access controls, auditable triage, and approval-gated AI response proposals. Integrated Sigma detection content.',
    stack: ['Python', 'SQLite', 'SIEM', 'Sigma', 'MITRE ATT&CK', 'UEBA'],
    sourceCode: 'https://github.com/kpulik/autosiem',
    livePreview: '',
  },
  {
    name: 'Security Toolkit API',
    description:
      'Developed and deployed a FastAPI service on Render and RapidAPI for password breach checks using HIBP k-anonymity, SSL/TLS analysis, passive TLS scanning, and GitHub secret detection. Added rate limits, scan authorization attestation, masked secret findings, and structured error responses.',
    stack: ['Python', 'FastAPI', 'TLS', 'HIBP', 'Render', 'RapidAPI'],
    sourceCode: 'https://github.com/kpulik/ApiProj',
    livePreview: '',
  },
  {
    name: 'Toyota Secure Vehicle Communications',
    description:
      'Engineered X448 ECDH key exchange in an OP-TEE Trusted Application on Arm64 QEMU for rekey-capable EV-to-charger sessions in an ISO 15118-20 prototype. Stabilized X.509 certificates by removing a custom CMAC extension, resolved Arm64 build failures, and developed a browser dashboard demonstrating man-in-the-middle attack detection with a Raspberry Pi attacker node at UTDesign EXPO.',
    image: '/Portfolio/img/toyota-logo.svg',
    stack: ['C/C++', 'Python', 'Arm64 QEMU', 'TEE', 'X448'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Secure Home Lab on Raspberry Pi',
    description:
      'Reported approximately 99% less network ad traffic after deploying a Pi-hole DNS sinkhole reachable remotely over a Tailscale tailnet. Implemented custom firewall rules, strict access controls, and active DNS query log monitoring.',
    stack: ['Raspberry Pi', 'Linux', 'Tailscale', 'Pi-hole', 'DNS', 'Firewall'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'GroupUs - GroupMe Desktop Client',
    description:
      'Built an unofficial cross-platform GroupMe desktop client called GroupUs for macOS, Windows, and Linux. Implemented OAuth sign-in, conversation and topic filters, mute/read controls, access token management, theme customization, and in-app update checks.',
    stack: ['TypeScript', 'JavaScript', 'Desktop App', 'OAuth', 'Cross-Platform'],
    sourceCode: 'https://github.com/kpulik/GroupUs',
    livePreview: '', // Add live link if available
  },
  {
    name: 'VaultChat',
    description:
      'Built a multi-provider AI chat plugin for Obsidian with Anthropic, OpenAI, Gemini, OpenRouter, and Ollama support. Added vault-aware file context, streaming responses, diff-based file edits, and double-confirmation safeguards for file deletion.',
    stack: ['TypeScript', 'JavaScript', 'Obsidian Plugin', 'Ollama', 'LLM Integrations'],
    sourceCode: 'https://github.com/kpulik/VaultChat',
    livePreview: '', // Add live link if available
  },
  {
    name: 'AI Dev Utility',
    description:
      'Created an open-source local-first AI developer toolkit that unifies The Agency, Impeccable, PromptFoo, and MiniFish with one setup script and a local dashboard. Includes Ollama-based local inference, PromptFoo evaluation workflows, and project bootstrapping scripts.',
    stack: ['Python', 'Shell', 'Ollama', 'PromptFoo', 'Developer Tooling'],
    sourceCode: 'https://github.com/kpulik/ai-dev-utility',
    livePreview: '', // Add live link if available
  },
  {
    name: 'Breast Cancer Diagnostic Classifier',
    description:
      'Built a Random Forest classifier on the Wisconsin Diagnostic dataset to classify malignant vs. benign tumors. Performed EDA with heatmaps and violin plots to isolate top predictors, and achieved 95.6% accuracy while minimizing false negatives.',
    stack: ['Python', 'scikit-learn', 'pandas', 'NumPy'],
    sourceCode: 'https://github.com/kpulik/AI-Projects/tree/main/Breast%20Cancer%20Detector%20Project',
    livePreview: '', // Add live link if available
  },
  {
    name: 'Handwritten Digit Classification',
    description:
      'Built a TensorFlow/Keras CNN for handwritten digit recognition with 98% test accuracy. Used MaxPooling and Dropout to improve generalization and model stability.',
    stack: ['Python', 'TensorFlow', 'Keras', 'CNN'],
    sourceCode: 'https://github.com/kpulik/AI-Projects/blob/main/Recognizing%20Handwritten%20Digits%20(Sp24_project1).ipynb',
    livePreview: '', // Add live link if available
  },
  {
    name: 'Diabetes Progression Regression',
    description:
      'Improved baseline predictive accuracy by 15% using feature engineering (polynomial and interaction terms) with Ridge Regression (L2) to reduce multicollinearity.',
    stack: ['Python', 'scikit-learn', 'Regression'],
    sourceCode: 'https://github.com/kpulik/AI-Projects/blob/main/Predicting%20Diabetes%20Metrics%20(Sp24_project2).ipynb',
    livePreview: '', // Add live link if available
  },
  {
    name: 'Transformer Text Summarization',
    description:
      'Developed a Hugging Face and TensorFlow summarization pipeline with 85% compression and 90% semantic coherence, preserving long-range context with transformer self-attention.',
    stack: ['Python', 'TensorFlow', 'Hugging Face', 'NLP'],
    sourceCode: 'https://github.com/kpulik/AI-Projects/blob/main/Natural_Language_Processing.ipynb',
    livePreview: '', // Add live link if available
  },
  {
    name: 'Automotive Drowsiness Detection',
    description:
      'Fine-tuned YOLOv5s to classify awake vs. drowsy states for driver monitoring. Built the end-to-end pipeline with custom webcam data collection, CVAT annotation, transfer learning on T4 GPUs, and OpenCV real-time inference.',
    stack: ['Python', 'PyTorch', 'OpenCV', 'YOLOv5'],
    sourceCode: 'https://github.com/kpulik/AI-Projects/blob/main/Fine_tuning_YOLO_Algorithm.ipynb',
    livePreview: '', // Add live link if available
  },
  {
    name: 'Linear Algebra Matrix Operations',
    description:
      'Developed a Python CLI for matrix operations including rank, determinant, inverse, eigenvalues, nullity, and linear independence checks. Supports targeted operations or full-suite execution on user-defined matrix dimensions.',
    stack: ['Python', 'Linear Algebra'],
    sourceCode: 'https://github.com/kpulik/Linear-Algebra-Matrix-Operations-Program',
    livePreview: '', // https://kpulik.github.io/Linear-Algebra-Matrix-Operations-Program/
  },
  {
    name: 'Quantitative Stock and Option Analysis',
    description:
      'Built a Python quantitative finance tool that prices options with Black-Scholes using live Finnhub market data. Estimated volatility from log returns and visualized price trends with Matplotlib and linear regression.',
    stack: ['Python', 'Matplotlib', 'API'],
    sourceCode: 'https://github.com/kpulik/Stock-Analysis-Program',
    livePreview: '', // https://kpulik.github.io/Stock-Analysis-Program/
  },
]

// Skills section
const skillCategories = [
  {
    label: 'Languages',
    items: ['Python', 'C/C++', 'Java', 'SQL', 'Bash'],
  },
  {
    label: 'Security & Networking',
    items: ['SIEM', 'UEBA', 'Sigma Rules', 'MITRE ATT&CK', 'TCP/IP', 'DNS', 'TLS', 'Firewalls', 'X.509', 'X448 ECDH', 'OP-TEE'],
  },
  {
    label: 'Systems',
    items: ['Linux', 'Windows', 'Arm64 QEMU', 'Raspberry Pi', 'Tailscale', 'Pi-hole', 'UNIX Systems Programming'],
  },
  {
    label: 'Tools & Frameworks',
    items: ['Git', 'Pytest', 'FastAPI', 'SQLite', 'AWS IAM Fundamentals', 'PyTorch', 'Sentence Transformers'],
  },
]

const skills = skillCategories.flatMap(({ items }) => items)

// Experience section - Work and Volunteering
const experience = [
  {
    title: 'Vehicle Cybersecurity Engineer, Embedded Security Project',
    company: 'Toyota Tsusho Systems-sponsored UTDesign Capstone',
    location: 'The University of Texas at Dallas',
    date: 'Jan 2026 - May 2026',
    description:
      'Engineered an X448 ECDH key exchange in an OP-TEE Trusted Application on Arm64 QEMU for an ISO 15118-20 prototype. Stabilized X.509 certificate generation and validation by removing a custom CMAC extension across the builder, parser, verifier, and Trusted Application. Resolved Arm64 build failures across four source files, helped automate rebuilds and testing, and presented a live attack-detection dashboard to corporate stakeholders at UTDesign EXPO.',
  },
  {
    title: 'AI Research Program Participant',
    company: 'Algoverse Coding Academy',
    location: 'Online',
    date: 'Feb 2024 - May 2024',
    description:
      'Participated in an AI research program where I developed multiple machine learning models including a Breast Cancer Detection Model, Handwritten Digit Recognition, and more.',
  },
  {
    title: 'Member',
    company: 'Google Developer Student Clubs (GDSC)',
    location: 'University of Texas at Dallas',
    date: '2022 - 2026',
    description:
      'Engaged in hands-on workshops and collaborative projects on web development and AI, enhancing technical skills and real-world problem-solving.',
  },
]

// Education section
const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Texas at Dallas',
    location: 'Richardson, TX',
    date: 'May 2026',
    description: 'Coursework: Database Systems, Computer Networks, Networking Laboratory, Operating Systems, Data Structures & Algorithm Analysis, Software Engineering, Digital Logic & Computer Design.',
  },
]

// Contact section - (optional)
const contact = {
  email: 'kevinpul101@gmail.com',
  buyMeACoffee: 'https://buymeacoffee.com/kpulik',
  buyMeACoffeeQr: '/Portfolio/img/buy-me-a-coffee-qr.png',
}

// Open Source Contributions section
const contributions = [
  {
    project: 'MemPalace — EmbeddingGemma 2 & Media Retrieval',
    projectUrl: 'https://github.com/MemPalace/mempalace',
    description:
      'Added opt-in, experimental EmbeddingGemma 2 support and native local image, audio, and video retrieval, with CLI/MCP search controls, embedding-space validation, and recovery safeguards. Included regression tests, real-model integration tests, and setup documentation. PR #2694 merged into develop on October 10, 2026, with all 13 CI checks passing.',
    pr: 'https://github.com/MemPalace/mempalace/pull/2694',
    prNumber: 2694,
    stack: ['Python', 'PyTorch', 'Sentence Transformers', 'Multimodal Retrieval', 'MCP'],
  },
  {
    project: 'MemPalace',
    projectUrl: 'https://github.com/MemPalace/mempalace',
    description:
      'Added a first-class mempalace mcp CLI subcommand, improved MCP setup documentation including custom palace path guidance, and added regression tests for CLI behavior.',
    pr: 'https://github.com/MemPalace/mempalace/pull/315',
    prNumber: 315,
    issue: 'https://github.com/MemPalace/mempalace/issues/296',
    stack: ['Python', 'CLI', 'MCP'],
  },
]

// Certifications section
const certifications = [
  {
    name: 'CompTIA Security+ (SY0-701)',
    issuer: 'CompTIA',
    date: 'April 25, 2026',
    status: 'Earned',
    credentialUrl: 'https://www.credly.com/badges/4d9f54e1-9175-46d3-83b6-6a15f706a8fa',
    image: 'https://images.credly.com/size/680x680/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob',
  },
  {
    name: 'Eagle Scout',
    issuer: 'Scouting America',
    date: 'January 2021',
    status: 'Earned',
    credentialUrl: '',
    image: '',
  },
]

// Important: If you add extra sections, make sure to export them here
// Export all sections so they can be used in other files
export { header, about, projects, skills, skillCategories, experience, education, contact, contributions, certifications }
