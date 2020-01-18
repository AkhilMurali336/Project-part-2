import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card } from 'native-base';
import { Font } from 'expo';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Calender from './Calender/Calender';

import HomeScreen from './src/screens/HomeScreen';


class HeaderIcon extends React.Component {


  render() {
    return (

      <Container>
        <Header style={{ width: 390, }}>
          <Left>
            <Button>
              <Icon name='menu' />
            </Button>
          </Left>

          <Right>
            <Button>
              <Icon name='information-circle' />
            </Button>
          </Right>
        </Header>
      </Container>

    );
  }
}


class ProfileIcon extends React.Component {

  render() {
    return (

      <Container>
        <Header style={{ width: 390, }} >
          <Left>
            <Button>
              <Icon name='menu' />
            </Button>
          </Left>

          <Right>
            <Button>
              <Icon name='information-circle' />
            </Button>
          </Right>
        </Header>
      </Container>

    );
  }
}





import ProfilePic from './components/profilePic';
class ProfileScreen extends React.Component {
  render() {
    return (

      <View style={{ flex: 1 }}>
        <ProfileIcon />
        
        <View style={{ flex: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#439889' }}>
          <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: 175,
            padding: 10,
            backgroundColor: '#DDDDDD',
            marginVertical: 10,
            borderRadius: 25
          }}
          >
            <Icon name='person' />
            <Text>     profile</Text>

          </TouchableOpacity>
          <ProfilePic/>
          <Calender/>
           </View>
        </View>
      
    );
  }
}

class EventScreen extends React.Component {
  render() {

    return (

      <View style={{ flex: 1 }}>
        <HeaderIcon />

        <View style={{ flex: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#439889' }}>
          <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: 175,
            padding: 10,
            backgroundColor: '#DDDDDD',
            marginVertical: 10,
            borderRadius: 25
          }}
          >
            <Icon name='paper' />
            <Text>    Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: 175,
            padding: 10,
            backgroundColor: '#DDDDDD',
            marginVertical: 10,
            borderRadius: 25
          }}
          >
            <Icon name='add' />
            <Text>   Create your Event</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


class NotificationScreen extends React.Component {
  render() {
    return (

      <View style={{ flex: 1 }}>
        <HeaderIcon />

        <View style={{ flex: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#439889' }}>
          <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: 175,
            padding: 10,
            backgroundColor: '#DDDDDD',
            marginVertical: 10,
            borderRadius: 25
          }}
          >
            <Icon name='chatboxes' />
            <Text>    Notification</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}


const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
  Event: EventScreen,
  Notification: NotificationScreen,

}
);

export default createAppContainer(TabNavigator);
