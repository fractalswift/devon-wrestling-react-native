import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CountDown = props => {
  // If timeRemaining is a string that means the match is ended
  // and we will return the string instead of time

  if (typeof props.timeRemaining === "string") {
    return (
      <View>
        <Button
          color="green"
          title={props.centralButton}
          onPress={props.startTimer}
        />

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

    const getButtonColor = centralButton => {
      if (centralButton == "Pause") {
        return "lightgray";
      } else {
        return "green";
      }
    };

    return (
      <View>
        <Button
          color={getButtonColor(props.centralButton)}
          title={props.centralButton}
          onPress={props.startTimer}
        />

        <Text style={styles.time}>
          {" "}
          {minutes}:{seconds}
        </Text>
        <Text style={styles.status}>{props.scoringMode}</Text>
      </View>
    );
  }
};

export default CountDown;

// Styles

const styles = StyleSheet.create({
  time: {
    fontSize: 52,
    textAlign: "center"
  },

  status: {
    textAlign: "center"
  }
});
