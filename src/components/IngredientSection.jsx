function IngredientSection({ data }) {
  const content = data.list.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <section>
      <h3>{data.heading}</h3>
      <ul>{content}</ul>
      <hr />
    </section>
  );
}

export default IngredientSection;
