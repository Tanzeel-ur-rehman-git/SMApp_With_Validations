import React, { Component } from "react";
import {
  Platform,
  View,
  Alert,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
// import Header from "../component/Header";
import { Colorbasic } from "../constant/Themez";
import AsyncStorage from "@react-native-async-storage/async-storage";
import KeyboardSpacer from "react-native-keyboard-spacer";
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailborder: 0,
      emailbordercolor: 0,
      hidePassword: true,
      userEmail: "",
      userValidEmail: false,
      userPassword: "",
      userValidPassword: false,
      passwordborder: 0,
      passwordbordercolor: 0,
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, paddingTop: 0, backgroundColor: "white" }}>
          {/* <Header
          leftIcon={true}
          leftIconAction={this.NavigationLeft.bind(this)}
          centerText={""}
          centerTextAction={this.NavigationTextCenter.bind(this)}
          centerImage={false}
          centerImageAction={this.NavigationImageCenter.bind(this)}
          righticon={false}
          rightIconAction={this.NavigationRight.bind(this)}
        /> */}

          <View style={{ padding: 25, flex: 1 }}>
            {/* <TouchableOpacity
            onPress={() => {
              this.logout();
            }}
          >
            <Text>Click here</Text>
          </TouchableOpacity> */}
            <View style={{ alignItems: "center", marginBottom: 20 }}>
              <Image
                //   resizeMode="contain"
                style={{
                  height: undefined,
                  width: "50%",
                  aspectRatio: 1,
                  borderRadius: 10,
                }}
                source={require("../assets/icon.png")}
              />
            </View>
            <View style={{ marginTop: 0 }}>
              <Text>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </Text>
            </View>
            <View style={{ marginTop: 30 }}>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontWeight: "600", fontSize: 12 }}>
                  Email Address
                </Text>
              </View>
              <View>
                <TextInput
                  style={{
                    height: 43,
                    backgroundColor: "#e3e3e3",
                    borderRadius: 5,
                    padding: 10,
                    borderWidth:
                      this.state.emailborder == 0
                        ? 0
                        : this.state.emailborder == 1
                        ? 1
                        : 1,
                    borderColor:
                      this.state.emailbordercolor == 0
                        ? "grey"
                        : this.state.emailbordercolor == 1
                        ? "green"
                        : "red",
                  }}
                  //   value={"sm"}
                  placeholder="Jhonwick@wick.com"
                  placeholderColor="#c4c3cb"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  underlineColorAndroid="transparent"
                  blurOnSubmit
                  keyboardType="email-address"
                  onChangeText={(value) => this.Emailvalidate(value)}
                />
              </View>
              <View style={{ marginBottom: 10, marginTop: 20 }}>
                <Text style={{ fontWeight: "600", fontSize: 12 }}>
                  Password
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <TextInput
                    style={{
                      height: 43,
                      backgroundColor: "#e3e3e3",
                      //   borderRadius: 5,
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                      padding: 10,
                      borderWidth:
                        this.state.passwordborder == 0
                          ? 0
                          : this.state.passwordborder == 1
                          ? 1
                          : 1,
                      borderColor:
                        this.state.passwordbordercolor == 0
                          ? "gray"
                          : this.state.passwordbordercolor == 1
                          ? "green"
                          : "red",
                    }}
                    //   onChangeText={onChangeNumber}
                    //   value={number}
                    placeholder="••••••••"
                    placeholderColor="#c4c3cb"
                    //   keyboardType="numeric"
                    secureTextEntry
                    placeholder="••••••••"
                    placeholderColor="#c4c3cb"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="done"
                    blurOnSubmit
                    underlineColorAndroid="transparent"
                    secureTextEntry={this.state.hidePassword}
                    autoCompleteType="password"
                    onChangeText={(value) => this.Passwordvalidate(value)}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: "#e3e3e3",
                    width: 35,
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                  }}
                >
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                      //   tintColor: "white",
                    }}
                    source={require("../assets/images/invisible.png")}
                  />
                </View>
              </View>

              <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={{ alignItems: "flex-end" }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "600",
                      color: "#19224C",
                    }}
                  >
                    Forget Password?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                //   backgroundColor: "red",
              }}
            >
              <TouchableOpacity
                style={{
                  height: 43,
                  backgroundColor: "#19224C",
                  borderRadius: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    fontSize: 12,
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 40, alignSelf: "center" }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontWeight: "600",
                    textTransform: "uppercase",
                    fontSize: 12,
                    // color: Platform.OS == "ios" ? "red" : "blue",
                  }}
                >
                  Don't have an account?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#D62D28",
                height: 43,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>
                Login with Gmail
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 5 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#3761EA",
                height: 43,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>
                Login with Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {Platform.OS == "ios" && <KeyboardSpacer />}
      </ScrollView>
    );
  }
  logout = async () => {
    await AsyncStorage.removeItem("onboard");
    console.log("onboarding deleteed");
    this.props.navigation.replace("SplashScreen");
  };
  NavigationRight() {
    this.props.navigation.replace("LoginScreen");
  }

  NavigationLeft() {
    this.props.navigation.replace("LoginScreen");
  }

  NavigationImageCenter() {
    this.props.navigation.replace("LoginScreen");
  }

  NavigationTextCenter() {
    this.props.navigation.replace("LoginScreen");
  }
  Emailvalidate = (ee) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(ee) === false) {
      this.setState({ userValidEmail: false });
      this.setState({ emailborder: 1 });
      this.setState({ emailbordercolor: 2 });
      console.log("Email is Not Correct");
      return false;
    } else {
      this.setState({ userEmail: ee });
      this.setState({ userValidEmail: true });
      console.log("Email is Correct");
      this.setState({ emailborder: 1 });
      this.setState({ emailbordercolor: 1 });
    }
  };
  Passwordvalidate = (pp) => {
    let reg = /^.{4,8}$/;
    if (reg.test(pp) === false) {
      this.setState({ userValidPassword: false });
      this.setState({ passwordborder: 1 });
      this.setState({ passwordbordercolor: 2 });
      console.log("Password is Not Correct");
      return false;
    } else {
      this.setState({ userPassword: pp });
      this.setState({ userValidPassword: true });
      this.setState({ passwordborder: 1 });
      this.setState({ passwordbordercolor: 1 });
      console.log("Password is Correct");
    }
  };
}

export default LoginScreen;
