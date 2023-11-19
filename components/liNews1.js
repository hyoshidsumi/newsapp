import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const propNews = props => {
  image: String;
  title: String;
  author: String;
}

// export default function LiNews(props) {
  export const LiNews = (propNews) => {
  return (
    <View style={styles.li}>
      <Image style={styles.li_img} source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }} />
      <View style={styles.li_description}>
        <Text numberOfLines={3} style={styles.text1}>Web Developer is the ultimate online web developer community. You'll find articles, tutorials, questions and answers, jobs, tools, and more - all from web developers in the community!</Text>
        <Text style="{styles.text2}">News ii</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  li: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    marginVertical: 4,
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
