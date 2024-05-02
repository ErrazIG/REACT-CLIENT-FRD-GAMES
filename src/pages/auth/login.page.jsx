import axios from 'axios';
import { useRecoilState } from 'recoil';
import { tokenAtom } from '../../atoms/token.atom.js';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {

    const [token, setToken] = useRecoilState(tokenAtom);

    const handleLoginSubmit= (e) => {
        e.preventDefault();

        // Composant non controlé (Déconseillé -> Préféré l'utilisation d'un state)
        const username= e.target['username'].value;
        const password= e.target['password'].value;

        const data = {username, password};

        // Requete AJAX vers l'API
        axios.post('auth/login', data, {
            baseURL: 'http://localhost:8080/api/'
        }).then(response => {
            console.log(response.data);
            setToken(response.data.token);

        }).catch(error => {
            console.log(error);
        })
    }

    if(!!token) {
        return <Navigate to='/' />
    }

    return (
        <>
            <h1>Login...</h1>
            <form onSubmit={handleLoginSubmit}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' name='username' />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' name='password' />
                </div>
                <div>
                    <button type="submit">Log</button>
                </div>
            </form>
        </>
    )
}

export default LoginPage