import React, { ReactElement } from 'react';
import { Header, Input, SearchContainer } from './styled';
interface SearchProps {
  onSearch: (searchTerm: string) => void;
}
export default function SearchComponent({ onSearch }: SearchProps): ReactElement {

  return (
    <>
      <Header>
        <SearchContainer>
          Games API 🕹️
          <Input onChange={e => onSearch(e.target.value)} placeholder='pesquisar jogos..' />
        </SearchContainer>
      </Header>
    </>
  );
}
