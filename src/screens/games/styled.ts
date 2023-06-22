import styled from "styled-components";

export const GameCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 35px;
  border-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  background-color: #f6fef9;
  color: #010502;
`;

export const GameList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 0 auto;
  padding: auto;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px), (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GameThumbnail = styled.img`
  width: 190px;
  height: 190px;
  object-fit: cover;
  border-radius: 25px;
`;

export const GameDetails = styled.div`
  flex-direction: column;
  padding: 15px;
`;

export const GameTitle = styled.h3`
  font-size: 18px;
  flex-direction: column;
  margin: 0;
`;

export const GameDescription = styled.p`
  font-size: 14px;
  margin: 10px 0;
  color: #676f6a;
`;

export const GameGenre = styled.p`
  font-size: 12px;
  margin: 10px 0;
  gap: 10px;
  color: #676f6a;
`;

export const GamePlatform = styled.p`
  color: #676f6a;
  margin-bottom: 10px;
`;
