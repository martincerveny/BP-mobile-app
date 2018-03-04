import React, {Component} from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Input, Right } from 'native-base';
import styles from './styles';

class MeetingListItem extends Component {
    render() {
        return (
            <Container style={ styles.container }>
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
            </Container>
        );
    }
}

export default MeetingListItem;