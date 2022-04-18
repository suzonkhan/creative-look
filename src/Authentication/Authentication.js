import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Authentication = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
             <Button onClick={() => signInWithGoogle()}>Google Sign In</Button>
        </div>
    );
};

export default Authentication;