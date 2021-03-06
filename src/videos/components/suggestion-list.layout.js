import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const SuggestionListLayout = ({ title, children}) => (
   <View style={styles.container}>
   	<Text style={styles.title}>{title}</Text>
   	{children}
   </View>
);

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		flex: 1
	},
	title: {
		color: '#4C4C4C',
		fontSize: 20,
		marginBottom: 10,
		fontWeight: 'bold',
		marginLeft: 8
	}
})

export default SuggestionListLayout;