import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function ResultsDetail({result}) {
  return (
    <View style={styles.Container}>
      <Image style={styles.Image} source={{uri: result.image_url}} />
      <Text style={styles.Name}>{result.name}</Text>
      <Text>
        {result.rating} stars {result.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginLeft: 10,
  },
  Image: {
    height: 120,
    width: 250,
    borderRadius: 15,
  },
  Name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default ResultsDetail;
