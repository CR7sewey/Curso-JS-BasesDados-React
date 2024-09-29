import { useEffect, useState } from "react";
import Loading from "./Loading";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  // const [tours, setTours]

  const removeTour = (id) => {
    // Complete
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Complete
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
