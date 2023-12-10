import React from "react";
import TextField from '@mui/material/TextField';
import { LoginForm, Header} from "components";

const Login = () => {
  return (
    <>
    <div className="bg-grey-bg font-sourcesanspromx-auto pb-[27px] px-[27px] md:px-[0px] relative w-full">
        <div className="font-inter flex items-center justify-center h-[100vh]  max-w-[1360px] mx-auto w-full z-[1] body-login">
          <Header>

          </Header>

          <main className="main-block mt-10">
            <div className="login-box w-[600px] sm:w-[100%] px-[40px] py-[20px] sm:px-[20px]">
                <p className="mb-10 text-xl">Вход</p>
                <LoginForm></LoginForm>
                {/* <TextField
                    label="Login"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <TextField

                    label="Пароль"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <Button className="cursor-pointer mt-10 font-semibold leading-[normal] mb-1 min-w-[200px] text-center text-l" variant="blue">
                  Вступить
                </Button> */}

                <p className="mt-10 text-center">Пароль и логин выдает руководитель клубного сектара</p>
            </div>
          </main>
        </div>
    </div>
    </>);
  
}

export default Login;