import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ResultsDetail from './ResultsDetail';

function ResultsList({Title, results}) {
  const navigation = useNavigation();
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>{Title}</Text>
      <FlatList
        horizontal
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(results) => results.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultDetails', {
                  id: item.id,
                  title: item.name,
                })
              }>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  Title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default ResultsList;
