import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";

const useSiteSettings = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/site-settings")
      .then((res) => setData(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
};

export default useSiteSettings;
