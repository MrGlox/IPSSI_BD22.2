import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  // componentDidMount & componentWillUpdate
  useEffect(() => {
    setTimeout(() => tick(), 1000);

    // componentWillUnmount
    return () => {
      clearTimeout(() => tick());
    };
  }, [date]);

  return <h2>Mon horloge: {date.toLocaleTimeString()}</h2>;
}
