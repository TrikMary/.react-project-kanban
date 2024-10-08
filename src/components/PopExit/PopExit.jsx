import * as S from "./popExit.styled.js"
import { routes } from "../../router/routes.js";
import { Link, useNavigate } from "react-router-dom";


export const PopExit = ({setIsUser}) => {

  // Функция скидывающая состояние авторизации при выходе
  const exitAuth = () => {
    
    setIsUser(null);
        
  }
  
  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.ButtonPopExitYes id="exitYes" onClick={exitAuth} >
                <Link to={routes.login}>Да, выйти</Link>
              </S.ButtonPopExitYes>
              <S.ButtonPopExitNo id="exitNo">
                <Link to={routes.main} >Нет, остаться</Link>
              </S.ButtonPopExitNo>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};
