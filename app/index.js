import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native";
import { Path, Svg } from "react-native-svg";
import { coins } from "../assets/data";
import { router } from "expo-router";
import Animated, {
  BounceIn,
  SlideInLeft,
  ZoomIn,
} from "react-native-reanimated";

const app = () => {
  function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          color: "white",
          fontFamily: "RRegular",
          display: "flex",
          alignSelf: "center",
          margin: 20,
          marginBottom: 10,
        }}
      >
        My Wallet
      </Text>
      <View
        style={{
          alignSelf: "center",
          margin: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Animated.View
          resizeMode="cover"
          entering={ZoomIn}
          // source={require("../assets/images/onBlack-pattern-front.png")}
          style={{
            height: 180,
            width: Dimensions.get("window").width * 0.9,
            backgroundColor: "#1d1d1d",
            margin: 13,
            alignContent: "center",
            borderRadius: 20,
            opacity: 0.9,
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontFamily: "RMedium",
              margin: 5,
              textAlign: "center",
            }}
          >
            Total Balance
          </Text>

          <Text
            style={{
              fontSize: 30,
              color: "white",
              fontFamily: "SRegular",
              margin: 5,
              marginTop: 5,
              textAlign: "center",
            }}
          >
            $501,200.52
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignSelf: "center",
              gap: 10,
              margin: 10,
              justifyContent: "center",
            }}
          >
            {/* Send */}
            <TouchableOpacity
              style={{
                backgroundColor: "#121212",
                padding: 15,
                borderRadius: 15,
              }}
            >
              <Svg
                width={30}
                height={30}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <Path
                  fill={"#fff"}
                  d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                ></Path>
              </Svg>
            </TouchableOpacity>
            {/* Recieve */}
            <TouchableOpacity
              style={{
                backgroundColor: "#121212",
                padding: 15,
                borderRadius: 15,
              }}
            >
              <Svg
                width={30}
                height={30}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <Path
                  fill={"#fff"}
                  d="M9 13.589L17.6066 4.98242L19.0208 6.39664L10.4142 15.0032H18V17.0032H7V6.00324H9V13.589Z"
                ></Path>
              </Svg>
            </TouchableOpacity>
            {/* Swap */}
            <TouchableOpacity
              style={{
                backgroundColor: "#121212",
                padding: 15,
                borderRadius: 15,
              }}
            >
              <Svg
                width={30}
                height={30}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <Path
                  fill={"#fff"}
                  d="M16.0503 12.0498L21 16.9996L16.0503 21.9493L14.636 20.5351L17.172 17.9988L4 17.9996V15.9996L17.172 15.9988L14.636 13.464L16.0503 12.0498ZM7.94975 2.0498L9.36396 3.46402L6.828 5.9988L20 5.99955V7.99955L6.828 7.9988L9.36396 10.5351L7.94975 11.9493L3 6.99955L7.94975 2.0498Z"
                ></Path>
              </Svg>
            </TouchableOpacity>
            {/* History */}
            <TouchableOpacity
              style={{
                backgroundColor: "#121212",
                padding: 15,
                borderRadius: 15,
              }}
            >
              <Svg
                width={30}
                height={30}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <Path
                  fill={"#fff"}
                  d="M2.00488 9.5V4C2.00488 3.44772 2.4526 3 3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V9.5C20.6242 9.5 19.5049 10.6193 19.5049 12C19.5049 13.3807 20.6242 14.5 22.0049 14.5V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V14.5C3.38559 14.5 4.50488 13.3807 4.50488 12C4.50488 10.6193 3.38559 9.5 2.00488 9.5ZM4.00488 7.96776C5.4866 8.70411 6.50488 10.2331 6.50488 12C6.50488 13.7669 5.4866 15.2959 4.00488 16.0322V19H20.0049V16.0322C18.5232 15.2959 17.5049 13.7669 17.5049 12C17.5049 10.2331 18.5232 8.70411 20.0049 7.96776V5H4.00488V7.96776ZM9.00488 9H15.0049V11H9.00488V9ZM9.00488 13H15.0049V15H9.00488V13Z"
                ></Path>
              </Svg>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
      {/* Portfolio */}
      <Text
        style={{
          fontSize: 30,
          color: "white",
          fontFamily: "RRegular",
          margin: 10,
          marginLeft: 25,
        }}
      >
        My Assets
      </Text>
      <FlatList
        data={coins}
        renderItem={({ item }) => {
          let percentageColor =
            item.price_change_percentage_24h < 0
              ? "#ea3943"
              : "#16c784" || "white";
          return (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                gap: 5,
                margin: 15,
                justifyContent: "space-between",
              }}
              onPress={() =>
                router.push({ pathname: "/coinDetails", params: item })
              }
            >
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Image
                  style={{ height: 40, width: 40, margin: 5, marginLeft: 15 }}
                  source={{ uri: item.image }}
                />
                <View style={{ gap: 5 }}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontFamily: "SRegular",
                    }}
                  >
                    {`${item.symbol}`.toUpperCase()}
                  </Text>
                  <Text
                    style={{
                      color: "grey",
                      fontSize: 18,
                      fontFamily: "SRegular",
                    }}
                  >
                    {`${item.name}`}
                  </Text>
                </View>
              </View>
              <View style={{ margin: 5 }}>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "SRegular",
                    display: "flex",
                    alignSelf: "flex-end",
                    fontSize: 18,
                  }}
                >
                  $ {addCommas(`${(" ", item.current_price)}`.toUpperCase())}
                </Text>
                <Text
                  style={{
                    color: percentageColor,
                    fontFamily: "SRegular",
                    display: "flex",
                    alignSelf: "flex-end",
                    fontSize: 18,
                    gap: 5,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: percentageColor,
                      // paddingHorizontal: 3,
                      // paddingVertical: 8,
                      borderRadius: 5,
                      flexDirection: "row",
                      width: 25,
                      alignContent: "center",
                      justifyContent: "center",
                      padding: 5,
                      gap: 5,
                      margin: 5,
                    }}
                  >
                    <AntDesign
                      name={
                        item.price_change_percentage_24h < 0
                          ? "caretdown"
                          : "caretup"
                      }
                      size={14}
                      color={"white"}
                      style={{ alignSelf: "center" }}
                    />
                  </View>{" "}
                  {addCommas(
                    `${Math.abs(item.price_change_percentage_24h)?.toFixed(2)}%`
                  )}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    flex: 1,
  },
});
