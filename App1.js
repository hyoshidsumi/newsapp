import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import LiNews from './components/liNews';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={h.h1}>News List</Text>
      <LiNews />
      <LiNews />
      <LiNews />
      <LiNews />
      <Text>all rights reserved at me</Text>
      <StatusBar style="auto" />
    </View>
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
      alignItems: 'center',
      justifyContent: 'center',
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
