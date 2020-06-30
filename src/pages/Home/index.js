import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import DropdownAlert from 'react-native-dropdownalert';

import { FontAwesome } from '@expo/vector-icons';

import { TextInputMask } from 'react-native-masked-text'

// import logo from '../../../assets/logo.jpeg'

export default function Home() {

  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState('');

  async function handleSearchBoard() {
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
    <>
      <SafeAreaView style={styles.container}>

        <Image
          style={styles.image}
          source={require('../../../assets/logo.jpeg')}
        />

        <DropdownAlert
          ref={ref => setNotification(ref)}
        />

        <View >
          <Text style={styles.description}>Pesquisa simples,</Text>
          <Text style={styles.description}>rápida e fácil</Text>
        </View>

        <View>
          <Text style={{ color: 'rgba(19, 60, 85, 0.5)' }}>Informe a placa do seu veículo</Text>
          <View style={styles.main} >
            <TextInputMask
              style={styles.input}
              type={'custom'}
              options={{
                mask: "AAA9999",
              }}
              value={search}
              onChangeText={text => setSearch(text)}
            />

            <View style={styles.button}>
              <TouchableOpacity onPress={handleSearchBoard}>
                {loading
                  ? <ActivityIndicator animating={loading} size="large" color="#133C55" style={{ top: 8 }} />
                  : <FontAwesome name="search" size={32} color="#133C55" style={{ top: 8 }} />
                }
              </TouchableOpacity>
            </View>
          </View>

        </View>

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  image: {
    width: 204,
    height: 50,
  },

  description: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#133C55',
  },

  main: {
    flexDirection: "row",
    justifyContent: "center"
  },

  input: {
    width: '80%',
    borderColor: '#EAF3F8',
    backgroundColor: '#EAF3F8',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderWidth: 1,
    marginBottom: 50,
    height: 50,
    paddingHorizontal: 20,
  },

  button: {
    backgroundColor: '#91E5F6',
    width: '20%',
    height: 50,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    alignItems: 'center',
  },
});
