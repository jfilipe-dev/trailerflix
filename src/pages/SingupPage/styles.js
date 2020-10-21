import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #222222;
  color: #fff;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 36px;
  
  h2 {
    margin-bottom: 24px;
  }

  img {
    width: 300px;
  }
  
  .botaoContainer {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .login {
    margin-top: 64px;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 20px;
    justify-content: space-around;
    
    .form {
      margin-bottom: 18px;
      max-width: 500px;
    }

    
    input {
      width: 100%;
      height: 34px;
      border-radius: 10px;
      border: none;
      padding: 4px 8px;
      font-size: 16px;
    }
  }
`;




