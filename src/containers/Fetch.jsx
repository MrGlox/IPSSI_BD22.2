import { useQuery } from "react-query";

export default function Fetch() {
  //   const [isLoading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);
  //   const [data, setData] = useState([]);

  //   async function requestData() {
  //     try {
  //       const res = await fetch(
  //         "https://baconipsum.com/api/?type=meat-and-filler"
  //       );

  //       const data = await res.json();

  //       setTimeout(() => {
  //         setData(data);
  //         setLoading(false);
  //       }, 1000);
  //     } catch (err) {
  //       setLoading(false);
  //       setError(err);

  //       throw err;
  //     }
  //   }

  //   useEffect(() => {
  //     requestData();
  //   }, []);

  const { isLoading, error, data } = useQuery("bacon", () =>
    fetch("https://baconipsum.com/api/?type=meat-and-filler").then((res) =>
      res.json()
    )
  );

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
