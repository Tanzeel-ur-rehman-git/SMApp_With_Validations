import React, { Component } from "react";
import {
  SafeAreaView,
  Image,
  View,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      moveAnim: new Animated.Value(0),
    };
  }

  MovetoScreen() {
    setTimeout(() => {
      this.ontimecheck();
    }, 6000);
  }

  componentDidMount() {
    this.MovetoScreen();

    Animated.sequence([
      Animated.timing(this.state.moveAnim, {
        duration: 2000,
        toValue: Dimensions.get("window").width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(this.state.fadeAnim, {
      duration: 5000,
      toValue: 1,
      delay: 2000,
      useNativeDriver: false,
    }).start();
  }
  ontimecheck = async () => {
    const value = await AsyncStorage.getItem("onboard");
    if (value !== null) {
      this.props.navigation.replace("LoginScreen");
    } else {
      this.props.navigation.replace("OnboardindScreen");
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Animated.Image
            style={[styles.image, { opacity: this.state.fadeAnim }]}
            source={require("../assets/images/logo.png")}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default SplashScreen;
export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#040302",
  },
  logoText: {
    fontSize: 35,
    marginTop: 20,
    color: "white",
    fontWeight: "700",
  },
  contentContainer: {
    top: "40%",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    top: -50,
  },
  logoContainer: {
    flexDirection: "row",
  },
});
