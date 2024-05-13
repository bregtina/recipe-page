import Card from './Card.jsx';
import StyledHeader from './styles/Header.styled.js';
import { useContext } from 'react';
import { Context } from '../App.jsx';

function Header() {
  const data = useContext(Context);
  const { image, name, description } = data;
  return (
    <StyledHeader>
      <div>
        <img
          src={image}
          alt={name}
        />
      </div>
      <section>
        <h2>{name}</h2>
        <p>{description}</p>
        <Card data={data} />
      </section>
    </StyledHeader>
  );
}

export default Header;
