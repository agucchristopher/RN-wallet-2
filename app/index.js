import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Image } from "react-native";

const app = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          color: "white",
          fontFamily: "RRegular",
          display: "flex",
          alignSelf: "center",
          margin: 30,
        }}
      >
        My Wallet
      </Text>
      <View
        style={{
          alignSelf: "center",
          margin: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          horizontal={true}
          data={["on-boarding-1.png", "on-boarding-2.png", "on-boarding-3.png"]}
          renderItem={({ item, index }) => {
            let image = `../assets/images/` + item;
            // console.log(item);
            return (
              <View
                style={{
                  height: 350,
                  width: 250,
                  backgroundColor: "#1d1d1d",
                  margin: 15,
                  alignContent: "flex-start",
                  borderRadius: 19,
                  marginLeft: index === 0 ? 15 : 10,
                  justifyContent: "center",
                  opacity: 0.9,
                }}
              >
                <Image
                  source={require(`../assets/images/on-boarding-1.png`)}
                  style={{
                    height: 250,
                    width: Dimensions.get("window").width * 0.6,
                  }}
                  resizeMode="contain"
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    flex: 1,
  },
});
