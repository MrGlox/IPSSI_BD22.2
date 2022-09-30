import { createContext, useState } from "react";
import data from "../data.json";

const MainContext = createContext();
export default MainContext;

export function Provider({ children }) {
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  console.log("update", filteredData);

  function handleChange(ev) {
    setValue(ev.target.value);
    setFilteredData(
      data.filter((appart) =>
        appart.title.toLowerCase().includes(ev.target.value.toLowerCase())
      )
    );
  }

  return (
    <MainContext.Provider
      value={{ data, value, filteredData, setFilteredData, handleChange }}
    >
      {children}
    </MainContext.Provider>
  );
}
