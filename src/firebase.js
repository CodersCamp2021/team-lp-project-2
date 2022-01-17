import firebase from 'firebase/compat/app';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_PROJECT_2_API_KEY,
  authDomain: process.env.REACT_PROJECT_2_AUTH_DOMAIN,
  projectId: process.env.REACT_PROJECT_2_PROJECT_ID,
  storageBucket: process.env.REACT_PROJECT_2_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_PROJECT_2_MESSAGING_SENDER_ID,
  appId: process.env.REACT_PROJECT_2_APP_ID,
});

export default app;
