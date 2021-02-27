import firebase from 'firebase/app'
import 'firebase/auth'
import { useState, useEffect } from 'react'

export const GoogleSignIn = () => {
    const popupSignInGoogle = async () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        // optional: OAuth2.0のスコープを追加
        // provider.addScope('https://www.googleapis.com/auth/contacts.readonly') 
        let result = await firebase.auth().signInWithPopup(provider) // ポップアップウィンドウでログイン
        let user = result.user
        setUserName(user.displayName)
        setUserEmail(user.email)
    }

    const redirectSignInGoogle = async () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithRedirect(provider) // ポップアップウィンドウでログイン
    }

    const signOutGoogle = () => {
        firebase.auth().signOut()
            .then(() => {
                setUserName('Signed out successfully')
                setUserEmail('')
            })
            .catch((error) => {
                setUserName('Failed in signing out')
                setUserEmail('')
            })
    }

    useEffect(() => {
        if (firebase.auth().currentUser != null) {
            let user = firebase.auth().currentUser
            setUserName(user.displayName)
            setUserEmail(user.email)
        }
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUserName(user.displayName)
                setUserEmail(user.email)
            }
        })
    }, [])

    let [userName, setUserName] = useState('')
    let [userEmail, setUserEmail] = useState('')

    return (<div>
        <h2>Google sign in</h2>
        <button onClick={() => popupSignInGoogle()}>sign in google(popup)</button>
        <button onClick={() => redirectSignInGoogle()}>sign in google(redirect)</button>
        <button onClick={() => signOutGoogle()}>Sign out</button>
        <p>{userName}</p>
        <p>{userEmail}</p>
    </div>)
}

