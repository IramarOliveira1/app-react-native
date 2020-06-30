import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Information({ title, information, Icon }) {
    return (
        <View style={style.container}>

            <View style={style.icon}>
                {
                    Icon
                }
            </View>
            <View>
                <Text style={style.title}>{title}</Text>
                <Text style={style.information}>{information}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
    },

    icon: {
        width: 40,
        height: 40,
        borderRadius: 40/2 ,
        backgroundColor: "rgba(41, 131, 183, 0.1)",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },

    title: {
        lineHeight: 18,
        fontSize: 15,
        color: "rgba(19, 60, 85, 0.5)",
    },

    information: {
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 21,
        color: "#133C55",
    }
});
