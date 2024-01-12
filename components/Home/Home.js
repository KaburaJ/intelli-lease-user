import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';

export default function Home() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    // Implement your search logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.innerContainer}>
          <Text style={styles.logo}>Intelli-Lease</Text>
          <Text style={styles.text}>Let's find you the best leasing</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={handleSearch}
          />
          <Text style={styles.subText}>Places</Text>

          <View style={styles.countyView}>
            {[...Array(47).keys()].map((index) => (
              <View style={styles.row} key={index}>
                <Text style={styles.rowText}>County {index + 1}</Text>
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
    backgroundColor: '#fff',
  },
  innerContainer: {
    paddingBottom: 50,
  },
  logo: {
    marginLeft: '5%',
    fontStyle: 'italic',
    marginTop: '14%',
    fontSize: 22,
    marginBottom: '8%',
    color: 'black',
  },
  text: {
    marginLeft: '4%',
    fontSize: 48,
    color: 'green',
    marginBottom: '10%',
  },
  subText: {
    marginLeft: '4%',
    fontSize: 30,
    fontWeight: '300',
    color: 'green',
    marginBottom: '10%',
  },
  searchInput: {
    height: 40,
    borderColor: '#E2F6E9',
    borderWidth: 2,
    marginLeft: '5%',
    marginRight: '5%',
    paddingLeft: '5%',
    borderRadius: 18,
    marginBottom: '10%',
  },
  countyView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 24,
  },
  row: {
    flexBasis: '28.33%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
    border: 'none',
    marginRight: 22,
    borderRadius: 25,
    backgroundColor: '#E2F6E9',
  },
  rowText: {
    color: 'green',
  },
});
