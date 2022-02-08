import {
  useDisclosure,
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

export default function BuyConfirmation() {
  const { isOpen, onClose } = useDisclosure();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Thank you!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>We are processing your order...</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Okay
          </Button>
          <Button variant="ghost">Grab more items</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
