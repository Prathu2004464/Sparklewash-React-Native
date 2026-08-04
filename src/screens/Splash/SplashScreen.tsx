import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  StatusBar,
} from "react-native";

import Video from "react-native-video";

const SplashScreen = ({ navigation }: any) => {

  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {

    const timer = setTimeout(() => {

      Animated.timing(opacity, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {

        navigation.replace("Auth");

      });

    }, 3800);

    return () => clearTimeout(timer);

  }, []);

  return (

    <Animated.View
      style={[
        styles.container,
        {
          opacity,
        },
      ]}>

      <StatusBar
        hidden
      />

      <Video
        source={require("../../assets/videos/landing_animation.mp4")}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        repeat={false}
        paused={false}
        onEnd={() => {

    setTimeout(() => {

      Animated.timing(opacity, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {

        navigation.replace("Auth");

      });

    }, 800);

  }}
/>

    </Animated.View>

  );

};

export default SplashScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:"#F8FAFC",
  },

});