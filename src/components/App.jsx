import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './Quiz/QuestionList.jsx';
import ScoreBox from './Quiz/ScoreBox.jsx';
import Results from './Quiz/Results.jsx';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			questions: [
				{
					id: 1,
					text: 'What is your name?',
					choices: [
						{
							id: 'a',
							text: 'Mike'
						},
						{
							id: 'b',
							text: 'Brad'
						},
						{
							id: 'c',
							text: 'Sbeve'
						}
					],
					correct: 'c'
				},
				{
					id: 2,
					text: 'What is your name??',
					choices: [
						{
							id: 'a',
							text: 'Mike'
						},
						{
							id: 'b',
							text: 'Brad'
						},
						{
							id: 'c',
							text: 'Sbeve'
						}
					],
					correct: 'c'
				},
				{
					id: 3,
					text: 'What is your name????',
					choices: [
						{
							id: 'a',
							text: 'Mike'
						},
						{
							id: 'b',
							text: 'Brad'
						},
						{
							id: 'c',
							text: 'Sbeve'
						}
					],
					correct: 'c'
				},
				{
					id: 4,
					text: 'What is your name?????',
					choices: [
						{
							id: 'a',
							text: 'Mike'
						},
						{
							id: 'b',
							text: 'Brad'
						},
						{
							id: 'c',
							text: 'Sbeve'
						}
					],
					correct: 'c'
				}
			],
			score: 0,
			current: 1
		}
	}

	setCurrent(current){
		this.setState({current});
	}

	setScore(score){
		this.setState({score});
	}


	render(){
		if(this.state.current > this.state.questions.length){
			var scorebox = '';
			var results = <Results {...this.state} />;
		} else {
			var scorebox = <ScoreBox {...this.state} />;
			var results = '';
		}
		return(
			<div>
				{scorebox}
				<QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
				{results}
			</div>
		)
	}
}
export default App