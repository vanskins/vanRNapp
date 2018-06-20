/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
export default class Loading extends Component {
  state = {
    animated: new Animated.Value(0),
    opacityA: new Animated.Value(1),
    animated2: new Animated.Value(0),
    opacityA2: new Animated.Value(1),
    animated3: new Animated.Value(0),
    opacityA3: new Animated.Value(1),
  }
  componentDidMount() {
    const { 
      animated,
      opacityA,
      animated2,
      opacityA2,
      animated3,
      opacityA3,
    } = this.state;

    Animated.stagger(100, [
      Animated.loop(
        Animated.parallel([
          Animated.timing(animated, {
            toValue: 1,
            duration: 4000,
          }),
          Animated.timing(opacityA, {
            toValue: 0,
            duration: 4000,
          }),
        ]),
      ),
      Animated.loop(
        Animated.parallel([
          Animated.timing(animated2, {
            toValue: 1,
            duration: 4000,
          }),
          Animated.timing(opacityA2, {
            toValue: 0,
            duration: 4000,
          }),
        ]),
      ),
      Animated.loop(
        Animated.parallel([
          Animated.timing(animated3, {
            toValue: 1,
            duration: 4000,
          }),
          Animated.timing(opacityA3, {
            toValue: 0,
            duration: 4000,
          }),
        ]),
      )
    ]).start();
  }
  render() {
    const { animated, opacityA, animated2, opacityA2, animated3, opacityA3 } = this.state;

    return (
        <View style={styles.container}>
          <View style={{ height: 18, width: 18, borderRadius: 10, backgroundColor: '#78e08f', alignSelf: 'center', zIndex: 1, position: 'absolute'}}/>
          <Animated.View
            style={{
              height: 150,
              width: 150,
              borderRadius: 75,
              backgroundColor: '#78e08f',
              justifyContent: 'center',
              opacity: opacityA,
              transform: [
                {
                  scale: animated,
                },
              ],
            }}
          >
            <Animated.View
              style={{
                height: 150,
                width: 150,
                borderRadius: 75,
                backgroundColor: '#b8e994',
                justifyContent: 'center',
                opacity: opacityA2,
                transform: [
                  {
                    scale: animated2,
                  },
                ],
              }}
            >
              <Animated.View
                style={{
                  height: 150,
                  width: 150,
                  borderRadius: 75,
                  backgroundColor: '#78e08f',
                  justifyContent: 'center',
                  opacity: opacityA3,
                  transform: [
                    {
                      scale: animated3,
                    },
                  ],
                }}
              />

            </Animated.View>
          </Animated.View>
        </View>
    );
  }
}

