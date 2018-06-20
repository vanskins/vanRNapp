import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {
    height: 60,
    width: 200,
    backgroundColor: 'limegreen',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '500',
  },
});

const Button = (props) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={props.onPress}
    >
      <Text style={styles.textStyle}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
