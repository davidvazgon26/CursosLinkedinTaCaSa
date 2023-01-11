import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const createAccount = async() => {
    try {
        if(password !== confirmPassword){
            setError('El password no coincide');
            return;
        }
        await createUserWithEmailAndPassword(getAuth(), email, password);
        navigate('/articles');
    } catch (e) {
        setError(e.message);
    }
  }

  return (
    <>
      <h1> Crear Cuenta</h1>
      {error && <p className="error">{error}</p>}
      <input
        value={email}
        placeholder="Tu email"
        onChange={e=>setEmail(e.target.value)}
      />
      <input type="password"
        placeholder="Tu password"
        value={password}
        onChange={e=>setPassword(e.target.value)}
      />
      <input type="password"
        placeholder="Confirma tu password"
        value={confirmPassword}
        onChange={e=>setConfirmPassword(e.target.value)}
      />
      <button onClick={createAccount}>Crear cuenta</button>
      <Link to='/login'>Ya tienes cuenta? inicia sesion aqui</Link>

    </>
  );
};

export default CreateAccountPage;
