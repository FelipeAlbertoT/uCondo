import { Picker } from '@react-native-picker/picker';
import { Text } from '@rneui/themed';
import { TextInput, View } from 'react-native';
import styles from './style';

function ChartAccountFormView({
  chartAccount,
  parentsData,
  idError,
  nameError,
  onChangeParent,
  onChangeId,
  onChangeName,
  onChangeType,
  onChangeAllowEntry,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.fieldLabel}>Conta pai</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={chartAccount.parentAcc}
            onValueChange={onChangeParent}
          >
            <Picker.Item key="" label="" value="" />
            {parentsData.map((acc) => (
              <Picker.Item key={acc.id} label={acc.name} value={acc.id} />
            ))}
          </Picker>
        </View>

        <Text style={styles.fieldLabel}>Código</Text>
        <TextInput
          style={[styles.textInput, idError ? styles.textInputError : '']}
          onChangeText={onChangeId}
          value={chartAccount.id}
        />

        <Text style={styles.fieldLabel}>Nome</Text>
        <TextInput
          style={[styles.textInput, nameError ? styles.textInputError : '']}
          onChangeText={onChangeName}
          value={chartAccount.name}
        />

        <Text style={styles.fieldLabel}>Tipo</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            enabled={chartAccount.parentAcc === ''}
            selectedValue={chartAccount.type}
            onValueChange={onChangeType}
          >
            <Picker.Item label="Receita" value="1" />
            <Picker.Item label="Despesa" value="2" />
          </Picker>
        </View>

        <Text style={styles.fieldLabel}>Aceita lançamentos</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={chartAccount.allowEntry}
            onValueChange={onChangeAllowEntry}
          >
            <Picker.Item label="Sim" value="1" />
            <Picker.Item label="Não" value="0" />
          </Picker>
        </View>
      </View>
    </View>
  );
}

export default ChartAccountFormView;
