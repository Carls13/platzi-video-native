import React from 'react';
import { FlatList, Text } from 'react-native';

import Layout from './../components/suggestion-list.layout';
import Empty from './../components/empty';
import Separator from './../components/vertical-separator';
import Suggestion from './../components/suggestion';

class SuggestionsList extends React.Component{
	renderEmpty = () => <Empty text="No hay sugerencias" />;
	
	itemSeparator = () => <Separator />;
	
	renderItem = ({ item }) => <Suggestion {...item}/>
	
	keyExtractor = item => item.id.toString();

	render(){
		const { list } = this.props;
		
		return(
			<Layout title="Recomendado para ti">
				<FlatList
					keyExtractor={this.keyExtractor}
					ListEmptyComponent={this.renderEmpty}
					data={list}
					ItemSeparatorComponent={this.itemSeparator}
					renderItem={this.renderItem}
			/>
			</Layout>
			
		);
 }
}

export default SuggestionsList;