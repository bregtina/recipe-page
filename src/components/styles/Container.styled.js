import styled from 'styled-components';

const Container = styled.div`

  @media(min-width: ${({ theme }) => theme.layout.mobile}) {
    width: 800px;
    max-width: 85%;
    margin: 60px auto;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.neutral.white};
  }
`;

export default Container;
