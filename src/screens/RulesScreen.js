import React from "react";
import { Text, StyleSheet, View, Button, Image, Linking } from "react-native";

class RulesScreen extends React.Component {


  render() {

    return (
      <View style={styles.container}>


        <Text style={styles.text}>ABOUT</Text>

        <Text style={{padding:10}}>Devon Wrestling is a form of wrestling that was popular in the 19th century. </Text>
        <Text style={{padding:10}}>Many of the techniques popular in Catch Wrestling and modern Submission
          Wrestling may have originated in Devon Wrestling.
        </Text>

        <Text style={{color: 'blue', padding:10}}
      onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Devon_wrestling')}>
  Devon Wrestling Wikipedia
</Text>

<Text style={{padding:10}}>This app is in beta while the rule set of Devon Wrestling
is being live tested. Any feedback welcome.</Text>

      
        

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flex: 1,
    padding:5,
    textAlign: 'center'
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
    textAlign: 'center',
    fontSize: 20

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
