import * as React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, ImageBackground} from 'react-native'
import Icon from "react-native-vector-icons/Feather";
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';

export default function Friends() {

    const [search, setSearch] = React.useState("")

    return(
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#14151E",
          }}>
            <View style={styles.container}>
                <View style={styles.container}>
                    <Icon name="arrow-left" size={40} color="white" style={styles.icon} />
                    <Text style={styles.header}>Friends</Text>
                </View>
                <View style={styles.plusIcon}>
                    <Icon name="plus" size={40} color="white" style={styles.icon} />
                </View>
            </View>
            
            <View style={styles.inputContainer}>
                <Icon name="search" size={20} color="#C7C6C6" style={styles.smallIcon} />
                <TextInput
                    placeholder="Search friends..."
                    placeholderTextColor="#C7C6C6"
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    style={styles.textInput}
                />
            </View>

            <ScrollView style={styles.scroll}>
                <View style={styles.rectangularBox}>
                    <Icon name="user" size={20} color="#C7C6C6" style={[styles.smallIcon, { color: 'white', paddingTop: 10,}]} />
                </View>
                <View style={styles.rectangularBox}>
                    <Icon name="user" size={20} color="#C7C6C6" style={[styles.smallIcon, { color: 'white', paddingTop: 10,}]} />
                </View>
                <View style={styles.rectangularBox}>
                    <Icon name="user" size={20} color="#C7C6C6" style={[styles.smallIcon, { color: 'white', paddingTop: 10,}]} />
                </View>
                <View style={styles.rectangularBox}>
                    <Icon name="user" size={20} color="#C7C6C6" style={[styles.smallIcon, { color: 'white', paddingTop: 10,}]} />
                </View>
                <View style={styles.rectangularBox}>
                    <Icon name="user" size={20} color="#C7C6C6" style={[styles.smallIcon, { color: 'white', paddingTop: 10,}]} />
                </View>
                <View style={styles.rectangularBox}>
                    <Icon name="user" size={20} color="#C7C6C6" style={[styles.smallIcon, { color: 'white', paddingTop: 10,}]} />
                </View>
                <View style={styles.rectangularBox}>
                    <Icon name="user" size={20} color="#C7C6C6" style={[styles.smallIcon, { color: 'white', paddingTop: 10,}]} />
                </View>
                <View style={styles.rectangularBox}>
                    <Icon name="user" size={20} color="#C7C6C6" style={[styles.smallIcon, { color: 'white', paddingTop: 10,}]} />
                </View>
                <View style={styles.rectangularBox}>
                    <Icon name="user" size={20} color="#C7C6C6" style={[styles.smallIcon, { color: 'white', paddingTop: 10,}]} />
                </View>
                <View style={styles.rectangularBox}>
                    <Icon name="user" size={20} color="#C7C6C6" style={[styles.smallIcon, { color: 'white', paddingTop: 10,}]} />
                </View>
                <View style={styles.rectangularBox}>
                    <Icon name="user" size={20} color="#C7C6C6" style={[styles.smallIcon, { color: 'white', paddingTop: 10,}]} />
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    icon: {
      marginRight: 10,
      paddingLeft: 5,
      marginTop: 3,
    },
    smallIcon: {
        marginLeft: 10,
        marginRight: 10,
    },
    plusIcon: {
        marginTop: 7,
        paddingLeft: 50
      },
    header: {
        fontSize: 35,
        color: "white",
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    textInput: {
        height: 30,
        width: 300,
        backgroundColor: "#333333",
        textAlign: "left",
        color: "#C7C6C6",
        flex: 1,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#333333",
        height: 40,
        width: '85%',
        marginTop: 10,
        marginBottom: 10,
        maxWidth: 500,
        borderColor: "#19A7CE",
        borderWidth: 2.5,
        borderRadius: 7,
        //marginBottom: 475,
    },
    scroll: {
        width: '85%',
        maxWidth: 500,
        height: 400,
    },
    rectangularBox: {
        width: '100%',
        height: 50,
        backgroundColor: '#146C94',
        borderWidth: 2,
        //justifyContent: 'center',
        //alignItems: 'center',
        borderRadius: 10,
        padding: 3,
        marginBottom: 10,
    },
  });