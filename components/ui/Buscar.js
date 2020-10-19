import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const InputText = styled.input`
  border: 1px solid var(--gris3);
  padding: 1rem;
  min-width: 300px;
`;

const InputSubmit = styled.input`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url("/static/img/buscar.png");
`;

const Buscar = () => {
  return (
    <form>
      <InputText type="text" />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Buscar;
