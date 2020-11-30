import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import yelp from '../api/yelp';

function ResultDetailsScreen({route, navigation}) {
  const [result, setResult] = useState(null);
  const {id, title} = route.params;

  const findResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    findResult(id);
  }, []);
  if (!result) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.resultName}>{result.name}</Text>

        <Text />
        <Text style={styles.Descriptor}>Address:</Text>
        <Text style={styles.address}>
          {result.location.address1} {result.location.city}{' '}
          {result.location.zip_code} {result.location.state}
        </Text>
        <Text style={styles.Descriptor}>Phone Number: </Text>
        <Text>{result.phone}</Text>
        <Text style={styles.Descriptor}>Photos</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({item}) => {
            return <Image style={styles.image} source={{uri: item}} />;
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  resultName: {
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
  },
  address: {},
  Descriptor: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 15,
  },
});

export default ResultDetailsScreen;
