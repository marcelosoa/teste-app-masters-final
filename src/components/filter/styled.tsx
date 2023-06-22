import { styled } from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  padding: 10px;
`;

export const ListFilters = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Filters = styled.button`
  cursor: pointer;
  display: inline-block;
  color: #000;
  letter-spacing: 1px;
  font-size: 16px;
  margin: 0 5px;
  border-radius: 10px;
  padding: 5px;
  background-color: #ebf1ff;
  border: 1px solid #ccc;

  &:hover {
    background-color: #ffcc00;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ClearFilters = styled.button`
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #8fb4ff;
`;
