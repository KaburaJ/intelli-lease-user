import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
} from "react-native";
import data from "../../assets/ke.json";
import { useState, useEffect } from "react";
import _debounce from "lodash.debounce";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const navigation = useNavigation();

  const debouncedSearch = _debounce((text) => {
    const newData = data.filter((county) =>
      county.admin_name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(newData);
  }, 100);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.innerContainer}>
          <Text style={styles.logo}>Intelli-Lease</Text>
          <Text style={styles.text}>Let's find you the best leasing</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by county name"
            onChangeText={(text) => setSearchTerm(text)}
            value={searchTerm}
          />
          <Text style={styles.subText}>Places</Text>

          <View style={styles.countyView}>
            {filteredData.map((county, index) => (
              <View
                style={styles.row}
                key={index}
                onPress={() => {
                  navigation.navigate("Analytics", {
                    latitude: parseFloat(county.lat),
                    longitude: parseFloat(county.lng),
                  });
                }}
              >
                <Text style={styles.rowText}>{county.admin_name}</Text>
              </View>
            ))}
          </View>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
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
  innerContainer: {
    paddingBottom: 50,
  },
  logo: {
    marginLeft: "5%",
    fontStyle: "italic",
    marginTop: "14%",
    fontSize: 22,
    marginBottom: "8%",
    color: "black",
  },
  text: {
    marginLeft: "4%",
    fontSize: 48,
    color: "green",
    marginBottom: "10%",
  },
  subText: {
    marginLeft: "4%",
    fontSize: 30,
    fontWeight: "300",
    color: "green",
    marginBottom: "10%",
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
  countyView: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 24,
  },
  row: {
    flexBasis: "28.33%",
    height: 50,
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
});
