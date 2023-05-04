import React, { useEffect, useState } from "react";

const useFetch = (url, { initialState = null } = {}) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [refresh, setRefresh] = useState(false);
  const refetch = () => setRefresh(!refresh);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [refresh]);

  return {
    data,
    error,
    isLoading,
    refetch,
  };
};

export default useFetch;
