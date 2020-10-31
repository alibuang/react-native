import React, { useState } from 'react';
import { Button, ImageBackground , StyleSheet, Text, TextInput, View} from 'react-native';

function WelcomeBurger(props) {

    const [user, setUser]= useState('');
    const [storeUser, setStoreUser]= useState([]);
    const [keyDummy, setKeyDummy]= useState(0)

    const textChangeHandler = (text) => setUser(text);
    const addPressHandler = () => { 
        setStoreUser(
        currentUsers => [...currentUsers, user]
    );
        }


    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/burger-background.jpg")}>

            <View style={styles.container}>
                <TextInput 
                    style={styles.inputUser}
                    onChangeText={textChangeHandler}
                    />
                <Button 
                    title='ADD'
                    onPress={addPressHandler}
                    />
            </View>
            <View>
                {storeUser.map( user=>
                    <Text 
                    style= {styles.userStore}
                    >{user}</Text>
                )}
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:  {
        flex: 1,
        paddingTop: 50,
    },
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
    userStore : {
        color: "blue",
        fontSize:30,
        marginLeft: 5
    }
})

export default WelcomeBurger;