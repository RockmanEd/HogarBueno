import React, { Component } from 'react';
import {StyleSheet, StatusBar,TouchableOpacity} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Body,Title,Right,Toast } from 'native-base';
import Mapa from './Mapas';


export default class FooterTabsIconTextExample extends Component {


  render() {
    return (
      <Container>

        <Mapa />
        <Footer >
          <FooterTab>
            <Button vertical>
              <Icon name="apps" style={styles.texto} />
              <Text style={styles.texto}>Perfil</Text>
            </Button>

            <Button vertical>
              <Icon active name="navigate" style={styles.texto} />
              <Text style={styles.texto}>Map</Text>
            </Button>
            <Button vertical >
            <Icon name='close' style={styles.texto}/>
           <Text style={styles.texto}>Salir</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  texto:{
    color:'black'
  },

});
