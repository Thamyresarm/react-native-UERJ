import React, {useState, useEffect} from 'react';

import {SafeAreaView,  StyleSheet,  ActivityIndicator,  FlatList,  Text,  View,  RefreshControl,StatusBar} from 'react-native';

const App = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setRefreshing(false);
        setDataSource(responseJson);
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
        {item.title}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (      
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8'}} 
      />
    );
  };

  const getItem = (item) => {    
    alert('Id : ' + item.id + ' Body : ' + item.body);
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
        {refreshing ? <ActivityIndicator /> : null}
        <FlatList
          data={dataSource}          
          ItemSeparatorComponent={ItemSeparatorView}
          enableEmptySections={true}
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
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
  },
  itemStyle: {
    fontSize: 20,
    padding: 10,
  },
});

export default App;