import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from 'components';
import { isUserConfirm } from 'repo/IsUserConfirm';

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isConfirmed = await isUserConfirm(login, password);
    if (isConfirmed) {
      console.log('Успешный вход');
    } else {
      console.log('Неправильное имя пользователя или пароль');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Login"
          variant="outlined"
          margin="normal"
          type="text" 
          value={login} 
          onChange={handleLoginChange} 
          fullWidth
        />
      </div>
      <TextField        
        label="Пароль"
        variant="outlined"
        margin="normal"
        type="password" 
        value={password} 
        onChange={handlePasswordChange}
        fullWidth
      />
      <Button type="submit" className="cursor-pointer mt-10 font-semibold leading-[normal] mb-1 min-w-[200px] text-center text-l" variant="blue">
        Вступить
      </Button>
    </form>
  );
}

export { LoginForm };