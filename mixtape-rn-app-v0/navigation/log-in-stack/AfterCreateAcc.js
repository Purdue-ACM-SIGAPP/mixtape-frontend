import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { dancing_meme } from '../../assets';
import SubmitButton from '../../components/SubmitButton';


export default function AfterCreateAcc() {
    return(
        <View style = {styles.container}>
            <View style = {styles.leftcontainer}>
                <Text style = {styles.HeaderText}> The party is almost ready!</Text>
                <Text style = {styles.SubHeader}> Next, connect your account with a music streaming service.</Text>
                <SubmitButton initialText={"Next"} updatedText = "Next" onPress={()=> {}}/>
            </View>
            <View style = {styles.rightcontainer}>
            <img
                src={dancing_meme}
                style = {styles.DImage}
                />
            <Text style = {styles.Description}>It has been shown that Memes make the Generation Z demograph laugh.</Text>
            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        backgroundColor: "#14151E",
        fontFamily: "Inter",
    },
    leftcontainer: {
        flex: 7, // 70% of the available space (7 out of 10 total units)
        flexDirection: 'column',
        alignItems: 'left',
        backgroundColor: "#14151E",
        height: '100%',
        paddingLeft:50,
        minWidth: 400,
    },
    rightcontainer: {
        flex: 3, // 30% of the available space (3 out of 10 total units)
        minWidth: 600,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#14151E",
        //backgroundColor: "#14381E",
        fontFamily: "Inter",
        height: '100%',
        
    },
    
    HeaderText:{
        marginTop: '10%',
        fontSize: 40, 
        paddingBottom: 25, 
        fontWeight: 'bold', 
        flexWrap: 'wrap', 
        textAlign: 'left', 
        maxWidth: '80%',
        minWidth: 300,
        color: '#FFFFFF',
        alignSelf: 'flex-start' 
    },
    DImage:{
        marginTop: '10%',
        paddingBottom: 25, 
        fontWeight: 'bold', 
        flexWrap: 'wrap', 
        maxWidth: '80%',
        color: '#FFFFFF',
        marginRight: 10, // Reduce the paddingRight value
        width: 400,
        height: 400,
        resizeMode: "contain"
    },
    SubHeader: {
        fontSize:24,
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