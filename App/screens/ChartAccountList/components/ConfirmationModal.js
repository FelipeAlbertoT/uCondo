import { Dialog, Icon } from '@rneui/themed';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../style';

function ConfirmationModal({
  showModal,
  toggleConfirmation,
  itemToDelete,
  onConfirm,
}) {
  return (
    <Dialog
      overlayStyle={styles.dialog}
      isVisible={showModal}
      onBackdropPress={() => toggleConfirmation({})}
    >
      <Icon
        style={{ paddingBottom: 21 }}
        size={40}
        name="trash"
        type="feather"
        color="#FF6680"
      />
      <View style={{ alignItems: 'center', marginBottom: 23 }}>
        <Text style={styles.dialogText}>Deseja excluir a conta</Text>
        <Text style={styles.dialogText}>
          <Text style={styles.dialogItem}>
            {itemToDelete.id} - {itemToDelete.name}
          </Text>
          ?
        </Text>
      </View>
      <Dialog.Actions>
        <Dialog.Button
          titleStyle={styles.btnPos}
          buttonStyle={styles.btnPos}
          type="solid"
          title="Com certeza"
          onPress={onConfirm}
        />
        <Dialog.Button
          titleStyle={styles.btnNeg}
          type="clear"
          title="Não!"
          onPress={() => toggleConfirmation({})}
        />
      </Dialog.Actions>
    </Dialog>
  );
}

ConfirmationModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  itemToDelete: PropTypes.objectOf(PropTypes.object()).isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmationModal;
