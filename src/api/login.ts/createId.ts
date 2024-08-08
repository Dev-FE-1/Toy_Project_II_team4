import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseApp';

export function createId() {
  createUserWithEmailAndPassword(auth, 'badaclock@gmail.com', 'T123456')
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ㄴ user 정보를 저장하거나, 다음 페이지로 이동하는 등의 작업을 수행
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..show error message
    });
}
