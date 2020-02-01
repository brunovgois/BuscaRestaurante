import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';


export default class Restaurantes extends Component {
  constructor(props) {
    super(props);
  } 

  displayPrice() {
    const { price } = this.props.infoRestaurants;
      return (
        <>
          <Icon name="dollar-sign" color={price === 0 ? "#A0A0A0" : "#717171"}/>
          <Icon name="dollar-sign" color={price <= 1 ? "#A0A0A0" : "#717171"}/>
          <Icon name="dollar-sign" color={price <= 2 ? "#A0A0A0" : "#717171"}/>
          <Icon name="dollar-sign" color={price <= 3 ? "#A0A0A0" : "#717171"}/>
        </>
      );

  }

  render() {
    const {name, type, neigborhood, rating, comment} = this.props.infoRestaurants;
    const { image, navigateTo } = this.props;

    return(
      <TouchableOpacity onPress={navigateTo}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
            <View style={styles.typeGrade}>
            <Text style={styles.secondaryTextColor}>{type}</Text>
              <View style={styles.icons}>
                { this.displayPrice() }
              </View>
            </View>

            <View style={styles.distanceLocation}>
              <Text>1.5 km</Text>
              <Text>{neigborhood}</Text>
            </View>
          </View>

          <Text style={styles.grade}>{rating}</Text>
        </View>
        <Text style={styles.review}>"{comment}"</Text>
      </TouchableOpacity>
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
    width: 90,
    height: 90
  },
  secondaryTextColor: {
    color: "#717171"
  }
});
