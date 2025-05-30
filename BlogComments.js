 const firebaseConfig = {
            apiKey: "AIzaSyBEdLDqV3_jNvoKeHyZlkdR7psAhvuZ0sc",
            authDomain: "juxtacity-comment-section.firebaseapp.com",
            projectId: "juxtacity-comment-section",
            storageBucket: "juxtacity-comment-section.firebasestorage.app",
            messagingSenderId: "436609933424",
            appId: "1:436609933424:web:5815991624f6f1594214b5",
            measurementId: "G-ZVR5SK94TC"
        };


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
getFirestore,
collection,
addDoc,
serverTimestamp,
query,
orderBy,
onSnapshot
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";




        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const auth = getAuth(app);

        signInAnonymously(auth);


         document.getElementById("commentForm").addEventListener("submit", async (e) => {
            e.preventDefault();

             const name = document.getElementById("nameInput").value.trim();
             const message = document.getElementById("commentInput").value.trim();

             if (message.length === 0 || message.length > 150) {
                 alert("Comment must be between 1 and 150 characters.");
                 return;
             }

            try {
                await addDoc(collection(db, "comments"), {
                    name: name || "Anonymous",
                    message,
                    createdAt: serverTimestamp()
                });
                document.getElementById("commentForm").reset();
            } catch (error) {
                 console.error("Error adding comment:", error);
             }
         });



        const commentsContainer = document.getElementById("commentsContainer");

        const commentsQuery = query(
            collection(db, "comments"),
            orderBy("createdAt", "desc")
        );

        onSnapshot(commentsQuery, (snapshot) => {
            commentsContainer.innerHTML = "";
            snapshot.forEach((doc) => {
                const { name, message } = doc.data();
                const div = document.createElement("div");
                div.innerHTML = `<strong>${name}</strong>: ${message}`;
                commentsContainer.appendChild(div);
            });
        });