/**
 * Created by choigo-eun on 2016. 11. 1..
 */


import React,{
Component,
} from 'react';

import {
StyleSheet,
Text,
View,
} from 'react-native';

import styles from '../styles/typography';


class Forecast extends Component {
    render() {
        return (
            <View>
                <Text style={styles.bigText}>
                    {this.props.main}
                </Text>
                <Text style={styles.mainText}>
                    Current conditions : {this.props.description}
                </Text>
                <Text style={styles.bigText}>
                    {this.props.temp} F
                </Text>
            </View>
        )

    }
}

const forecastStyles = StyleSheet.create({
    forecast:{
        alignItems :'center'
    }
});

export default Forecast;