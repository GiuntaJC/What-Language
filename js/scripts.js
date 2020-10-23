$(document).ready(function() {
  // Declare string variables and default bug alert variable
  const bugAlert = "This text should not appear! If it does, it's a bug and should be reported!"
  let questionText = bugAlert;
  let answer1 = bugAlert;
  let answer2 = bugAlert;
  let answer3 = bugAlert;
  let answer4 = bugAlert;
  // declare int variables
  let question = 0;
  let cSharp = 0;
  let javaScript = 0;
  let python = 0;

  $("form#quiz").submit(function() {
    $("#button").val("Next Question");
    question++;
    console.log(question);
    if(question === 1) {
      $(".radio").show();
      questionText = "This is the first question";
    } else if(question === 2) {
      questionText = "This is the second question";
    }

    // Show and set text if on a question
    if(question > 0) {
      $("#questionText").text(questionText);
    }
    event.preventDefault();
  });
});