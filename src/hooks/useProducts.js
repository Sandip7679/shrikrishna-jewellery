import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";

const useProducts = (params = {}) => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/products", { params })
      .then((res) => {
        setData(res.data.data || res.data);
        setPagination(res.data.pagination || null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [JSON.stringify(params)]);

  return { data, pagination, loading, error };
};

export default useProducts;
