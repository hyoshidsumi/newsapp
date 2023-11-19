import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import axios from "axios";
import Constants from 'expo-constants';
// screen Transition
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
// redux
import { store1, persistor1 } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import LiNews from './components/liNews';
import dummy from './dummys/articles';
import { Home } from './views/homeView';
import { A } from './views/a';
import { Clip } from './views/clipView';



const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();



export default function App1() {
  // console.log(`[INFO] this.state: ${this.state}`);
  console.log("a");
  console.log("b");
  console.log("c");
  console.log("d");
  console.log("e");
  var a = 1;
  var b = a;
  return (
    <Provider store={store1}>
      {/* <ActivityIndicator size="large" color="#999" /> */}
      <PersistGate loading={null} persistor={persistor1}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOption1}>
            <Tab.Screen name="HOME" component={HomeStack} options={{ headerShown: false }} />
            <Tab.Screen name="clip" component={ClipStack} options={{ headerShown: false }} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="detail" component={A} />
    </Stack.Navigator>
  );
};
const ClipStack = () => {
  return (
    <Stack.Navigator initialRouteName="home_clip">
      <Stack.Screen name="home_clip" component={Clip} options={{ headerShown: false }} />
      <Stack.Screen name="detail_clip" component={A} />
    </Stack.Navigator>
  );
};

const screenOption1 = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    if (route.name === 'HOME') {
            return <FontAwesome name="home" size={size} color={color} />;
      // iconName = focused
      // ? 'ios-information-circle'
      // : 'ios-information-circle-outline';
    } else if (route.name === 'clip') {
      return <FontAwesome name="bookmark" size={size} color={color} />;
      // iconName = focused ? 'ios-list' : 'ios-list-outline';
    }
    // return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
});


