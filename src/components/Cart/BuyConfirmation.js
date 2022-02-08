import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function BuyConfirmation({ isOpen, onClose }) {
  const navigate = useNavigate();

  const backToStore = () => {
    onClose();
    navigate('/store');
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Thanks, Gorgeous! 🛒</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Your order made our day! We hope we make yours. If you have any
            questions about your order, feel free to contact us anytime. We'd love to hear from
            you! 💜
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button size="sm" colorScheme="purple" mr={3} onClick={onClose}>
            Thanks!
          </Button>
          <Button size="sm" variant="ghost" onClick={backToStore}>
            Back to store
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
