import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';

const SocialLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                const loggedUser = result.user
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            title: 'User Login Successful.',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        });
                        navigate(from, { replace: true })
                    })

            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <div className=''>
            <div className='divider h-1 mb-0 w-3/5 mx-auto'></div>
            <div className='flex justify-center'>
                <button onClick={handleGoogleLogin} className="btn btn-success btn-circle my-5"><FaGoogle size={20} /></button>
            </div>
        </div>
    );
};

export default SocialLogin;