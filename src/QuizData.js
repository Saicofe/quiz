// src/QuizData.js
export const quizData = {
  frontend: [
    {
      question: "What is React?",
      options: ["A JavaScript library", "A programming language", "A database", "A framework"],
      correctAnswer: ["A JavaScript library"], // Single-choice
      type: "single",
    },
    {
      question: "Which HTML tag is used to include JavaScript in a webpage?",
      options: ["<script>", "<js>", "<javascript>", "<code>"],
      correctAnswer: ["<script>"], // Single-choice
      type: "single",
    },
    {
      question: "What is the purpose of CSS?",
      options: ["To structure web content", "To style web content", "To add interactivity", "To manage databases"],
      correctAnswer: ["To style web content"], // Single-choice
      type: "single",
    },
    {
      question: "Which of the following are CSS preprocessors?",
      options: ["SASS", "LESS", "React", "Bootstrap"],
      correctAnswer: ["SASS", "LESS"], // Multiple-choice
      type: "multiple",
    },
    {
      question: "JavaScript is a statically typed language.",
      options: ["True", "False"],
      correctAnswer: ["False"], // True/False
      type: "true-false",
    },
    {
      question: "Which of the following are JavaScript frameworks?",
      options: ["React", "Angular", "Vue", "Django"],
      correctAnswer: ["React", "Angular", "Vue"], // Multiple-choice
      type: "multiple",
    },
    {
      question: "What does the DOM stand for?",
      options: ["Document Object Model", "Data Object Model", "Design Object Model", "Document Order Model"],
      correctAnswer: ["Document Object Model"], // Single-choice
      type: "single",
    },
    {
      question: "Which CSS property is used for flexible box layout?",
      options: ["display: flex", "grid-template-columns", "align-items", "justify-content"],
      correctAnswer: ["display: flex"], // Single-choice
      type: "single",
    },
    {
      question: "What is the default position property of an HTML element?",
      options: ["static", "relative", "absolute", "fixed"],
      correctAnswer: ["static"], // Single-choice
      type: "single",
    },
    {
      question: "Which of the following is used to make a responsive webpage?",
      options: ["Media Queries", "Tables", "Frames", "Divs"],
      correctAnswer: ["Media Queries"], // Single-choice
      type: "single",
    },
  ],
  backend: [
    {
      question: "What is Node.js?",
      options: ["A frontend framework", "A JavaScript runtime", "A database", "A programming language"],
      correctAnswer: ["A JavaScript runtime"], // Single-choice
      type: "single",
    },
    {
      question: "Which of the following are NoSQL databases?",
      options: ["MySQL", "MongoDB", "Cassandra", "SQLite"],
      correctAnswer: ["MongoDB", "Cassandra"], // Multiple-choice
      type: "multiple",
    },
    {
      question: "REST API is a design pattern for APIs.",
      options: ["True", "False"],
      correctAnswer: ["True"], // True/False
      type: "true-false",
    },
    {
      question: "Which HTTP methods are used in REST APIs?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: ["GET", "POST", "PUT", "DELETE"], // Multiple-choice
      type: "multiple",
    },
    {
      question: "Express.js is used to create backend servers.",
      options: ["True", "False"],
      correctAnswer: ["True"], // True/False
      type: "true-false",
    },
    {
      question: "Which module is used in Node.js for handling file operations?",
      options: ["fs", "http", "path", "url"],
      correctAnswer: ["fs"], // Single-choice
      type: "single",
    },
    {
      question: "What is the purpose of Express.js?",
      options: ["To create a backend server", "To style a webpage", "To manage databases", "To compile JavaScript"],
      correctAnswer: ["To create a backend server"], // Single-choice
      type: "single",
    },
    {
      question: "Which of the following is a relational database?",
      options: ["MongoDB", "Redis", "MySQL", "Cassandra"],
      correctAnswer: ["MySQL"], // Single-choice
      type: "single",
    },
    {
      question: "What is JWT used for?",
      options: ["Data encryption", "Authentication", "Database queries", "Server management"],
      correctAnswer: ["Authentication"], // Single-choice
      type: "single",
    },
    {
      question: "Which of the following is a package manager for Node.js?",
      options: ["npm", "pip", "composer", "gem"],
      correctAnswer: ["npm"], // Single-choice
      type: "single",
    },
  ],
};