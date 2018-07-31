import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";
import "./components/FriendCard/FriendCard.css"
import Jumbotron from "./components/Jumbotron";
import ScoreCard from "./components/ScoreCard";

var friendsList = friends.map(a => {
  a.selected = false
  return a;
});

var message = "Click to Begin"
var score = 0
var topScore = 0;
var buzz = false;

class App extends Component {
  // Setting this.state.friends to the friends json array also message , scores

  state = {
    friendsList, message, score, topScore , buzz
  };


  // onClicking the friend card recaculate the scores , reshuffle the friends array and set state
  handleClickItem = id => {

    let index = friendsList.findIndex(a => a.id === id)

    if (friendsList[index].selected === false) {
      buzz = false;
      friendsList[index].selected = true
      if (score === 12) {
        score = 0
      }
      score += 1
      if (score > topScore) {
        topScore = score
      }
      if (score === 12) {
        message = "Congrats! You passed the test!..."
        friendsList = friends.map(a => {
          a.selected = false
          return a;
        });
      } else {
        message = "You Guessed it Correct..."
      }
    } else {

      score = 0;
      buzz = true;
      message = "Oops! You Guessed it Incorrect..."
      friendsList = friends.map(a => {
        a.selected = false
        return a;
      });
    }
    friendsList = this.shuffle(friendsList);
    this.setState({ friendsList, message, score, topScore, buzz })
  }

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Map over this.state.friends message scores and render score card and FriendCard component for each friend object
  render() {
    return (
      <div>
        <Jumbotron />
        <ScoreCard
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        {console.log(this.state)}
        <Wrapper>
          {this.state.friendsList.map(friend => 
            this.state.buzz?
            (<FriendCard
              handleClickItem={this.handleClickItem}
              id={friend.id}
              key={friend.id}
              image={friend.image}
              className="click-item buzz"
            />) :
              (<FriendCard
                handleClickItem={this.handleClickItem}
                id={friend.id}
                key={friend.id}
                image={friend.image}
                className="click-item"
              />)
          )}
        </Wrapper>
      </div>
    );
  }
}

export default App;
