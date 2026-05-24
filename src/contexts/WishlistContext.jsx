import { createContext, useContext, useState, useCallback } from "react";

const STORAGE_KEY = "skj_wishlist";

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  });

  const toggle = useCallback((product) => {
    setItems((prev) => {
      const exists = prev.some((p) => p._id === product._id);
      const next = exists
        ? prev.filter((p) => p._id !== product._id)
        : [...prev, product];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const isWishlisted = useCallback(
    (id) => items.some((p) => p._id === id),
    [items]
  );

  const clear = useCallback(() => {
    setItems([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <WishlistContext.Provider value={{ items, toggle, isWishlisted, clear }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
