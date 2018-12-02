import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  TextInput,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View // Container component
} from "react-native";

import { createStackNavigator, createAppContainerr } from "react-navigation";
//import Spinner from "react-native-loading-spinner-overlay";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: "",
      password: "",
      users: [],
      //url:'http://172.29.3.228:3000/users' //ip de la pc que corre el API
    };
  }

  /*componentDidMount(){
    this.getUsers();
  }
  
  getUsers = () =>{
    this.setState({loading: true})
    //rea
    liza la petición
    fetch(this.state.url)
    .then(res=> res.json())
    .then(res=> {

      this.setState({
       users: { 
         email: res.email,
         password:  res.password,
       },
        loading: false
      })
    })
};*/

async componentDidMount(){
  const response = await
  fetch('http://192.168.2.122:3000/users');
  const json = await response.json();
  this.setState({users: json});
}

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };

  async onLoginPress() {
    var email = this.state.email;
    var password = this.state.password;
    this.state.users.forEach(user =>{
      if (email == user.email && password == user.password){
        this.props.navigation.navigate("Boiler"); 
      }
    })
    //console.log(email);
    //console.log(password);
  }
  render() {
    return (
      <View style={styles.container}>
        <View behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("./logo.png")} />
            <Text style={styles.subtext}>Welcome to React Native App</Text>
          </View>
          <KeyboardAvoidingView style={styles.keyboard}>
            <View style={styles.window}>
              <TextInput style={styles.textInputStyle}
                placeholder="Email"
                placeholderTextColor="#FFFF"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </View>
            <View style={styles.window}>
              <TextInput style={styles.textInputStyle}
                placeholder="Password"
                placeholderTextColor="#FFFF"
                returnKeyType="go"
                secureTextEntry
                ref={input => (this.passwordInput = input)}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onLoginPress.bind(this)}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
         
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigation.navigate("Register")}
            title="Sign up"
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigation.navigate("ForgetPassword")}
            title="Forget Password"
          >
            Forget Password
          </Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#342f2e",
    //backgroundColor: "#16a085"
  },

  textInputStyle: {
    color: 'white',
    },
  
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 250,
    height: 200
  },
  subtext: {
    color: "#ffffff",
    marginTop: 10,
    fontSize: 20,
    width: 160,
    textAlign: "center",
    opacity: 0.8
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch"
  },
  buttonContainer: {
    backgroundColor: "#27ae60",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#55b42e",
    paddingVertical: 15,
    marginTop : 5
  },
  window: {
    marginBottom: 15
  }
});

AppRegistry.registerComponent("Login", () => Login);
