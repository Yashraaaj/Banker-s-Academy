const questions = [
    {
        question: "What is the primary function of a commercial bank?",
        choices: ["Providing education services", "Accepting deposits and granting loans", "Issuing passports"],
        correctIndex: 1
    },
    {
        question: "Which of the following is not a type of bank account in India?",
        choices: ["Current Account", "Fixed Deposit Account", "Voter ID Account"],
        correctIndex: 2
    },
    {
        question: "Who is the regulator of the Indian stock market?",
        choices: ["SEBI (Securities and Exchange Board of India)", "RBI (Reserve Bank of India)", "IRDAI (Insurance Regulatory and Development Authority of India)"],
        correctIndex: 0
    },
    {
        question: "What is the minimum percentage of voting rights required for a company to be classified as a 'Public Limited Company'?",
        choices: ["10%", "25%", "51%"],
        correctIndex: 2
    },
    {
        question: "What is the purpose of 'Know Your Customer (KYC)' guidelines in the banking sector?",
        choices: ["To know the customer's favorite color", "To prevent money laundering and fraud", "To promote online shopping"],
        correctIndex: 1
    },
    {
        question: "Which of the following is a term related to the insurance sector?",
        choices: ["EMI (Equated Monthly Installment)", "Sum Assured", "GDP (Gross Domestic Product)"],
        correctIndex: 1
    },
    {
        question: "Who is the current Finance Minister of India?",
        choices: ["Narendra Modi", "Arun Jaitley", "Nirmala Sitharaman"],
        correctIndex: 2
    },
    {
        question: "What is the main source of income for commercial banks?",
        choices: ["Government subsidies", "Interest earned from loans and investments", "Donations from customers"],
        correctIndex: 1
    },
    {
        question: "Which of the following is a scheduled commercial bank in India?",
        choices: ["Federal Bank", "Post Office Savings Bank", "Paytm Payments Bank"],
        correctIndex: 0
    },
    {
        question: "What does the term 'NPA' stand for in the banking sector?",
        choices: ["Non-Performing Asset", "Net Profit Analysis", "National Payment Authority"],
        correctIndex: 0
    },
    {
        question: "Who is the regulator for the insurance sector in India?",
        choices: ["RBI (Reserve Bank of India)", "SEBI (Securities and Exchange Board of India)", "IRDAI (Insurance Regulatory and Development Authority of India)"],
        correctIndex: 2
    },
    {
        question: "Which bank was founded by Lala Lajpat Rai in 1921?",
        choices: ["Punjab National Bank", "Bank of Baroda", "Union Bank of India"],
        correctIndex: 0
    },
    {
        question: "What is the minimum age for opening a fixed deposit account in a bank?",
        choices: ["18 years", "21 years", "60 years"],
        correctIndex: 0
    },
    {
        question: "What is the largest public sector bank in India by assets?",
        choices: ["State Bank of India (SBI)", "Punjab National Bank", "Bank of Baroda"],
        correctIndex: 0
    },
    {
        question: "What is the primary function of the 'SWIFT' system in banking?",
        choices: ["To provide scholarships to students", "To transfer money internationally between banks", "To print passbooks for customers"],
        correctIndex: 1
    },
    {
        question: "Who is the current Chairman of SEBI (Securities and Exchange Board of India)?",
        choices: ["Amitabh Kant", "Ajay Tyagi", "Rajnish Kumar"],
        correctIndex: 1
    },
    {
        question: "What is the full form of 'NEFT' in the context of bank transactions?",
        choices: ["National Electronic Funds Transfer", "New Economy Financial Technologies", "National Exchange for Financial Transactions"],
        correctIndex: 0
    },
    {
        question: "Which financial institution regulates and supervises the functioning of banks in India?",
        choices: ["SEBI (Securities and Exchange Board of India)", "IRDAI (Insurance Regulatory and Development Authority of India)", "RBI (Reserve Bank of India)"],
        correctIndex: 2
    },
    {
        question: "What is the minimum amount required to open a 'Savings Account' in most banks in India?",
        choices: ["Rs. 100", "Rs. 500", "Rs. 1,000"],
        correctIndex: 1
    },
    {
        question: "What is the maximum limit for deposit insurance coverage provided by DICGC (Deposit Insurance and Credit Guarantee Corporation)?",
        choices: ["Rs. 1 lakh", "Rs. 5 lakhs", "Rs. 10 lakhs"],
        correctIndex: 1
    },
    {
        question: "Who is responsible for printing and minting currency notes and coins in India?",
        choices: ["SBI (State Bank of India)", "Indian Minting Corporation", "Security Printing and Minting Corporation of India Limited (SPMCIL)"],
        correctIndex: 2
    },
    {
        question: "What is the primary purpose of a 'Current Account' in banking?",
        choices: ["Savings and wealth creation", "Daily transactions and business operations", "Long-term investments"],
        correctIndex: 1
    },
    {
        question: "Which of the following is not a credit card provider in India?",
        choices: ["Visa", "MasterCard", "IRDAI (Insurance Regulatory and Development Authority of India)"],
        correctIndex: 2
    },
    {
        question: "What does 'IPO' stand for in the context of stock markets?",
        choices: ["Initial Public Offering", "International Payment Order", "Investor Protection Organization"],
        correctIndex: 0
    },
    {
        question: "Which bank is known as the 'Bank of the Common Man'?",
        choices: ["ICICI Bank", "HDFC Bank", "State Bank of India (SBI)"],
        correctIndex: 2
    },
    {
        question: "What is the term for the interest rate at which banks lend money to each other in the interbank market?",
        choices: ["Prime Lending Rate", "Repo Rate", "MCLR (Marginal Cost of Funds Based Lending Rate)"],
        correctIndex: 1
    },
    {
        question: "What is the full form of 'MICR' in the context of banking technology?",
        choices: ["Magnetic Ink Character Recognition", "Micro Investment and Credit Registry", "Multi-Channel Internet Credit Reporting"],
        correctIndex: 0
    },
    {
        question: "Who is the regulator of the insurance intermediaries in India?",
        choices: ["IRDAI (Insurance Regulatory and Development Authority of India)", "RBI (Reserve Bank of India)", "SEBI (Securities and Exchange Board of India)"],
        correctIndex: 0
    },
    {
        question: "Which of the following is a private sector bank in India?",
        choices: ["IDBI Bank", "Axis Bank", "Canara Bank"],
        correctIndex: 1
    },
    {
        question: "What is the maximum tenure for a fixed deposit in most banks in India?",
        choices: ["5 years", "10 years", "20 years"],
        correctIndex: 0
    },
    {
        question: "What is the minimum balance requirement for a 'Basic Savings Bank Deposit Account' in India?",
        choices: ["Rs. 500", "Rs. 1,000", "No minimum balance requirement"],
        correctIndex: 2
    },
    {
        question: "Who issues and regulates the credit information reports of individuals and companies in India?",
        choices: ["CIBIL", "RBI (Reserve Bank of India)", "SEBI (Securities and Exchange Board of India)"],
        correctIndex: 0
    },
    {
        question: "What is the main function of the 'IMPS' service in banking?",
        choices: ["To provide insurance policies", "To facilitate instant fund transfers", "To issue PAN cards"],
        correctIndex: 1
    },
    {
        question: "Which of the following is not a type of deposit account in a bank?",
        choices: ["Recurring Deposit Account", "Multipurpose Account", "Fixed Deposit Account"],
        correctIndex: 1
    },
    {
        question: "Who regulates and supervises the functioning of non-banking financial companies (NBFCs) in India?",
        choices: ["RBI (Reserve Bank of India)", "SEBI (Securities and Exchange Board of India)", "IRDAI (Insurance Regulatory and Development Authority of India)"],
        correctIndex: 0
    },
    {
        question: "What is the maximum limit of cash withdrawal per day from an ATM for most bank accounts in India?",
        choices: ["Rs. 5,000", "Rs. 10,000", "Rs. 25,000"],
        correctIndex: 1
    },
    {
        question: "Who is responsible for conducting the monetary policy in India?",
        choices: ["Finance Ministry", "SEBI (Securities and Exchange Board of India)", "RBI (Reserve Bank of India)"],
        correctIndex: 2
    },
    {
        question: "What is the primary function of the 'GST' system in India?",
        choices: ["To track gold prices", "To regulate foreign trade", "To streamline and simplify the taxation system"],
        correctIndex: 2
    },
    {
        question: "What is the primary function of the 'RBI (Reserve Bank of India)'?",
        choices: ["Regulating the stock market", "Conducting monetary policy", "Issuing passports"],
        correctIndex: 1
    },
    {
        question: "Which financial institution is responsible for regulating and supervising the insurance sector in India?",
        choices: ["SEBI (Securities and Exchange Board of India)", "RBI (Reserve Bank of India)", "IRDAI (Insurance Regulatory and Development Authority of India)"],
        correctIndex: 2
    },
    {
        question: "What is the purpose of the 'Repo Rate' in the context of monetary policy?",
        choices: ["To control inflation", "To encourage savings", "To regulate credit card fees"],
        correctIndex: 0
    },
    {
        question: "Who is known as the 'Father of the Indian Banking System'?",
        choices: ["Mahatma Gandhi", "Raghuram Rajan", "Sir Sorabji Pochkhanawala"],
        correctIndex: 2
    },
    {
        question: "What is the primary function of the 'SEBI (Securities and Exchange Board of India)'?",
        choices: ["Regulating the insurance sector", "Protecting the interests of investors in securities", "Managing foreign exchange reserves"],
        correctIndex: 1
    },
    {
        question: "Which of the following is a form of indirect tax in India?",
        choices: ["Income Tax", "Goods and Services Tax (GST)", "Property Tax"],
        correctIndex: 1
    },
    {
        question: "Who is the current Governor of the RBI (Reserve Bank of India)?",
        choices: ["Shaktikanta Das", "Urjit Patel", "Raghuram Rajan"],
        correctIndex: 0
    },
    {
        question: "What does 'ATM' stand for in the context of banking?",
        choices: ["Automated Teller Machine", "Advanced Transaction Module", "Automatic Transfer Mechanism"],
        correctIndex: 0
    },
    {
        question: "Which organization issues currency notes in India?",
        choices: ["Finance Ministry", "Security Printing and Minting Corporation of India Limited (SPMCIL)", "Indian Minting Corporation"],
        correctIndex: 1
    },
    {
        question: "What is the main objective of the 'Goods and Services Tax (GST)' in India?",
        choices: ["To increase government spending", "To promote international trade", "To simplify and unify the indirect tax system"],
        correctIndex: 2
    },
    {
        question: "Who regulates and supervises the credit rating agencies in India?",
        choices: ["SEBI (Securities and Exchange Board of India)", "RBI (Reserve Bank of India)", "IRDAI (Insurance Regulatory and Development Authority of India)"],
        correctIndex: 0
    },
    {
        question: "What is the purpose of the 'FDI (Foreign Direct Investment)' in the Indian economy?",
        choices: ["To regulate stock prices", "To encourage domestic production", "To promote investment from abroad"],
        correctIndex: 2
    }
    
];

// This completes the list of 45 IBPS PO questions.



let currentQuestion = 0;
let score = 0;
const selectedAnswers = new Array(questions.length).fill(null); // Store user's selected answers

const questionText = document.getElementById("question-text");
const choicesList = document.getElementById("choices");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result-container");

  // Set the target time (in seconds)
  let targetTime = 30; // 30 seconds
      
  // Get the timer element
  const timerElement = document.getElementById('timer');

  // Update the timer display every second
  function updateTimer() {
    const hours = Math.floor(targetTime / 3600);
    const minutes = Math.floor((targetTime % 3600) / 60);
    const seconds = targetTime % 60;

    // Format the time as HH:MM:SS
    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    
    // Update the timer display
    timerElement.textContent = formattedTime;

    // Decrease the target time by 1 second
    targetTime--;

    // Check if the timer has reached 0
    if (targetTime < 0) {
      timerUp();
    }
  }

  // Function to pad single digit numbers with leading zeros
  function pad(num) {
    return num < 10 ? '0' + num : num;
  }

  // Function to call when timer reaches 0
  function timerUp() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        const selectedAnswerIndex = parseInt(selectedChoice.value, 10);
        selectedAnswers[currentQuestion] = selectedAnswerIndex;

        if (selectedAnswerIndex === questions[currentQuestion].correctIndex) {
            score++;
        }
        currentQuestion++;
        showQuestion();
        targetTime = 30;
    } else {
        currentQuestion++;
        showQuestion();
        targetTime = 30
    }
  }

  // Call updateTimer function every second
  const timerInterval = setInterval(updateTimer, 1000);



function showQuestion() {
    questionText.textContent = `Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
    choicesList.innerHTML = "";
    const totalQuestionsElement = document.getElementById("total-questions");
    const remainingQuestionsElement = document.getElementById("remaining-questions");
    const totalQuestions = questions.length;
    const remainingQuestions = totalQuestions - currentQuestion - 1;

    // Update the elements with the calculated values
    totalQuestionsElement.textContent = `Total Questions: ${totalQuestions}`;
    remainingQuestionsElement.textContent = `Remaining Questions: ${remainingQuestions}`;

    questions[currentQuestion].choices.forEach((choice, index) => {
        const choiceElement = document.createElement("li");
        const isChecked = selectedAnswers[currentQuestion] === index ? "checked" : "";
        choiceElement.innerHTML = `<label><input type="radio" name="choice" value="${index}" ${isChecked}> ${String.fromCharCode(97 + index)}) ${choice}</label>`;
        choicesList.appendChild(choiceElement);
    });

    // Show/hide "Previous" and "Next" buttons
    if (currentQuestion === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "inline-block";
    }

    if (currentQuestion === questions.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
    }
}

showQuestion();

nextButton.addEventListener("click", () => {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        const selectedAnswerIndex = parseInt(selectedChoice.value, 10);
        selectedAnswers[currentQuestion] = selectedAnswerIndex;

        if (selectedAnswerIndex === questions[currentQuestion].correctIndex) {
            score++;
        }
        currentQuestion++;
        showQuestion();
        targetTime = 30;
    } else {
        currentQuestion++;
        showQuestion();
        targetTime = 30
    }
});


prevButton.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
});
const certificateContainer = document.getElementById("certificate-container");
const totalquestions= document.getElementById("total-questions");
const remainingquestions= document.getElementById("remaining-questions");
const scor= document.getElementById("scor");
const passingScore = 0.10;
submitButton.addEventListener("click", () => {
    const userScorePercentage = (score / questions.length);
    if (userScorePercentage >= passingScore) {
        // User passed the test, display the certificate
        certificateContainer.style.display = "block";
        totalquestions.style.display = "none"
        remainingquestions.style.display = "none"
        questionText.textContent = "";
        choicesList.innerHTML = "";
        
        scor.innerHTML = `You have successfully completed the test with a score of ${score} Out of ${questions.length}.`;
        prevButton.style.display = "none";
        nextButton.style.display = "none";
        submitButton.style.display = "none";
    } else {
        // User didn't pass the test, display a message
        questionText.textContent = "Quiz completed!";
        choicesList.innerHTML = "";
        prevButton.style.display = "none";
        nextButton.style.display = "none";
        submitButton.style.display = "none";
        resultContainer.textContent = `Your score: ${score} out of ${questions.length}. You did not pass the test.`;
    }
});
