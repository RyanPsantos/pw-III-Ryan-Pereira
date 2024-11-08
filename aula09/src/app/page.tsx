import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';

const Banco = () => {
  const [Produtos, setProdutos] = useState('');
  const [Quantidades, setQuantidades] = useState('');

  const handleSignup = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, Produtos, Quantidades)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Item criado com sucesso: ', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Erro ao criar Item:', error);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default Banco;