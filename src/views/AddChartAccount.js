import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from '@react-native-picker/picker';

export default function AddChartAccountScreen({ route }) {
  const [chartAccount, setChartAccount] = useState(route.params ? route.params : {})
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.fieldLabel}>Conta pai</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>

        <Text style={styles.fieldLabel}>Código</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(id) => { setChartAccount({ ...chartAccount, id }) }}
          value={chartAccount.id}
        />

        <Text style={styles.fieldLabel}>Nome</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(name) => { setChartAccount({ ...chartAccount, name }) }}
          value={chartAccount.name}
        />


        <Text style={styles.fieldLabel}>Tipo</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={chartAccount.type}
            onValueChange={(type) =>
              setChartAccount({...chartAccount, type})
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
            onValueChange={(allowEntry) =>
              setChartAccount({...chartAccount, allowEntry})
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