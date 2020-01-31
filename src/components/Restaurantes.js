import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';


export default class Restaurantes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <View style={styles.container}>
          <Image style={styles.image} source={this.props.image} />
          <View style={styles.info}>
            <Text style={styles.name}>Outback Steakhouse</Text>
            <View style={styles.typeGrade}>
              <Text style={styles.secondaryTextColor}>Steakhouse</Text>
              <View style={styles.icons}>
                <Icon name="dollar-sign"/>
                <Icon name="dollar-sign"/>
                <Icon name="dollar-sign"/>
                <Icon name="dollar-sign" color="#A0A0A0"/>
              </View>
            </View>

            <View style={styles.distanceLocation}>
              <Text>1.5 km</Text>
              <Text>Lago Norte</Text>
            </View>
          </View>

          <Text style={styles.grade}>9,0</Text>
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
    padding: 10,
    justifyContent: "space-between"
  },
  grade: {
    backgroundColor: "#3CCD36",
    borderRadius: 5,
    fontSize: 15,
    height: 25,
    width: 25,
    textAlign: "center"
  },
  name: {
    color: "#D06600" ,
    fontSize: 18
  },
  review: {
    color: "#717171"
  },
  info: {
   
  },
  icons: {
    flexDirection: "row",
    marginRight: 25,
    marginTop: 5
  },
  typeGrade: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  distanceLocation: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  image: {
    width: 100,
    height: 100
  },
  secondaryTextColor: {
    color: "#717171"
  }
});
