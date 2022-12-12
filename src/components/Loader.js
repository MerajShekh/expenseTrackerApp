import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";
//import Spinner from "react-native-spinkit";

export const Loader = ({ isVisible }) => (
  <View
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: isVisible ? "flex" : "none",
      zIndex: 2,
    }}
  >
    <ActivityIndicator size="large" color="#ffffff" animating={isVisible} />
  </View>
);
