import { Link } from "react-router-dom"
import { routes } from "../../router/routes.js"
import * as S from "./registerPage.styled.js"



export const RegisterPage = ({ setIsUser }) => {
// Функция имитирующая регистрацию
  const registerTrue = () => {
    
    setIsAuth(true)
        
  }
    return (
      <S.RegPageGlobalStyle>
        <S.WrapperReg>
          <S.ContainerSignup>
            <S.Modal>
              <S.ModalBlock>
                <S.ModalTtl>
                  <h2>Регистрация</h2>
                </S.ModalTtl>
                <S.ModalFormReg id="formLogUp" action="#">
                  <S.ModalInput            
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="Имя"
                  />
                  <S.ModalInput            
                    type="text"
                    name="login"
                    id="loginReg"
                    placeholder="Эл. почта"
                  />
                  <S.ModalInput            
                    type="password"
                    name="password"
                    id="passwordFirst"
                    placeholder="Пароль"
                  />
                  <S.ModalBtnSignupEnt id="SignUpEnter">
                    <Link onClick={registerTrue} to={routes.login}>Зарегистрироваться</Link>{" "}
                  </S.ModalBtnSignupEnt>
                  <S.ModalFormGroup >
                    <p>
                      Уже есть аккаунт? <Link to={routes.login}>Войдите здесь</Link>
                    </p>
                  </S.ModalFormGroup>
                </S.ModalFormReg>
              </S.ModalBlock>
            </S.Modal>
          </S.ContainerSignup>
        </S.WrapperReg>
      </S.RegPageGlobalStyle>  
    )
}