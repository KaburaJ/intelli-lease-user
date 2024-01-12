import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Analytics, Predictions, ProfileScreen, EditProfileScreen, MyAccountScreen, AboutPage, HelpAndSupportPage, TwoFactorAuthPage, BiometricAuthPage, EmergencyContactsPage, AlarmsPage } from "./components";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile Page"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfileScreen}
        options={{ title: "Edit Profile" }}
      />
      <Stack.Screen
        name="Account Screen"
        component={MyAccountScreen}
        options={{ title: "My Account" }}
      />
      <Stack.Screen
        name="About Screen"
        component={AboutPage}
        options={{ title: "About Us" }}
      />
      <Stack.Screen
        name="Help Screen"
        component={HelpAndSupportPage}
        options={{ title: "Help and Support" }}
      />
      <Stack.Screen
        name="Two Factor Authentication"
        component={TwoFactorAuthPage}
        options={{ title: "Two Factor Authentication" }}
      />
      <Stack.Screen
        name="Biometric Authentication"
        component={BiometricAuthPage}
        options={{ title: "Biometric Authentication" }}
      />
      <Stack.Screen
        name="Emergency Contacts"
        component={EmergencyContactsPage}
        options={{ title: "Emergency Contacts" }}
      />
      <Stack.Screen
        name="My Alarms"
        component={AlarmsPage}
        options={{ title: "My Alarms" }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator>
          <Tab.Screen
            name="Welcome, User"
            component={Home}
            options={{
              title: "Home",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-home" color={"green"} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Analytics"
            component={Analytics}
            options={{
              title: "Analytics",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="stats-chart-outline"
                  color={"green"}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Predict"
            component={Predictions}
            options={{
              title: "Prediction",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="analytics-outline"
                  color={"green"}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-outline" color={"green"} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
});
