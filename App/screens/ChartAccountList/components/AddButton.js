import { Button, Icon } from '@rneui/themed';
import PropTypes from 'prop-types';

function AddButton({ onPress }) {
  return (
    <Button type="clear" onPress={onPress}>
      <Icon name="add" size={26} color="white" />
    </Button>
  );
}

AddButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default AddButton;
