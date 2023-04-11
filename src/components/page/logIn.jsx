import { useState } from 'react';
import css from './logIn.module.css';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/log/operationsLog';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const distpatch = useDispatch();

  function handleFormEvent(e) {
    const name = e.target.name;
    switch (name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  }

  function handleLogInSubmit(e) {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    distpatch(logInThunk(user));

    // "email": "string",
    // "password": "string"
  }

  return (
    <div className={css.boockBox}>
      <form
        onSubmit={handleLogInSubmit}
        className={`${css.contactForm} form-label`}
      >
        <label className="form-label">
          <span>Email: </span>

          <input
            className="form-control"
            type="email"
            name="email"
            onChange={handleFormEvent}
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          ></input>
        </label>
        <label className="form-label">
          <span>Password: </span>

          <input
            className="form-control"
            type="password"
            name="password"
            onChange={handleFormEvent}
            value={password}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          ></input>
        </label>
        <button className="btn btn-dark" type="submit">
          LogIn
        </button>
      </form>
    </div>
  );
};

export default LogIn;
