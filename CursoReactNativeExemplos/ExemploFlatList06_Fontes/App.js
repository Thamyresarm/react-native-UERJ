import React from 'react';  
import {SafeAreaView, Text, StyleSheet,View,FlatList} from 'react-native';  

const DATA = [ 
  { id: "1", 
    title: "Faraday", 
  }, 
  { id: "2", 
    title: "Isaac Newton", 
  }, 
  { id: "3", 
    title: "LaPlace", 
  }, 
  { id: "4", 
    title: "Volta", 
  }, 
  { id: "5", 
    title: "Marie Curie", 
  },   
  { id: "6", 
    title: "Edison", 
  },   
  { id: "7", 
    title: "Benjamin Franklin", 
  },   
  { id: "8", 
    title: "Einstein", 
  },   
  { id: "9", 
    title: "Lattes", 
  },  
  { id: "10", 
    title: "Da Vinci", 
  },  
  { id: "11", 
    title: "Galileu", 
  },  
  { id: "12", 
    title: "Copérnico", 
  },
  { id: "13", 
    title: "Tesla", 
  },
  { id: "14", 
    title: "Sabin", 
  },
  { id: "15", 
    title: "Darwin", 
  },
  { id: "16", 
    title: "Fourier", 
  },  
  { id: "17", 
    title: "Karnaugh", 
  },
  { id: "18", 
    title: "Stephen Hawking", 
  },
  { id: "19", 
    title: "Arquimedes", 
  },
  { id: "20", 
    title: "Antoine Lavoisier", 
  },
]; 

const App = () => {  

  const ItemView = ({item}) => {  
    return (  
      <Text style={styles.itemStyle}
		onPress={() => alert(item.id)}
	  >  
        {item.id}{' - '}{item.title.toUpperCase()}  
      </Text>  
    );  
  };  

  const chegouAoFim = () => {
    alert("Acabouuuu!");
  }

  return (  
    <SafeAreaView style={{flex: 1}}>  
      <View style={styles.container}>  
        <FlatList  
          data={DATA}  
          keyExtractor={item => item.id}  
          renderItem={ItemView}  
          onEndReached={chegouAoFim}
          onEndReachedThreshold={0.1}		  
        />  
      </View>  
    </SafeAreaView>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    margin: 10,  
    paddingTop: 40,  
    backgroundColor: 'white',  
  },  
  itemStyle: {  
    backgroundColor: '#ffc700',  
    padding: 10,  
    marginVertical: 8,  
    color: 'black',  
  },  
});  

export default App;
