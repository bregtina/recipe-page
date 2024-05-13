import StyledCard from './styles/Card.styled.js';
import Data from '../Data.js';

function Card({ data }) {
  const timeDetails = data.prepTime.map((element, index) => {
    const firstWord = element.split(' ')[0];
    const restOfElement = element.slice(firstWord.length);

    return (
      <li key={index}>
        <strong>{firstWord}</strong>
        {restOfElement}
      </li>
    );
  });

  return (
    <StyledCard>
      <h3>Preparation time</h3>
      <ul>{timeDetails}</ul>
    </StyledCard>
  );
}

export default Card;
