(function() 
 {
  var allQuestions = [{
    question: "Full form of css is ",
    options: ["centralized style sheets", "Cascading style sheets", "none of the above"],
    answer: 1
  }, {
    question: " Which of the following defines a measurement in screen pixels?",
    options: ["vw", "vh", "px"],
    answer: 2
  }, {
    question: "Which of the following property is used to change the face of a font?",
    options: ["font-style", "font-family", "font-variant"],
    answer: 1
  
    }, {
      question: "Which of the following property of a anchor element signifies visited hyperlinks?",
      options: ["visited", "link", "hover"],
      answer: 0
    }, {
      question: "Which of the following property is used to add or subtract space between the words of a sentence?",
      options: ["text-align", "text-indent", "text transform"],
      answer: 1
    }];
  
    var quesCounter = 0;
    var selectOptions = [];
    var quizSpace = $('#quiz');
      
    nextQuestion();
      
    $('#next').click(function () 
      {
          chooseOption();
          if (isNaN(selectOptions[quesCounter])) 
          {
              alert('Please select an option !');
          } 
          else 
          {
            quesCounter++;
            nextQuestion();
          }
      });
    
    
    function createElement(index) 
      {
          var element = $('<div>',{id: 'question'});
          var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
          element.append(header);
  
          var question = $('<p>').append(allQuestions[index].question);
          element.append(question);
  
          var radio = radioButtons(index);
          element.append(radio);
  
          return element;
      }
    
    function radioButtons(index) 
      {
          var radioItems = $('<ul>');
          var item;
          var input = '';
          for (var i = 0; i < allQuestions[index].options.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer" value=' + i + ' />';
            input += allQuestions[index].options[i];
            item.append(input);
            radioItems.append(item);
          }
          return radioItems;
    }
    
    function chooseOption() 
      {
          selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
      }
     
    function nextQuestion() 
      {
          quizSpace.fadeOut(function() 
              {
                $('#question').remove();
                if(quesCounter < allQuestions.length)
                  {
                      var nextQuestion = createElement(quesCounter);
                      quizSpace.append(nextQuestion).fadeIn();
                      if (!(isNaN(selectOptions[quesCounter]))) 
                      {
                        $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                      }
                  }
                else 
                  {
                      var scoreRslt = displayResult();
                      quizSpace.append(scoreRslt).fadeIn();
                      $('#next').hide();
                    
                  }
          });
      }
    
    function displayResult() 
      {
          var score = $('<p>',{id: 'question'});
          var correct = 0;
          for (var i = 0; i < selectOptions.length; i++) 
          {
            if (selectOptions[i] === allQuestions[i].answer) 
            {
              correct++;
            }
          }
          score.append('You scored ' + correct + ' out of ' +allQuestions.length);
          return score;
    }
  })();