import { View, Text, Button } from 'react-native';
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

export default GoogleAuthTest;