import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { StyleProvider, Container, Content, Form, Item, Input, Button, Text, Icon } from 'native-base';
import styles from './styles';

class UserSearchIndexScreen extends Component {
    render() {
        return (
            <Container style={ styles.container }>
                <Content>
                    <Form>
                        <View style={ styles.searchBox}>
                            <Item rounded style={{ width: 200}}>
                                <Input placeholder="Zadajte meno" />
                            </Item>
                        </View>
                        <View style={ styles.buttonContainer }>
                            <Button iconLeft danger onPress={() => {this.props.navigation.navigate('user.search.results')}}>
                                <Icon name='search' />
                                <Text>Vyhľadať</Text>
                            </Button>
                            <Button iconLeft danger onPress={() => {this.props.navigation.navigate('user.create')}}>
                                <Icon name='search' />
                                <Text>Vytvoriť </Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}

export default UserSearchIndexScreen;