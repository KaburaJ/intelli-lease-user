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
import SignUp from "./SignUp";
import LogIn from "./LogIn";

export default function LandingPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showLogin, setShowLogin] = useState(false);

  const navigation = useNavigation();

  const switchToSignUp = () => {
    setShowLogin(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Text style={styles.logo}>Intelli-Lease</Text>
      <View style={styles.container}>
        {showLogin ? (
          <LogIn onSwitchToSignUp={switchToSignUp} />
        ) : (
          <SignUp onSwitchToLogin={() => setShowLogin(true)} />
        )}
      </View>
      {!showLogin && (
        <TouchableOpacity style={styles.switchButton}>
          <Text style={{ color: "black" }}>
            Already have an account?{" "}
            <Text
              onPress={() => setShowLogin(true)}
              style={{ textDecorationLine: "underline", color: "green" }}
            >
              Log In
            </Text>
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
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
  switchButton: {
    marginTop: "109%",
    marginLeft: "5%",
    position: "absolute",
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
