let questions = [
  {
    question: "Wann wurde das Deutsche Kaiserreich gegründet ?",
    answer_1: "Am 20. Dezember 1870",
    answer_2: "Am 13. Mai 1872",
    answer_3: "Am 18. Januar 1871",
    answer_4: "Am 3. Oktober  1871",
    right_answer: "answer_3",
  },
  {
    question: "Das Deutsche Kaiserreich war ein ...",
    answer_1: "Bund der deutschen Fürsten",
    answer_2: "Bund der deutschen Könige",
    answer_3: "Bund der deutschen Herzöge",
    answer_4: "Bund der deutschen Priester",
    right_answer: "answer_1",
  },
  {
    question:
      "Welche Berufsgruppe vergrößerte sich im Kaiserreich von 307.000 im Jahr 1882 auf 1,3 Milionen im Jahr 1907 ?",
    answer_1: "Arbeiter",
    answer_2: "Landarbeiter/Bauern",
    answer_3: "Facharbeiter",
    answer_4: "Angestellte",
    right_answer: "answer_4",
  },
  {
    question: "Der Deutsche Kaiserreich war eine ... ",
    answer_1: "Konstitutionelle Monarchie",
    answer_2: "Diktatur",
    answer_3: "Parlamentarische Monarchie",
    answer_4: "Absolute Monarchie",
    right_answer: "answer_1",
  },
  {
    question: "Was passierte am 9. November 1938 in Deutschland ?",
    answer_1: "Beginnt der zweite Weltkrieg",
    answer_2: "Adolf Hitler wird Reichspräsident",
    answer_3: "Jüdische Geschäfte und Synagogen werden zerstört",
    answer_4: "Der Reichstag wurde aufgelöst",
    right_answer: "answer_3",
  },

  {
    question:
      "Wann waren die Nazionalsozialisten mit Adolf Hitler in Deutschland an der Macht ?",
    answer_1: "1918 bis 1923",
    answer_2: "1933 bis 1945",
    answer_3: "1938 bis 1945",
    answer_4: "1945 bis 1989",
    right_answer: "answer_2",
  },
  {
    question:
      "Die Nationalsozialisten mit Adolf Hitler erreichten in 1933 in Deutschland ...",
    answer_1: "eine Monarchie.",
    answer_2: "eine Diktatur.",
    answer_3: "ein Fürstentum.",
    answer_4: "einen demokratischen Staat.",
    right_answer: "answer_2",
  },
  {
    question: "Was war am 8. Mai 1945 ?",
    answer_1: "Tod Adolf Hitlers",
    answer_2: "Begin des Berliner Mauerbaus",
    answer_3: "Wahl von Konrad Adenauer zum Bundeskanzler",
    answer_4: "Ende des Zweiten Weltkriegs in Europa",
    right_answer: "answer_4",
  },
  {
    question:
      "Welche deutsche Stadt wurde nach dem Zweiten Weltkrieg in vier Sektoren aufgeteilt  ?",
    answer_1: "München",
    answer_2: "Berlin",
    answer_3: "Frankfurt/Oder",
    answer_4: "Aachen",
    right_answer: "answer_2",
  },
  {
    question: "Wann wurde die Bundesrepublik Deutschland gegründet ?",
    answer_1: "1939",
    answer_2: "1945",
    answer_3: "1949",
    answer_4: "1951",
    right_answer: "answer_3",
  },
];

let correctAnswer = 0;
let currentQ = 0;
let audio_success = new Audio('audio/correct.mp3');
let audio_fail = new Audio('audio/wrong.mp3');

function init() {
    document.getElementById('allQ').innerHTML = questions.length;
    currentQuestion();
}

function currentQuestion() {
  if (gameIsOver()) {
    //show endscreen
    showEndScreen();
  } else {
    updateProgressBar();
    updateToNextQuestion();
  }
}

function gameIsOver(){
    return currentQ >= questions.length;
}

function answer(answer) {
  let question = questions[currentQ];
  let theRightAnswer = question["right_answer"];
  if (answer == theRightAnswer) {
    document.getElementById(answer).parentNode.classList.add('bg-success'); //.parentNode --> wird dem übergeordnetem Element hinzugefügt
    audio_success.play();
    correctAnswer++;
  } else {
    audio_fail.play();
    document.getElementById(answer).parentNode.classList.add('bg-danger');
    document.getElementById(theRightAnswer).parentNode.classList.add('bg-success');
  }
  document.getElementById('next-button').disabled = false; // Der "Nächste Frage" Button wird wieder anclickbar
}

function nextQuestion() {
  currentQ++;
  currentQuestion();
  document.getElementById('next-button').disabled = true;
  resetAnswer();
}

function resetAnswer() {
  document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_1').parentNode.classList.remove('bg-success');
  document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_2').parentNode.classList.remove('bg-success');
  document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_3').parentNode.classList.remove('bg-success');
  document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function newGame() {
    correctAnswer = 0;
    currentQ = 0;
  document.getElementById('header-img').src = 'img/quiz.jpg';
  document.getElementById('questionBody').style = ' '; //Endscreen ausblenden
  document.getElementById('endScreen').style = 'display: none'; //questionBody wieder anzeigen
  
 init();
}
function showEndScreen(){
    
    document.getElementById('allQu').innerHTML = questions.length;
    document.getElementById('correctAnswer').innerHTML = correctAnswer;
    document.getElementById('header-img').src = 'img/win.jpg';
    document.getElementById('endScreen').style = ' ';
    document.getElementById('questionBody').style = 'display: none';
}

function updateToNextQuestion(){
   
    let question = questions[currentQ];
    document.getElementById('Q').innerHTML = currentQ + 1;
    document.getElementById('questiontext').innerHTML = question["question"];
    document.getElementById('answer_1').innerHTML = question["answer_1"];
    document.getElementById('answer_2').innerHTML = question["answer_2"];
    document.getElementById('answer_3').innerHTML = question["answer_3"];
    document.getElementById('answer_4').innerHTML = question["answer_4"];
}

function updateProgressBar(){
    let percent = (currentQ + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width : ${percent}%`;

}