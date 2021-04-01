import React, { createContext, useState } from 'react'
import firebase, { auth, firestore } from 'firebase'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const firebaseConfig = {
        apiKey: "AIzaSyDhAsQ4nufeY785n4ScYZKzzpG1_HQY7NE",
        authDomain: "petapp-ad410.firebaseapp.com",
        projectId: "petapp-ad410",
        storageBucket: "petapp-ad410.appspot.com",
        messagingSenderId: "905533618923",
        appId: "1:905533618923:web:1e580364d3e4ced4899cae"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,

                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                        console.log('Login success')
                    } catch (error) {
                        console.log(error)
                    }
                },

                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                        console.log('Register success')
                    } catch (error) {
                        console.log(error)
                    }
                },

                logout: async () => {
                    try {
                        await auth().signOut();
                        console.log('Logout success')
                    } catch (error) {
                        console.log(error)
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}