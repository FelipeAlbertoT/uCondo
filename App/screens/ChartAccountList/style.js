import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#622490',
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
    backgroundColor: '#FFF',
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
    color: '#1BA803',
  },
  listTitleExpense: {
    color: '#E28856',
  },
  dialog: {
    backgroundColor: '#FFF',
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
  },
});

export default styles;
