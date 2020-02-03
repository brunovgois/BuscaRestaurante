import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

import IonIcon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import * as data from '../../assets/restaurants.json';
import Restaurantes from '../../components/Restaurantes';

const DATA = data.categories;

const infoRestaurants = data.list;

const carouselImages = [
  require('../../assets/img/pizza_square.png'),
  require('../../assets/img/cafe_square.png'),
  require('../../assets/img/japanese_square.png'),
  require('../../assets/img/burger_square.png'),
  require('../../assets/img/vegetarian_square.png'),
];

const restaurantsImages = [
  require('../../assets/img/outback.png'),
  require('../../assets/img/abbraccio.png'),
  require('../../assets/img/gero.png'),
  require('../../assets/img/pobre_juan.png'),
  require('../../assets/img/divinofogao.png'),
];

_renderItem = ({item, index}) => {
  return (
    <View style={styles.slide}>
      <Image style={styles.carouselImage} source={carouselImages[index]} />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
};

export default class Main extends Component {
  
  handleNavigate = () => {
    const {navigation} = this.props;
    navigation.navigate('Login');
  };

  static navigationOptions = {
    header: () => (
      <View
        style={{
          height: 60,
        }}>
        <LinearGradient colors={['#D06600', '#E69A09']} style={styles.gradient}>
          <IonIcon name="ios-menu" color="#fff" size={30} />
          <Text style={{color: '#FFF', fontSize: 20, fontFamily: "Roboto"}}>Restaurantes</Text>
          <IonIcon name="ios-options" color="#fff" size={30} />
        </LinearGradient>
      </View>
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={DATA}
            renderItem={_renderItem}
            sliderWidth={600}
            itemWidth={280}
            slideStyle={{ width: 100 }}
            sliderWidth={340}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Restaurantes
            image={restaurantsImages[0]}
            infoRestaurants={infoRestaurants[0]}
            navigateTo={this.handleNavigate}
          />
          <Restaurantes
            image={restaurantsImages[1]}
            infoRestaurants={infoRestaurants[1]}
            navigateTo={this.handleNavigate}
          />
          <Restaurantes
            image={restaurantsImages[2]}
            infoRestaurants={infoRestaurants[2]}
            navigateTo={this.handleNavigate}
          />
          <Restaurantes
            image={restaurantsImages[3]}
            infoRestaurants={infoRestaurants[3]}
            navigateTo={this.handleNavigate}
          />
          <Restaurantes
            image={restaurantsImages[4]}
            infoRestaurants={infoRestaurants[4]}
            navigateTo={this.handleNavigate}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  slide: {
    height: 100,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: "Roboto"
  },
  carouselImage: {
    flexGrow: 1,
    height: null,
    width: null,
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
