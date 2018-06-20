import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../components/Button'


class Home extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#F5FCFF', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ alignItems: 'center', padding: 20 }}>
          <Text style={{ fontSize: 80, fontWeight: '600' }}>
            Ombori
          </Text>
          <Text style={{ fontSize: 20 }}>
            Code Test examination
          </Text>
        </View>
        <Button
          label="GET USERS"
          onPress={() => this.props.navigation.navigate('User')}
        />
      </View>
    );
  }
};

export default Home;
