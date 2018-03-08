import React, {Component} from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text, Content, List, ListItem, Body, Input, Right, Button } from 'native-base';
import UserItem from '../../../components/UserItem/PersonTab';
import UserNoteListItem from '../../../components/UserNoteListItem/UserNoteListItem';
import Header from '../../../components/Header/Header'

import styles from './styles';

class UserDetailScreen extends Component {
    constructor (props) {
        super(props);

        this.goBack = this.goBack.bind(this)
    };

    goBack () {
        this.props.navigation.goBack()
    }

    render () {
        return (
            <Container>
                <Header
                    title='Jan Novotný'
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Icon style={{ color: '#fff'}} name="arrow-round-back" />
                        </Button>
                    }
                />
                <Tabs>
                    <Tab  heading={ <TabHeading><Icon name="ios-contact" /></TabHeading>}>
                        <UserItem />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="list" /></TabHeading>}>
                        <Content>
                            <List>
                                <ListItem button style={ styles.listItem }>
                                    <Body>
                                    <Text>A-zet</Text>
                                    </Body>
                                    <Right>
                                        <Text note>20.2.2018</Text>
                                    </Right>
                                </ListItem>
                                <ListItem button style={ styles.listItem }>
                                    <Body>
                                    <Text>Brnenská schôdzka</Text>
                                    </Body>
                                    <Right>
                                        <Text note>14.3.2018</Text>
                                    </Right>
                                </ListItem>
                                <ListItem button style={ styles.listItem }>
                                    <Body>
                                    <Text>Bratislavské stretnutie</Text>
                                    </Body>
                                    <Right>
                                        <Text note>14.3.2018</Text>
                                    </Right>
                                </ListItem>
                            </List>
                        </Content>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="paper" /></TabHeading>}>
                        <UserNoteListItem />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default UserDetailScreen