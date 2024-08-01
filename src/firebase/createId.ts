import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export function createId() {
  createUserWithEmailAndPassword(auth, 'braveleelo487@gmail.com', 'T123456')
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
