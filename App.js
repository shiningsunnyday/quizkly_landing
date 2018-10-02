import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
        style = {styles.imageStyle}
        source={require('./assets/stockPhoto.png')}/>
        <View style={styles.textView}>
          <Text>
          Guillermo Moreno with Josephine Williams and 2 others!
          </Text>
          <Text>
          Yesterday at 11:14 PM
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  imageStyle: {
    },
  textView: {
  },
});
