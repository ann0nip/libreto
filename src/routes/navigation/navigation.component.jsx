import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/"></Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/auth">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
