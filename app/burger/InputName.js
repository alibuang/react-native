import React, {useState} from 'react';
import {View, Button, StyleSheet, TextInput} from 'react-native';

function InputName(props) {

    const [user, setUser]= useState('');
    const textChangeHandler = (text) => setUser(text);
   
    return (
        <View style={styles.container}>
        <   TextInput 
            style={styles.inputUser}
            onChangeText={textChangeHandler}
            />
        <   Button 
            title='ADD'
            onPress={()=>props.addPressed(user)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight : 5,
        marginLeft: 5,
    },
    inputUser: {
        marginTop: 20,
        backgroundColor: "white",
        borderBottomWidth:1,
        height: 70,
        width: "80%",
    },
})

export default InputName;