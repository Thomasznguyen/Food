import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    console.log('Hello');
    try {
      setErrorMessage('');
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'maryland',
        },
      });
      setResult(response.data.businesses);
    } catch (err) {
      setErrorMessage('Oops Something went wrong!');
    }
  };
  useEffect(() => {
    searchApi('');
  }, []);
  return [searchApi, results, errorMessage];
};
