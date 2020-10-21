import React from 'react';

import { Container } from './styles';

//Componentes
import Botao from '../../components/Botao';

import logo from '../../assets/logo.png';

function InitialPage() {
  return (
    <>    
      <Container>
        <div>
          <img src={logo} alt=""/>
          <p>Trailerflix é uma provedora global de trailer via streaming sediada em Los Gatos, Califórnia, e que atualmente possui mais de 160 milhões de assinantes. 
              Fundada em 2020 no Brasil, em Cornélio Procópio, a empresa surgiu com o um serviço de entrega de DVD pelo correio.</p>
          <div class="botoes">
            <Botao titulo="Entrar" href="#" />
            <Botao titulo="Cadastrar"href="#" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default InitialPage;