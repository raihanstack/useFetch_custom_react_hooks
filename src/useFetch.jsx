import { useState, useEffect } from "react";

export const useFetch = (url, initData) => {
  const [data, setData] = useState(initData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        setData(initData);
      });
  }, []);

  return { data, loading, error };
};