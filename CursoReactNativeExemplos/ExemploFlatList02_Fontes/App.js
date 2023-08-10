import * as React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const Item = ({name}) => {
	return(
			<View style={styles.item}>
				<Text style={{color: 'black'}}>{name}</Text>
			</View>
	);
}
export default function App() {

	const countries = [	{
		id: '1',
		name: 'Brasil',
	},
	{
		id: '2',
		name: 'Uruguai',
	},
	{
		id: '3',
		name: 'Argentina',
	},
	{
		id: '4',
		name: 'Paraguai',
	},
	{
		id: '5',
		name: 'Chile',
	},
	{
		id: '6',
		name: 'Equador',
	},
	{
		id: '7',
		name: 'Brasil',
	},
	{
		id: '8',
		name: 'Uruguai',
	},
	{
		id: '9',
		name: 'Argentina',
	},
	{
		id: '10',
		name: 'Paraguai',
	},
	{
		id: '11',
		name: 'Chile',
	},
	{
		id: '12',
		name: 'Equador',
	},
	{
		id: '13',
		name: 'Brasil',
	},
	{
		id: '14',
		name: 'Uruguai',
	},
	{
		id: '15',
		name: 'Argentina',
	},
	{
		id: '16',
		name: 'Paraguai',
	},
	{
		id: '17',
		name: 'Chile',
	},
	{
		id: '18cd  cd',
		name: 'Equador',
	},
];

	const renderItem = ({item})=>(
		<Item name={item.name}/>
	);
	return (
		<View style={styles.container}>
			<FlatList
			data={countries}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
		/>
		</View>
	);
}
const styles = StyleSheet.create({
container: {
flex: 1,
marginTop:30,
padding:2,
},
item: {
backgroundColor: 'orange',
padding: 20,
marginVertical: 5,
marginHorizontal: 16,
borderRadius: 8,
shadowColor: '#000',
shadowOffset: { width: 3, height: 3 },
shadowOpacity: 0.3,
shadowRadius: 8,
},
});