  
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default class ShirtCatalogue extends React.Component{

    render(){
        return(
            <View>
                <Text> Hello World </Text>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('Catalogue')
                }}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}