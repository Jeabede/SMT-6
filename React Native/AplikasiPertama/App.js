import React, { Component } from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import macbook from './macbook.jpg';

const App = () => {
  return <StylingReactNativeComponent />
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View style={{
        width: 100, 
        height: 100, 
        backgroundColor: '#0abde3', 
        borderWidth: 2, 
        borderColor: '#5f27cd', 
        marginTop: 20, 
        marginLeft: 20
      }} 
      />
      <View style={{
        padding: 12, 
        backgroundColor: '#F2F2F2', 
        width: 212, 
        borderRadius: 8
        }}
      >
        <Image source={macbook} 
          style={{
          width: 188, 
          height: 107, 
          borderRadius: 8
          }} 
        />
        <Text style={{
          fontSize: 14, 
          fontWeight: 'bold', 
          marginTop: 16
          }}
        >
            New Macbook Pro 2019
        </Text>
        <Text style={{
          fontSize: 12, 
          fontWeight: 'bold', 
          color: '#F2994A', 
          marginTop: 12
          }}
        >
            Rp. 25.000.000
        </Text>
        <Text style={{
          fontSize: 12, 
          fontWeight: '300', 
          marginTop: 12
          }}
        >
            Jawa Timur
        </Text>
        <View style={{
          backgroundColor: '#6FCF97', 
          paddingVertical: 6, 
          borderRadius: 25, 
          marginTop: 20
          }}
        >
          <Text style={{
            fontSize: 14, 
            fontWeight: '600', 
            color: 'white', 
            textAlign: 'center'
            }}
          >
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40
  },
});

const SampleComponent = () => {
  return (
    <View>
      <View style={{
        width: 80, 
        height: 80, 
        backgroundColor: '#0abde3'
        }} 
      />
      <Text>Jaihan</Text>
      <Abidin />
      <Text>Enrique</Text>
      <Text>Syahrul</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Abidin = () => {
  return <Text>Abidin</Text>;
};

const Photo = () => {
  return <Image source={{uri: 'https://placeimg.com/100/100/tech'}} style={{width: 100, height: 100}} />
};

class BoxGreen extends Component {
  render(){
    return <Text>Ini component dari class</Text>
  }
}

class Profile extends Component{
  render(){
    return (
    <View>
      <Image source={{uri: 'https://placeimg.com/100/100/animals'}} style={{width: 100, height: 100, borderRadius: 50}} />
      <Text style={{color: 'blue', fontSize: 24}}>Ini Hewan</Text>
    </View>
    );
  };
};

export default App;