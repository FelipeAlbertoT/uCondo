import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { Button, Icon } from "@rneui/themed";
import ChartAccountContext from "../context/chartAccountContext";

const defaultValues = { type: 1, allowEntry: 1 }

export default function AddChartAccountScreen({ navigation, route }) {
  const { state, dispatch } = useContext(ChartAccountContext);
  const [chartAccount, setChartAccount] = useState(route.params ? route.params : defaultValues)

  const saveChartAccount = () => {
    dispatch({
      type: 'createChartAccount',
      payload: chartAccount
    })
    navigation.goBack()
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          type='clear'
          onPress={() => saveChartAccount()}
        >
          <Icon name="check" size={26} color={'white'} />
        </Button>
      ),
    });
  }, [navigation, chartAccount]);

  const idAlreadyExists = (id) => {
    return state.chartAccounts.some(acc => acc.id === id)
  }
  const findMaxChildId = parentAcc => {
    const children = state.chartAccounts.filter(acc => acc.parentAcc === parentAcc)
    let usedIds = []
    if (parentAcc == "") usedIds = children.map(acc => parseInt(acc.id))
    else usedIds = children.map(acc => parseInt(acc.id.replace(parentAcc + '.', "")))
    return usedIds.length > 0 ? Math.max(...usedIds) : 0
  }

  const generateId = id => {
    const maxChildId = findMaxChildId(id)
    if (maxChildId === 999) {
      const parent = state.chartAccounts.find(acc => acc.id === id)
      const ParentMaxChild = findMaxChildId(parent.parentAcc)
      if (ParentMaxChild > parseInt(id.replace(parent.parentAcc + '.', "") && parent.parentAcc != "")) {
        return { parent: parent.id, id: parent.parentAcc + '.' + ParentMaxChild + '.' + (findMaxChildId(parent.parentAcc + '.' + ParentMaxChild) + 1) }
      } else {
        const { id: newParentId } = generateId(parent.parentAcc)
        if (!idAlreadyExists(newParentId)) {
          dispatch({
            type: 'createChartAccount',
            payload: { ...parent, id: newParentId, name: parent.name + '(AUTO)' }
          })
        }
        const newParentIdStr = newParentId != "" ? newParentId + '.' : ""
        return { parent: newParentId, id: newParentIdStr + (findMaxChildId(newParentId) + 1) }
      }
    }
    if (id == "")
      return { parent: id, id: maxChildId + 1 }
    return { parent: id, id: id + '.' + (maxChildId + 1) }
  }

  const proposeId = parentAcc => {
    return generateId(parentAcc)
  }

  const onChangeParent = parentAcc => {
    const { parent, id } = proposeId(parentAcc)
    let type = chartAccount.type;
    if (parentAcc != "") {
      const parentAccount = state.chartAccounts.find(acc => acc.id === parentAcc)
      type = parentAccount.type
    }
    setChartAccount({ ...chartAccount, parentAcc: parent, id, type })
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.fieldLabel}>Conta pai</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={chartAccount.parentAcc}
            onValueChange={onChangeParent}>
            <Picker.Item key="" label="" value="" />
            {state.chartAccounts.filter(item => item.allowEntry != 1).map(acc => {
              return (
                <Picker.Item key={acc.id} label={acc.name} value={acc.id} />
              )
            })}
          </Picker>
        </View>

        <Text style={styles.fieldLabel}>Código</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={id => { setChartAccount({ ...chartAccount, id }) }}
          value={chartAccount.id}
        />

        <Text style={styles.fieldLabel}>Nome</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={name => { setChartAccount({ ...chartAccount, name }) }}
          value={chartAccount.name}
        />


        <Text style={styles.fieldLabel}>Tipo</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            enabled={chartAccount.parentAcc==""}
            selectedValue={chartAccount.type}
            onValueChange={type =>
              setChartAccount({ ...chartAccount, type })
            }>
            <Picker.Item label="Receita" value="1" />
            <Picker.Item label="Despesa" value="2" />
          </Picker>
        </View>


        <Text style={styles.fieldLabel}>Aceita lançamentos</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={chartAccount.allowEntry}
            onValueChange={allowEntry =>
              setChartAccount({ ...chartAccount, allowEntry })
            }>
            <Picker.Item label="Sim" value="1" />
            <Picker.Item label="Não" value="0" />
          </Picker>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#622490',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#F0EDF5',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 23,
  },
  fieldLabel: {
    color: '#6A6A6A',
    fontSize: 15,
    fontWeight: 500,
    marginTop: 9
  },
  textInput: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    height: 43,
    marginTop: 2,
    paddingLeft: 17,
    color: '#777777',
  },
  pickerContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    height: 43,
    marginTop: 2,
    overflow: 'hidden'
  },
  picker: {
    marginTop: -6,
    color: '#777777',
  },
});