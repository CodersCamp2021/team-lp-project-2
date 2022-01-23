import { Text, Button } from '@chakra-ui/react';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import app from '../firebase';

export function Product() {
  const db = getFirestore(app);

  const getUser = () => {
    const booksRef = collection(db, 'users');
    getDocs(booksRef).then((snapshot) => {
      let users = [];
      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        users.push({ ...data, id: doc.id });
      });

      console.log(users);
    });
  };

  const addUser = () => {
    const usersRef = collection(db, 'users');
    addDoc(usersRef, {
      name: 'Maciej',
      age: 28,
      favFood: ['pizza', 'burger'],
    });
  };

  return (
    <>
      <Text>Hello world</Text>
      <Button m={3} colorScheme="green" onClick={addUser}>
        Add user
      </Button>
      <Button m={3} colorScheme="blue" onClick={getUser}>
        Get user
      </Button>
    </>
  );
}
