/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';

class example extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    if (this.state.greeting) return this.renderAfterButton();
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          testID='SCROLL_VIEW'>
          <View style={{ height: 200, width: 200, backgroundColor: 'blue', alignSelf: 'center', margin: 15 }} />
          <Text style={{ margin: 15 }}>Anim officia voluptate elit minim voluptate adipisicing duis eu laboris quis voluptate incididunt veniam ad eiusmod aliquip. Eu ad ullamco eu nostrud magna tempor velit occaecat ut in aliqua laborum. Excepteur velit velit in dolore et cupidatat irure do. Eiusmod eu aute officia fugiat sint amet ex ullamco consectetur ea est tempor labore excepteur nulla cupidatat amet.</Text>
          <View style={{ height: 200, width: 200, backgroundColor: 'blue', alignSelf: 'center', margin: 15 }} />
          <Text style={{ margin: 15 }}>Anim officia voluptate elit minim voluptate adipisicing duis eu laboris quis voluptate incididunt veniam ad eiusmod aliquip. Eu ad ullamco eu nostrud magna tempor velit occaecat ut in aliqua laborum. Excepteur velit velit in dolore et cupidatat irure do. Eiusmod eu aute officia fugiat sint amet ex ullamco consectetur ea est tempor labore excepteur nulla cupidatat amet.</Text>
          <View style={{ height: 200, width: 200, backgroundColor: 'blue', alignSelf: 'center', margin: 15 }} />
          <Text style={{ margin: 15 }}>Anim officia voluptate elit minim voluptate adipisicing duis eu laboris quis voluptate incididunt veniam ad eiusmod aliquip. Eu ad ullamco eu nostrud magna tempor velit occaecat ut in aliqua laborum. Excepteur velit velit in dolore et cupidatat irure do. Eiusmod eu aute officia fugiat sint amet ex ullamco consectetur ea est tempor labore excepteur nulla cupidatat amet.</Text>
          <View style={{ height: 200, width: 200, backgroundColor: 'blue', alignSelf: 'center', margin: 15 }} />
          <Text style={{ margin: 15 }}>Anim officia voluptate elit minim voluptate adipisicing duis eu laboris quis voluptate incididunt veniam ad eiusmod aliquip. Eu ad ullamco eu nostrud magna tempor velit occaecat ut in aliqua laborum. Excepteur velit velit in dolore et cupidatat irure do. Eiusmod eu aute officia fugiat sint amet ex ullamco consectetur ea est tempor labore excepteur nulla cupidatat amet.</Text>
          
          <View 
            testID='RED_BOX'
            style={{ height: 200, width: 200, backgroundColor: 'red', alignSelf: 'center', margin: 15 }} />
          <Text style={{ margin: 15 }}>Anim officia voluptate elit minim voluptate adipisicing duis eu laboris quis voluptate incididunt veniam ad eiusmod aliquip. Eu ad ullamco eu nostrud magna tempor velit occaecat ut in aliqua laborum. Excepteur velit velit in dolore et cupidatat irure do. Eiusmod eu aute officia fugiat sint amet ex ullamco consectetur ea est tempor labore excepteur nulla cupidatat amet.</Text>
        </ScrollView>
        
        <View style={{ position: 'absolute', bottom: 15, right: 15, left: 15 }}>
          <TouchableOpacity
            style={{ backgroundColor: 'green', alignItems: 'center' }}>
            <Text style={{ margin: 15, color: 'white' }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('example', () => example);
