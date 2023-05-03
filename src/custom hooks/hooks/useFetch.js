import React, { useEffect, useState } from "react";

const useFetch = ({ initialState = null, url = "" }) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [refreshApi, setRefreshApi] = useState(false);

  const refetch = () => {
    setRefreshApi(!refreshApi);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Error en la petición");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError("Error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [refreshApi]);

  return {
    data,
    error,
    isLoading,
    refetch,
  };
};

export default useFetch;
