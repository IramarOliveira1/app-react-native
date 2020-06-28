import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from 'react-native-gesture-handler';
import DropdownAlert from 'react-native-dropdownalert';

export default function Home() {

  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState('');

  async function searchBoard() {
    setLoading(true);

    if (!search) {
      setLoading(false);
      notification.alertWithType('info', 'Atenção', 'Preencha todos os campos!');
      return false;
    }

    await axios.get(`https://apicarros.com/v1/consulta/${search}/json`).then(response => {

      const { cor, placa, municipio, modelo, chassi, situacao, uf, ano, marca, anoModelo } = response.data

      navigation.navigate('Detalhes', {
        cor,
        placa,
        municipio,
        modelo,
        chassi,
        situacao,
        uf,
        ano,
        marca,
        anoModelo
      });

      setSearch('');
      setLoading(false);
    }).catch((err) => {
      notification.alertWithType('error', 'Ooops...', 'Placa Incorreta!');
      setLoading(false);
    });
  }

  return (
    <ImageBackground
      source={require('../../../assets/image-back.jpeg')}
      style={styles.container}
    >

      <DropdownAlert
        ref={ref => setNotification(ref)}
      />

      <View style={styles.inputText}>
        <TextInput
          placeholder="Informe sua placa"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <View>
        <RectButton style={styles.button} onPress={searchBoard}>
          <ActivityIndicator style={{ bottom: 5 }} animating={loading} size="large" color="#FFF" />
          <Text style={styles.colorText} >{loading ? "" : "Pesquisar"}</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#03A9F4',
    width: 300,
    alignItems: 'center',
    height: 50,
    borderRadius: 5,
    padding: 15,
    marginTop: 50,
  },

  colorText: {
    color: '#FFF',
    fontSize: 15,
    bottom: 28,
  },

  inputText: {
    width: 300,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 50,
  },

});
