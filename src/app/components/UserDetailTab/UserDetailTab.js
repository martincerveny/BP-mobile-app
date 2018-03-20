import React from 'react';
import { Container, Content, Text, Icon, Left, Separator, ListItem, List, Right, Input, Item, Thumbnail, Body } from 'native-base';
import styles from './styles';
import {FileSystem} from "expo";

const UserDetailTab = ({ userItem }) => (
            <Container style={ styles.container }>
                <Content>
                    <ListItem>
                        {
                            userItem.image == ''
                                ? (<Thumbnail size={80} source={require('./../../../resources/images/person-flat.png')} />)
                                : (<Thumbnail size={80} source={{uri: FileSystem.documentDirectory + userItem.image}} />)
                        }
                        <Body>
                            <Text>{userItem.firstName} {userItem.lastName}</Text>
                            <Text note>{userItem.age}</Text>
                        </Body>
                    </ListItem>
                    <Separator bordered>
                        <Text>INFORMÁCIE</Text>
                    </Separator>
                    <ListItem >
                        <Left>
                            <Icon active name="home" style={{ fontSize: 20}}/>
                            <Text>Bydlisko</Text>
                        </Left>
                        <Right>
                            <Text>{userItem.address}</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Icon active name="briefcase" style={{ fontSize: 20}}/>
                            <Text>Firma</Text>
                        </Left>
                        <Right>
                            <Text>{userItem.company}</Text>
                        </Right>
                    </ListItem>

                    <Separator bordered>
                        <Text>POZNÁMKA</Text>
                    </Separator>
                    <Text style={{ paddingLeft: 15, paddingTop: 10}}>{userItem.note}</Text>
                </Content>
            </Container>
);

export default UserDetailTab;
