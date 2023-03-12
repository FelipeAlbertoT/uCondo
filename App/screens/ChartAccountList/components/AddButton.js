import { Button, Icon } from '@rneui/themed';

function AddButton(onPress) {
  return (
    <Button
      type="clear"
      // eslint-disable-next-line react/destructuring-assignment
      onPress={onPress}
    >
      <Icon name="add" size={26} color="white" />
    </Button>
  );
}

export default AddButton;
