import { createContext, useContext, useState } from "react";

// Criamos o contexto
const GlobalContext = createContext();

// onde vamos inicializar as nossas variaveis e criamos o Provider, ou seja,
// o Envelope que vai cobrir a nossa aplicação
const AppContext = ({ children }) => {
  const [name, setName] = useState("peter");

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom Hook - ou seja, retorna em si um hook, que é o consumo
// do contexto (useContext)
// passamos de fazer p.e. const [name, setName] = useContext(GlobalContext);
// para const [name, setName] = useGlobalContext
export const useGlobalContext = () => useContext(GlobalContext);

export default AppContext;
