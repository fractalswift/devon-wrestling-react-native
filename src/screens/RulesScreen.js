import React from "react";
import { Text, StyleSheet, View, Button, Image, Linking } from "react-native";

class RulesScreen extends React.Component {


  render() {

    return (
      <View style={styles.container}>


        <Text style={styles.text}>RULE SET</Text>

        <Text>Devon Wrestling is a form of wrestling that was popular in the 19th century
          Many of the techniques popular in Catch Wrestling and modern Submission
          Wrestling may have originated in Devon Wrestling.
        </Text>

        <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Devon_wrestling')}>
  Devon Wrestling Wikipedia
</Text>

      <Text style={styles.h2}>Modern Rules</Text>

      <Text>Winnner by any legal submission. In case of no winner by
        end of match, winner is the competitor with the highest score.
        Points are awarded for time in control:
      </Text>

      <Text>Top Pin control: 1 point per second of control</Text>
      <Text>Ride Control: 2 points per second of control</Text>
      <Text>Backcontrol: 3 points per second of control</Text>



      
        

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flex: 1
  },
  
  tophalf:{
    display:'flex',
    flex: 2
  },

  bottomhalf: {
    display: 'flex',
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  time:{
    fontSize: 52,
    textAlign: 'center'
  },

  status: {
    textAlign: 'center'
  },

  scores: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttons: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

 

  text: {
    fontSize: 30,
    textAlign: "center",
    padding: 10
  },

  h2:{
    textAlign: 'center'

  },

  buttons: {
    display: "flex",
    justifyContent: "space-between",
    height: 500,
    //backgroundColor: 'red',
    alignItems: "center"
  }
});

export default RulesScreen;
