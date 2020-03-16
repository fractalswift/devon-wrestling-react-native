import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ButtonPanel = props => {
  // If timeRemaining is a string that means the match is ended
  // and we will return the string instead of time

  // helper function for button style depending on game state

  // Note buttonTitle actually means button function, e.g it must
  // match the scoringMode state in parent, but cannot call it scoringMode
  // as we already use that and calling it "function" would 
  // be even more confusing

  const showPressed = (buttonTitle, unpressedColor, pressedColor) => {
    return buttonTitle == props.scoringMode ? pressedColor : unpressedColor;
  };

  return (
    <View>
      <Button
        color={showPressed("Neutral", "mediumpurple", "indigo")}
        title="Neutral"
        onPress={() => {
          props.updateScoreMode("Neutral");
        }}
      />
      <View style={styles.buttons}>
        <View style={styles.buttonsleft}>
          <Button
            color={showPressed("blue top pin", "lightskyblue", "mediumblue")}
            title="Top Pin"
            onPress={() => {
              props.updateScoreMode("blue top pin");
            }}
          />
          <Button
            color={showPressed("blue ride", "lightskyblue", "mediumblue")}
            title="Ride"
            onPress={() => {
              props.updateScoreMode("blue ride");
            }}
          />
          <Button
            color={showPressed("blue back", "lightskyblue", "mediumblue")}
            title="Back"
            onPress={() => {
              props.updateScoreMode("blue back");
            }}
          />
        </View>
        <View style={styles.buttonsright}>
          <Button
            color={showPressed("red top pin", "lightcoral", "red")}
            title="Top Pin"
            onPress={() => {
              props.updateScoreMode("red top pin");
            }}
          />
          <Button
            color={showPressed("red ride", "lightcoral", "red")}
            title="Ride"
            onPress={() => {
              props.updateScoreMode("red ride");
            }}
          />
          <Button
            color={showPressed("red back", "lightcoral", "red")}
            title="Back"
            onPress={() => {
              props.updateScoreMode("red back");
            }}
          />
        </View>
      </View>

      {props.renderResetButton()}
    </View>
  );
};

export default ButtonPanel;

// Styles

const styles = StyleSheet.create({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "60%",
    paddingTop: 10
  },

  buttonsleft: {
    width: "40%",
    margin: 10,
    height: "60%",
    display: "flex",
    justifyContent: "space-around"
  },

  buttonsright: {
    width: "40%",
    margin: 10,
    height: "60%",
    display: "flex",
    justifyContent: "space-around"
  }
});
