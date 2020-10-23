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
    checkedAnswer = parseInt($("input:radio[name=question]:checked").val());
    console.log(checkedAnswer); // DEBUG CODE
  
    if(checkedAnswer === 1) {
      console.log("Answer 1");
      cSharp++;
      $("input:radio[name=question]:checked").prop("checked", false);
    } else if(checkedAnswer === 2) {
      console.log("Answer 2");
      javaScript++;
      $("input:radio[name=question]:checked").prop("checked", false);
    } else if(checkedAnswer === 3) {
      console.log("Answer 3");
      python++;
      $("input:radio[name=question]:checked").prop("checked", false);
    } 
  }

  $("form#quiz").submit(function() {
    question++;
    console.log(question); // DEBUG CODE

    // Set questions and possible answers
    if(question === 1) {
      $("#button").val("Next Question");
      $(".radio").show();
      questionText = "This is the first question";
      answer1 = "This is the first answer";
      answer2 = "This is the second answer";
      answer3 = "This is the third answer";
    } else if(question === 2) {
      getAnswer();
      questionText = "This is the second question";
      answer1 = "This is the first answer";
      answer2 = "This is the second answer";
      answer3 = "This is the third answer";
    } else if(question === 3) {
      getAnswer();
      questionText = "This is the third question";
      answer1 = "This is the first answer";
      answer2 = "This is the second answer";
      answer3 = "This is the third answer";
    } else if(question === 4) {
      getAnswer();
      questionText = "This is the fourth question";
      answer1 = "This is the first answer";
      answer2 = "This is the second answer";
      answer3 = "This is the third answer";
    } else if(question === 5) {
      getAnswer();
      questionText = "This is the fifth question";
      answer1 = "This is the first answer";
      answer2 = "This is the second answer";
      answer3 = "This is the third answer";
    }

    // Show and set text if on a question, hide and reset if not
    if(question > 0 && question < (totalQuestions + 1)) {
      $("#questionText").text(questionText);
      $("#answer1").text(answer1);
      $("#answer2").text(answer2);
      $("#answer3").text(answer3);
    } else if (question === (totalQuestions + 1)) {
      getAnswer();
      $(".radio").hide();
      $("#button").val("Start Over");
      $("#endOfQuizText").show();
      console.log("cSharp has " + cSharp);
      console.log("JS has " + javaScript);
      console.log("Python has " + python);
    } else if (question > (totalQuestions + 1)) { 
      $("#button").val("Start Quiz");
      $("#endOfQuizText").hide();
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