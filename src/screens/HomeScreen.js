import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";
import devonFlag from '../../assets/devonFlag.png'



class HomeScreen extends React.Component {

    state = {}
  

  goToMatchScreen = (seconds) => {

    this.props.navigation.navigate('Match', {data: seconds})

  }
  
  render(){
    return (
    <View>
  <Text style={styles.text}>Devon Wrestling</Text>

  

  

  <View style={styles.buttons}>
  <Image source={devonFlag}  />

  <Button title='3 Minute Match' onPress={()=> this.goToMatchScreen(180)}/>
  <Button title='4 Minute Match' onPress={()=> this.goToMatchScreen(240)}/>
  <Button title='5 Minute Match' onPress={()=> this.goToMatchScreen(300)}/>
  <Button title='6 Minute Match' onPress={()=> this.goToMatchScreen(360)}/>
  <Button title='7 Minute Match' onPress={()=> this.goToMatchScreen(420)}/>
  <Button title='About' onPress={()=> this.props.navigation.navigate('Rules')}/>

 
  </View>
  </View>


  )}



};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    padding:10
  },

  buttons: {
    display:'flex',
    justifyContent: 'space-between',
    height: 500,
    //backgroundColor: 'red',
    alignItems: 'center'
  }
});

export default HomeScreen;
