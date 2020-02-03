import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

export default class Restaurantes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      type,
      neigborhood,
      rating,
      comment,
      distance,
      price,
    } = this.props.infoRestaurants;
    const {image, navigateTo} = this.props;

    return (
      <TouchableOpacity onPress={navigateTo}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />

          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>

            <View style={styles.details}>
              <View style={styles.typeDistance}>
                <Text style={styles.secondaryTextColor}>{type}</Text>
                <Text>{this.displayDistance(distance)}</Text>
              </View>

              <View style={styles.gradeLocation}>
                <View style={styles.icons}>{this.displayGrade(price)}</View>
                <Text style={{fontFamily: "Roboto", color: "#717171"}}>{neigborhood}</Text>
              </View>
            </View>
          </View>
          <Text style={[this.getGradeStyle(rating), styles.rating]}>
            {rating.toFixed(1)}
          </Text>
        </View>
        <Text style={styles.review}>"{comment}"</Text>
      </TouchableOpacity>
    );
  }

  getGradeStyle(rating) {
    if (rating >= 9) return {backgroundColor: '#3CCD36'};
    else if (rating >= 8 && rating < 9) return {backgroundColor: '#93CD36'};
    else if (rating >= 7 && rating < 8) return {backgroundColor: '#CBCD36'};
    else if (rating < 7) return {backgroundColor: '#CD6136'};
  }

  displayGrade(price) {
    return (
      <>
        <Icon name="dollar-sign" color={price === 0 ? '#A0A0A0' : '#717171'} />
        <Icon name="dollar-sign" color={price <= 1 ? '#A0A0A0' : '#717171'} />
        <Icon name="dollar-sign" color={price <= 2 ? '#A0A0A0' : '#717171'} />
        <Icon name="dollar-sign" color={price <= 3 ? '#A0A0A0' : '#717171'} />
      </>
    );
  }

  displayDistance(distance) {
    if (distance < 1000) {
      return <Text style={{fontFamily: "Roboto", color: "#717171"}}>{distance} m</Text>;
    } else {
      return <Text style={{fontFamily: "Roboto", color: "#717171"}}>{(distance / 1000).toFixed(1)} km</Text>;
    }
  }
}

const styles = StyleSheet.create({
  rating: {
    borderRadius: 6,
    fontSize: 15,
    height: 25,
    width: 25,
    textAlign: 'center',
  },
  container: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  name: {
    color: '#D06600',
    fontSize: 18,
    marginLeft: 5,
    fontFamily: "Roboto"
  },
  review: {
    color: '#717171',
    marginLeft: 12,
  },
  info: {
    flex: 1,
  },
  icons: {
    flexDirection: 'row',
    marginTop: 5,
  },
  typeDistance: {},
  gradeLocation: {
    width: 80,
  },
  details: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    marginRight: 20,
  },
  image: {
    width: 70,
    height: 70,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: {width: 2, height: 2},
  },
  secondaryTextColor: {
    color: '#717171',
    fontFamily: "Roboto"
  },
});
