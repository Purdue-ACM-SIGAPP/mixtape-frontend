import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { dancing_meme } from '../../assets';


export default function AfterCreateAcc() {
    return(
        <View style = {styles.container}>
            <Text style = {styles.HeaderText}> The party is almost ready!</Text>
            <Text style = {styles.SubHeader}> Next, connect your account with a music streaming service.</Text>
            <img
                src={dancing_meme} 
                style={{ width: 400, height: 400 }}
                />
            <Text style = {styles.Description}>It has been shown that Memes make the Generation Z demograph laugh.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: "#14151E",
        fontFamily: "Inter"
    },
    HeaderText:{
        marginTop: '10%',
        marginLeft: 40,
        fontSize: 40, 
        paddingBottom: 25, 
        fontWeight: 'bold', 
        flexWrap: 'wrap', 
        textAlign: 'left', 
        maxWidth: '80%',
        color: '#FFFFFF',
        alignSelf: 'flex-start' 
    },
    SubHeader: {
        fontSize:24,
        marginLeft: 40,
        color: '#D1D1D1',
        textAlign: 'left',
        alignSelf: 'flex-start', 
        paddingBottom: '10%'
    },
    Description: {
        fontSize:16,
        color: '#A1A1A1',
        textAlign: 'left'
    }
});