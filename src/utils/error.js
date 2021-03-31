const ERROR_CODES = {
  EMAIL_NOT_FOUND: "Пользователь не найден",
  INVALID_PASSWORD: "Неверный пароль",
  auth: "Войдите в систему",
};

export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : "Неизвестная ошибка";
}
