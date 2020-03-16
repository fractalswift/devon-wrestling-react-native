import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ControlButton = props => {
  const { title, readyCol, pressedCol, scoreName, scoringMode, updateScoreMode } = props;

  // helper function for button style depending on game state

  const showPressed = (buttonTitle, unpressedColor, pressedColor) => {
    return buttonTitle == scoringMode ? pressedColor : unpressedColor;
  };

  return (
    <Button
      color={showPressed({ scoreName }, { readyCol }, { pressedCol })}
      title={title}
      onPress={() => {
        updateScoreMode({ title });
      }}
    />
  );
};

export default ControlButton;
