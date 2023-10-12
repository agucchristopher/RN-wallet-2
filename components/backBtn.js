import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Path, Svg } from "react-native-svg";
import { router } from "expo-router";

const backBtn = () => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        width: 50,
        backgroundColor: "#1d1d1d",
        borderRadius: 15,
      }}
      onPress={() => router.back()}
    >
      <Svg
        height={45}
        width={45}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <Path
          fill={"#fff"}
          d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
        ></Path>
      </Svg>
    </TouchableOpacity>
  );
};

export default backBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    flex: 1,
    padding: 15,
  },
});
