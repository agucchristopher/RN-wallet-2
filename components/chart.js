import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";

const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];

function Example() {
  return <LineChart data={data} />;
}
