
import React from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


export class HeaderIcon extends React.Component {


    render() {
      return (
  
      <Container>
        <Header style={{width:390,}}>
          <Left>
      <Button> 
         <Icon name='menu'/>
         </Button>
          </Left>
        
          <Right>
          <Button> 
         <Icon name='information-circle'/>
         </Button>
          </Right>
        </Header>
        </Container>
      
      );
    }
  }