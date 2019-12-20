import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';

class Screen2 extends Component {
  onChangeColor = () => {
    if (this.props.screenProps.keys.length > 0) {
      console.log(this.props.screenProps.keys);
      const Tab2Key = this.props.screenProps.keys.find(
        key => key.routeName === 'Screen2',
      ).key;
      console.log(Tab2Key);
      const setParamsAction = NavigationActions.setParams({
        params: {color: 'red'},
        key: Tab2Key,
      });
      this.props.navigation.dispatch(setParamsAction);
    }
  };

  render() {
    console.log(JSON.stringify(this.props.screenProps));
    return (
      <View>
        <Text>Screen 3</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Screen2')}>
          <Text>Go to screen 2</Text>
        </TouchableOpacity>
        <View style={[styles.content, {backgroundColor: 'green'}]}>
          <Text>Change content 3</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onChangeColor()}>
          <Text>Change All</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    width: 300,
    height: 300,
  },
  button: {
    padding: 20,
    backgroundColor: 'blue',
  },
});

export default Screen2;
