import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

import CountDown from "../components/CountDown";

class MatchScreen extends React.Component {
  state = {
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
    if (this.state.matchStatus == "paused") {
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
    } else if (this.state.matchStatus == "matchended") {
      return (
        <View>
          <Text>{this.state.matchResult}</Text>
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
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.tophalf}>
          <Button title={this.state.centralButton} onPress={this.startTimer} />

          <CountDown
            matchStatus={this.state.matchStatus}
            timeRemaining={this.state.timeRemaining}
            scoringMode={this.state.scoringMode}
          />

          <View style={styles.scores}>
            <View style={styles.bluescore}>
              <Text style={styles.score}>Top: {this.state.blueTopScore}</Text>
              <Text style={styles.score}>Ride: {this.state.blueRideScore}</Text>
              <Text style={styles.score}>Back: {this.state.blueBackScore}</Text>
              <Text style={styles.score}>
                Total: {this.state.blueTotalScore}
              </Text>
            </View>

            <View style={styles.redscore}>
              <Text style={styles.score}>Top: {this.state.redTopScore}</Text>
              <Text style={styles.score}>Ride: {this.state.redRideScore}</Text>
              <Text style={styles.score}>Back: {this.state.redBackScore}</Text>
              <Text style={styles.score}>
                Total: {this.state.redTotalScore}
              </Text>
            </View>
          </View>
        </View>

        <Button
          title="Neutral"
          onPress={() => {
            this.updateScoreMode("Neutral");
          }}
        />

        <View style={styles.bottomhalf}>
          <View style={styles.buttonsleft}>
            <Button
              title="Top Pin"
              onPress={() => {
                this.updateScoreMode("blue top pin");
              }}
            />
            <Button
              title="Ride"
              onPress={() => {
                this.updateScoreMode("blue ride");
              }}
            />
            <Button
              title="Back"
              onPress={() => {
                this.updateScoreMode("blue back");
              }}
            />
          </View>
          <View style={styles.buttonsright}>
            <Button
              title="Top Pin"
              onPress={() => {
                this.updateScoreMode("red top pin");
              }}
            />
            <Button
              title="Ride"
              onPress={() => {
                this.updateScoreMode("red ride");
              }}
            />
            <Button
              title="Back"
              onPress={() => {
                this.updateScoreMode("red back");
              }}
            />
          </View>

          {this.renderResetButton()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1
  },

  tophalf: {
    display: "flex",
    flex: 2
  },

  bottomhalf: {
    display: "flex",
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  time: {
    fontSize: 52,
    textAlign: "center"
  },

  status: {
    textAlign: "center"
  },

  scores: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  text: {
    fontSize: 30,
    textAlign: "center",
    padding: 10
  },

  buttons: {
    display: "flex",
    justifyContent: "space-between",
    height: 500,
    //backgroundColor: 'red',
    alignItems: "center"
  }
});

export default MatchScreen;
