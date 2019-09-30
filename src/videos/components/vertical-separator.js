import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const VerticalSeparator = ({ color }) => (
   <View style={[
   	styles.separator,
   		{
   			borderTopColor: (color) ? color : '#EAEAEA'
   		}
   	]}>
   </View>
);

const styles = StyleSheet.create({
	separator: {
		borderTopWidth: 3,
	}
});

export default VerticalSeparator;