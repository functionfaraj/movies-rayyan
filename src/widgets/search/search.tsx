import { RayyanTextInput } from "@/components";
import { useRayyanMovies } from "@/hooks/use-movies";
import { IMovie } from "@/store/movies";
import { useDebounce } from "@/utils/use-debounce";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useStyle } from "./style";

const SearchWidget = () => {
  const { clasess } = useStyle();
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const { weights, searchResult, searchForMovies, goToMovie } =
    useRayyanMovies();
  const searchTerm = useDebounce(search, 500);
  useEffect(() => {
    if (Object.keys(searchTerm).length) {
      searchForMovies(searchTerm);
    }
  }, [searchTerm]);
  return (
    <div style={clasess.container}>
      <div style={clasess.title}>{t("search.title")}</div>
      <div style={clasess.searchContainer}>
        <RayyanTextInput
          autoFocus={true}
          placeholder={t("search.placeholder")}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
      </div>
      <div style={clasess.score}>
        {t("search.searchScore")}
        {`=>`} {t("search.name")}: {weights.name}, {t("search.description")}:
        {weights.description}, {t("search.genre")}: {weights.genre}
      </div>
      {searchTerm && !searchResult.length && (
        <div style={clasess.noResult}>
          {t("search.noResult")}{" "}
          <span style={clasess.searchTerm}>{searchTerm}</span>
        </div>
      )}
      {searchTerm && searchResult.length && (
        <div style={clasess.noResult}>
          {t("search.result")}{" "}
          <span style={clasess.searchTerm}>
            {searchTerm} {`(${searchResult.length})`}
          </span>
        </div>
      )}
      <div style={clasess.moviesContainer}>
        {searchTerm.length > 0 &&
          searchResult.map((movie: IMovie) => {
            return (
              <div
                key={movie[`title_${i18next.language}`]}
                style={clasess.movie}
                onClick={() => goToMovie(movie.id)}
              >
                <img
                  src={movie.poster}
                  alt={`${movie[`title_${i18next.language}`]}`}
                  width={240}
                  height={361}
                  style={clasess.image}
                />
                <div style={clasess.searchScore}>
                  {t("search.searchScore")}: {movie.searchScore}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export { SearchWidget };
