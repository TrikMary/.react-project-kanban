import { useNavigate, Link } from "react-router-dom";
import { routes } from "../../router/routes.js";

import * as S from "./loginPage.styled.js";



export const LoginPage = ({ setIsAuth }) => {
  
  const navigate = useNavigate ()
  const handleLogin = () => {
    
    setIsAuth(true)
    
    navigate(routes.main)
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
              <S.ModalFormLogin id="formLogIn" action="#">
                <S.ModalInput
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <S.ModalBtnEnter id="btnEnter" onClick={handleLogin}>
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
