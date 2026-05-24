import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";

const useGallery = (page = 1, limit = 12) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/gallery", { params: { page, limit } })
      .then((res) => {
        setData(res.data.items ?? []);
        setTotal(res.data.total ?? 0);
        setTotalPages(res.data.totalPages ?? 1);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [page, limit]);

  return { data, loading, error, total, totalPages };
};

export default useGallery;
