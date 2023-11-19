import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import axios from "axios";
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LiNews from '../components/liNews';
import dummy from '../dummys/articles';

// export default function App() {
export const Home = ({ navigation }) => {
  const [a, setData] = useState([]);
  // const URL = 'https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=' + `${Constants.expoConfig?.extra.news1ApiKey}`;
  const URL = 'https://newsapi.org/v2/everything?q=Bonobo&monkey&from=2023-07-31&sortBy=publishedAt&apiKey=' + `${Constants.expoConfig?.extra.news1ApiKey}`;

  const fetchData = async () => {
    // setData(dummy);
    try {
      const response = await axios.get(URL);
      // console.log(response.data.articles);
      setData(response.data.articles);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const items = a.map((data, index) => {
    return <LiNews
      imageUrl={data.urlToImage}
      title={data.title}
      author={data.author}
      key={index.toString()}
      onPress1={() => navigation.navigate('detail', {
        data1: data
      })}
    />
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={h.h1}>News List</Text>
      <ScrollView>
        {items}
      </ScrollView>
      <Text>all rights reserved at me</Text>
    </SafeAreaView>
  );
}

const h = StyleSheet.create({
  h1: {
    // flex: 1,
    fontWeight: 'bold',
    paddingBottom: 20,
    textAlign: 'left',
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    flexDirection: 'column',
  },
  li: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
  },
  li_img: {
    height: 100,
    width: 100,
  },
  li_description: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'space-between',
  },
  text1: {
    fontSize: 16,
  },
  text2: {
    fontSize: 10,
    color: 'gray',
  }
});
