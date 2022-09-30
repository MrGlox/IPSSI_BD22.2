import { useContext, useEffect } from "react";
import { AppartList } from "../components";
import MainContext from "contexts/Main";

export default function Form() {
  const { value, filteredData, handleChange } = useContext(MainContext);

  return (
    <div>
      <input type="text" defaultValue={value} onChange={handleChange} />
      <p>{value}</p>
      <AppartList data={filteredData} />
    </div>
  );
}
