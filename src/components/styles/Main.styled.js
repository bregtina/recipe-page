import styled from 'styled-components';

const StyledMain = styled.main`

  padding: 0 30px 30px 30px;

  h3 {
    font-family: ${({ theme }) => theme.font.family.headingFont};
    color: ${({ theme }) => theme.colors.heading.nutmeg};
    font-size: 1.7em;
    font-weight: 300;
    margin-bottom: 15px;
  }

  ul, ol {
    margin-left: 30px;
    margin-bottom: 30px;
  }

  li {
    line-height: 1.5;
    padding-left: 14px;
    margin-bottom: 10px;
  }

  li::marker {
    color: ${({ theme }) => theme.colors.heading.nutmeg};
  }

  ul > li::marker {
    font-size: 75%;
  }

  ol > li::marker {
    font-weight: 700;
  }

  p {
    width: 95%;
    margin-bottom: 10px;
  }

  hr {
    margin-bottom: 25px;
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.neutral.lightGrey};
  }
`;

export default StyledMain;
