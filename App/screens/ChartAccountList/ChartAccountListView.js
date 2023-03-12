import { Icon, Input } from '@rneui/themed';
import { FlatList, Text, View } from 'react-native';
import ItemList from './components/ItemList';
import styles from './style';

function ChartAccountListView({
  navigation,
  chartAccounts,
  onChangeSearchValue,
  toggleConfirmation,
}) {
  const itemListComponent = ({ item }) => (
    <ItemList
      item={item}
      onPress={() => navigation.navigate('ChartAccountForm', item)}
      onDeletePress={() => toggleConfirmation(item)}
    />
  );

  return (
    <View style={styles.mainContainer}>
      <Input
        inputContainerStyle={styles.searchInput}
        onChangeText={onChangeSearchValue}
        placeholder="Pesquisar conta"
        leftIcon={
          <Icon
            style={{ marginRight: 12 }}
            name="search"
            type="feather"
            size={20}
            color="#C4C4D1"
          />
        }
      />
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Listagem</Text>
          <Text style={styles.headerCount}>
            {chartAccounts.length}
            {' registros'}
          </Text>
        </View>
        <FlatList
          keyExtractor={(acc) => acc.id.toString()}
          data={chartAccounts}
          renderItem={itemListComponent}
        />
      </View>
    </View>
  );
}

export default ChartAccountListView;
