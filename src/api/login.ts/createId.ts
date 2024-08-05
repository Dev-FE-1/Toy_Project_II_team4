import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseApp';

export function createId() {
  createUserWithEmailAndPassword(auth, 'badaclock@gmail.com', 'T123456')
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
