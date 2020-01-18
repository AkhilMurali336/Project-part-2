import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
   
     } from 'react-native';
     

export default class Regform extends React.Component {
  render() {
  return (
    <View style={ styles.regform }>
     <Text style={styles.header}>REGISTRATION FORM</Text>

 <TextInput style={ styles.name } placeholder="Enter your Name"
 underlineColorAndroid = {'transparent'}/>

<TextInput style={ styles.email } placeholder="Enter your email id"
 underlineColorAndroid = {'transparent'}/>

<TextInput style={ styles.age } placeholder="Enter your age"
 underlineColorAndroid = {'transparent'}/>
    </View> 
    
    
  );
}
}

const styles = StyleSheet.create({
  regform: {
  alignSelf: 'stretch',
     },
     header: {
    
       fontSize: 25,
       color: 'red',
       paddingLeft:40,
       borderBottomColor: 'yellow',
       borderBottomWidth: 2,
     },
     name: {
       alignSelf:'stretch',
       color: 'red',
       height:40,
       borderBottomColor: 'yellow',
       borderBottomWidth: 1,
     },
     email: {
      alignSelf:'stretch',
      color: 'red',
      height:40,
      borderBottomColor: 'yellow',
      borderBottomWidth:1,
     },
     age: {
      alignSelf:'stretch',
      color: 'red',
      height:40,
      borderBottomColor: 'yellow',
      borderBottomWidth:1,
     },
    
    
    
});