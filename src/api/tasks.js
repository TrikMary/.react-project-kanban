const apiURL = " https://wedev-api.sky.pro/api/kanban";
export const getTasks = async () => {
  const response = await fetch(apiURL, {
    method: "GET",
    headers: {
      Authorization: "Bearer bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
    },
  });
  if (!response.ok) {
    throw new Error("Не удалось загрузить данные, попробуйте позже")
  };
  return response.json()
};
