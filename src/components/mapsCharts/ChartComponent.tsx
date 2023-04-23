import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

interface CovidData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

const ChartComponent = () => {
  const fetchData = async () => {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    const data: CovidData = response.data;
    return data;
  };

  const query = useQuery<CovidData>({
    queryKey: ["covidData"],
    queryFn: fetchData,
  });

  const [cases, setCases] = useState<{
    labels: string[];
    datasets: Array<{ label: string; data: number[]; backgroundColor: string }>;
  }>({
    labels: [],
    datasets: [{ label: "Cases", data: [], backgroundColor: "yellow" }],
  });

  const [deaths, setDeaths] = useState<{
    labels: string[];
    datasets: Array<{ label: string; data: number[]; backgroundColor: string }>;
  }>({
    labels: [],
    datasets: [
      { label: "Deaths", data: [], backgroundColor: "red" },
      { label: "Recovered", data: [], backgroundColor: "green" },
    ],
  });

  useEffect(() => {
    if (query.data) {
      const labels = Object.keys(query.data.cases);
      const casesData = Object.values(query.data.cases);
      const deathsData = Object.values(query.data.deaths);
      const recoveredData = Object.values(query.data.recovered);

      setCases({
        labels,
        datasets: [
          { label: "Cases", data: casesData, backgroundColor: "yellow" },
        ],
      });
      setDeaths({
        labels,
        datasets: [
          { label: "Deaths", data: deathsData, backgroundColor: "red" },
          { label: "Recovered", data: recoveredData, backgroundColor: "green" },
        ],
      });
    }
  }, [query.data]);

  if (query.status === "loading") {
    return <p>Loading...</p>;
  } else if (query.status === "error") {
    return <p>Oops something went wrong!</p>;
  }

  // console.log(query.data);

  return (
    <div className="w-4/5 text-center border border-red-600 m-auto">
      <p className="text-xl font-bold text-blue-500 mb-5">
        Covid Cases Fluctuations
      </p>

      <p className="font-bold text-red-400">😷 Total Covid Cases</p>
      <Line className="mt-10" data={cases}></Line>
      <p className="font-bold text-violet-500 mt-10">😷 Total Deaths and Recovery</p>
      <Line className="mt-10" data={deaths}></Line>
    </div>
  );
};

export default ChartComponent;
