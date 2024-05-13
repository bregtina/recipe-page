import StyledTable from './styles/Table.styled.js';

function NutritionSection({ data }) {
  const { heading, description, elements } = data;

  const contents = elements.map((item) => {
    for (let [key, value] of Object.entries(item)) {
      const firstLetterKey = key.split('')[0];
      const restOfKey = key.slice(firstLetterKey.length);

      return (
        <tr key={key}>
          <td>{firstLetterKey.toUpperCase() + restOfKey}</td>
          <td>{value}</td>
        </tr>
      );
    }
  });

  return (
    <section>
      <h3>{heading}</h3>
      <p>{description}</p>
      <StyledTable>
        <thead></thead>
        <tbody>{contents}</tbody>
      </StyledTable>
    </section>
  );
}

export default NutritionSection;
