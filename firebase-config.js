// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqc63Fb80B4RaSEi1BAU-3_BzvithzM4s",
  authDomain: "admin-panel-hassan-chauffeur.firebaseapp.com",
  databaseURL: "https://admin-panel-hassan-chauffeur-default-rtdb.firebaseio.com",
  projectId: "admin-panel-hassan-chauffeur",
  storageBucket: "admin-panel-hassan-chauffeur.firebasestorage.app",
  messagingSenderId: "50207139534",
  appId: "1:50207139534:web:7b26218a9799dc541bd29f",
  measurementId: "G-HQ8CZJKSSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };