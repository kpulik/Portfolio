// SYNTAX AND CAPITALIZATION MATTERS!!!

// Header section - Defines basic website information
const header = {
  "homepage": "https://kpulik.github.io/Portfolio/", // URL for the homepage - !!! IMPORTANT: UPDATE THIS TO YOUR OFFICIAL WEBSITE LINK BEFORE DEPLOYING!!!!
  title: 'Kevin', // Title shown in left of the navigation bar
}

// About section
const about = {
  name: 'Kevin Pulikkottil',
  role: 'Computer Science Student',
  description:
    'Aspiring software engineer with a passion for AI, machine learning, and cloud computing. Currently pursuing a Bachelor of Science in Computer Science at The University of Texas at Dallas, where I work on innovative projects and continuously enhance my technical skills.',
  resume: '/Portfolio/Kevin_Pulikkottil_Resume.pdf', // Link to your resume (update if hosted elsewhere)
  social: {
    linkedin: 'https://www.linkedin.com/in/kpulik/', // LinkedIn profile link
    github: 'https://github.com/kpulik', // GitHub profile link
  },
}

// Projects section - keep same format per project [sourceCode: github, livePreivew: any link] [Uploading Images: /public/img - using it here follow format ( "./img/<img file>" ) ]
const projects = [
  {
    name: 'Breast Cancer Detection Model',
    description:
      'Developed a machine learning model using the Breast Cancer Wisconsin Dataset in Python to classify diagnoses with 92% accuracy, improving the initial model accuracy by 10%.',
    stack: ['Python', 'scikit-learn', 'pandas', 'NumPy'],
    sourceCode: 'https://github.com/kpulik/AI-Projects/tree/main/Breast%20Cancer%20Detector%20Project',
    livePreview: '', // Add live link if available
    image: './img/breast-cancer.png',
  },
  {
    name: 'Handwritten Digits Recognition',
    description:
      'Built a Convolutional Neural Network (CNN) using TensorFlow and Keras to classify handwritten digits from the MNIST dataset with 98% accuracy.',
    stack: ['Python', 'TensorFlow', 'Keras', 'CNN'],
    sourceCode: 'https://github.com/kpulik/AI-Projects/blob/main/Recognizing%20Handwritten%20Digits%20(Sp24_project1).ipynb',
    livePreview: '', // Add live link if available
    image: './img/mnist.png',
  },
  {
    name: 'Predicting Diabetes Metrics',
    description:
      'Created a regression model in Python with scikit-learn to predict patient diabetes metrics, achieving a 15% improvement in predictive accuracy through feature engineering.',
    stack: ['Python', 'scikit-learn', 'Regression'],
    sourceCode: 'https://github.com/kpulik/AI-Projects/blob/main/Predicting%20Diabetes%20Metrics%20(Sp24_project2).ipynb',
    livePreview: '', // Add live link if available
    image: './img/diabetes.png',
  },
  {
    name: 'NLP for Text Summarization',
    description:
      'Developed a Transformer-based NLP model using TensorFlow and Hugging Face Transformers to summarize text with an 85% compression rate and 90% coherence.',
    stack: ['Python', 'TensorFlow', 'Hugging Face', 'NLP'],
    sourceCode: 'https://github.com/kpulik/AI-Projects/blob/main/Natural_Language_Processing.ipynb',
    livePreview: '', // Add live link if available
    image: './img/nlp.png',
  },
  {
    name: 'Fine-Tuning YOLO Algorithm',
    description:
      'Fine-tuned YOLOv3 for real-time object detection on a custom dataset using Python, OpenCV, and TensorFlow, improving detection precision by 5%.',
    stack: ['Python', 'OpenCV', 'TensorFlow', 'YOLOv3'],
    sourceCode: 'https://github.com/kpulik/AI-Projects/blob/main/Fine_tuning_YOLO_Algorithm.ipynb',
    livePreview: '', // Add live link if available
    image: './img/yolo.png',
  },
  {
    name: 'Linear Algebra Matrix Operations',
    description:
      'Built a Python program to perform matrix operations including rank, determinants, and eigenvalues.',
    stack: ['Python'],
    sourceCode: 'https://github.com/kpulik/Linear-Algebra-Matrix-Operations-Program',
    livePreview: '', // https://kpulik.github.io/Linear-Algebra-Matrix-Operations-Program/
    image: './img/matrix.png',
  },
  {
    name: 'Stock Analysis Program',
    description:
      'Developed a tool using Python, Matplotlib, and the Finnhub API to analyze stock data and calculate option prices with real-time visualization.',
    stack: ['Python', 'Matplotlib', 'API'],
    sourceCode: 'https://github.com/kpulik/Stock-Analysis-Program',
    livePreview: '', // https://kpulik.github.io/Stock-Analysis-Program/
    image: './img/stock-analysis.png',
  },
]

// Skills section
const skills = [
  'Java',
  'C++',
  'MIPS Assembly',
  'Python',
  'SQL',
  'Haskell',
  'Prolog',
  'AWS',
  'Git',
  'Data Visualization',
  'Jupyter Notebooks',
  'TensorFlow',
  'Neural Networks',
  'CNN',
  'YOLOv3',
  'Network Security',
  'Cloud Billing',
  'Algorithms',
  'Data Structures',
]

// Experience section - Work and Volunteering
const experience = [
  {
    title: 'AI Research Program Participant',
    company: 'Algoverse Coding Academy',
    location: 'Online',
    date: 'Feb 2024',
    description:
      'Participated in an AI research program where I developed multiple machine learning models including a Breast Cancer Detection Model, Handwritten Digit Recognition, and more.',
  },
  {
    title: 'Member',
    company: 'Google Developer Student Clubs (GDSC)',
    location: 'University of Texas at Dallas',
    date: '2022 - Present',
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
    description: 'Focused on software engineering, data structures, algorithms, and backend development.',
  },
]

// Contact section - (optional)
const contact = {
  email: 'kevinpul101@gmail.com',
}

// Important: If you add extra sections, make sure to export them here
// Export all sections so they can be used in other files
export { header, about, projects, skills, experience, education, contact }
