import { initializeApp } from 'firebase/app';
import { getAuth, browserSessionPersistence } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firebaseDB = getDatabase(app);

auth.useDeviceLanguage();
auth.setPersistence(browserSessionPersistence);

export { app, auth, firebaseDB };
