import React, { useEffect, useState } from "react";
import axios from "./Axios";
import "../../Styles/Row.css";
import { Box, Image, Skeleton, Stack } from "@chakra-ui/react";

const Rows = ({ title, fetchUrl, isLargeRow = false }) => {
  const [loading, setLoading] = useState(true);

  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    setLoading(false);
    return request;
  };

  useEffect(() => {
    fetchData(fetchUrl);
  }, [fetchUrl]);

  if (loading) {
    return (
      <Stack>
        <Skeleton startColor='white' endColor='orange.500' height="60px" />
        <Skeleton startColor='white' endColor='orange.500' height="60px" />
        <Skeleton startColor='white' endColor='orange.500' height="20px" />
      </Stack>
    );
  }

  return (
    <Box className="row">
      <h2 className="row__title">{title}</h2>
      <Box className={`row__posters ${isLargeRow && "row__postersLarge"}`}>
        {movies
          ? movies.map((movie) => (
              <Image
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ))
          : ""}
        ;
      </Box>
    </Box>
  );
};

export default Rows;
