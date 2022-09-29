import { useEffect, useState } from "react";

export default function Fetch() {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  async function requestData() {
    try {
      const res = await fetch(
        "https://baconipsum.com/api/?type=meat-and-filler"
      );

      setData(await res.json());
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
      throw err;
    }
  }

  useEffect(() => {
    requestData();
  }, []);

  if (isLoading) {
    return "Loading...";
  }
  if (error) {
    return error.message;
  }

  return (
    <div>
      {data.map((el, index) => (
        <p key={"index" + index}>{el}</p>
      ))}
    </div>
  );
}
