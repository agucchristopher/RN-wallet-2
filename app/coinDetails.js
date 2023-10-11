import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Path, Svg } from "react-native-svg";

const coinDetails = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 15, margin: 10 }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            backgroundColor: "#1d1d1d",
            borderRadius: 15,
          }}
        >
          <Image
            source={{
              uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
            }}
          />
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
        <Text style={{ color: "white", fontFamily: "RRegular", fontSize: 25 }}>
          Bitcoin
        </Text>
      </View>

      <View>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

export default coinDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    flex: 1,
    padding: 15,
  },
});
