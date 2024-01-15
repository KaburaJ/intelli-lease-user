import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { StatusBar, Dimensions } from "react-native";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { BarChart, LineChart, PieChart } from "react-native-chart-kit";
import MapView, { Marker, Polygon } from "react-native-maps";
import geojsonData from "../../assets/ke_crops_size.json";
import { Picker } from "@react-native-picker/picker";

export default function Analytics() {
  const [polygons, setPolygons] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [selectedCropColor, setSelectedCropColor] = useState("red");
  const [selectedCropClass, setSelectedCropClass] = useState(null);
  const route = useRoute();
  const { latitude, longitude } = route.params || {};

  useEffect(() => {
    try {
      const validPolygons = geojsonData
        .filter(
          (feature) =>
            feature &&
            feature.geometry && // Check if 'geometry' property exists
            (!selectedCropClass || feature.CODE1 === selectedCropClass)
        )
        .map((feature, index) => {
          if (!feature || !feature.AREA_SQKM_) {
            console.error(`Invalid data at index ${index}:`, feature);
            return null;
          }

          const coordinates = feature.geometry.coordinates.map((point) => ({
            latitude: point[1],
            longitude: point[0],
          }));

          return {
            coordinates,
          };
        });

      setPolygons(validPolygons);
    } catch (error) {
      console.error("Error processing data:", error);
    }
  }, [geojsonData, selectedCropClass]);

  const handlePickerChange = (itemValue) => {
    setSelectedCropClass(itemValue);
    setSelectedCropColor(itemValue ? "red" : "rgba(131, 167, 234, 1)");
  };

  useEffect(() => {
    const filteredData = geojsonData
      .filter((item) => !selectedCropClass || item.CODE1 === selectedCropClass)
      .map((item, index) => ({
        name: item.USERLABEL,
        population: item.AREA_SQKM_,
        color:
          item.CODE1 === selectedCropClass
            ? selectedCropColor
            : getRandomColor(index), // Function to generate random colors
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
      }));

    setPieChartData(filteredData);
  }, [geojsonData, selectedCropClass, selectedCropColor]);

  const getRandomColor = (index) => {
    const colors = [
      "rgba(131, 167, 234, 1)",
      "#F00",
      "rgb(0, 0, 255)",
      "#FFA500", // Add more colors as needed
      "#00FF00",
    ];

    return colors[index % colors.length];
  };

  // Function to get different colors based on index
  const getPieChartColor = (index) => {
    const colors = ["red", "blue", "green", "yellow", "purple"]; // Add more colors as needed
    return colors[index % colors.length];
  };

  const line = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2,
      },
    ],
  };

  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const pieData = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  const uniqueCropClasses = Array.from(
    new Set(geojsonData.map((item) => item.CODE1))
  );

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.logo}>Intelli-Lease</Text>
        <Text style={styles.subText}>CountyA Map view</Text>
        <Picker
          selectedValue={selectedCropClass}
          onValueChange={handlePickerChange}
          style={{ ...styles.picker, color: "black" }}
        >
          <Picker.Item
            style={styles.pickerItem}
            label="Select Crop Class"
            value={null}
          />
          {uniqueCropClasses.map((code) => (
            <Picker.Item
              key={code}
              label={geojsonData.find((item) => item.CODE1 === code).CODE1_DESC}
              value={code}
              style={styles.pickerItem}
            />
          ))}
        </Picker>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitude || 1.2921,
            longitude: longitude || 36.8219,
            latitudeDelta: 5,
            longitudeDelta: 5,
          }}
        >
          {polygons.map((feature, index) => (
            <Polygon
              key={index}
              coordinates={
                feature && feature.geometry
                  ? feature.geometry.coordinates[0]
                  : []
              }
              fillColor="rgba(0, 128, 255, 0.5)"
              strokeColor="rgba(0, 128, 255, 1)"
            />
          ))}
        </MapView>
        <Text style={styles.subTextSmall}>
          Visual of Arable land Areas and crops grown
        </Text>
        <PieChart
          data={pieData}
          width={Dimensions.get("window").width * 0.96}
          height={220}
          chartConfig={{
            backgroundColor: "fb8c00",
            backgroundGradientFrom: "green",
            backgroundGradientTo: "#71f075",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 15,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginLeft: -8,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />

        <Text style={styles.subTextSmall}>
          Visual of Arable land Areas and crops grown
        </Text>
        <View>
          <LineChart
            data={{
              labels: line.labels,
              datasets: [
                {
                  data: line.datasets[0].data,
                  strokeWidth: 2,
                },
              ],
            }}
            width={Dimensions.get("window").width * 0.96}
            height={420}
            yAxisLabel={"$"}
            chartConfig={{
              backgroundColor: "fb8c00",
              backgroundGradientFrom: "green",
              backgroundGradientTo: "#71f075",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 15,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
              marginLeft: 10,
            }}
          />
        </View>
        <Text style={styles.subTextSmall}>
          Visual of Arable land Areas and crops grown
        </Text>
        <BarChart
          data={barData}
          width={Dimensions.get("window").width * 0.96}
          height={420}
          yAxisLabel={"$"}
          chartConfig={{
            backgroundColor: "fb8c00",
            backgroundGradientFrom: "green",
            backgroundGradientTo: "#71f075",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 15,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginLeft: 10,
            marginBottom: 25,
          }}
        />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    marginLeft: "5%",
    marginTop: "14%",
    fontSize: 22,
    marginBottom: "8%",
    color: "#ccc",
  },
  subText: {
    marginLeft: "4%",
    fontSize: 30,
    fontWeight: "300",
    color: "green",
    marginBottom: "5%",
  },
  subTextSmall: {
    marginLeft: "4%",
    marginRight: "4%",
    fontSize: 28,
    fontWeight: "300",
    color: "green",
    marginTop: "10%",
    marginBottom: "3%",
  },
  map: {
    backgroundColor: "#E2F6E9",
    height: 525,
    width: "95%",
    marginLeft: "2%",
    marginBottom: "5%",
  },
  searchInput: {
    height: 40,
    borderColor: "#E2F6E9",
    borderWidth: 2,
    marginLeft: "5%",
    marginRight: "5%",
    paddingLeft: "5%",
    borderRadius: 18,
    marginBottom: "10%",
  },
  countyScrollView: {
    flex: 1,
  },
  countyView: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 24,
  },
  row: {
    flexBasis: "28.33%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
    border: "none",
    marginRight: 22,
    borderRadius: 25,
    backgroundColor: "#E2F6E9",
  },
  rowText: {
    color: "green",
  },
  picker: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    marginBottom: 10,
  },
  pickerItem: {
    color: "black",
    fontSize: 16,
  },
});
