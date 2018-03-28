import React from 'react';
import { Container, Content, Text, Icon, Left, Separator, ListItem, List, Right, Input, Item, Thumbnail, Body } from 'native-base';
import styles from './styles';
import {FileSystem} from "expo";

const UserDetailTab = ({ userItem }) => (
            <Container style={ styles.container }>
                <Content>
                    <Separator bordered>
                        <Text>ZÁKLADNÉ INFORMÁCIE</Text>
                    </Separator>
                    <ListItem>
                        {
                            userItem && userItem.getImage() == null
                                ? (<Thumbnail size={80} source={require('./../../../resources/images/person-flat.png')} />)
                                : (<Thumbnail size={80} source={{uri: FileSystem.documentDirectory + (userItem && userItem.getImage())}}/>)
                        }
                        <Body>
                            <Text>{userItem && userItem.getFirstName()} {userItem && userItem.getLastName()}</Text>
                        </Body>
                    </ListItem>
                    <Separator bordered>
                        <Text>ROZŠÍRENÉ INFORMÁCIE</Text>
                    </Separator>
                    <ListItem >
                        <Left>
                            <Icon active name="ios-card" style={{ fontSize: 30, color: '#e74c3c', paddingRight: 30, marginLeft: 5 }}/>
                            <Text>Vek</Text>
                        </Left>
                        <Right style={ styles.listItemRight }>
                            <Text>{userItem && userItem.getAge()}</Text>
                        </Right>
                    </ListItem>
                    <ListItem >
                        <Left>
                            <Icon active name="ios-home-outline" style={{ fontSize: 30, color: '#e74c3c', paddingRight: 30, marginLeft: 5 }}/>
                            <Text>Bydlisko</Text>
                        </Left>
                        <Right style={ styles.listItemRight }>
                            <Text>{userItem && userItem.getAddress()}</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Icon active name="ios-briefcase-outline" style={{ fontSize: 30, color: '#e74c3c', paddingRight: 30, marginLeft: 5 }}/>
                            <Text>Firma</Text>
                        </Left>
                        <Right style={ styles.listItemRight }>
                            <Text>{userItem && userItem.getCompany()}</Text>
                        </Right>
                    </ListItem>

                    <Separator bordered>
                        <Text>POZNÁMKA</Text>
                    </Separator>
                    <Text style={{ paddingLeft: 15, paddingTop: 10}}>{userItem && userItem.getNote()}</Text>
                </Content>
            </Container>
);

export default UserDetailTab;
