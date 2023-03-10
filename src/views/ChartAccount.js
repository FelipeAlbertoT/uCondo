import { Icon } from '@rneui/base';
import { ListItem, Dialog } from '@rneui/themed';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";
import chartAccounts from "../data/chartAccounts";

export default function ChartAccountScreen({ navigation }) {
  const [showDialog, setShowDialog] = useState(false)

  const getChartAccountName = ({ item }) => {
    return (
      <ListItem containerStyle={styles.listItem}>
        <ListItem.Content style={styles.listContent}>
          <ListItem.Title style={[styles.listTitle, item.type == 1 ? styles.listTitleIncome : styles.listTitleExpense]}>{item.id} - {item.name}</ListItem.Title>
        </ListItem.Content>
        <Icon name="trash" type="feather" color="#C4C4D1" onPress={() => setShowDialog(true)} />
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

      <Dialog
        overlayStyle={styles.dialog}
        isVisible={showDialog}
        onBackdropPress={() => setShowDialog(false)}
      >
        <Icon style={{ paddingBottom: 21 }} size={40} name="trash" type="feather" color="#FF6680" />
        <View style={{alignItems: 'center', marginBottom: 23}}>
          <Text>Deseja excluir a conta</Text>
          <Text>1.1 - Taxa condominial?</Text>
        </View>
        <Dialog.Actions>
          <Dialog.Button
            titleStyle={styles.btnPos}
            buttonStyle={styles.btnPos}
            type="solid"
            title="Com certeza"
            onPress={() => console.log('Secondary Action Clicked!')} />
          <Dialog.Button
            titleStyle={styles.btnNeg}
            type="clear"
            title="Não!"
            onPress={() => console.log('Primary Action Clicked!')} />
        </Dialog.Actions>
      </Dialog>
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
  listTitle: {
    fontWeight: 400,
    fontSize: 15
  },
  listTitleIncome: {
    color: '#1BA803'
  },
  listTitleExpense: {
    color: '#E28856'

  },
  dialog: {
    backgroundColor: '#FFF',
    borderRadius: 16
  },
  btnPos: {
    color: '#FFF',
    backgroundColor: '#FF6680',
    borderRadius: 100,
    paddingHorizontal: 12,
    fontSize: 15,
    fontWeight: 400,
  },
  btnNeg: {
    color: '#FF6680',
    fontSize: 15,
    fontWeight: 400,
  }
});