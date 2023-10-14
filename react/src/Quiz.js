import React, { useState } from 'react';
import './App.css';

export default function App() {
	const questions = [
		{
		  question: 'Combien d’enfants sont concernés par des troubles psychiques?',
		  options: ['Environ 7.8% des enfants et adolescents sont concernés par un trouble psychique', 'Environ 13.4% des enfants et adolescents sont concernés par un trouble psychique', 'Environ 17.2% des enfants et adolescents sont concernés par un trouble psychique'],
		  correctAnswer: 'Environ 13.4% des enfants et adolescents sont concernés par un trouble psychique',
		  explanation: 'D’après une étude scientifique de 2015, on observait un trouble psychique chez 13,4% des enfants et adolescents (on estime cette prévalence autour de 18% pour les adultes), avec 6,5% pour les troubles anxieux, 2,6% pour les troubles dépressifs, 3,4% pour le TDAH “Trouble du Déficit de l’Attention avec ou sans Hyperactivité”, 3,4% pour les troubles envahissants du développement (qui peuvent entraîner des difficultés de comportement, de l’opposition, etc.).',
		},
		{
			question: 'Consulter un psychologue est encore stigmatisé : quelle est la part des personnes estimant qu’une psychothérapie doit rester secrète ?',
			options: ['6% des personnes ', '22% des personnes', '30% des personnes'],
			correctAnswer: '30% des personnes',
			explanation: 'Entamer une psychothérapie est encore stigmatisé : dans un récent sondage réalisé par l’institut YouGov, si 34% des personnes interrogées disent avoir déjà consulté un psychologue, 7% considèrent que c’est un signe de faiblesse et 30% estiment qu’une psychothérapie doit rester secrète.',
		  },
		{
			question: 'Chaque année en France, 40 000 personnes sont hospitalisées dans des établissements et services psychiatriques.',
			options: ['Vrai', 'Faux'],
			correctAnswer: 'Faux',
			explanation: 'En France, 400 000 personnes sont hospitalisées au sein des établissements et des services psychiatriques chaque année.',
		  },
		{
			question: 'En 2016, 600 jeunes ont mis fin à leurs jours en France.',
			options: ['Vrai', 'Faux'],
			correctAnswer: 'Vrai',
			explanation: '600 jeunes se sont suicidés en France en 2016, et un adolescent sur sept est en souffrance et peut être considéré comme étant « à risque suicidaire ». - Suicide chez les jeunes : un accompagnement sur mesure…',
		  },
		{
			question: 'On estime que près de 1 personne sur 10 souffrira d’une maladie mentale au cours de sa vie.',
			options: ['Vrai', 'Faux'],
			correctAnswer: 'Faux',
			explanation: 'Il s’agit plutôt de 1 personne sur 5 qui souffrira d’une maladie mentale au cours de sa vie. ',
		  },
		{
			question: 'La maladie mentale et la déficience intellectuelle sont intimement liées.',
			options: ['Vrai', 'Faux'],
			correctAnswer: 'Faux',
			explanation: 'La maladie mentale et la déficience intellectuelle sont deux états complètement différents, qu’il ne faut pas confondre. ',
		  },
		{
			question: 'La majorité des personnes souffrant de troubles mentaux ne consultent pas. ',
			options: ['Vrai', 'Faux'],
			correctAnswer: 'Vrai',
			explanation: 'Les préjugés entourant la maladie mentale incitent près de 2/3 des personnes atteintes à ne pas chercher l’aide dont elles ont tant besoin. De plus, 42% des gens aux prises avec un problème de santé mentale ne l’ont pas dit à leur famille de peur d’être jugés.',
		  },
		{
			question: 'La maladie mentale est la principale cause d’absentéisme au travail.',
			options: ['Vrai', 'Faux'],
			correctAnswer: 'Vrai',
			explanation: 'Près de 50% des absences en milieu de travail sont liées à la maladie mentale, un problème grandissant qui se doit d’être attaqué de front. ',
		  },
		{
			question: 'La seule façon de soigner les maladies mentales c’est l’hospitalisation et les médicaments.',
			options: ['Vrai', 'Faux'],
			correctAnswer: 'Faux',
			explanation: 'Les soins psychiatriques sont délivrés en majorité en dehors de l’hôpital, en ambulatoire. Psychothérapies, médicaments, entraide, soutien social (familial, amical ou professionnel) peuvent aider les personnes à aller mieux.',
		  },
		{
			question: 'Déclarer un handicap psychique au travail c’est risquer de rendre visible un diagnostic psychiatrique',
			options: ['Vrai', 'Faux'],
			correctAnswer: 'Faux',
			explanation: 'La démarche de reconnaissance d’un handicap est avant tout administrative. Elle est protégée par le secret médical. Il n’y a aucune obligation de révéler son diagnostic.',
		  }
	  ];
	
	  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	  const [selectedOption, setSelectedOption] = useState(null);
	  const [showExplanation, setShowExplanation] = useState(false);
	
	  const handleOptionSelect = (option) => {
		if (!selectedOption) {
		  setSelectedOption(option);
		  setShowExplanation(true);
		}
	  };
	
	  const handleNextQuestion = () => {
		if (currentQuestionIndex < questions.length - 1) {
		  setCurrentQuestionIndex(currentQuestionIndex + 1);
		  setSelectedOption(null);
		  setShowExplanation(false);
		} else {
		  alert('Quiz finit : Si tu as des questions, parles avec le chat !'); // You can customize the end of the quiz behavior
		}
	  };
	
	  const currentQuestion = questions[currentQuestionIndex];
	
	  return (
		<div className="quiz-container">
		  <h1>Quiz</h1>
		  <div>
		  <p>
          	<u>Question {currentQuestionIndex + 1} / {questions.length}: </u>
        	</p>
			<p>{currentQuestion.question}</p>
			<ul>
				{currentQuestion.options.map((option, index) => (
			<button
			key={index}
			onClick={() => handleOptionSelect(option)}
			style={{
				cursor: 'pointer',
				color :'black',
				backgroundColor:
				selectedOption === option
					? option === currentQuestion.correctAnswer
					? 'green'
					: 'red'
					: 'white',
      }}
    >
      {option}
	</button>
  ))}
			</ul>
			{showExplanation && <div className="explanation"><u>Explication : </u><br/>{currentQuestion.explanation}</div>}
			<button onClick={handleNextQuestion}>Next</button>
		  </div>
		</div>
	  );
	};