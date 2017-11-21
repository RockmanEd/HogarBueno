import React, {Component} from 'react';
import {StyleSheet, View, Image,Text, StatusBar, KeyboardAvoidingView} from 'react-native';
import {Content} from 'native-base'
import MapView from 'react-native-maps';

const LATITUDEDELTA = 0.0922;
const LONGITUDEDELTA = 0.0922;

export default class Mapa extends Component{
  constructor(){
    super()
    this.state={
      region:{
        latitude:null,
        longitude:null,
        latitudeDelta: null,
        longitudeDelta:null,
      }
    }
  }

  componentWillMount(){
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        this.setState({
          region:{
            latitude:position.coords.latitude,
            longitude:position.coords.longitude,
            latitudeDelta:LATITUDEDELTA,
            longitudeDelta:LONGITUDEDELTA
          }
        })
      },
      (error)=>alert(error.message),
      {enableHightAcuracy:true, timeout:20000}
    )
    this.watchID = navigator.geolocation.watchPosition((position)=>{
      const newRegion ={
        latitude:position.coords.latitude,
        longitude:position.coords.longitude,
        latitudeDelta:LATITUDEDELTA,
        longitudeDelta:LONGITUDEDELTA
      }
    })
  }

  marker(){
    return{
      latitude: this.state.region.latitude,
      longitude: this.state.region.longitude
    }
  }
  render(){
    return(
      <View style={styles.container}>
        {this.state.region.latitude ?   <MapView
            style={styles.map}
            region={this.state.region}
            showsUserLocation={true}
            followUserLocation={true}
          >

          </MapView> : <Text>no hay nada</Text>  }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#EEE',
    },
    map: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      height:350,
      position: 'absolute'
    },
    radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 112, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  },

});
