import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Linking } from 'react-native';
import LiNews from '../components/liNews';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';
import { CB1 } from '../components/clipButton'
import { useDispatch, useSelector } from 'react-redux';
import { addClip, deleteClip } from '../store/userSlice';

export const A = ({ route }) => {
  const data = route.params.data1;
  const dispatch = useDispatch();
  const onPress11 = () => {
    if (isClipped) {
      dispatch(deleteClip(data));
    } else {
      dispatch(addClip(data));
    }
  }
  const clips1a = useSelector((x) => x.user.clips);
  const isClipped = clips1a.some((state) => state.url === data.url);

  console.log('d:' + data.url);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CB1 onPress1={onPress11} enabled={isClipped} />
      <WebView
        // style={styles.container}
        // source={{ uri: 'https://expo.dev' }}
        source={{ uri: data.url }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
