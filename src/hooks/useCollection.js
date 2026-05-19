import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";

const useCollection = (slug) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) { setLoading(false); return; }
    setLoading(true);
    axios
      .get(`/api/collections/${slug}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [slug]);

  return { data, loading, error };
};

export default useCollection;
