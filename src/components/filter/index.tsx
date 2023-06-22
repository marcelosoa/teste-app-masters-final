import React from "react";
import { 
  Container, 
  ListFilters, 
  Filters, 
  FiltersContainer, 
  ClearFilters 
} from "./styled";
interface FilterComponentProps {
  onSelect: (gender: string) => void;
  onClearFilters: () => void;
}

export default function FilterComponent({ onSelect, onClearFilters }: FilterComponentProps) {

  function handleClearFilters() {
    onSelect("");
    onClearFilters();
  }

  const genders: string[] = [
    "MMOARPG",
    "Shooter",
    "ARPG",
    "Action RPG",
    "Battle Royale",
    "MMORPG",
    "Fighting",
    "MOBA",
    "Sports",
    "Card Game",
    "Strategy",
    "MMO"
  ];

  return (
    <Container>
      <FiltersContainer>
      <ListFilters>
        {genders.map((gender) => {
         return <Filters
         key={gender}
         onClick={() => onSelect(gender)}
         >
            {gender}
          </Filters>
        })}
      </ListFilters>
      <ClearFilters onClick={handleClearFilters}>Limpar Filtros</ClearFilters>
      </FiltersContainer>
    </Container>
  );
}
