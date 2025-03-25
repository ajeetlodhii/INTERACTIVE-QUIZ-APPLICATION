document.getElementById('startQuiz').onclick = function(){
    document.getElementById('quizArea').style.display = 'block';
    document.getElementById('startQuiz').style.display = 'none';
  }
  
  function showResults() {
    let score = 0;
  
    let q1Answer = document.querySelector('input[name="q1"]:checked');
    let q2Answer = document.querySelector('input[name="q2"]:checked');
    let q3Answer = document.getElementById('q3').value.toLowerCase();
    let q4aChecked = document.getElementById('q4a').checked;
    let q4bChecked = document.getElementById('q4b').checked;
    let q4cChecked = document.getElementById('q4c').checked;
    let q4dChecked = document.getElementById('q4d').checked;
    let q5Answer = document.getElementById('q5').value;
  
    document.getElementById('results').style.display = 'block';
  
    if (q1Answer && q1Answer.value === 'mars') {
      score++;
      document.getElementById('result1').innerHTML = "Question 1: Correct! (Mars)";
    } else {
      document.getElementById('result1').innerHTML = "Question 1: Incorrect. Correct answer is Mars.";
    }
  
    if (q2Answer && q2Answer.value === 'false') {
      score++;
      document.getElementById('result2').innerHTML = "Question 2: Correct! (False)";
    } else {
      document.getElementById('result2').innerHTML = "Question 2: Incorrect. Correct answer is False.";
    }
  
    if (q3Answer === 'au') {
      score++;
      document.getElementById('result3').innerHTML = "Question 3: Correct! (Au)";
    } else {
      document.getElementById('result3').innerHTML = "Question 3: Incorrect. Correct answer is Au.";
    }
  
    if (q4aChecked && q4bChecked && q4cChecked && !q4dChecked) {
      score++;
      document.getElementById('result4').innerHTML = "Question 4: Correct! (Africa, Antarctica, Asia)";
    } else {
      document.getElementById('result4').innerHTML = "Question 4: Incorrect. Correct answers are Africa, Antarctica, and Asia.";
    }
  
    if (q5Answer === 'pacific') {
      score++;
      document.getElementById('result5').innerHTML = "Question 5: Correct! (Pacific)";
    } else {
      document.getElementById('result5').innerHTML = "Question 5: Incorrect. Correct answer is Pacific.";
    }
  
    document.getElementById('finalScore').innerHTML = "Your final score is: " + score + " out of 5.";
  }
  
  function resetQuiz() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('quizForm').reset();
  }
  


  function startQuiz() {
    document.getElementById('quizArea').style.display = 'block';
    document.getElementById('startQuiz').style.display = 'none';
  }
  
  function showResults() {
    let score = 0;
  
    let q1Answer = document.querySelector('input[name="q1"]:checked');
    let q2Answer = document.querySelector('input[name="q2"]:checked');
    let q3Answer = document.getElementById('q3').value.toLowerCase();
    let q4aChecked = document.getElementById('q4a').checked;
    let q4bChecked = document.getElementById('q4b').checked;
    let q4cChecked = document.getElementById('q4c').checked;
    let q4dChecked = document.getElementById('q4d').checked;
    let q5Answer = document.getElementById('q5').value;
  
    document.getElementById('results').style.display = 'block';
  
    if (q1Answer && q1Answer.value === 'mars') {
      score++;
      document.getElementById('result1').innerHTML = "Question 1: Correct! (Mars)";
    } else {
      document.getElementById('result1').innerHTML =
        "Question 1: Incorrect. Correct answer is Mars.";
    }
  
    if (q2Answer && q2Answer.value === 'false') {
      score++;
      document.getElementById('result2').innerHTML = "Question 2: Correct! (False)";
    } else {
      document.getElementById('result2').innerHTML =
        "Question 2: Incorrect. Correct answer is False.";
    }
  
    if (q3Answer === 'au') {
      score++;
      document.getElementById('result3').innerHTML =
        "Question 3: Correct! (Au)";
    } else {
      document.getElementById('result3').innerHTML =
        "Question 3: Incorrect. Correct answer is Au.";
    }
  
    if (q4aChecked && q4bChecked && q4cChecked && !q4dChecked) {
      score++;
      document.getElementById('result4').innerHTML =
        "Question 4: Correct! (Africa, Antarctica, Asia)";
    } else {
      document.getElementById('result4').innerHTML =
        "Question 4: Incorrect. Correct answers are Africa, Antarctica, and Asia.";
    }
  
    if (q5Answer === 'pacific') {
      score++;
      document.getElementById('result5').innerHTML =
        "Question 5: Correct! (Pacific)";
    } else {
      document.getElementById('result5').innerHTML =
        "Question 5: Incorrect. Correct answer is Pacific.";
    }
  
    document.getElementById('finalScore').innerHTML =
      "Your final score is: " + score + " out of 5.";
  }
  
  function resetQuiz() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('quizForm').reset();
  }


  function startQuiz() {
    document.getElementById('quizArea').style.display = 'block';
    document.getElementById('startQuiz').style.display = 'none';
  }
  
  function showResults() {
    let score = 0;
  
    let q1Answer = document.querySelector('input[name="q1"]:checked');
    let q2Answer = document.querySelector('input[name="q2"]:checked');
    let q3Answer = document.getElementById('q3').value.toLowerCase();
    let q4aChecked = document.getElementById('q4a').checked;
    let q4bChecked = document.getElementById('q4b').checked;
    let q4cChecked = document.getElementById('q4c').checked;
    let q4dChecked = document.getElementById('q4d').checked;
    let q5Answer = document.getElementById('q5').value;
  
    document.getElementById('results').style.display = 'block';
  
    if (q1Answer && q1Answer.value === 'mars') {
      score++;
      document.getElementById('result1').innerHTML = "Question 1: Correct! (Mars)";
    } else {
      document.getElementById('result1').innerHTML =
        "Question 1: Incorrect. Correct answer is Mars.";
    }
  
    if (q2Answer && q2Answer.value === 'false') {
      score++;
      document.getElementById('result2').innerHTML = "Question 2: Correct! (False)";
    } else {
      document.getElementById('result2').innerHTML =
        "Question 2: Incorrect. Correct answer is False.";
    }
  
    if (q3Answer === 'au') {
      score++;
      document.getElementById('result3').innerHTML =
        "Question 3: Correct! (Au)";
    } else {
      document.getElementById('result3').innerHTML =
        "Question 3: Incorrect. Correct answer is Au.";
    }
  
    if (q4aChecked && q4bChecked && q4cChecked && !q4dChecked) {
      score++;
      document.getElementById('result4').innerHTML =
        "Question 4: Correct! (Africa, Antarctica, Asia)";
    } else {
      document.getElementById('result4').innerHTML =
        "Question 4: Incorrect. Correct answers are Africa, Antarctica, and Asia.";
    }
  
    if (q5Answer === 'pacific') {
      score++;
      document.getElementById('result5').innerHTML =
        "Question 5: Correct! (Pacific)";
    } else {
      document.getElementById('result5').innerHTML =
        "Question 5: Incorrect. Correct answer is Pacific.";
    }
  
    document.getElementById('finalScore').innerHTML =
      "Your final score is: " + score + " out of 5.";
  
    // Scroll to the results section
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
  }
  
  function resetQuiz() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('quizForm').reset();
  }




  function showResults() {
    let score = 0;
    let playerName = prompt("Enter your name for the leaderboard:");

    let q1Answer = document.querySelector('input[name="q1"]:checked');
    let q2Answer = document.querySelector('input[name="q2"]:checked');
    let q3Answer = document.getElementById('q3').value.toLowerCase();
    let q4aChecked = document.getElementById('q4a').checked;
    let q4bChecked = document.getElementById('q4b').checked;
    let q4cChecked = document.getElementById('q4c').checked;
    let q4dChecked = document.getElementById('q4d').checked;
    let q5Answer = document.getElementById('q5').value;

    if (q1Answer && q1Answer.value === 'mars') score++;
    if (q2Answer && q2Answer.value === 'false') score++;
    if (q3Answer === 'au') score++;
    if (q4aChecked && q4bChecked && q4cChecked && !q4dChecked) score++;
    if (q5Answer === 'pacific') score++;

    document.getElementById('finalScore').innerHTML = `Your final score is: ${score} out of 5.`;

    if (playerName) {
        saveScore(playerName, score);
    }
}


