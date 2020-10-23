$(document).ready(function() {
  const bugAlert = "This text should not appear! If it does, it's a bug and should be reported!"
  const totalQuestions = 5;   // This var is handled by the if statements for determining when the quiz should end and loop. It exists so it is easier to add/remove questions
  
  // Declare the variables the quiz will use to choose questions, answers and result
  let questionText = bugAlert;
  let checkedAnswer = 0;
  let answer1 = bugAlert;
  let answer2 = bugAlert;
  let answer3 = bugAlert;
  let question = 0;
  let cSharp = 0;
  let javaScript = 0;
  let python = 0;
  
  function getAnswer() {
    checkedAnswer = $("input:radio[name=question]:checked").val();
    if(checkedAnswer == 1) {
      cSharp++;
      $("input:radio[name=question]:checked").prop("checked", false);
    } else if(checkedAnswer == 2) {
      javaScript++;
      $("input:radio[name=question]:checked").prop("checked", false);
    } else if(checkedAnswer == 3) {
      python++;
      $("input:radio[name=question]:checked").prop("checked", false);
    }
  }

  function getResult() {
    if(cSharp >= javaScript && cSharp >= python) {
      $("#quizResult").text("You should learn C#!");
      $("#resultLogo").prop("src", "img/C-Sharp.png").prop("alt", "C Sharp logo");
      $("#endOfQuiz").show();
    } else if(javaScript >= cSharp && javaScript >= python) {
      $("#quizResult").text("You should learn javascript!");
      $("#resultLogo").prop("src", "img/javascript.png").prop("alt", "Unnofficial Javascript logo");
      $("#endOfQuiz").show();
    } else if(python >= javaScript && python >= cSharp) {
      $("#quizResult").text("You should learn python!");
      $("#resultLogo").prop("src", "img/python.png").prop("alt", "Python logo");
      $("#endOfQuiz").show();
    }
    $("#button").css("margin-left", "10%").css("margin-top", "10%");
  }

  $("form.form-group").submit(function() {
    // Set questions, possible answers. Get, record and clear previous answers
    question++;
    if(question == 1) {
      $("#button").val("Next Question");
      $(".form-check").show();
      questionText = "What do you plan to make?";
      answer1 = "Bots I can control from my phone!";
      answer2 = "A website with many functions!";
      answer3 = "Data analysis scripts!";
    } else if(question == 2) {
      getAnswer();
      questionText = "This is the second question";
      answer1 = "And this is the first answer!";
      answer2 = "You sure about that?";
      answer3 = "Why?";
    } else if(question == 3) {
      getAnswer();
      questionText = "What Is the Airspeed Velocity of an Unladen Swallow?";
      answer1 = "African or European?";
      answer2 = "You have proved yourself worthy! Will you join me?";
      answer3 = "Roughly 11 meters per second";
    } else if(question == 4) {
      getAnswer();
      questionText = "Which of these colors do you like the most?";
      answer1 = "Purple";
      answer2 = "Yellow";
      answer3 = "Blue";
    } else if(question == 5) {
      getAnswer();
      questionText = "Lorem ipsum dolor sit amet?";
      answer1 = "Phasellus finibus velit enim";
      answer2 = "Laudate solem! \\o/";
      answer3 = "Praesent non tortor dui";
    }

    // Show and set text if on a question, hide if not, and reset if starting over
    if(question > 0 && question < (totalQuestions + 1)) {
      $("#questionText").text(questionText);
      $("#answer1").text(answer1);
      $("#answer2").text(answer2);
      $("#answer3").text(answer3);
    } else if (question == (totalQuestions + 1)) {
      $(".form-check").hide();
      $("#button").val("Start Over");
      getAnswer();
      getResult();
    } else if (question > (totalQuestions + 1)) { 
      $("#button").val("Start Quiz");
      $("#endOfQuiz").hide();
      questionText = bugAlert;
      checkedAnswer = 0;
      answer1 = bugAlert;
      answer2 = bugAlert;
      answer3 = bugAlert;
      question = 0;
      cSharp = 0;
      javaScript = 0;
      python = 0;
    }
    event.preventDefault();
  });
});