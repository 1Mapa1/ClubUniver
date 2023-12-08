import React from "react";
import TextField from '@mui/material/TextField';
import { Img, Text, LoginForm, Button} from "components";

const Login = () => {
  return (
    <>
    <div className="bg-grey-bg font-sourcesanspromx-auto pb-[27px] px-[27px] md:px-[0px] relative w-full">
        <div className="font-inter flex items-center justify-center h-[100vh]  max-w-[1360px] mx-auto w-full z-[1] body-login">
          <header className="absolute flex inset-x-[0] items-center justify-center mx-auto top-[0]">
            <div className="bg-white-A700 grid flex-row sm:gap-10 items-center justify-center p-5 rounded-bl-[20px] rounded-br-[20px] header-block">
              <Img
                className="mb-[9px] ml-1.5 sm:ml-[0] object-cover img-logo"
                src="images/img_image1.png"
                alt="imageOne"
              />
              <Text
                className="text-light_blue-800 text-logo"
                size="txtInterSemiBold20"
              >
                Клубы по интересам
              </Text>
            </div>
          </header>

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