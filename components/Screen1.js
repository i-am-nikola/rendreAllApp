import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class Screen1 extends Component {
  render() {
    const {params} = this.props.navigation.state;
    console.log(params);

    return (
      <View>
        <Text>Screen 1</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Screen2')}>
          <Text>Go to screen 2</Text>
        </TouchableOpacity>
        <View style={[styles.content, {backgroundColor: 'red'}]}>
          <Text>Change content 1</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    width: 200,
    height: 200,
  },
});

export default Screen1;
