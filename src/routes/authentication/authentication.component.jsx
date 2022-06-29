import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/user.context';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        if (currentUser) {
            navigate('/');
        }
    }, [currentUser]);

    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;
