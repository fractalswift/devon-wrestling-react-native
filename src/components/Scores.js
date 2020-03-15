import React from "react";
import { Text, StyleSheet, View} from "react-native";

const Scores = props => {
  // If timeRemaining is a string that means the match is ended
  // and we will return the string instead of time

  return(
    <View style={styles.scores}>
    <View style={styles.bluescore}>
      <Text style={styles.score}>Top: {props.blueTopScore}</Text>
      <Text style={styles.score}>Ride: {props.blueRideScore}</Text>
      <Text style={styles.score}>Back: {props.blueBackScore}</Text>
      <Text style={styles.score}>
        Total: {props.blueTotalScore}
      </Text>
    </View>

    <View style={styles.redscore}>
      <Text style={styles.score}>Top: {props.redTopScore}</Text>
      <Text style={styles.score}>Ride: {props.redRideScore}</Text>
      <Text style={styles.score}>Back: {props.redBackScore}</Text>
      <Text style={styles.score}>
        Total: {props.redTotalScore}
      </Text>
    </View>
  </View>
  )
}

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
