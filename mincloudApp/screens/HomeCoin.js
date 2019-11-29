import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import ContentsView from '../components/ContentsView';
import TopBar from '../components/TopBar';

export default class HomeCoin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          refreshDate: '-',
        }
      }
    
      _setRefreshDate = (date) => { // Called from CoinView's prop
        console.log('Updated: '+ date);
        this.setState({
          refreshDate: date,
        });
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusBar} />
                <StatusBar
                    barStyle = "dark-content"
                    // dark-content, light-content and default
                    hidden = {false}
                    //To hide statusBar, Android Only
                    backgroundColor = "#00BCD4"
                    //Background color of statusBar only works for Android
                    translucent = {false}
                    //allowing light, but not detailed shapes
                    networkActivityIndicatorVisible = {true}
                />
                <TopBar title="Show Me The Coin" refreshDate={this.state.refreshDate} />
                <ContentsView
                    navigation={this.props.navigation}
                    refreshDate={this._setRefreshDate}
                    style={styles.ContentsView}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: '#264d9b',
        height: Constants.statusBarHeight
    },
    container: {
        flex: 1
    },
    ContentsView: {
        width: '100%',
        flex: 1,
        flexDirection: 'column', // row
        backgroundColor: 'white',
        //alignItems: 'center',
        //justifyContent: 'flex-start' // center, space-around
    }
});