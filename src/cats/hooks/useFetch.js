import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [refresh, setRefresh] = useState(false);
  const refetch = () => setRefresh(!refresh);

  const showLocalImage = (urlImage) => {
    setData([
      {
        url: urlImage,
      },
    ]);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Algo salió mal");
        }

        const data = await response.json();
        setData(data);
      } catch (err) {
        setError("Algo salió mal");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [refresh]);

  return {
    data,
    isLoading,
    error,
    setLocalData,
    refetch,
    showLocalImage,
  };
};

export default useFetch;
