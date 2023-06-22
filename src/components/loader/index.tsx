import { Spinner, LoadingContainer } from "./styled";
import React, { ReactElement } from "react";

export default function LoadingComponent(): ReactElement {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  )
}