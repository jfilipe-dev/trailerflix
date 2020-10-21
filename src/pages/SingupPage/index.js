import React from 'react';

import { Container } from './styles';

//Componentes
import Botao from '../../components/Botao';

import logo from '../../assets/logo.png';

function SignUpPage() {
  return (
    <>    
      <Container>
        	<img src={logo} alt=""/>
          <div class="login">
            <h2>Register</h2>

           <div className="form">
              <label>Nome</label>
              <input type="text" placeholder="Fulano de tal"/>

              <label>E-mail</label>
              <input type="email" placeholder="exemplo@email.com"/>

              <label>Senha</label>
              <input type="password"  placeholder="********"/>
           </div>
  
          <div className="botaoContainer">
          <Botao titulo="Entrar" href="#"/>
          </div>
                  
          </div>
      </Container>
    </>
  );
}

export default SignUpPage;