import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

/**
 * 
 * @param {
 * imageUrl: 画像URL(string)
 * title: タイトル(string)
 * author: ニュース提供元(string)
 * onPress: タップ時の
 * } props 
 * @returns 
 */

export default function LiNews(props) {
  return (
    <TouchableOpacity style={styles.li} onPress={props.onPress1}>
      <View style={styles.li_img}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: props.imageUrl }}
        />
      </View>
      <View style={styles.li_description}>
        <Text numberOfLines={3} style={styles.text1}>{props.title}</Text>
        <Text style="{styles.text2}">{props.author}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  li: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    marginVertical: 4,
    backgroundColor: '#fff',
  },
  li_img: {
    width: 100,
  },
  li_description: {
    flex: 1,
    padding: 10,
    // flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text1: {
    width: '100%',
    fontSize: 16,
  },
  text2: {
    fontSize: 10,
    color: 'red',
  }
});
