import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class Screen2 extends Component {
  render() {
    const {params} = this.props.navigation.state;
    console.log(params);
    let color = params ? params.color : 'green';

    return (
      <View>
        <Text>Screen 2</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Screen3')}>
          <Text>Go to screen 3</Text>
        </TouchableOpacity>
        <View style={[styles.content, {backgroundColor: color}]}>
          <Text>Change content 2</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    width: 300,
    height: 300,
  },
});
export default Screen2;
