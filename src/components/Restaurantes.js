import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

export default class Restaurantes extends Component {
  render() {
    return(
      <>
        <View style={styles.container}>
          <Text>IMAGEM</Text>
          <View style={styles.info}>
            <Text style={styles.nome}>Outback Steakhouse</Text>
            <View>
              <Text>Steakhouse</Text>
              <View style={styles.icons}>
                <Icon name="dollar-sign"/>
                <Icon name="dollar-sign"/>
                <Icon name="dollar-sign"/>
                <Icon name="dollar-sign" color="#A0A0A0"/>
              </View>
            </View>

            <View>
            <Text>1.5 km</Text>
            <Text>Lago Norte</Text>
            </View>
          </View>

          <Text style={styles.nota}>9,0</Text>
        </View>
        <Text style={styles.review}>"O atendimento é sensacional e a comida maravilhosa. Recomendo"</Text>
      </>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    flexDirection: "row",
    backgroundColor: "#f0f",
    padding: 10,
    justifyContent: "space-between"
  },
  nota: {
    backgroundColor: "#3CCD36",
    borderRadius: 5,
    fontSize: 15,
    height: 25,
    width: 25,
    textAlign: "center"
  },
  nome: {
    color: "#D06600" ,
    fontSize: 18
  },
  review: {
    color: "#717171"
  },
  info: {
    color: "#717171"
  },
  icons: {
    flexDirection: "row"
  }
});
