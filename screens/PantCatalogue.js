import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class PantCatalogue extends React.Component{

    render(){
        return(
            <View>
                <Text> Hi Children </Text>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('Catalogue')
                }}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}