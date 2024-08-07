import { auth } from '../../api/firebaseApp';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export function login(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password).catch((error) => {
    console.error(error);
    const errorCode = error.code;
    console.log(`errorCode: ${errorCode}`);
  });
}

export function logout() {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
}
