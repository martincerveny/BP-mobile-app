import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    loading: {
        marginTop: 20
    },
    noResultsView: {
        flex:1,
        marginTop: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    noResultsText: {
        textAlign: "center",
        fontSize: 18,
    },
    cancelText: {
        color: 'white',
    },
});