import styled from 'styled-components';

const StyledCard = styled.aside`

  background-color: ${({ theme }) => theme.colors.neutral.roseWhite};
  border-radius: 10px;
  width: 100%;

  h3 {
    color: ${({ theme }) => theme.colors.heading.raspberry};
    font-size: 1.2rem;
    padding: 20px 0 15px 20px;
  }

  ul {
    padding: 0 0 20px 50px;
    max-width: 70%;
  }

  li {
    line-height: 1.4;
    margin-bottom: 0.5em;
  }

  li::marker {
    font-size: 75%;
    color: ${({ theme }) => theme.colors.heading.raspberry};
  }
`;

export default StyledCard;
