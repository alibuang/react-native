import React from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function ItemList(props) {
    return (
        <TouchableOpacity onPress={ props.deleteTrigger.bind(this, props.id) }>
            <View style={styles.userStore}>
                <Text style={styles.fontCust}>{props.userData}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    fontCust:{
        fontSize:30,
        color: "blue"

    },
    userStore : {
        width: "80%",
        marginLeft: 5,
        marginTop: 5,
        paddingTop: 10,
        borderColor: "black",
       backgroundColor: "grey"
    }
})

export default ItemList;