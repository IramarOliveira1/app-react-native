import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground, TextInput } from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

export default function Home() {

  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  async function searchBoard() {
    setLoading(true);

    if (!search) {
      setLoading(false);
      alert('Preencha o campo vazio!');
      return false;
    }

    await axios.get(`https://apicarros.com/v1/consulta/${search}/json`).then(response => {

      const { cor, placa, municipio, modelo, chassi, situacao, uf, ano, marca, anoModelo } = response.data

      navigation.navigate('Voltar', {
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
      alert('Placa incorreta!');
      setLoading(false);
    });
  }

  return (
    <ImageBackground
      source={require('../../../assets/image-back.jpeg')}
      style={styles.container}
    >

      <View style={styles.inputText}>

        <TextInput
          placeholder="Informe sua placa"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={searchBoard}>
          <Text style={styles.colorText} >  {loading ? "Carregando..." : "Pesquisar"}</Text>
        </TouchableOpacity>
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
    fontSize: 15
  },

  inputText: {
    width: 300,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 50,
  },

});
