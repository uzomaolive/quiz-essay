  function calculateScore() {
    const correctAnswers = {
      q1: 'a',
      q2: 'a',
      q3: 'c',
      q4: 'b'
    };
  
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
  
    for (const question in correctAnswers) {
      const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
      if (selectedOption && selectedOption.value === correctAnswers[question]) {
        score++;
      }
    }
  
    const percentage = ((score / totalQuestions) * 100).toFixed(2);
    const mark = ((score / totalQuestions) * 25).toFixed(2);
  
    const resultDiv = document.getElementById('essayResult');
    resultDiv.innerHTML = ''; // Clear the content
  
    // Create a paragraph for displaying the percentage
    const percentageParagraph = document.createElement('p');
  
    // Create a span for the text "Percentage:"
    const percentageText = document.createElement('span');
    percentageText.innerText = 'Score: ';
    percentageParagraph.appendChild(percentageText);
  
    // Create a button for displaying the percentage
    const percentageButton = document.createElement('button');
    percentageButton.innerText = `${percentage}%`;
    percentageButton.className = 'percentage-button';
    percentageParagraph.appendChild(percentageButton);
  
    resultDiv.appendChild(percentageParagraph);
  
    // Disable radio buttons after submitting the form
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => {
      button.disabled = true;
    });
  }
  