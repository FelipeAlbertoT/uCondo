import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: colors.gray1,
    justifyContent: 'center',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  searchInput: {
    backgroundColor: colors.white,
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
    color: colors.gray4,
    fontFamily: 'rubik',
    fontSize: 20,
    fontWeight: 400,
  },
  headerCount: {
    color: colors.gray5,
    fontFamily: 'roboto',
    fontSize: 15,
    fontWeight: 400,
  },
  listItem: {
    marginLeft: 22,
    marginRight: 24,
    marginBottom: 13,
    borderRadius: 16,
    backgroundColor: colors.white,
  },
  listContent: {
    flex: 1,
  },
  listTitle: {
    fontFamily: 'rubik',
    fontWeight: 400,
    fontSize: 15,
  },
  listTitleIncome: {
    color: colors.positive,
  },
  listTitleExpense: {
    color: colors.negative,
  },
  dialog: {
    backgroundColor: colors.white,
    borderRadius: 16,
  },
  dialogText: {
    fontFamily: 'rubik',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 25,
  },
  dialogItem: {
    fontWeight: 700,
  },
  btnPos: {
    color: colors.white,
    backgroundColor: colors.error,
    borderRadius: 100,
    paddingHorizontal: 12,
    fontSize: 15,
    fontWeight: 400,
  },
  btnNeg: {
    color: colors.error,
    fontSize: 15,
    fontWeight: 400,
  },
});

export default styles;
