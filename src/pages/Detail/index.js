import React from 'react';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function Detail() {
    const route = useRoute();

    const routeParams = route.params;

    return (
        <View style={styles.container}>
            <View style={routeParams.situacao === 'Sem restrição' ? styles.noRestrict : styles.restrict}>
                <Text style={styles.textRestrict}>{routeParams.situacao === 'Sem restrição'
                    ? 'Veículo sem restrição de roubo ou furto'
                    : 'Veículo com restrição de roubo'}
                </Text>
            </View>

            <View style={styles.textBoard}>
                <Text>{routeParams.placa}</Text>
            </View>

            <View style={styles.Main}>
                <FlatList
                    data={[
                        { key: 'Marca/Modelo:' },
                        { key: 'Cor:' },
                        { key: 'Ano:' },
                        { key: 'Chassi:' },
                        { key: 'Cidade/Estado:' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.fontPrimary} >{item.key}</Text>}
                />

                <View style={styles.mainSecond}>
                    <Text style={styles.fontSecond}>{routeParams.modelo}</Text>
                    <Text style={styles.fontSecond}>{routeParams.cor}</Text>
                    <Text style={styles.fontSecond}>{routeParams.ano ? routeParams.ano : routeParams.anoModelo}</Text>
                    <Text style={styles.fontSecond}>{routeParams.chassi}</Text>
                    <Text style={styles.fontSecond}>{routeParams.municipio + " / " + routeParams.uf}</Text>
                </View>
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: 50,
    },

    noRestrict: {
        backgroundColor: 'green',
        width: '100%',
        alignItems: 'center',
        bottom: 50,
        padding: 20
    },

    restrict: {
        backgroundColor: 'red',
        width: '100%',
        alignItems: 'center',
        bottom: 50,
        padding: 20
    },

    textRestrict: {
        color: '#FFF',
        fontWeight: "bold",
        fontSize: 18,
    },

    textBoard: {
        width: '50%',
        height: 50,
        backgroundColor: '#BBBCC5',
        borderWidth: 1,
        borderRadius: 5,
        padding: 13,
        alignSelf: "center",
        alignItems: "center",
    },

    Main: {
        flexDirection: "row",
        justifyContent: "space-around",
        top: 20,
        padding: 10,
    },

    mainSecond: {
        flexDirection: "column",
        alignItems: "flex-end",
    },

    fontPrimary: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',
        padding: 5
    },

    fontSecond: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'blue',
        padding: 5,
    },

    // button: {
    //     backgroundColor: '#03A9F4',
    //     width: 300,
    //     alignItems: 'center',
    //     height: 50,
    //     borderRadius: 5,
    //     padding: 15,
    //     marginTop: 70,
    // },

});
