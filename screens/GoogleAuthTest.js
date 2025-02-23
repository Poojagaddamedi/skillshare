/*import { View, Text, Button } from 'react-native';
import { createClient } from '@supabase/supabase-js';
import { supabaseUrl, supabaseAnonKey } from '../supabaseConfig'; 
//import supabase from '../supabaseConfig';// Import Supabase credentials

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const GoogleAuthTest = () => {
    const testGoogleAuth = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });

        if (error) {
            console.error('Google Sign-In Error:', error.message);
        } else {
            console.log('Google Sign-In URL:', data.url);
        }
    };

    return (
        <View>
            <Text>Google Auth Test</Text>
            <Button title="Test Google Sign-In" onPress={testGoogleAuth} />
        </View>
    );
};

export default GoogleAuthTest;*/

/*import { View, Text, Button } from 'react-native';
import supabase from '../supabaseConfig';  // Import Supabase client

const GoogleAuthTest = () => {
    const testGoogleAuth = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo: 'exp://127.0.0.1:19000' }  // Change to your Expo URL
        });

        if (error) {
            console.error('Google Sign-In Error:', error.message);
        } else {
            console.log('Google Sign-In URL:', data.url);
        }
    };

    return (
        <View>
            <Text>Google Auth Test</Text>
            <Button title="Test Google Sign-In" onPress={testGoogleAuth} />
        </View>
    );
};

export default GoogleAuthTest;*/

/*import { View, Text, Button } from 'react-native';
import { createClient } from '@supabase/supabase-js';
import * as WebBrowser from 'expo-web-browser';
import { supabaseUrl, supabaseAnonKey } from '../supabaseConfig';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const GoogleAuthTest = () => {
    const testGoogleAuth = async () => {
        const redirectTo = 'exp://192.168.248.31:8081'; // Replace with your IP
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo }
        });

        if (error) {
            console.error('Google Sign-In Error:', error.message);
        } else {
            console.log('Google Sign-In URL:', data.url);
            await WebBrowser.openBrowserAsync(data.url);
        }
    };

    return (
        <View>
            <Text>Google Auth Test</Text>
            <Button title="Test Google Sign-In" onPress={testGoogleAuth} />
        </View>
    );
};

export default GoogleAuthTest;*/

/*import { View, Text, Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import supabase from "../supabaseConfig";

const GoogleAuthTest = () => {
  const testGoogleAuth = async () => {
    const redirectTo = "exp://192.168.248.31:8081"; // Replace with your Expo IP

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });

    if (error) {
      console.error("Google Sign-In Error:", error.message);
    } else {
      console.log("Google Sign-In URL:", data.url);
      await WebBrowser.openBrowserAsync(data.url);
    }
  };

  return (
    <View>
      <Text>Google Auth Test</Text>
      <Button title="Test Google Sign-In" onPress={testGoogleAuth} />
    </View>
  );
};

export default GoogleAuthTest;*/

/*import { View, Text, Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import supabase from "../supabaseConfig";

const GoogleAuthTest = () => {
  const testGoogleAuth = async () => {
    const redirectTo = "https://auth.expo.io/pooja_28/skillshare"; // Update this

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });

    if (error) {
      console.error("Google Sign-In Error:", error.message);
    } else {
      console.log("Google Sign-In URL:", data.url);
      await WebBrowser.openBrowserAsync(data.url);
    }
  };

  return (
    <View>
      <Text>Google Auth Test</Text>
      <Button title="Test Google Sign-In" onPress={testGoogleAuth} />
    </View>
  );
};

export default GoogleAuthTest;*/
/*import { View, Text, Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import supabase from "../supabaseConfig";

const GoogleAuthTest = () => {
  const testGoogleAuth = async () => {
    const redirectTo = "com.skillshare.app:/auth/callback"; // Matching GCS and Supabase

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });
    
        console.log("Redirecting to: ", redirectTo); 

    if (error) {
      console.error("Google Sign-In Error:", error.message);
    } else {
      console.log("Google Sign-In URL:", data.url);
      await WebBrowser.openBrowserAsync(data.url);
    }
  };

  return (
    <View>
      <Text>Google Auth Test</Text>
      <Button title="Test Google Sign-In" onPress={testGoogleAuth} />
    </View>
  );
};

export default GoogleAuthTest;*/

import { View, Text, Button, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import supabase from "../supabaseConfig"; // Import Supabase client

// Enable WebBrowser for authentication
WebBrowser.maybeCompleteAuthSession();

const GoogleAuthTest = () => {
  // Define the redirect URL
  const redirectTo = "https://auth.expo.io/pooja_2808/skillshare"; // Matches Supabase & Google Cloud

  const testGoogleAuth = async () => {
    console.log("Redirecting to:", redirectTo); 

    // Sign in with Google
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });

    // Handle errors
    if (error) {
      console.error("Google Sign-In Error:", error.message);
      Alert.alert("Authentication Failed", error.message);
    } else {
      console.log("Google Sign-In URL:", data.url);
      
      // Open Google authentication page in Expo WebBrowser
      await WebBrowser.openBrowserAsync(data.url);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
        Google Authentication Test
      </Text>
      <Button title="Test Google Sign-In" onPress={testGoogleAuth} />
    </View>
  );
};

export default GoogleAuthTest;





