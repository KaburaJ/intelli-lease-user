import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const AlarmsPage = () => {

  return (
<View style={styles.emergencyContainer}>
    <View style={styles.alarmsCard}>
    <Text style={styles.alarmsCardText}>1111111111111</Text>
    <Text style={styles.alarmsCardText}>22222222222</Text>
    <Text style={styles.alarmsCardText}>5555555555</Text>
    </View>

    

</View>
  );
};

const styles = StyleSheet.create({
  alarmsContainer: {
    backgroundColor: "transparent"
  },
  alarmsCard: {
    backgroundColor:"#FFF",
    marginTop:"5%",
    width:"90%",
    height:"25%",
    alignItems:"center",
    marginLeft:"5%",
    marginRight:"5%",
    borderRadius:12
  },
  alarmsCardText: {
    marginTop:"5%"
  }

  },
);

export default AlarmsPage;
