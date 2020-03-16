import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Scores = props => {
  // If timeRemaining is a string that means the match is ended
  // and we will return the string instead of time

  return (
    <View style={styles.scores}>
      <View style={styles.bluescore}>
        <Text style={styles.bluescore}> {props.blueTopScore} TOP</Text>
        <Text style={styles.bluescore}> {props.blueRideScore} RIDE</Text>
        <Text style={styles.bluescore}> {props.blueBackScore} BACK</Text>
        <Text style={styles.bluescore}> {props.blueTotalScore} TOTAL</Text>
      </View>

      <View style={styles.redscore}>
        <Text style={styles.redscore}> {props.redTopScore} TOP </Text>
        <Text style={styles.redscore}> {props.redRideScore} RIDE</Text>
        <Text style={styles.redscore}> {props.redBackScore} BACK</Text>
        <Text style={styles.redscore}> {props.redTotalScore} TOTAL</Text>
      </View>
    </View>
  );
};

export default Scores;

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
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 20
  },

  bluescore: {
    color: "blue",
    borderStyle:'solid',
    borderWidth: 2,
    borderColor: 'blue',
    fontSize: 18
  },

  redscore: {
    color: "red",
    borderStyle:'solid',
    borderWidth: 2,
    borderColor: 'red',
    fontSize: 18
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
    alignItems: "center"
  }
});
