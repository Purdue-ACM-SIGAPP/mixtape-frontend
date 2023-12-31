import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { dancing_meme } from '../../assets';
import SubmitButton from '../../components/SubmitButton';
import {Dimensions } from 'react-native';
import { useEffect, useState } from 'react';


export default function AfterCreateAcc() {
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', updateWidth);

    return () => {
      Dimensions.removeEventListener('change', updateWidth);
    };
  }, []);
    return(
        <View style = {styles.container}>
            <View style = {styles.leftcontainer}>
                <Text style = {styles.HeaderText}> The party is almost ready!</Text>
                <Text style = {styles.SubHeader}> Next, connect your account with a music streaming service.</Text>
                <img
                src={dancing_meme}
                style = {styles.DImage}
                />
                <Text style = {styles.Description}> It has been shown that memes make Generation Z something laugh increase</Text>
                <SubmitButton initialText={"Next"} updatedText = "Next" onPress={()=> {}}/>
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
        //flex: 1, // 70% of the available space (7 out of 10 total units)
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#14151E",
        height: '100%',
        width: '100%',
        //paddingLeft:50,
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
        marginTop: 100,
        fontSize: 40, 
        paddingBottom: 25, 
        fontWeight: 'bold', 
        flexWrap: 'wrap', 
        textAlign: 'center', 
        maxWidth: '80%',
        minWidth: 300,
        color: '#FFFFFF',
        //alignSelf: 'flex-start' 
    },
    DImage:{
        //marginTop: '10%',
        paddingBottom: 10, 
        fontWeight: 'bold', 
        //flexWrap: 'wrap', 
        //maxWidth: '80%',
        color: '#FFFFFF',
        //marginRight: 10, // Reduce the paddingRight value
        width: 300,
        height: 300,
        resizeMode: "contain"
    },
    SubHeader: {
        fontSize:24,
        color: '#D1D1D1',
        textAlign: 'center',
       // alignSelf: 'flex-start', 
        paddingBottom: 30,
        paddingTop: 0,
    },
    Description: {
        fontSize:16,
        color: '#A1A1A1',
        textAlign: 'center',
        marginBottom: 25,
    }
});