import React from 'react';
import apiClient from '../api';
 
const Login = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [authError, setAuthError] = React.useState(false);
    const [unknownError, setUnknownError] = React.useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setAuthError(false);
        setUnknownError(false);
        apiClient.get('/sanctum/csrf-cookie')
            .then(response => {
            apiClient.post('/api/login', {
                email: email,
                password: password
            }).then(response => {
                console.log(response)
                // if (response.status === 204) {
                    // props.login(); 
                // }
            }).catch(error => {
                if (error.response && error.response.status === 422) {
                    setAuthError(true);
                } else {
                    setUnknownError(true);
                    console.error(error);
                }
            });
        });
    }
    return (
        <div>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className={"form-control" + (authError || unknownError ? ' is-invalid' : '')}
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className={"form-control" + (authError || unknownError ? ' is-invalid' : '')}
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </div>
            {authError ? <div className="alert alert-danger">Credentials not recognised. Please try again.</div> : null}
            {unknownError ? <div className="alert alert-danger">Incorrect mail or password</div> : null}
            <button type="submit" className="btn btn-primary">Login</button>  
        </form>
    </div>
    );
}
 
export default Login;