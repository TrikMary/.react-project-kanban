import * as S from "../LoginPage/loginPage.styled.js"

export const NotFoundPage = () => {
    return (
        <S.LoginPageGlobalStyle>
        <S.WrapperSignIn>
          <S.ContainerSignIn>
            <S.Modal>
              <S.ModalBlock>
                <S.ModalTtl>
                  <h2> 404 </h2>
                  <h2> Что-то пошло не так... </h2>
                </S.ModalTtl>
              </S.ModalBlock>
            </S.Modal>
          </S.ContainerSignIn>
        </S.WrapperSignIn>
      </S.LoginPageGlobalStyle>
    )
}