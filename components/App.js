import React, {Component} from 'react';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createBottomTabNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      title: 'Screen1',
    },
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: {
      title: 'Screen2',
    },
  },
  Screen3: {
    screen: Screen3,
    navigationOptions: {
      title: 'Screen3',
    },
  },
});

const Navi = createAppContainer(AppNavigator);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: {},
    };
  }

  onNavigationChange = (prevState, currentState) => {
    console.log('prevState:', prevState);
    console.log('currentState', currentState);
    this.setState({
      keys: currentState.routes,
    });
  };

  render() {
    return (
      <Navi
        onNavigationStateChange={this.onNavigationChange}
        screenProps={{keys: this.state.keys}}
      />
    );
  }
}

export default App;
