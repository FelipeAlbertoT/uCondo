import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: colors.gray1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 23,
  },
  fieldLabel: {
    color: colors.gray3,
    fontFamily: 'rubik',
    fontSize: 15,
    fontWeight: 500,
    marginTop: 9,
  },
  textInput: {
    backgroundColor: colors.white,
    borderRadius: 10,
    height: 43,
    marginTop: 2,
    paddingLeft: 17,
    color: colors.gray2,
    fontFamily: 'rubik',
    fontSize: 15,
    fontWeight: '400',
  },
  textInputError: {
    borderWidth: 1,
    borderColor: colors.error,
  },
  pickerContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    height: 43,
    marginTop: 2,
    overflow: 'hidden',
  },
  picker: {
    marginTop: -6,
    color: colors.gray2,
  },
});

export default styles;
