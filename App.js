import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Container, Header, Title, Left, Right, Body, View} from 'native-base';

import Users from './src/screens/Users';
import Chats from './src/screens/Chats';
import LogIn from './src/screens/LogIn';

const Tab = createMaterialTopTabNavigator();

export default () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <View>
            <Title>ChatApp</Title>
          </View>
        </Body>
        <Right />
      </Header>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Users" component={Users} />
          <Tab.Screen name="Chats" component={Chats} />
        </Tab.Navigator>
      </NavigationContainer>
    </Container>
  );
};

const styles = StyleSheet.create({});
