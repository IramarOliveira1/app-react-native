import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const routeParams = route.params;

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                <Text>{routeParams.cor}</Text>
                <Text>{routeParams.placa}</Text>
                <Text>{routeParams.municipio}</Text>
                <Text>{routeParams.modelo}</Text>
                <Text>{routeParams.chassi}</Text>
                <Text>{routeParams.situacao}</Text>
                <Text>{routeParams.uf}</Text>
                <Text>{routeParams.ano}</Text>

                <TouchableOpacity onPress={handleNavigateBack}>
                    <Text>Voltar </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
