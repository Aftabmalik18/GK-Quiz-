const quizData = [
  {
    question: "1. What is the capital of France?",
    options: ["London", "Paris", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    question: "2. What is the tallest mountain in the world?",
    options: [
      "Mount Kilimanjaro",
      "Mount Everest",
      "Mount Fuji",
      "Mount McKinley"
    ],
    answer: "Mount Everest"
  },
  {
    question: "3. What is the currency of Japan?",
    options: ["Yuan", "Euro", "Yen", "Dollar"],
    answer: "Yen"
  },
  {
    question: "4. Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain"
    ],
    answer: "William Shakespeare"
  },
  {
    question: "5. Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "6. What is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean"
    ],
    answer: "Pacific Ocean"
  },
  {
    question: "7. How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "8. What is the tallest mountain in Africa?",
    options: [
      "Mount Kilimanjaro",
      "Mount Everest",
      "Mount Fuji",
      "Mount McKinley"
    ],
    answer: "Mount Kilimanjaro"
  },
  {
    question: "9. Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Michelangelo"
    ],
    answer: "Leonardo da Vinci"
  },
  {
    question: "10. Which animal is known as the 'King of the Jungle'?",
    options: ["Tiger", "Elephant", "Lion", "Giraffe"],
    answer: "Lion"
  },
  {
    question: "11. What is the largest mammal in the world?",
    options: ["Elephant", "Blue whale", "Lion", "Giraffe"],
    answer: "Blue whale"
  },
  {
    question: "12. What is the capital city of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "13. How many legs does a spider have?",
    options: ["4", "6", "8", "10"],
    answer: "8"
  },
  {
    question: "14. Which planet is known as the 'Morning Star'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Venus"
  },
  {
    question: "15. What is the tallest animal in the world?",
    options: ["Elephant", "Giraffe", "Horse", "Zebra"],
    answer: "Giraffe"
  },
  {
    question: "16. Which is the largest bird in the world?",
    options: ["Ostrich", "Penguin", "Eagle", "Sparrow"],
    answer: "Ostrich"
  },
  {
    question: "17. What do you call a group of fish?",
    options: ["School", "Herd", "Flock", "Pack"],
    answer: "School"
  },
  {
    question: "18. What is the capital city of the United States?",
    options: ["Washington D.C.", "New York City", "Los Angeles", "Chicago"],
    answer: "Washington D.C."
  },
  {
    question: "19. What is the color of a ruby?",
    options: ["Red", "Blue", "Green", "Yellow"],
    answer: "Red"
  },
  {
    question: "20. Which is the largest planet in our solar system?",
    options: ["Mars", "Earth", "Jupiter", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "21. What is the main ingredient in bread?",
    options: ["Rice", "Wheat", "Corn", "Barley"],
    answer: "Wheat"
  },
  {
    question: "22. How many days are there in a leap year?",
    options: ["365", "366", "364", "367"],
    answer: "366"
  },
  {
    question:
      "23. What do you call the line that goes around the middle of the Earth?",
    options: [
      "Equator",
      "Prime Meridian",
      "Tropic of Cancer",
      "Tropic of Capricorn"
    ],
    answer: "Equator"
  },
  {
    question: "24. Which animal is known as the 'Ship of the Desert'?",
    options: ["Elephant", "Camel", "Horse", "Cow"],
    answer: "Camel"
  },
  {
    question: "25. What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: "H2O"
  },
  {
    question: "26. What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Skin", "Lungs"],
    answer: "Skin"
  },
  {
    question: "27. Who is the author of 'To Kill a Mockingbird'?",
    options: ["J.K. Rowling", "Harper Lee", "Stephen King", "George Orwell"],
    answer: "Harper Lee"
  },
  {
    question: "28. How many bones are there in the human body?",
    options: ["206", "208", "210", "212"],
    answer: "206"
  },
  {
    question: "29. What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    answer: "Au"
  },
  {
    question: "30. Who was the first person to step on the Moon?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
    answer: "Neil Armstrong"
  },
  {
    question: "31. Which country is known as the Land of the Rising Sun?",
    options: ["China", "India", "Japan", "Australia"],
    answer: "Japan"
  },
  {
    question: "32. What is the chemical symbol for oxygen?",
    options: ["O2", "CO2", "H2O", "N2"],
    answer: "O2"
  },
  {
    question: "33. Who painted the ceiling of the Sistine Chapel?",
    options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
    answer: "Michelangelo"
  },
  {
    question: "34. What is the largest organ inside the human body?",
    options: ["Liver", "Heart", "Stomach", "Kidney"],
    answer: "Liver"
  },
  {
    question: "35. What is the chemical symbol for carbon dioxide?",
    options: ["CO2", "O2", "H2O", "N2"],
    answer: "CO2"
  },
  {
    question: "36. Which famous scientist developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Stephen Hawking",
      "Galileo Galilei"
    ],
    answer: "Albert Einstein"
  },
  {
    question: "37. Who is known as the 'Father of Computers'?",
    options: ["Bill Gates", "Steve Jobs", "Charles Babbage", "Alan Turing"],
    answer: "Charles Babbage"
  },
  {
    question: "38. What is the chemical symbol for sodium?",
    options: ["Na", "Si", "Ca", "Mg"],
    answer: "Na"
  },
  {
    question: "39. Who wrote 'The Great Gatsby'?",
    options: [
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "John Steinbeck",
      "Virginia Woolf"
    ],
    answer: "F. Scott Fitzgerald"
  },
  {
    question: "40. Which planet is known as the 'Evening Star'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Venus"
  },
  {
    question: "41. Who invented the telephone?",
    options: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "Guglielmo Marconi"
    ],
    answer: "Alexander Graham Bell"
  },
  {
    question: "42. What is the chemical symbol for silver?",
    options: ["Ag", "Au", "Fe", "Cu"],
    answer: "Ag"
  },
  {
    question: "43. Who is the Greek goddess of wisdom?",
    options: ["Athena", "Artemis", "Aphrodite", "Hera"],
    answer: "Athena"
  },
  {
    question: "44. Which country is known as the Land of the Midnight Sun?",
    options: ["Norway", "Sweden", "Finland", "Iceland"],
    answer: "Norway"
  },
  {
    question:
      "45. Who was the first female Prime Minister of the United Kingdom?",
    options: [
      "Margaret Thatcher",
      "Theresa May",
      "Angela Merkel",
      "Jacinda Ardern"
    ],
    answer: "Margaret Thatcher"
  },
  {
    question: "46. What is the chemical symbol for helium?",
    options: ["He", "H", "Hg", "Ne"],
    answer: "He"
  },
  {
    question: "47. Who wrote 'The Adventures of Tom Sawyer'?",
    options: ["Mark Twain", "J.K. Rowling", "Charles Dickens", "Jane Austen"],
    answer: "Mark Twain"
  },
  {
    question: "48. Which planet is known as the 'Blue Planet'?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Earth"
  },
  {
    question: "49. What is the chemical symbol for iron?",
    options: ["Fe", "Au", "Ag", "Cu"],
    answer: "Fe"
  },
  {
    question: "50. Who painted 'Starry Night'?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Michelangelo"
    ],
    answer: "Vincent van Gogh"
  },
  {
    question: "51. What is the chemical symbol for lead?",
    options: ["Pb", "Al", "Li", "P"],
    answer: "Pb"
  },
  {
    question: "52. Who is known as the 'Father of Medicine'?",
    options: ["Hippocrates", "Aristotle", "Pythagoras", "Plato"],
    answer: "Hippocrates"
  },
  {
    question: "53. Which country is known as the Land of Fire and Ice?",
    options: ["Greenland", "Iceland", "New Zealand", "Australia"],
    answer: "Iceland"
  },
  {
    question: "54. Who discovered penicillin?",
    options: [
      "Alexander Fleming",
      "Louis Pasteur",
      "Marie Curie",
      "Robert Koch"
    ],
    answer: "Alexander Fleming"
  },
  {
    question: "55. What is the chemical symbol for potassium?",
    options: ["K", "K2", "P", "Po"],
    answer: "K"
  },
  {
    question: "56. Who wrote 'War and Peace'?",
    options: [
      "Leo Tolstoy",
      "Fyodor Dostoevsky",
      "Anton Chekhov",
      "Nikolai Gogol"
    ],
    answer: "Leo Tolstoy"
  },
  {
    question: "57. Which country has the largest population in the world?",
    options: ["India", "United States", "China", "Russia"],
    answer: "China"
  },
  {
    question: "58. What is the chemical symbol for uranium?",
    options: ["U", "Un", "Ur", "Um"],
    answer: "U"
  },
  {
    question: "59. Who wrote 'Pride and Prejudice'?",
    options: [
      "Jane Austen",
      "Charlotte Brontë",
      "Emily Brontë",
      "Charles Dickens"
    ],
    answer: "Jane Austen"
  },
  {
    question: "60. What is the chemical symbol for nitrogen?",
    options: ["N", "Ni", "Na", "Ne"],
    answer: "N"
  }
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;
let timer = 10;
let timerInterval;
let username;

const usernameContainer = document.getElementById("username-container");
const questionContainer = document.getElementById("question-container");
const timerContainer = document.getElementById("timer-container");
const resultContainer = document.getElementById("result-container");

// Function to start the quiz
function startQuiz() {
  username = document.getElementById("username").value.trim();
  if (!username) {
    showError("Please enter your name to start the quiz!");
    return;
  }
  usernameContainer.style.display = "none";
  questionContainer.style.display = "block";
  timerContainer.style.display = "block";
  loadQuestion();
}

// Function to load the current question
function loadQuestion() {
  const question = quizData[currentQuestion];
  questionContainer.innerHTML = `
    <h2>${question.question}</h2>
    <ul>
      ${question.options
        .map(
          (option) => `<li onclick="checkAnswer('${option}')">${option}</li>`
        )
        .join("")}
    </ul>
  `;

  // Start the timer
  startTimer();
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(() => {
    timer--;
    timerContainer.textContent = timer;
    if (timer <= 0) {
      clearInterval(timerInterval);
      checkAnswer("");
    }
  }, 1000);
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const question = quizData[currentQuestion];
  if (selectedOption === question.answer) {
    score++;
  }
  clearInterval(timerInterval);
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    timer = 10; // Reset timer for the next question
    loadQuestion();
  } else {
    showResult();
  }
}

// Function to show quiz result
function showResult() {
  questionContainer.style.display = "none";
  timerContainer.style.display = "none";
  resultContainer.style.display = "block";
  const totalQuestions = quizData.length;
  const correctAnswers = score;
  const wrongAnswers = totalQuestions - correctAnswers;
  resultContainer.innerHTML = `
    <h2>Quiz Result</h2>
    <p>Total Questions: ${totalQuestions}</p>
    <p>Correct Answers: ${correctAnswers}</p>
    <p>Wrong Answers: ${wrongAnswers}</p>
    <div class="glitter">
      <p>Congratulations, ${username}! 🎉</p>
    </div>
    <button onclick="restartQuiz()" class="try-again-btn">Play Again</button>
  `;
}

// Function to restart the quiz
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  timer = 10;
  resultContainer.style.display = "none";
  questionContainer.style.display = "block";
  timerContainer.style.display = "block";
  loadQuestion();
}

// Function to show error message
function showError(message) {
  const errorContainer = document.createElement("div");
  errorContainer.className = "error-message";
  errorContainer.textContent = message;
  usernameContainer.appendChild(errorContainer);
  setTimeout(() => {
    errorContainer.remove();
  }, 3000);
}
