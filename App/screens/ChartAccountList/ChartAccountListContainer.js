import { useContext, useEffect, useState } from 'react';
import ChartAccountContext from '../../context/provider';
import fetchChartAccounts from '../../context/store';
import ChartAccountListView from './ChartAccountListView';
import AddButton from './components/AddButton';
import ConfirmationModal from './components/ConfirmationModal';
// import chartAccountData from '../../config/data/chartAccounts';

function ChartAccountListContainer({ navigation }) {
  const [chartAccounts, setChartAccounts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [accToDelete, setAccToDelete] = useState({});

  const { state, dispatch } = useContext(ChartAccountContext);

  useEffect(() => {
    fetchChartAccounts().then((fetchedChartAccounts) => {
      dispatch({
        type: 'fetchChartAccounts',
        payload: fetchedChartAccounts,
      });
    });
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        AddButton(() => navigation.navigate('ChartAccountForm')),
    });
  }, [navigation]);

  useEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
    });
  }, [navigation]);

  useEffect(() => {
    if (state.chartAccounts) {
      setChartAccounts(
        state.chartAccounts.sort((a, b) => {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        })
      );
    }
  }, [state]);

  const toggleConfirmation = (acc) => {
    setShowModal(!showModal);
    setAccToDelete(acc);
  };

  const deleteChartAccount = () => {
    toggleConfirmation({});
    dispatch({
      type: 'deleteChartAccount',
      payload: accToDelete.id,
    });
  };

  const onChangeSearchValue = (value) => {
    setChartAccounts(
      state.chartAccounts.filter((acc) =>
        acc.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <>
      <ChartAccountListView
        navigation={navigation}
        chartAccounts={chartAccounts}
        onChangeSearchValue={onChangeSearchValue}
        toggleConfirmation={toggleConfirmation}
      />
      <ConfirmationModal
        showModal={showModal}
        toggleConfirmation={toggleConfirmation}
        itemToDelete={accToDelete}
        onConfirm={deleteChartAccount}
      />
    </>
  );
}

export default ChartAccountListContainer;
