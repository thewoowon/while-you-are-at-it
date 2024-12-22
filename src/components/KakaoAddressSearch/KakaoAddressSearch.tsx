import React, {useState} from 'react';
import {View, TextInput, Button, FlatList, Text} from 'react-native';
import axios from 'axios';

const KakaoAddressSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<
    {
      address_name: string;
      road_address_name: string;
      x: string;
      y: string;
    }[]
  >([]);

  const searchAddress = async () => {
    try {
      const response = await axios.get(
        'https://dapi.kakao.com/v2/local/search/address.json',
        {
          params: {query},
          headers: {
            Authorization: 'KakaoAK YOUR_API_KEY', // Kakao API 키
          },
        },
      );
      setResults(response.data.documents);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Search Address"
        value={query}
        onChangeText={setQuery}
        style={{borderWidth: 1, padding: 10, marginBottom: 10}}
      />
      <Button title="Search" onPress={searchAddress} />
      <FlatList
        data={results}
        keyExtractor={item => item.address_name}
        renderItem={({item}) => <Text>{item.address_name}</Text>}
      />
    </View>
  );
};

export default KakaoAddressSearch;
