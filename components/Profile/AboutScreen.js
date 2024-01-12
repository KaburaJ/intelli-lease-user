import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import wearableImage from "../../assets/icon.png";

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <Image source={wearableImage} style={styles.wearableImage} />
      <Text style={[styles.title,  {color: "green"}]}>Intelli-Lease</Text>
      <Text style={styles.description}>
        Shrynk is an emotion tracking application designed to help you monitor and understand your emotional well-being. The application works seamlessly with our wearable watch, allowing you to track your emotions on the go.
      </Text>
      <Text style={[styles.featuresTitle, {color: "green"}]}>Key Features:</Text>
      <Text style={styles.featuresList}>
        - Real-time emotion tracking using wearable sensors
      </Text>
      <Text style={styles.featuresList}>
        - Historical data analysis to identify patterns
      </Text>
      <Text style={styles.featuresList}>
        - Personalized insights and recommendations
      </Text>
      <Text style={styles.featuresList}>
        - User-friendly interface for easy navigation
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor:"#FFF"
  },
  wearableImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#444",
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  featuresList: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "left",
  },
});

export default AboutPage;
