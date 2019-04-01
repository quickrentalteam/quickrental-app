import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { Icon, FormInput, FormLabel} from 'react-native-elements';
import { postGame } from '../db/services';
import Game from './Game';

export default class CreateGame extends Component {
    constructor(props){
        super(props);
        this.state= {
            hName: '',
            aName: '',
            date: '',
            time: '',
        }
        this.tournament = this.props.tournament;
    }

    setHomeName = (value) => {
        this.setState({
            hName: value
        })
    };
    setAwayName = (value) => {
        this.setState({
            aName: value
        })
    };
    setDate = (value) => {
        this.setState({
            date: value
        })
    };
    setTime = (value) => {
        this.setState({
            time: value
        })
    };

    addGame = () => {
        let game = new Game(this.state.hName, this.state.aName, this.state.time);
        game.setDate(this.state.date);
        postGame(this.tournament.getKey(), game);
    }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                <FormLabel>Home Team Name</FormLabel>
                <FormInput containerStyle={{borderBottomColor: "black", borderWidth:2}} onChangeText={(value) => {this.setHomeName(value)}}/>
                
                <FormLabel>Away Team Name</FormLabel>
                <FormInput containerStyle={{borderBottomColor: "black", borderWidth:2}} onChangeText={(value) => {this.setAwayName(value)}}/>

                <FormLabel>Date</FormLabel>
                <FormInput containerStyle={{borderBottomColor: "black", borderWidth:2}} onChangeText={(value) => {this.setDate(value)}}/>
                
                <FormLabel>Time</FormLabel>
                <FormInput containerStyle={{borderBottomColor: "black", borderWidth:2}} onChangeText={(value) => {this.setTime(value)}}/>
                <TouchableOpacity style={styles.Button} onPress={this.addGame}>
                            <Text style={{color: 'white'}}>Submit Game</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white', 
        flex:1, 
        opacity: 0.9,
    },
    Button:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        height: 55,
        width:200,
        borderWidth: 2,
        borderColor: 'white',
    },
  });