import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import MeetingCard from '../components/MeetingCard';
import { Container, Content, List, ListItem, Text, Card, CardItem } from 'native-base';
export default class Home extends Component {
    render () {
        return (
            <View style={ styles.container }>
                <ScrollView>
                    <Container>
                        <Content>
                            <Card>
                                <CardItem style={{ backgroundColor: '#e74c3c'}}>
                                    <Text style={{ color: 'white'}}>14.3.2018</Text>
                                </CardItem>
                            </Card>

                            <TouchableOpacity button activeOpacity={0.5} onPress={() => this.props.navigation.navigate("Meeting")}>
                                <MeetingCard />
                            </TouchableOpacity>
                            <TouchableOpacity  button activeOpacity={0.5} onPress={() => this.props.navigation.navigate("Meeting")}>
                                <MeetingCard/>
                            </TouchableOpacity>
                            <TouchableOpacity  button activeOpacity={0.5} onPress={() => this.props.navigation.navigate("Meeting")}>
                                <MeetingCard/>
                            </TouchableOpacity>
                            <Card>
                                <CardItem style={{ backgroundColor: '#e74c3c'}}>
                                    <Text style={{ color: 'white'}}>15.3.2018</Text>
                                </CardItem>
                            </Card>
                            <TouchableOpacity  button activeOpacity={0.5} onPress={() => this.props.navigation.navigate("Meeting")}>
                                <MeetingCard/>
                            </TouchableOpacity>
                            <Card>
                                <CardItem style={{ backgroundColor: '#e74c3c'}}>
                                    <Text style={{ color: 'white'}}>15.3.2018</Text>
                                </CardItem>
                            </Card>
                        </Content>
                    </Container>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});