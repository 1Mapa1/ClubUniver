import { createContext, useState } from "react";

// Создаем контекст с начальными значениями по умолчанию
const AuthContext = createContext({
  isAuthenticated: false,
  setAuth: () => {},
});

// Создаем компонент провайдера, который предоставляет данные контекста всем дочерним компонентам
export const AuthProvider = ({ children }) => {
  // Используем хук useState для создания переменной isAuthenticated и функции setAuth для ее изменения
  const [isAuthenticated, setAuth] = useState(false);
  
  // Возвращаем контекст провайдера, передавая значения isAuthenticated и setAuth в качестве значения контекста
  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;