import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";

class Header extends Component {
  state = {
    value: this.props.text,
  };

  onTextChangeHandler = (value) => {
    this.setState({ value });
    this.props.changeValueHandler(value);
  };

  render() {
    // console.log(this.props);
    return (
      <SafeAreaView>
        <View
          style={{
            height: 50,
            backgroundColor: "#19224C",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
          }}
        >
          <TouchableWithoutFeedback onPress={this.props.LeftLink}>
            <View
              style={{
                flex: 0.3,
                // backgroundColor: "orange",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              {this.props.leftIcon == true && (
                <TouchableWithoutFeedback onPress={this.props.leftIconAction}>
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <Image
                      style={{
                        height: 25,
                        width: 25,
                        tintColor: "white",
                      }}
                      source={require("../assets/images/left-arrow.png")}
                    />
                  </View>
                </TouchableWithoutFeedback>
              )}
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.props.CenterLink}>
            <View
              style={{
                flex: 1,
                // backgroundColor: "green",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              {this.props.centerText != "" && (
                <TouchableWithoutFeedback onPress={this.props.centerTextAction}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{ color: "#000", fontSize: 17, fontWeight: "600" }}
                    >
                      {this.props.centerText}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              )}

              {this.props.centerImage == true && (
                <TouchableWithoutFeedback
                  onPress={this.props.centerImageAction}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{
                        // height: 35,
                        width: "100%",
                      }}
                      resizeMode="contain"
                      source={require("../assets/images/logoheader.png")}
                    />
                  </View>
                </TouchableWithoutFeedback>
              )}
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.props.RightLink}>
            <View
              style={{
                flex: 0.3,
                // backgroundColor: "orange",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              {this.props.righticon == true && (
                <TouchableWithoutFeedback onPress={this.props.rightIconAction}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{
                        height: 25,
                        width: 25,
                        tintColor: "white",
                      }}
                      source={require("../assets/images/right-arrow.png")}
                    />
                  </View>
                </TouchableWithoutFeedback>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    );
  }
}

export default Header;
