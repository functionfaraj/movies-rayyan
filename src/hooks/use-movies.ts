import { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import i18next from "i18next";
import { IMovie, moviesState } from "@/store/movies";
import { useRayyanRouter } from "./use-rayyan-router";

const useRayyanMovies = () => {
  const weights = useMemo(() => {
    return {
      name: 3,
      description: 2,
      genre: 1,
    };
  }, []);
  const [searchResult, setSearchResult] = useState<IMovie[]>([]);
  const movies = useRecoilValue(moviesState);
  const { navigate } = useRayyanRouter();
  const [randomMovie, setRandomMovie] = useState<any | null | IMovie>(null);
  const getRandomMovie = useCallback(() => {
    if (movies.length === 0) {
      return null;
    }
    if (!randomMovie) {
      let run = true;
      do {
        const randomIndex = Math.floor(Math.random() * movies.length);
        if (movies[randomIndex]) {
          setRandomMovie(movies[randomIndex]);
          run = false;
        }
      } while (run);
    }
  }, []);

  const getMoviesByGenre = useCallback(
    (genre: string) => {
      return movies.filter((movie: IMovie) =>
        movie[`genre_${i18next.language}`]
          .toLowerCase()
          .includes(genre.toLowerCase())
      );
    },
    [movies, i18next.language]
  );

  const getMovieById = useCallback(
    (id: number) => {
      return movies.find((movie: IMovie) => movie.id === id);
    },
    [movies, i18next.language]
  );

  const goToMovie = useCallback(
    (id: number) => {
      console.log(id);
      navigate(`/movie/${id}`);
    },
    [movies, i18next.language]
  );

  const getMoviesByGenres = useCallback(
    (movie: IMovie) => {
      const matchingMovies: IMovie[] = [];
      movies.forEach((m: IMovie) => {
        if (m.id !== movie.id) {
          const commonGenres = m.genre_en
            .split(",")
            .filter((genre: string) => movie.genre_en.includes(genre));
          if (commonGenres.length > 0) {
            matchingMovies.push(m);
          }
        }
      });
      return matchingMovies;
    },
    [movies, i18next.language]
  );
  const calculateWeightedScore = useCallback(
    (
      movie: IMovie,
      searchTerm: string,
      weights: { name: number; description: number; genre: number }
    ): number => {
      const searchTerms = searchTerm.trim().split(" ");

      const nameScore = searchTerms.some(
        (term: string) =>
          new RegExp(term, "i").test(movie.title_ar) ||
          new RegExp(term, "i").test(movie.title_en)
      )
        ? weights.name
        : 0;
      const descriptionScore = searchTerms.some(
        (term: string) =>
          new RegExp(term, "i").test(movie.title_ar) ||
          new RegExp(term, "i").test(movie.title_en)
      )
        ? weights.description
        : 0;
      const genreScore =
        movie.genre_ar
          .split(",")
          .some((genre: string) =>
            searchTerms.some((term) => new RegExp(term, "i").test(genre))
          ) ||
        movie.genre_en
          .split(",")
          .some((genre: string) =>
            searchTerms.some((term) => new RegExp(term, "i").test(genre))
          )
          ? weights.genre
          : 0;

      return nameScore + descriptionScore + genreScore;
    },
    [movies]
  );
  const searchMovies = useCallback(
    (
      searchTerm: string,
      weights: { name: number; description: number; genre: number }
    ): IMovie[] => {
      return movies
        .map((movie) => ({
          movie,
          score: calculateWeightedScore(movie, searchTerm, weights),
        }))
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .map(({ movie, score }) => ({
          ...movie,
          searchScore: score,
        }));
    },
    [movies]
  );

  const searchForMovies = useCallback(
    (search: string) => {
      setSearchResult(searchMovies(search, weights));
    },
    [movies, i18next.language]
  );

  useEffect(() => {
    if (!randomMovie) getRandomMovie();
  }, [movies]);
  return {
    movies,
    randomMovie,
    searchResult,
    weights,
    getMoviesByGenres,
    getMoviesByGenre,
    getMovieById,
    goToMovie,
    searchForMovies,
  };
};

export { useRayyanMovies };
