import { useContext, useEffect } from "react";
import { AppartList } from "../components";
import MainContext from "contexts/Main";

export default function Form() {
  const { data, value, filteredData, setFilteredData, handleChange } =
    useContext(MainContext);

  // useEffect(() => {
  //   setFilteredData(
  //     data.filter((appart) =>
  //       appart.title.toLowerCase().includes(value.toLowerCase())
  //     )
  //   );
  // }, []);

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>{value}</p>
      <AppartList data={filteredData} />
    </div>
  );
}
