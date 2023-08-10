import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Alert, StyleSheet} from 'react-native';


const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data,setData] = useState(null);
  const [title,setTitle] = useState('');
  const [rodape,setRodape] = useState('');

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);	  
	  setTitle(json.title);
	  setRodape(json.description);	  
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const Titulo = () => {
    return (
      <View style={styles.headerFooterStyle}>
        <Text style={styles.textStyle}>
	        {title}
        </Text>
      </View>
    );
  };
  
  const Rodape = () => {
    return (
      <View style={styles.headerFooterStyle}>
        <Text style={styles.textStyle}>
	        {rodape}
        </Text>
      </View>
    );
  };
  
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
		  ListHeaderComponent={Titulo}
		  ListFooterComponent={Rodape}
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text style={styles.itemStyle}>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({  
  container: { 
	flex:1,
    margin: 10,  
    paddingTop: 40,  
    backgroundColor: 'white',  
  },  
  itemStyle: {  
    backgroundColor: '#0066CC',  
    padding: 10,  
    marginVertical: 8,  
    color: 'white',  
  },  
  headerFooterStyle: {
    width: '100%',
    height: 45,
    backgroundColor: '#606070',
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },
});  

export default App;