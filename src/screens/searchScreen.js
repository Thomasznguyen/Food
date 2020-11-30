import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/searchBar';
import useSearchResults from '../hooks/useSearchResults';
import ResultsList from '../components/ResultsList';

function SearchScreen() {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useSearchResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <SearchBar
        term={term}
        onTermChange={setTerm}
        onSubmit={() => searchApi(term)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList
          results={filterResultsByPrice('$')}
          Title={'Inexpensive '}
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          Title={'Reasonably priced '}
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          Title={'Moderately priced'}
        />
        <ResultsList
          results={filterResultsByPrice('$$$$')}
          Title={'Expensive'}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
