import React from "react";
import { Text, StyleSheet, View, Button} from "react-native";

const ButtonPanel = props => {
  // If timeRemaining is a string that means the match is ended
  // and we will return the string instead of time

  return(
     
    <View>
    <Button
          title="Neutral"
          onPress={() => {
            props.updateScoreMode("Neutral");
          }}
        />
        <View style={styles.buttons}>

          <View style={styles.buttonsleft}>
            <Button
              title="Top Pin"
              onPress={() => {
                props.updateScoreMode("blue top pin");
              }}
            />
            <Button
              title="Ride"
              onPress={() => {
                props.updateScoreMode("blue ride");
              }}
            />
            <Button
              title="Back"
              onPress={() => {
                props.updateScoreMode("blue back");
              }}
            />
          </View>
          <View style={styles.buttonsright}>
            <Button
              title="Top Pin"
              onPress={() => {
                props.updateScoreMode("red top pin");
              }}
            />
            <Button
              title="Ride"
              onPress={() => {
                props.updateScoreMode("red ride");
              }}
            />
            <Button
              title="Back"
              onPress={() => {
                props.updateScoreMode("red back");
              }}
            />
          </View>
          </View>
          </View>
  )
}

export default ButtonPanel;

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


});
