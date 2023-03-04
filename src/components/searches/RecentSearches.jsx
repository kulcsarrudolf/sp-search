import { useEffect, useState } from "react";
import Searches from "./Searches";

const RecentSearches = ({ refresh }) => {
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    const currentSearchesJSON = localStorage.getItem("searches");
    const currentSearches = JSON.parse(currentSearchesJSON);

    if (currentSearches) {
      setSearches(currentSearches.slice(0, 10));
    }
  }, [refresh]);

  if (searches.length === 0) {
    return null;
  }

  return <Searches title="Recent Searches" searches={searches} />;
};

export default RecentSearches;
