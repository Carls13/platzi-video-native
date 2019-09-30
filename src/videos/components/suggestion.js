import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

const Suggestion = ({ title, year, rating, genres, medium_cover_image}) => (
   <View style={styles.container}>
   		<View style={styles.container}>
   			<Image 
   				source={{
   					uri: medium_cover_image
   				}}
   				style={styles.cover}/>
			<View style={styles.genre}>
				<Text style={styles.genreText}>
					{genres[0]}
				</Text>
			</View>
   		</View>
   		<View style={styles.right}>
   			<Text style={styles.title}>{title}</Text>
   			<Text style={styles.year}>{year}</Text>
   			<Text style={styles.rating}>{rating}</Text>
   		</View>
   </View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	genre: {
		position: 'absolute',
		top: 0,
		left: 0,
		backgroundColor: 'black',
		zIndex: 3
	},
	genreText: {
		color: 'white',
		fontSize: 11,
		paddingVertical: 5,
		paddingHorizontal: 7
	},
	cover: {
		height: 150,
		width: 100,
		resizeMode: 'contain'
	},
	right: {
		paddingLeft: 10,
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 18,
		color: '#44546B'
	},
	year: {
		backgroundColor: '#70B124',
		paddingVertical: 4,
		paddingHorizontal: 6,
		color: 'white',
		fontSize: 11,
		borderRadius: 5,
		overflow: 'hidden',
		alignSelf: 'flex-start'
	},
	rating: {
		color: '#6B6B6B',
		fontSize: 14,
		fontWeight: 'bold',
	}
});

export default Suggestion;