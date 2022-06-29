import { createContext, useState, useEffect } from 'react';

import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const sessionSubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                //createUserDocumentFromAuth(user);
            }
            console.log(user);
            setCurrentUser(user);
        });

        return sessionSubscribe;
    }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
