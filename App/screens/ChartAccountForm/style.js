import { StyleSheet } from 'react-native';

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
    fontFamily: 'rubik',
    fontSize: 15,
    fontWeight: 500,
    marginTop: 9,
  },
  textInput: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    height: 43,
    marginTop: 2,
    paddingLeft: 17,
    color: '#777777',
    fontFamily: 'rubik',
    fontSize: 15,
    fontWeight: '400',
  },
  textInputError: {
    borderWidth: 1,
    borderColor: '#FF6680',
  },
  pickerContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    height: 43,
    marginTop: 2,
    overflow: 'hidden',
  },
  picker: {
    marginTop: -6,
    color: '#777777',
  },
});

export default styles;
