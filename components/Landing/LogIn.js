import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function LogIn({ onSwitchToSignUp }) {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome back!</Text>

        <Text style={styles.subtitle}>Log in to your account</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Email address</Text>

          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(email) => setForm({ ...form, email })}
            placeholder="john@example.com"
            placeholderTextColor="#6b7280"
            style={styles.inputControl}
            value={form.email}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Password</Text>

          <TextInput
            autoCorrect={false}
            onChangeText={(password) => setForm({ ...form, password })}
            placeholder="********"
            placeholderTextColor="#6b7280"
            style={styles.inputControl}
            secureTextEntry={true}
            value={form.password}
          />
        </View>

        <View style={styles.formAction}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Main", { screen: "Welcome, User" })
            }
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>Log in</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.switchButton}>
          <Text style={{ color: "black" }}>
            Don't have an account?{" "}
            <Text
              onPress={onSwitchToSignUp}
              style={{ textDecorationLine: "underline", color: "green" }}
            >
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },

  logo: {
    marginLeft: "5%",
    marginTop: "14%",
    fontSize: 22,
    marginBottom: "-3%",
    color: "#ccc",
  },
  header: {
    marginVertical: 36,
  },
  form: {
    marginBottom: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1d1d1d",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: "green",
    borderColor: "green",
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    color: "#fff",
  },
});
