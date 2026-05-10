import { useState } from "react";

const KEY = "recentShows";

const useRecentShows = () => {
  const [recentShows, setRecentShows] = useState(() =>
    JSON.parse(localStorage.getItem(KEY) ?? "[]"),
  );

  const addShow = (movie) => {
    setRecentShows((prev) => {
      const next = [
        movie,
        ...prev.filter((item) => item.id !== movie.id),
      ].slice(0, 10);
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  };

  const removeShow = (id) => {
    setRecentShows((prev) => {
      const next = prev.filter((item) => item.id !== id);
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  };

  return { recentShows, addShow, removeShow };
};

export default useRecentShows;
