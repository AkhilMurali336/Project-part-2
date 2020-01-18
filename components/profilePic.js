const users = [
  {
    name: 'username',
    avatar: './Image/abc.jpg'

  },
 
]

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import {
  StyleSheet
} from 'react-native';

import {
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {Useravatar} from 'react-native-user-avatar';
export default class ProfilePic extends Component {
  render() {
    return (

      <Card title="MY PROFILE">
      {
        users.map((u, i) => {
          return (
            <View key={i} style={styles.user}> 
               <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: u.avatar }}
              />
              <Text style={styles.name}>{u.name}</Text>
            </View>
          );
        })
      }
    </Card>


    );
  }
}

const styles = StyleSheet.create({
  title: {
   fontSize: 38,
    backgroundColor: 'transparent'
 },
  button: {
    marginRight: 2
  }
});