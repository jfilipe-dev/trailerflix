import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #222222;
  color: #fff;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 36px; 

  img {
      width: 400px;
  }
  
  p {
    width: 900px;
    text-align: justify;
    margin: 80px 0;
  }

  div {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;

    .botoes {
      flex-direction: row;
    }
  }
`;
