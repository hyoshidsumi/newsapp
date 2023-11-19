import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export const TemplateView = ({ route }) => {

  return (
    <SafeAreaView>
      <Text>hello</Text>
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
