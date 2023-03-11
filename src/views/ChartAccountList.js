import { Icon } from '@rneui/base';
import { ListItem, Dialog, Input } from '@rneui/themed';
import { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import ChartAccountContext from '../context/chartAccountContext';

export default function ChartAccountList({ navigation }) {
  const [showDialog, setShowDialog] = useState(false)
  const [accToDelete, setAccToDelete] = useState({})

  const { state, dispatch } = useContext(ChartAccountContext);
  const [ chartAccounts, setChartAccounts ] = useState()

  useEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false
    })
  }, [navigation]);

  useEffect(() => {
    setChartAccounts(state.chartAccounts.sort((a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
    }))
  }, [state])

  const toggleConfirmation = (acc) => {
    setShowDialog(!showDialog)
    setAccToDelete(acc)
  }

  const deleteChartAccount = () => {
    toggleConfirmation({})
    dispatch({
      type: 'deleteChartAccount',
      payload: accToDelete.id
    })
  }

  const getChartAccountName = ({ item }) => {
    return (
      <ListItem containerStyle={styles.listItem} onPress={() => navigation.navigate('ChartAccountForm', item)}>
        <ListItem.Content style={styles.listContent}>
          <ListItem.Title style={[styles.listTitle, item.type == 1 ? styles.listTitleIncome : styles.listTitleExpense]}>{item.id} - {item.name}</ListItem.Title>
        </ListItem.Content>
        <Icon name="trash" type="feather" color="#C4C4D1" onPress={() => toggleConfirmation(item)} />
      </ListItem>
    )
  }
  return (
    <View style={styles.mainContainer}>
      <Input
          inputContainerStyle={styles.searchInput}
          onChangeText={(value) => { setChartAccounts(state.chartAccounts.filter(acc => acc.name.toLowerCase().includes(value.toLowerCase())))}}
          placeholder="Pesquisar conta"
          leftIcon={<Icon style={{marginRight: 12}} name='search' type="feather" size={20} color='#C4C4D1' />}
        />
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Listagem</Text>
          <Text style={styles.headerCount}>{state.chartAccounts.length} registros</Text>
        </View>
        <FlatList
          keyExtractor={acc => acc.id.toString()}
          data={chartAccounts}
          renderItem={getChartAccountName}
        />

        <Dialog
          overlayStyle={styles.dialog}
          isVisible={showDialog}
          onBackdropPress={() => toggleConfirmation({})}>
          <Icon style={{ paddingBottom: 21 }} size={40} name="trash" type="feather" color="#FF6680" />
          <View style={{ alignItems: 'center', marginBottom: 23 }}>
            <Text style={styles.dialogText}>Deseja excluir a conta</Text>
            <Text style={styles.dialogText}><Text style={styles.dialogItem}>{accToDelete.id} - {accToDelete.name}</Text>?</Text>
          </View>
          <Dialog.Actions>
            <Dialog.Button
              titleStyle={styles.btnPos}
              buttonStyle={styles.btnPos}
              type="solid"
              title="Com certeza"
              onPress={() => deleteChartAccount()} />
            <Dialog.Button
              titleStyle={styles.btnNeg}
              type="clear"
              title="Não!"
              onPress={() => toggleConfirmation({})} />
          </Dialog.Actions>
        </Dialog>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#622490'
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#F0EDF5',
    justifyContent: 'center',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  searchInput: {
    backgroundColor: '#FFF',
    borderRadius: 100,
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
    height: 56,
    paddingHorizontal: 26,
    fontFamily: 'roboto',
    fontSize: 15,
    fontWeight: 400,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 28,
    marginVertical: 21,
  },
  headerTitle: {
    color: '#3D3D4C',
    fontFamily: 'rubik',
    fontSize: 20,
    fontWeight: 400,
  },
  headerCount: {
    color: '#A0A0B2',
    fontFamily: 'roboto',
    fontSize: 15,
    fontWeight: 400,
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
    fontFamily: 'rubik',
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
  dialogText: {
    fontFamily: 'rubik',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 25
  },
  dialogItem: {
    fontWeight: 700,
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