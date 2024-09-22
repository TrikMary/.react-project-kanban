import { Link, useNavigate } from "react-router-dom"
import { routes } from "../../router/routes.js"
import * as S from "./registerPage.styled.js"
import { registerUser } from "../../api/newUser.js";
import { useState } from "react";



export const RegisterPage = () => {
// Функция имитирующая регистрацию
  const [formData, setFormData] = useState({name:"", login:"", password:""});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.name === ""){
      setError("Введите имя")
      return
    }
    if (formData.login === ""){
      setError("Введите логин")
      return
    }
    if (formData.password === ""){
      setError("Введите пароль")
      return
    }
    registerUser(formData).then((res) => {
      console.log(res);
      navigate(routes.login)
    });
    // setIsAuth(true)

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
                <S.ModalFormReg id="formLogUp" action="#" onSubmit={handleRegister}>
                  <S.ModalInput
                    onChange={(e) => setFormData({...formData, name:e.target.value})}            
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="Имя"
                  />
                  <S.ModalInput 
                    onChange={(e) => setFormData({...formData, login:e.target.value})}            
                    type="text"
                    name="login"
                    id="loginReg"
                    placeholder="Эл. почта"
                  />
                  <S.ModalInput
                    onChange={(e) => setFormData({...formData, password:e.target.value})}             
                    type="password"
                    name="password"
                    id="passwordFirst"
                    placeholder="Пароль"
                  />
                  {error && <p>{error}</p>}
                  <S.ModalBtnSignupEnt id="SignUpEnter" type="submit">
                    
                    Зарегистрироваться
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