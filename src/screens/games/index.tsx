// React
import React, { useEffect, useState } from "react";
// Utils
import { getGamesFromApi } from "../../api/api";
import { Toaster } from "react-hot-toast";
// Interface
import { ApiInterface } from "../../interface/apiInterface";
// Components
import SearchComponent from "../../components/search";
import LoadingComponent from "../../components/loader";
import FilterComponent from "../../components/filter";
// Style
import {
  GameCard,
  GameDescription,
  GameDetails,
  GameGenre,
  GameList,
  GamePlatform,
  GameThumbnail,
  GameTitle,
} from "./styled";

export default function GamesScreen(): React.ReactElement {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [gameData, setGameData] = useState<ApiInterface[] | undefined>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    getGamesFromApi()
      .then((res) => {
        setGameData(res);
      })
      .finally(() => setLoading(false));
  }, []);

  // Filtrar jogo pelo nome
  function handleSearchByName(value: string): void {
    setSearchTerm(value);
  }

  // Filtrar Jogos pelo gênero
  function handleSearchByGender(gender: string): void {
    if (gender === "") {
      setSelectedGenre("");
    } else {
      setSelectedGenre(gender);
    }
  }

  // Limpar Filtros pre-selecionados/selecionados
  function handleClearFilters(): void {
    setSearchTerm("");
    setSelectedGenre("");
  }

  return (
    <div>
      <Toaster />
      <SearchComponent onSearch={handleSearchByName} />
      <FilterComponent
        onSelect={handleSearchByGender}
        onClearFilters={handleClearFilters}
      />
      {loading ? (
        <LoadingComponent />
      ) : (
        gameData && (
          <GameList>
            {gameData
              .filter((game: ApiInterface) =>
                game.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((game: ApiInterface) => {
                if (selectedGenre === "" || game.genre === selectedGenre) {
                  return (
                    <GameCard
                      onClick={() => setSelectedGenre(game.genre)}
                      key={game.id}
                    >
                      <GameThumbnail
                        src={game.thumbnail}
                        alt={game.thumbnail}
                      />
                      <GameDetails>
                        <GameTitle>{game.title}</GameTitle>
                        <GameDescription>
                          Descrição: {game.short_description}
                        </GameDescription>
                        <GameGenre>Gênero: {game.genre}</GameGenre>
                        <GamePlatform>Plataforma: {game.platform}</GamePlatform>
                      </GameDetails>
                    </GameCard>
                  );
                }
                return null;
              })}
          </GameList>
        )
      )}
    </div>
  );
}
