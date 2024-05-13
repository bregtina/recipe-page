import IngredientSection from './IngredientSection.jsx';
import InstructionSection from './InstructionSection.jsx';
import NutritionSection from './NutritionSection.jsx';
import StyledMain from './styles/Main.styled.js';
import { useContext } from 'react';
import { Context } from '../App.jsx';

function MainContent() {
  const data = useContext(Context);
  const { ingredients, instructions, nutrition } = data;

  return (
    <StyledMain>
      <IngredientSection data={ingredients} />
      <InstructionSection data={instructions} />
      <NutritionSection data={nutrition} />
    </StyledMain>
  );
}

export default MainContent;
