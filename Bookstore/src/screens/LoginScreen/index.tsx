import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AppRegistry,
  Image,
  ImageBackground,
} from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
        }}
        style={{width: 50, height: 60}}
      />
      <Text style={styles.logo}>SignUp it's Free</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="First and Last Name"
          placeholderTextColor="#404747"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="User Name"
          placeholderTextColor="#404747"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#404747"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Phone n.o"
          placeholderTextColor="#404747"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Address"
          placeholderTextColor="#404747"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#404747"
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Sign-Up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>Already have an account. Sign-In?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#768c8c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#052F49',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#b3c9c9',
    borderRadius: 25,
    height: 40,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },

  loginBtn: {
    width: '80%',
    backgroundColor: '#052F49',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});
