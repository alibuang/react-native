import React, { useState } from 'react';
import { ImageBackground , StyleSheet, FlatList, Modal, Button} from 'react-native';
import ItemList from './ItemList';
import InputName from './InputName';

function WelcomeBurger(props) {

    const [storeUser, setStoreUser]= useState([]);
    const [isActivate, setIsActivate] = useState(false);

    const addPressHandler = (user) => { 
        setStoreUser(
        currentUsers => [...currentUsers, {id: Math.random().toString(),  value:user}]
        );
        setIsActivate(false);
    }
    const cancelPressHandler = () => setIsActivate(false);

    const deleteHandler = (key) => {
        setStoreUser(
            currentUsers => {
                return currentUsers.filter(user => user.id !== key)
            }
        );

    }

    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/burger-background.jpg")}>

            <Button title="Store User" onPress={()=> setIsActivate(true)}/>

            <Modal
                visible={isActivate}
                animationType="slide"
                >
                <InputName 
                    addPressed={addPressHandler}
                    cancelPressed={cancelPressHandler}
                    />
            </Modal>    

            <FlatList 
                keyExtractor={(item, index)=> item.id}
                data= {storeUser}
                renderItem={ user => 
                    <ItemList 
                        id={user.item.id} 
                        deleteTrigger={deleteHandler} 
                        userData={user.item.value}/>
                }
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:  {
        flex: 1,
        paddingTop: 50,
    },
})

export default WelcomeBurger;