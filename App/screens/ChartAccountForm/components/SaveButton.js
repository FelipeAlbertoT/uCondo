import { Button, Icon } from '@rneui/themed';

export default function SaveButton({ saveChartAccount }) {
  return (
    <Button type="clear" onPress={saveChartAccount}>
      <Icon name="check" size={26} color="white" />
    </Button>
  );
}
