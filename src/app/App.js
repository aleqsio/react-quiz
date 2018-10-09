import React, { Component } from 'react';
import './App.css';
import QuizHeader from './components/QuizHeader.js';
import QuizNav from './components/QuizNav.js';
import QuizQuestion from './components/QuizQuestion.js';
import QuizStart from './components/QuizStart.js';
import QuizResults from './components/QuizResults.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        challengeNo: 12345,
        challengeSubject: "Linear algebra",
        challengeDescription: "Challenge description",
        numberOfProblems: 3,
        problems: [{
          problemID: 1,
          title: "A question",
          description: "Question description"
        },
        {
          problemID: 2,
          title: "Another question",
          description: "Question description"
        },
        {
          problemID: 3,
          title: "Question",
          description: "Question description"
        }],
        answers: [{
          a: "a answer (1)",
          b: "b answer (1)",
          c: "c answer (1)",
          d: "d answer (1)"
        },
        {
          a: "a answer (2)",
          b: "b answer (2)",
          c: "c answer (2)",
          d: "d answer (2)"
        },
        {
          a: "a answer (3)",
          b: "b answer (3)",
          c: "c answer (3)",
          d: "d answer (3)"
        }],
        currentProblemNo: 1,
        userAnswers: Array(3).fill(null),
        currentView: "start"
    }
    this.requireAuth = this.requireAuth.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.renderNavButtons = this.renderNavButtons.bind(this);
    this.previousView = this.previousView.bind(this);
    this.nextView = this.nextView.bind(this);
  }

  requireAuth() {
    console.log("user authenticated");
  }
  previousView() {
    let currentView = this.state.currentView;
    if(currentView === "results"){
      currentView = "question";
      this.setState({ currentView: currentView});
    } else if(currentView === "question") {
      let i = this.state.currentProblemNo;
      if(i !== 1){
        i--;
        this.setState({currentProblemNo: i});
      } else {
        currentView = "start";
        this.setState({ currentView: currentView});
      }
    }
  }
  nextView() {
    let currentView = this.state.currentView;
    if(currentView === "start"){
      currentView = "question";
      this.setState({ currentView: currentView});
    } else if(currentView === "question") {
      let i = this.state.currentProblemNo;
      let max = this.state.numberOfProblems;
      if(i !== max){
        i++;
        this.setState({currentProblemNo: i});
      } else {
        currentView = "results";
        this.setState({ currentView: currentView});
      }
    }
  }
  handleNavClick(e) {
    e.preventDefault();
    let targ = e.target;
    if(targ.tagName.toLowerCase() === "button"){
      if(targ.innerHTML === "Back"){
        // check if should be clickable
        if(this.state.currentView !== "start"){
          this.previousView();
        }
      } else {
        // check if should be clickable
        if(this.state.currentView !== "results"){
          this.nextView();
        }
      }
    }
  }
  
  renderNavButtons() {
    let rightText = "Next";
    let leftClassName = "next";
    let rightClassName = "next";
    if(this.state.currentView === "start") {
      rightText = "Start";
      leftClassName = "greyed";
      rightClassName = "next";
    } else if(this.state.currentView === "results"){
      leftClassName = "next";
      rightClassName = "greyed";
    }
    let leftButton = <button className={leftClassName}>Back</button>;
    let rightButton = <button className={rightClassName}>{rightText}</button>;
    return(
      <QuizNav 
        onClick={this.handleNavClick}
        backButton={leftButton}
        nextButton={rightButton}
        />
    );
  }

  renderMainView(currentView) {
    switch(currentView) {
      case 'start':
      return(
        <QuizStart 
        subject={this.state.challengeSubject}
        description={this.state.challengeDescription}
        />
      );
      case 'results':
      return(
        <QuizResults />
      );
      default:
        let currentProblem = this.state.problems[this.state.currentProblemNo - 1];
        let currentAnswers = this.state.answers[this.state.currentProblemNo - 1];
        return(
          <QuizQuestion
          problemid={currentProblem.currentProblemNo}
          problemtitle={currentProblem.problemtitle}
          problemdescription={currentProblem.problemdescription}
          answers={currentAnswers}
          handleClick={this.handleQuestionClick}
          />
        );
    }
  }

  render() {
    console.log({problem: this.state.currentProblemNo, view: this.state.currentView});
    return (
        <div className="quiz">
          <QuizHeader />
          <div className="mainview">
          {this.renderMainView(this.state.currentView)}
          </div>
          {this.renderNavButtons()}
        </div>
    );
  }
}

export default App;
