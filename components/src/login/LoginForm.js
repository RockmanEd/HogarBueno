import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Toast, Spinner,Button } from 'native-base';

export default class LoginForm extends Component{
  render(){
    return(
      <View >
        <Form style={styles.container}>

           <Item rounded style={styles.input}>
             <Input
                placeholder='Username'
                style={styles.texto}
                name="correo"
                keyboardType='email-address'
                returnKeyType='next'
                autoCapitalize='none'
            />
           </Item>
          <Item rounded style={styles.input}>
            <Input
              placeholder='Contraseña'
              style={styles.texto}
              secureTextEntry={true}
              name="password"

            />
          </Item>


         <View style={styles.hyper}>
         <TouchableOpacity>
           <Text style={styles.text}>Entrar como</Text>
         </TouchableOpacity>

              <Text style={styles.text1}>Crear Cuenta</Text>
            <TouchableOpacity >
              <Text style={styles.text}>¿Olvidaste tu Contraseña?</Text>
            </TouchableOpacity>

        </View>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding:20
  },
  input:{

    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom:10,
    paddingHorizontal:10
  },
  buttonContainer:{
    backgroundColor:'#2980b9',
    paddingVertical:15
  },
  texto:{
    color:'black'
  },
  hyper:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop:15,
    marginBottom:15,
  }

});
