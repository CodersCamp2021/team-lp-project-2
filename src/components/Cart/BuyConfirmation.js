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
import { IoHeart } from 'react-icons/io';

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
        <ModalHeader>Thanks, Gorgeous!🛒</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Your order make our day! We hope we make yours. If you have any
            questions about order. contact us anytime. We'd love to hear from
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
