import { Icon, ListItem } from '@rneui/themed';
import PropTypes from 'prop-types';
import styles from '../style';

function ItemList({ item, onPress, onDeletePress }) {
  return (
    <ListItem containerStyle={styles.listItem} onPress={onPress}>
      <ListItem.Content style={styles.listContent}>
        <ListItem.Title
          style={[
            styles.listTitle,
            item.type === '1'
              ? styles.listTitleIncome
              : styles.listTitleExpense,
          ]}
        >
          {item.id} - {item.name}
        </ListItem.Title>
      </ListItem.Content>
      <Icon
        name="trash"
        type="feather"
        color="#C4C4D1"
        onPress={onDeletePress}
      />
    </ListItem>
  );
}

ItemList.propTypes = {
  item: PropTypes.objectOf(PropTypes.object()).isRequired,
  onPress: PropTypes.func.isRequired,
  onDeletePress: PropTypes.func.isRequired,
};

export default ItemList;
