import { useEffect, useState } from "react";
import Searches from "./Searches";

const PopularSearches = ({ refresh }) => {
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    const currentSearchesJSON = localStorage.getItem("searches");
    const currentSearches = JSON.parse(currentSearchesJSON);

    if (currentSearches) {
      setSearches(currentSearches.sort((a, b) => b.cnt - a.cnt).slice(0, 10));
    }
  }, [refresh]);

  return <Searches title="Popular Searches" searches={searches} />;
};

export default PopularSearches;
