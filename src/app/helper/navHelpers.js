import React from 'react';

class navHelper {
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
}