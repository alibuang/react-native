import React, {useState} from 'react';
import {View, Button, StyleSheet, TextInput} from 'react-native';

function InputName(props) {

    const [user, setUser]= useState('');
    const textChangeHandler = (text) => setUser(text);
   
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.inputUser}
                onChangeText={textChangeHandler}
            />

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button 
                        color= "green"
                        title='ADD'
                        onPress={()=>props.addPressed(user)}
                    />
                </View>
                <View style={styles.button}>
                    <Button 
                        color= "red"
                        title='CANCEL'
                        onPress={()=>props.cancelPressed()}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginRight : 5,
        marginLeft: 5,
    },
    inputUser: {
        marginTop: 20,
        backgroundColor: "yellow",
        borderWidth:1,
        height: 70,
        width: "80%",
    },
    buttonContainer:{
        marginTop: 25,
        flexDirection: "row",
        width:"60%",
        justifyContent: "space-between",
    },
    button:{
        width:"40%"
    }
})

export default InputName;