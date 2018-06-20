import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, Image } from 'react-native';

const PAGE = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    width: PAGE.width,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 20,
  },
});

const UserCard = (props) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={props.onPress}
    >
      <Image source={{ uri: props.avatar }} style={{ width: 70, height: 70, borderRadius: 40 }} />
      <Text style={styles.textStyle}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default UserCard;
