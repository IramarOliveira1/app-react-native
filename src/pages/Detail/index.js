import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { FontAwesome, Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';

import Information from '../../components/Information';

export default function Detail() {
    const route = useRoute();
    const navigation = useNavigation();

    const routeParams = route.params;

    const addHyphen = routeParams.placa;

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container} >

            <View style={routeParams.situacao ? styles.restrict : styles.noRestrict} >
                {routeParams.situacao
                    ?
                    (<>
                        <Text style={styles.textRestrict}>
                            Veiculo com restrição
                        </Text>
                        <Text style={styles.textRestrict}>
                            de roubo ou furto
                        </Text>
                    </>)
                    :
                    (<>

                        <Text style={styles.textRestrict}>
                            Veiculo sem restrição
                        </Text>
                        <Text style={styles.textRestrict}>
                            de roubo ou furto
                        </Text>

                    </>)
                }
            </View>

            <View style={styles.content}>
                <View style={styles.carLicensePlate}>
                    <Text style={{ fontWeight: "bold", fontSize: 28, color: "#133C55" }}>
                        {addHyphen.substring(3, 0) + "-" + addHyphen.substring(3, 7)}
                    </Text>
                </View>

                <Information
                    title="Marca/Modelo"
                    information={routeParams.modelo}
                    Icon={<Ionicons name="logo-model-s"
                        color={"#133C55"}
                        size={28} />}
                />
                <Information
                    title="Cor"
                    information={routeParams.cor} Icon={<Ionicons name="ios-color-fill" color={"#133C55"} size={28} />}
                />

                <Information
                    title="Ano"
                    information={routeParams.ano ? routeParams.ano : routeParams.anoModelo}
                    Icon={<Entypo name="calendar" color={"#133C55"} size={28} />}
                />

                <Information
                    title="Chassi"
                    information={routeParams.chassi}
                    Icon={<FontAwesome name="gear" color={"#133C55"} size={28} />}
                />

                <Information
                    title="Cidade e Estado"
                    information={routeParams.municipio + " - " + routeParams.uf}
                    Icon={<FontAwesome5 name="map-marker-alt" color={"#133C55"} size={28} />}
                />

                <RectButton style={styles.button} onPress={handleNavigateBack}>
                    <Text style={styles.buttonText}>Pesquisar Novamente</Text>
                </RectButton>
            </View>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },

    noRestrict: {
        backgroundColor: "rgba(45, 206, 137, 0.3)",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: "15%",
        padding: 20,
    },

    restrict: {
        backgroundColor: "rgba(245, 54, 92, 0.3)",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: "15%",
        padding: 20,
    },

    textRestrict: {
        color: "#133C55",
        fontWeight: "bold",
        fontSize: 18,
    },

    carLicensePlate: {
        width: "70%",
        height: 50,
        borderRadius: 4,
        backgroundColor: "#EAF3F8",
        padding: 6,
        alignSelf: "center",
        alignItems: "center",
    },

    content: {
        justifyContent: "space-between",
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
    },

    button: {
        backgroundColor: "#91E5F6",
        width: "100%",
        height: 50,
        borderRadius: 4,
        alignItems: "center",
    },

    buttonText: {
        color: "#133C55",
        fontSize: 15,
        fontWeight: "bold",
        padding: 15,
    },

});
