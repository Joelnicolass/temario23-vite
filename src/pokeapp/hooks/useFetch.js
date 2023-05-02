import React, { useEffect, useState } from "react";

const useFetch = ({ service = async () => {} }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [refetch, setRefetch] = useState(false);

  const handleRefetch = () => {
    setRefetch(!refetch);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service();
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [refetch]);

  return { data, isLoading, error, handleRefetch };
};

export default useFetch;
