import React, { useEffect, useState } from "react";

// TODO: Hacer que se pueda elegir si se quiere hacer la peticion al inicio o hacerla mediante algun boton

export const isFunction = (functionToCheck) =>
  typeof functionToCheck === "function";

const useFetch = ({
  url = "",
  errorMsg = "",
  initialState = null,
  service = null,
  errorCallBack = (error) => {},
  requestInMount = true,
}) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
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
        if (!url && !service) {
          throw new Error("No se ha especificado ninguna url o servicio");
        }

        if (service) {
          const response = await service();
          setData(response);
          return;
        }

        const response = await fetch(url);
        if (!response.status.toString().startsWith("2")) {
          throw new Error("Error en la llamada al servidor");
        }

        const users = await response.json();
        setData(users);
      } catch (error) {
        setError(errorMsg);

        isFunction(errorCallBack) && errorCallBack(error);
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
