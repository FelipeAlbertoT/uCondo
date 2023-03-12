import { useContext, useEffect, useState } from 'react';
import ChartAccountContext from '../../context/provider';
import { ACTION_TYPE } from '../../utils/constants';
import ChartAccountFormView from './ChartAccountFormView';
import SaveButton from './components/SaveButton';

const defaultValues = { type: 1, allowEntry: 1 };

function ChartAccountFormContainer({ navigation, route }) {
  const { state, dispatch } = useContext(ChartAccountContext);
  const [chartAccount, setChartAccount] = useState(
    route.params ? route.params : defaultValues
  );
  const [newParentChartAccounts, setNewParentChartAccounts] = useState([]);
  const [showIdError, setShowIdError] = useState(false);
  const [showNameError, setShowNameError] = useState(false);

  const saveChartAccount = () => {
    const regex = /^([0-9]{1,3}\.)*[0-9]{1,3}$/;
    if (!chartAccount.id || !regex.test(chartAccount.id)) {
      setShowIdError(true);
    }
    if (!chartAccount.name) {
      setShowNameError(true);
    }
    if (chartAccount.id && chartAccount.name) {
      dispatch({
        type: ACTION_TYPE.CREATE,
        payload: { chartAccount, newParentChartAccounts },
      });
      navigation.goBack();
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => SaveButton({ saveChartAccount }),
    });
  }, [navigation, chartAccount]);

  useEffect(() => {
    setShowIdError(false);
  }, [chartAccount.id]);

  useEffect(() => {
    setShowNameError(false);
  }, [chartAccount.name]);

  const findMaxChildId = (parentAcc) => {
    const children = state.chartAccounts.filter(
      (acc) => acc.parentAcc === parentAcc
    );
    let usedIds = [];
    if (parentAcc === '') usedIds = children.map((acc) => parseInt(acc.id, 10));
    else
      usedIds = children.map((acc) =>
        parseInt(acc.id.replace(`${parentAcc}.`, ''), 10)
      );
    return usedIds.length > 0 ? Math.max(...usedIds) : 0;
  };

  const generateId = (id) => {
    const maxChildId = findMaxChildId(id);
    if (maxChildId === 999) {
      const parent = state.chartAccounts.find((acc) => acc.id === id);
      const parentMaxChild = findMaxChildId(parent.parentAcc);
      const intId = parseInt(id.replace(`${parent.parentAcc}.`, ''), 10);
      if (parentMaxChild > intId && parent.parentAcc !== '') {
        return {
          parent: parent.id,
          id: `${parent.parentAcc}.${parentMaxChild}.${
            findMaxChildId(`${parent.parentAcc}.${parentMaxChild}`) + 1
          }`,
        };
      }
      const { id: newParentId } = generateId(parent.parentAcc);
      const newParent = {
        ...parent,
        id: newParentId,
        name: `${parent.name}(AUTO)`,
      };
      setNewParentChartAccounts([...newParentChartAccounts, newParent]);

      const newParentIdStr = newParentId !== '' ? `${newParentId}.` : '';
      return {
        parent: newParentId,
        id: newParentIdStr + (findMaxChildId(newParentId) + 1),
      };
    }
    if (id === '') return { parent: id, id: maxChildId + 1 };
    return { parent: id, id: `${id}.${maxChildId + 1}` };
  };

  const proposeId = (parentAcc) => generateId(parentAcc);

  const onChangeParent = (parentAcc) => {
    setNewParentChartAccounts([]);
    const { parent, id } = proposeId(parentAcc);
    let { type } = chartAccount;
    if (parentAcc !== '') {
      const parentAccount = state.chartAccounts.find(
        (acc) => acc.id === parentAcc
      );
      type = parentAccount.type;
    }
    setChartAccount({ ...chartAccount, parentAcc: parent, id, type });
  };

  const onChangeId = (id) => setChartAccount({ ...chartAccount, id });

  const onChangeName = (name) => setChartAccount({ ...chartAccount, name });

  const onChangeType = (type) => setChartAccount({ ...chartAccount, type });

  const onChangeAllowEntry = (allowEntry) =>
    setChartAccount({ ...chartAccount, allowEntry });

  return (
    <ChartAccountFormView
      chartAccount={chartAccount}
      parentsData={[...state.chartAccounts, ...newParentChartAccounts].filter(
        (item) => item.allowEntry !== '1'
      )}
      showIdError={showIdError}
      showNameError={showNameError}
      onChangeParent={onChangeParent}
      onChangeId={onChangeId}
      onChangeName={onChangeName}
      onChangeType={onChangeType}
      onChangeAllowEntry={onChangeAllowEntry}
    />
  );
}

export default ChartAccountFormContainer;
