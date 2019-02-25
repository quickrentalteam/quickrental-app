import React, { Fragment } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    AsyncStorage
} from 'react-native'

export default class DetailsScreen extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (
            <View style={styles.row}>
                <Text style={styles.description}>
                    property name : {this.props.navigation.getParam("item", "").property_name}
                </Text>

                <Text style={styles.description}>
                   location:  {this.props.navigation.getParam("item", "").location}
                </Text>

                <Text style={styles.description}>
                    price: {this.props.navigation.getParam("item", "").price}
                </Text>


                <Text style={styles.description}>
                    rating: {this.props.navigation.getParam("item", "").rating}
                </Text>


                <Image source={{uri: this.props.navigation.getParam("item", "").avatar}}
                       style={{width: 50, height: 50}}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    row: {
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    title: {
        fontSize: 15,
        fontWeight: "600"
    },

    description: {
        marginTop: 5,
        fontSize: 14,
    }
});

