// === Konfigurasi Firebase milik Koko ===
const firebaseConfig = {
  apiKey: "AIzaSyC16YQ0Ii5HFKSLiSEWsnVpjPs7LFjM-hM",
  authDomain: "lemburan-28b0a.firebaseapp.com",
  projectId: "lemburan-28b0a",
  storageBucket: "lemburan-28b0a.appspot.com",
  messagingSenderId: "802947787984",
  appId: "1:802947787984:web:c27731114f9193892602d5"
};

// === Inisialisasi Firebase ===
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
