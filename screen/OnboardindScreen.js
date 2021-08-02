import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

import { Colorbasic } from "../constant/Themez";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Dots = ({ selected }) => {
  let backgroundColor;
  let width;
  let height;
  let borderRadius;
  backgroundColor = selected ? "rgba(100,30,209, 1)" : "rgba(100,30,209, 0.3)";
  width = selected ? 25 : 15;
  height = selected ? 10 : 5;
  borderRadius = selected ? 20 : 6;
  return (
    <View
      style={{
        top: -80,
        borderRadius,
        width,
        height,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 15,
      // backgroundColor: BROWNCOLOR.btnBackGround,
      borderWidth: 1,
      width: 70,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
    }}
    {...props}
  >
    <Text
      style={{
        fontSize: 16,
        alignSelf: "center",
        fontWeight: "bold",
        // color: "#fff",
      }}
    >
      Skip
    </Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 15,
      backgroundColor: Colorbasic.btnBackGround,
      width: 70,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
    }}
    {...props}
  >
    <Text
      style={{
        fontSize: 16,
        alignSelf: "center",
        fontWeight: "bold",
        color: "#fff",
      }}
    >
      Next
    </Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 15,
      backgroundColor: Colorbasic.btnBackGround,
      width: 70,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
    }}
    {...props}
  >
    <Text
      style={{
        fontSize: 16,
        alignSelf: "center",
        fontWeight: "bold",
        color: "#fff",
      }}
    >
      Done
    </Text>
  </TouchableOpacity>
);

class OnboardindScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  ontimecheck = async () => {
    await AsyncStorage.setItem("onboard", "321");
  };

  componentDidMount() {
    this.ontimecheck();
  }
  render() {
    this.ontimecheck();
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Onboarding
          bottomBarColor="#f8f7fd"
          allowFontScalingText={true}
          imageContainerStyles={styles.imageon}
          containerStyles={styles.containerStyles}
          titleStyles={styles.titleStyles}
          subTitleStyles={styles.subTitleStyles}
          SkipButtonComponent={Skip}
          NextButtonComponent={Next}
          DoneButtonComponent={Done}
          showPagination={true}
          DotComponent={Dots}
          // onSkip={() => {}}
          onDone={() => this.props.navigation.replace("LoginScreen")}
          skipToPage={3}
          pages={[
            {
              backgroundColor: "#f8f7fd",
              image: (
                <Image
                  style={{
                    borderRadius: 20,
                    height: 150,
                    width: 150,
                  }}
                  resizeMode="contain"
                  source={require("../assets/images/1.png")}
                />
              ),
              title: "Fast Profit",
              subtitle:
                "We're talking about ways you can make money fast.Invest money and get reward, bonus and profit",
            },
            {
              backgroundColor: "#f8f7fd",
              image: (
                <Image
                  style={{ borderRadius: 20, height: 150, width: 150 }}
                  resizeMode="contain"
                  // source={require("../assets/images/2.png")}
                />
              ),
              title: "Instant Withdraw",
              subtitle:
                "We’re extremely excited to launch instant withdrawals.you can deposit and withdraw funds in just a few clicks.",

              // title: (
              //   <Text
              //     style={[
              //       styles.titleStyles,
              //       {

              //       },
              //     ]}
              //   >
              //     Instant Withdraw
              //   </Text>
              // ),
              // subtitle: (
              //   <Text style={[styles.subTitleStyles, {}]}>
              //     We’re extremely excited to launch instant withdrawals.you can
              //     deposit and withdraw funds in just a few clicks.
              //   </Text>
              // ),
            },
            {
              backgroundColor: "#f8f7fd",
              image: (
                <Image
                  style={{
                    borderRadius: 20,
                    // right: 20,
                    height: 150,
                    width: 150,
                  }}
                  resizeMode="contain"
                  // source={require("../assets/images/4.png")}
                />
              ),
              title: "Protection",
              subtitle:
                "To protect your resources from modern attacks is through a multi-layer deployment of purpose-built mitigation",
            },
            {
              backgroundColor: "#f8f7fd",
              image: (
                <Image
                  style={{
                    borderRadius: 20,
                    // right: 20,
                    height: 150,
                    width: 150,
                  }}
                  resizeMode="contain"
                  // source={require("../assets/images/5.png")}
                />
              ),
              title: "24/7 support",
              subtitle:
                "Our Support team is available for any questions.Our multilingual 24/7 support allows to keep in touch.",
            },
          ]}
        />
      </View>
    );
  }
}

export default OnboardindScreen;
const styles = StyleSheet.create({
  containerStyles: {},
  imageon: {
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
  titleStyles: {
    fontSize: 24,
    fontWeight: "600",
  },
  subTitleStyles: {
    textAlign: "justify",
  },
});
