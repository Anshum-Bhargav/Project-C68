import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class FacebookScreen extends React.Component {
  render(){
    return(
      <View style={{justifyContent: 'center', alignItems:'center', marginTop:'100'}}>
        <Text>FaceBook</Text>
      </View>
      
    );
  }
}