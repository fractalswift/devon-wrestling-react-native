import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

import CountDown from "../components/CountDown";
import Scores from "../components/Scores";
import ButtonPanel from "../components/ButtonPanel";

class MatchScreen extends React.Component {
  state = {
    // Match states
    timeRemaining: this.props.navigation.getParam("data"),
    matchStatus: "ready",
    scoringMode: "Neutral",
    centralButton: "Start",
    centralButtonIcon: "play",
    matchResult: "DRAW",
    // Scores
    blueBackScore: 0,
    blueTopScore: 0,
    blueRideScore: 0,
    blueTotalScore: 0,
    redBackScore: 0,
    redTopScore: 0,
    redRideScore: 0,
    redTotalScore: 0
  };

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
    setInterval(() => this.endMatch(), 1000);
  }

  tick = () => {
    if (this.state.matchStatus == "inprogress") {
      // count the scores
      switch (this.state.scoringMode) {
        case "blue top pin":
          this.setState({ blueTopScore: this.state.blueTopScore + 1 });
          break;
        case "red top pin":
          this.setState({ redTopScore: this.state.redTopScore + 1 });
          break;
        case "blue ride":
          this.setState({ blueRideScore: this.state.blueRideScore + 2 });
          break;
        case "red ride":
          this.setState({ redRideScore: this.state.redRideScore + 2 });
          break;
        case "blue back":
          this.setState({ blueBackScore: this.state.blueBackScore + 3 });
          break;
        case "red back":
          this.setState({ redBackScore: this.state.redBackScore + 3 });
          break;
      }
      // add up the scores to display total score
      this.setState({
        timeRemaining: this.state.timeRemaining - 1,

        blueTotalScore:
          this.state.blueRideScore +
          this.state.blueBackScore +
          this.state.blueTopScore,

        redTotalScore:
          this.state.redRideScore +
          this.state.redBackScore +
          this.state.redTopScore
      });
    }
  };

  startTimer = () => {
    switch (this.state.matchStatus) {
      case "ready":
        this.setState({ matchStatus: "inprogress" });
        this.setState({ centralButton: "Pause", centralButtonIcon: "pause" });
        break;

      case "inprogress":
        this.setState({ matchStatus: "paused" });
        this.setState({ centralButton: "Resume", centralButtonIcon: "play" });
        break;

      case "paused":
        this.setState({ matchStatus: "inprogress" });
        this.setState({ centralButton: "Pause", centralButtonIcon: "pause" });
        break;

      case "matchended":
        this.setState({
          matchStatus: "ready",
          timeRemaining: this.props.navigation.getParam("data"),
          blueRideScore: 0,
          blueBackScore: 0,
          blueTopScore: 0,
          blueTotalScore: 0,
          redTopScore: 0,
          redRideScore: 0,
          redBackScore: 0,
          redTotalScore: 0,
          scoringMode: "Neutral",
          centralButton: "Start",
          centralButtonIcon: "play",
          matchResult: "DRAW"
        });
    }
  };

  updateScoreMode = update => {
    if (this.state.matchStatus === "inprogress") {
      let mode = this.state.scoringMode == update ? "Neutral" : update;
      this.setState({ scoringMode: mode });
    }
  };

  endMatch = () => {
    if (this.state.timeRemaining < 1) {
      if (this.state.redTotalScore > this.state.blueTotalScore) {
        this.setState({ matchResult: "RED WINS" });
      } else if (this.state.redTotalScore < this.state.blueTotalScore) {
        this.setState({ matchResult: "BLUE WINS" });
      }

      this.setState({
        matchStatus: "matchended",
        centralButton: "Reset",
        centralButtonIcon: "refresh",
        timeRemaining: this.state.matchResult
      });
    }
  };

  renderResetButton = () => {
    if (
      this.state.matchStatus == "paused" ||
      this.state.matchStatus == "matchended"
    ) {
      return (
        <View>
          <Button
            title="RESET"
            onPress={() => this.props.navigation.navigate("Home")}
          >
            RESET
          </Button>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <CountDown
          matchStatus={this.state.matchStatus}
          timeRemaining={this.state.timeRemaining}
          scoringMode={this.state.scoringMode}
          startTimer={this.startTimer}
          centralButton={this.state.centralButton}
        />

        <Scores
          blueTopScore={this.state.blueTopScore}
          blueRideScore={this.state.blueRideScore}
          blueBackScore={this.state.blueBackScore}
          blueTotalScore={this.state.blueTotalScore}
          redTopScore={this.state.redTopScore}
          redRideScore={this.state.redRideScore}
          redBackScore={this.state.redBackScore}
          redTotalScore={this.state.redTotalScore}
        />

        <ButtonPanel
          updateScoreMode={this.updateScoreMode}
          renderResetButton={this.renderResetButton}
          scoringMode={this.state.scoringMode}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1
  }
});

export default MatchScreen;
