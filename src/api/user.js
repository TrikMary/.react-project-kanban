const apiURL = " https://wedev-api.sky.pro/api/user/login";
export const signIn = async ({login, password}) => {
  const response = await fetch(apiURL, {
    method: "POST",
    body: JSON.stringify ({
        login, password
    })
  });
   if (response.status === 400) {
    throw new Error ("Неверный логин/пароль")
  };
  
  if (!response.ok) {
    throw new Error("Не удалось загрузить данные, попробуйте позже")
  };
  return response.json()
};
