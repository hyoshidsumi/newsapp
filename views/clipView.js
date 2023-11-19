import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import LiNews from '../components/liNews';

export const Clip = ({ route, navigation }) => {
  const clips = useSelector((state) => state.user.clips);
  console.log(clips);
  const items = clips.map((data, index) => {
    return <LiNews
      imageUrl={data.urlToImage}
      title={data.title}
      author={data.author}
      key={index.toString()}
      onPress1={() => {
        navigation.navigate('detail_clip', {
          data1: data
        })
      }}
    />
  });
  console.log({ items });

  return (
    <SafeAreaView>
      <Text>hello</Text>
      <ScrollView>
        {items}
      </ScrollView>
    </SafeAreaView>
  );
};


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
});
