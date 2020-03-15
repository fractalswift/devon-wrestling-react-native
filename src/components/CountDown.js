import React from "react";
import { Text, StyleSheet, View } from "react-native";

const MatchTimer = props => {
  // If timeRemaining is a string that means the match is ended
  // and we will return the string instead of time

  if (typeof props.timeRemaining === "string") {
    return (
      <View>
        <Text style={styles.status}>{props.matchStatus}</Text>
        <Text style={styles.time}> {props.timeRemaining}</Text>
        <Text style={styles.status}>{props.scoringMode}</Text>
      </View>
    );
  } else {
    // if timeRemaining is not a string it must be the time in seconds
    // convert the seconds into minutes and seconds

    let minutes = Math.floor(props.timeRemaining / 60);
    let seconds = props.timeRemaining - minutes * 60;

    // add a zero before single seconds so timer reads
    // 0:01 in stead of 0:1 etc
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return (
      <View>
        <Text style={styles.status}>{props.matchStatus}</Text>
        <Text style={styles.time}>
          {" "}
          {minutes}:{seconds}
        </Text>
        <Text style={styles.status}>{props.scoringMode}</Text>
      </View>
    );
  }
};

export default MatchTimer;

// Styles

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
