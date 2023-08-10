import React, {useState, useEffect} from 'react'; 
import {SafeAreaView,Text,StyleSheet,View,FlatList,RefreshControl, StatusBar} from 'react-native'; 

const App = () => { 
  const [refreshing, setRefreshing] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => { 
    getData();
  }, []); 

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos') 
      .then((response) => response.json()) 
      .then((responseJson) => { 
        setDataSource(responseJson); 
        setRefreshing(false);
      }) 
      .catch((error) => { 
        console.error(error); 
      }); 
  };

  const ItemView = ({item}) => { 
    return ( 
      <Text 
        style={styles.itemStyle} 
        onPress={() => getItem(item)}> 
        {item.id} 
        {' - '} 
        {item.title.toUpperCase()} 
      </Text> 
    ); 
  }; 

  const getItem = (item) => { 
    alert('Id : ' + item.id + '\n\nTarefa : ' + item.title + '\n\nCompletada: ' + item.completed); 
  }; 

  const onRefresh = () => {
    setRefreshing(true);
    setDataSource([]);
    getData();
  };

  return ( 
    <SafeAreaView style={{flex: 1}}> 
      <View style={styles.container}> 
	  <StatusBar hidden={false} />
        <FlatList 
          data={dataSource} 
          keyExtractor={item => item.id} 
          renderItem={ItemView} 
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        /> 
      </View> 
    </SafeAreaView> 
  ); 
}; 

const styles = StyleSheet.create({ 
  container: { 
    paddingTop: 40, 
    backgroundColor: 'white', 
  }, 
  itemStyle: { 
    backgroundColor: '#0066CC', 
    padding: 10, 
    marginVertical: 8, 
    marginHorizontal: 10, 
    color: 'white', 
  }, 
}); 

export default App;