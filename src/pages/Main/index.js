import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import IonIcon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import * as data from '../../assets/restaurants.json';
import Restaurantes from '../../components/Restaurantes';
import { Container } from './styles';

const DATA = data.categories;
const infoRestaurants = data.list;

const carouselImages = [
  require("../../assets/img/pizza_square.png"),
  require("../../assets/img/cafe_square.png"),
  require("../../assets/img/japanese_square.png"),
  require("../../assets/img/burger_square.png"),
  require("../../assets/img/vegetarian_square.png")
];

const restaurantsImages = [
  require("../../assets/img/outback.png"),
  require("../../assets/img/abbraccio.png"),
  require("../../assets/img/gero.png"),
  require("../../assets/img/pobre_juan.png"),
  require("../../assets/img/divinofogao.png"),
]

_renderItem = ({item, index}) => {
  return (
      <View style={styles.slide}>
          <Image style={styles.carouselImage} source={carouselImages[index]}/>
          <Text style={styles.title}>{ item.name }</Text>
      </View>
  );
}

export default class Main extends Component {

  handleNavigate = () => {
    const { navigation } = this.props;

    navigation.navigate('Login');
  }

  static navigationOptions = {
    header: () => (
      <View
        style={{
          height: 50
        }}>
        <LinearGradient colors={["#D06600", "#E69A09"]} style={styles.gradient}>
          <IonIcon name="ios-menu" color="#fff" size={30}/>
          <Text style={{color: "#FFF", fontSize: 20}}>Restaurantes</Text>
          <IonIcon name="ios-options" color="#fff" size={30}/>
        </LinearGradient>
      </View>
    )

}

  render() {
    return(
    <Container>
      <View style={{height: 100}}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={DATA}
          renderItem={_renderItem}
          sliderWidth={600}
          itemWidth={150}
        />
      </View>
      <TouchableOpacity onPress={this.handleNavigate}>
        <Restaurantes image={restaurantsImages[0]} infoRestaurants={infoRestaurants[0]} />
        <Restaurantes image={restaurantsImages[1]} infoRestaurants={infoRestaurants[1]} />
        <Restaurantes image={restaurantsImages[2]} infoRestaurants={infoRestaurants[2]} />
        <Restaurantes image={restaurantsImages[3]} infoRestaurants={infoRestaurants[3]} />
        <Restaurantes image={restaurantsImages[4]} infoRestaurants={infoRestaurants[4]} /> 
      </TouchableOpacity>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  slide: { 
    height: 100,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center'
  },
  carouselImage: {
    flexGrow:1,
    height:null,
    width:null,
    alignItems: 'baseline',
    justifyContent:'center',
  },
  gradient: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15
  }
});

