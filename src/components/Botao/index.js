import React from 'react';

import { Container } from './styles';

function Botao({titulo, ...rest}) {
  return (
    <Container {...rest} >{titulo}</Container>
  );
}

export default Botao;