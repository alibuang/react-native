import React, { useState } from 'react';
import { Button, TextInput, View , StyleSheet, Text} from 'react-native';


function RegisterScreen(props) {
    const [userInput, setUserInput]=useState('');
    const [usernames, setUsernames]= useState([]);

    const userInputHandler = (input) => setUserInput(input);
    const addUsernameshandler = () =>  setUsernames(
        currentUsernames => [...currentUsernames,userInput]
    );

    return (
        <View style={styles.container}>
            <View style={styles.buttonText}>
                <TextInput 
                    onChangeText={userInputHandler}
                    style={styles.textInput}
                    placeholder="John Doe"
                    value={userInput}
                    />
                <Button 
                    onPress={addUsernameshandler}
                    title="ADD"/>
            </View>
            <View>
                {usernames.map(user => <Text key = {user}>{user}</Text>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        padding: 60
    },
    textInput : {
        borderColor: 'black',
        borderWidth : 1,
        color : 'red',
        width: "80%",
    },
    buttonText : {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        
    }
})

export default RegisterScreen;