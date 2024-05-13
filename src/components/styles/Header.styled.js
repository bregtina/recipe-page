import styled from 'styled-components';

const StyledHeader = styled.header`

  section {
    padding: 30px;
  }

  h2 {
    font-family: ${({ theme }) => theme.font.family.headingFont}, sans-serif;
    font-size: 2.2em;
    line-height: 1;
    font-weight: 500;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  @media(min-width: ${({ theme }) => theme.layout.mobile} ) {

    &:first-child > div {
      padding: 30px 30px 0 30px;
    }

    img {
      border-radius: 10px;
    }

  }
`;

export default StyledHeader;
