import { Button, Icon } from '@rneui/themed';
import { PropTypes } from 'prop-types';

export default function SaveButton({ saveChartAccount }) {
  return (
    <Button type="clear" onPress={saveChartAccount}>
      <Icon name="check" size={26} color="white" />
    </Button>
  );
}

SaveButton.propTypes = {
  saveChartAccount: PropTypes.func.isRequired,
};
