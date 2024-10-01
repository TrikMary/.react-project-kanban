
const apiURL = "https://wedev-api.sky.pro/api/user";
export const registerUser = async ({name, login, password}) => {
  const response = await fetch(apiURL, {
    method: "POST",
    body: JSON.stringify ({
        name, login, password
    })
  });
   if (response.status === 400) {
    throw new Error ("Такой пользователь уже существует")
  };
  
  if (!response.ok) {
    throw new Error("Не удалось загрузить данные, попробуйте позже")
  };
  return response.json()
};
