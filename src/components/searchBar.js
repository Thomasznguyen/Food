import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function SearchBar({term, onTermChange, onSubmit}) {
  return (
    <View style={styles.backgroundStyle}>
      <Icon name="search" color="#000" style={styles.Icon} />
      <TextInput
        placeholder="Search"
        style={styles.textInput}
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    backgroundColor: '#cfcece',
    marginBottom: 10,
  },
  Icon: {
    fontSize: 30,
    alignSelf: 'center',
    padding: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 19,
    color: '#000000',
  },
});

export default SearchBar;
