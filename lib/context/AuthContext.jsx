'use client'
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset
} from "firebase/auth";
import { useContext, useEffect, useState, createContext } from "react";
import { auth } from "../firebase";
import { redirect, useRouter } from "next/navigation";

// Define the context
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isSending, setIsSending] = useState(false);

    const router = useRouter();

    const handleEmailAccountCreation = async () => {
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            console.log('user logged in with email');

        } catch (error) {
            console.log(error);
            setError(error);
        }
        setLoading(false);
    }
    const handleEmailAccountLogin = async () => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password)
            console.log('user logged in with email');

        } catch (error) {
            console.log(error);
            setError(error);
        }
        setLoading(false);
    }

    const handlesignInWithGoogle = async () => {
        setLoading(true);
        try {
            await signInWithPopup(auth, new GoogleAuthProvider)
            console.log('user logged in with google');
        } catch (error) {
            setError(error)
        }
        setLoading(false);
    }

    const handlesignInWithGithub = async () => {
        setLoading(true);
        try {
            await signInWithPopup(auth, new GithubAuthProvider)
            console.log('user logged in with github');
        } catch (error) {
            setError(error)
        }
        setLoading(false);
    }

    const handleLogout = async () => {
        try {
            await signOut(auth)
            console.log('user logged out');
            router.push('/')
            
        } catch (error) {
            setError(error);
        }
    }
    const forgotPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email)
            setIsSending(true)
        } catch (error) {
            console.log(error);
            setError(error);
            setIsSending(false)
        }
    }

    const resetPassword = async (oobcode, newPassword) => {
        try {
            await confirmPasswordReset(auth, oobcode, newPassword);
            console.log('Password Reset Successfull!');

        } catch (error) {
            console.log(error)
            setError(error);

        }
    }
    console.log(user);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError(null)

            } else {
                setUser(null);
                setError(null)
            }
            setLoading(false)
        });
        return () => unsub()
    }, [])


    console.log('Is user logged out? ', auth.currentUser === null);

    return <AuthContext.Provider value={{
        user, loading, error, name, setName,
        email, setEmail,
        password, setPassword,
        isSending,
        handleLogout,
        forgotPassword,
        handleEmailAccountLogin,
        handlesignInWithGithub,
        handlesignInWithGoogle,
        handleEmailAccountCreation,
        resetPassword
    }} >
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;