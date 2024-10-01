import { useNavigate, Link } from "react-router-dom";
import { routes } from "../../router/routes.js";
import { useState } from "react";
import { signIn } from "../../api/user.js";

import * as S from "./loginPage.styled.js";



export const LoginPage = ({ setIsUser }) => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({login: "", password: ""})
  const navigate = useNavigate ()
  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.login === ""){
      setError("Введите логин")
      return
    }
    if (formData.password === ""){
      setError("Введите пароль")
      return
    }
    signIn(formData).then((res) => {
      console.log(res.user);
      setIsUser(res.user);
    
      navigate(routes.main)
    }).
    catch ((error) => {
      console.log(error.message);
      setError(error.message);
    });

  }
  

  return (
    <S.LoginPageGlobalStyle>
      <S.WrapperSignIn>
        <S.ContainerSignIn>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTtl>
                <h2>Вход</h2>
              </S.ModalTtl>
              <S.ModalFormLogin id="formLogIn" action="#" onSubmit={handleLogin}>
                <S.ModalInput
                  onChange={(e) => setFormData({...formData, login: e.target.value})}
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                {error && <p>{error}</p>}
                <S.ModalBtnEnter id="btnEnter" type="submit">
                  Войти
                </S.ModalBtnEnter>
                <S.ModalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to={routes.register}>Регистрируйтесь здесь</Link>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSignIn>
      </S.WrapperSignIn>
    </S.LoginPageGlobalStyle>
  );
};
