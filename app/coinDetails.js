import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Path, Svg } from "react-native-svg";
import { LineChart } from "react-native-wagmi-charts";
// import { LineChart } from "react-native-chart-kit";
import { StatusBar } from "expo-status-bar";
import { router, useSearchParams, useLocalSearchParams } from "expo-router";
import {
  CartesianChart,
  Line,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  useChartPressState,
} from "victory-native";
import { Circle } from "@shopify/react-native-skia";
import Chart from "../components/chart";
import { AntDesign } from "@expo/vector-icons";
const coinDetails = () => {
  function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const { state, isActive } = useChartPressState({ x: 0, y: { highTmp: 0 } });

  const data = [
    {
      timestamp: 1625945400000,
      open: 33575.25,
      high: 33600.52,
      low: 33475.12,
      close: 33520.11,
    },
    {
      timestamp: 1625946300000,
      open: 33545.25,
      high: 33560.52,
      low: 33510.12,
      close: 33520.11,
    },
    {
      timestamp: 1625947200000,
      open: 33510.25,
      high: 33515.52,
      low: 33250.12,
      close: 33250.11,
    },
    {
      timestamp: 1625948100000,
      open: 33215.25,
      high: 33430.52,
      low: 33215.12,
      close: 33420.11,
    },
  ];

  const [chartData, setChartData] = React.useState(null);
  const [currentPrice, setCurrentPrice] = React.useState(0);
  const [price_change_percentage_24h, setPriceChangePercentage_24h] =
    React.useState();
  let params = useLocalSearchParams();
  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784" || "white";
  async function getInitialPrice(coinId) {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`
      );
      return response.data[coinId].usd;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async function getCurrentPrice(coinId) {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`
      );
      setCurrentPrice(response.data[coinId].usd);
      // return response.market_data[coinId].usd;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${params.id}?localization=false&tickers=false&community_data=false&developer_data=false`
      );
      // console.log(response.data);
      setPriceChangePercentage_24h(
        response.data.market_data.price_change_percentage_24h
      );
      console.log(response.data.market_data.price_change_percentage_24h);
      // return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  function ToolTip({ x, y }) {
    return <Circle cx={x} cy={y} r={8} color="white" />;
  }

  const DATA = Array.from({ length: 31 }, (_, i) => ({
    day: i,
    highTmp: 40 + 30 * Math.random(),
  }));
  React.useEffect(async () => {
    const coinId = "bitcoin"; // Replace with the actual coin ID
    const initialPrice = await getInitialPrice(`${params.id}`);
    const currentPrice = await getCurrentPrice(`${params.id}`);

    fetchData().then((data) => {
      setChartData(data); // Assuming data structure matches what your LineChart expects
    });
    console.log(price_change_percentage_24h);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#121212"} />
      <View
        style={{
          flexDirection: "row",
          gap: 15,
          margin: 10,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 3 }}>
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
          <Image
            source={{
              uri: params.image,
            }}
            height={50}
            width={50}
          />
          <Text
            style={{ color: "white", fontFamily: "RRegular", fontSize: 25 }}
          >
            {params.name}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignSelf: "flex-end",
            // display: "flex",
            height: 50,
            width: 50,
            backgroundColor: "#1d1d1d",
            borderRadius: 15,
            // padding: 5,
            alignContent: "center",
          }}
        >
          <Svg
            viewBox="0 0 24 24"
            height={30}
            width={30}
            xmlns="http://www.w3.org/2000/svg"
            style={{ alignSelf: "center" }}
          >
            <Path
              fill="red"
              d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"
            />
          </Svg>
        </TouchableOpacity>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: 60,
          }}
        >
          <Text
            style={{
              color: "white",
              margin: 10,
              textAlign: "center",
              fontSize: 30,
              fontFamily: "SRegular",
            }}
          >
            $ {addCommas(currentPrice)}
          </Text>
          <View
            style={{
              backgroundColor: percentageColor,
              // paddingHorizontal: 3,
              // paddingVertical: 8,
              borderRadius: 5,
              flexDirection: "row",
              width: 80,
              alignContent: "center",
              justifyContent: "center",
              padding: 5,
              gap: 5,
            }}
          >
            <AntDesign
              name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
              size={16}
              color={"white"}
              style={{ alignSelf: "center" }}
            />
            <Text style={{ fontFamily: "SRegular", color: "white" }}>
              {price_change_percentage_24h?.toFixed(2)}%
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#1d1d1d",
            height: 200,
            borderRadius: 10,
            margin: 5,
          }}
        >
          {/* <Chart /> */}
          <CartesianChart
            data={DATA}
            // chartType="area"
            xKey="day"
            yKeys={["highTmp"]}
            // axisOptions={{
            //   font,
            // }}
            chartPressState={state}
          >
            {({ points }) => (
              <>
                <Line
                  points={points.highTmp}
                  color={percentageColor}
                  strokeWidth={3}
                />
                {isActive && (
                  <ToolTip x={state.x.position} y={state.y.highTmp.position} />
                )}
              </>
            )}
          </CartesianChart>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          alignSelf: "center",
          margin: 10,
          padding: 10,
        }}
      >
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: "green",
            margin: 5,
            width: Dimensions.get("screen").width * 0.46,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontFamily: "RBold", fontSize: 18 }}>
            Buy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: "crimson",
            margin: 5,
            width: Dimensions.get("screen").width * 0.46,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontFamily: "RBold", fontSize: 18 }}>
            Sell
          </Text>
        </TouchableOpacity>
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
    marginTop: 0.1,
  },
});
