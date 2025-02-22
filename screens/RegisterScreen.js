import { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { supabase } from "../supabaseConfig";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert("Registration Error", error.message);
    } else {
      Alert.alert("Success", "Check your email for a confirmation link.");
    }
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      Alert.alert("Google Sign-In Error", error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
      <Text>OR</Text>
      <Button title="Sign in with Google" onPress={signInWithGoogle} />
    </View>
  );
};

export default RegisterScreen;
