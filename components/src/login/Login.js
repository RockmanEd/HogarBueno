import React, {Component} from 'react';
import {StyleSheet, View, Image,Text, StatusBar, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import logo from '../../assets/image/logo.png';
import LoginForm from './LoginForm';


export default class Login extends Component{
  render(){
    return(
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Un Nuevo Hogar Para Esos Compañeros</Text>
          <Image source={logo} style={styles.img}/>
        </View>

        <LoginForm/>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#d0eceb'
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow:1,
    justifyContent:'center'
  },
  img: {
  height:230,
  width: 200,
  },
  title:{
    color: 'black',
    marginTop:10,
    width:160,
    textAlign:'center',
    opacity:0.9,
    fontSize:20,
  }
});
