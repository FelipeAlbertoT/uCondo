import { Icon } from '@rneui/base';
import { ListItem } from '@rneui/themed';
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import chartAccounts from "../data/chartAccounts";

export default function ChartAccountScreen({ navigation }) {
  const getChartAccountName = ({ item }) => {
    return (
      <ListItem containerStyle={styles.listItem}>
        <ListItem.Content style={styles.listContent}>
          <ListItem.Title style={{ color: 'red' }}>{item.id} - {item.name}</ListItem.Title>
        </ListItem.Content>
        <Icon name="trash-can-outline" type="material-community" color="grey" />
      </ListItem>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={acc => acc.id.toString()}
        data={chartAccounts}
        renderItem={getChartAccountName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDF5',
    justifyContent: 'center',
  },
  listItem: {
    marginLeft: 22,
    marginRight: 24,
    marginBottom: 13,
    borderRadius: 16,
    backgroundColor: '#FFF'
  },
  listContent: {
    flex: 1
  },
  header: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 22
  },
});