import { useState } from "react";
import data from "../data.json";

import { AppartList } from "../components";

export default function Form() {
  const [state, setState] = useState({ value: "", filteredData: data });

  function handleChange(ev) {
    setState({
      value: ev.target.value,
      filteredData: data.filter((appart) =>
        appart.title.toLowerCase().includes(ev.target.value.toLowerCase())
      ),
    });
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>{state.value}</p>
      <AppartList data={state.filteredData} />
    </div>
  );
}
