import React, {Component} from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import NextMeetingCard from '../../../../components/NextMeetingCard/NextMeetingCard';
import { Container, Content, List, ListItem, Text, Card, CardItem } from 'native-base';
import styles from './styles';

class NextMeetingListScreen extends Component {
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

                            <TouchableOpacity button activeOpacity={0.5} onPress={() => this.props.navigation.navigate("meeting.nextMeeting.detail")}>
                                <NextMeetingCard />
                            </TouchableOpacity>
                            <TouchableOpacity  button activeOpacity={0.5} onPress={() => this.props.navigation.navigate("meeting.nextMeeting.detail")}>
                                <NextMeetingCard/>
                            </TouchableOpacity>
                            <TouchableOpacity  button activeOpacity={0.5} onPress={() => this.props.navigation.navigate("meeting.nextMeeting.detail")}>
                                <NextMeetingCard/>
                            </TouchableOpacity>
                            <Card>
                                <CardItem style={{ backgroundColor: '#e74c3c'}}>
                                    <Text style={{ color: 'white'}}>15.3.2018</Text>
                                </CardItem>
                            </Card>
                            <TouchableOpacity  button activeOpacity={0.5} onPress={() => this.props.navigation.navigate("meeting.nextMeeting.detail")}>
                                <NextMeetingCard/>
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

NextMeetingListScreen.navigationOptions = {
        headerTitle: 'Najbližšie schôdzky',
        headerStyle: {backgroundColor: '#e74c3c'},
        headerTintColor: 'white',
};

export default NextMeetingListScreen;