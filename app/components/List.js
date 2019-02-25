

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback,
    Image,
    View,
    Text,
    ActivityIndicator,
    BackHandler
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';

class List extends Component {




    constructor(props) {
        super(props);

        this.state = {};

        this.renderItem = this.renderItem.bind(this);


    }

    componentDidMount() {
        this.props.getData(); //call our action
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        return true;
    }

    render() {

        return (
            <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                <FlatList
                    ref='listRef'
                    data={this.props.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}/>
            </View>
        );

    }

    renderItem({item, index}) {

        return (
            <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
                <View style={styles.row}>
                    <Image source={{uri: item.avatar}}
                           style={{width: 50, height: 50}}/>

                    <Text style={styles.title}>
                        {item.property_name}


                    </Text>
                    <Text style={styles.description}>
                        {item.location}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    actionOnRow(item) {

        console.log('Selected Item :', item);

        const { navigate } = this.props.navigation;


        navigate('DetailsScreen', {item: item})

    }

}
;



function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(List);

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

