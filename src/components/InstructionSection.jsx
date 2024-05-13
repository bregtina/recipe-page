function InstructionSection({ data }) {
  const instructionList = data.list.map((item, index) => {
    const splitWords = item.split(': ');

    return (
      <li key={index}>
        <strong>{splitWords[0]}</strong>
        {item.slice(splitWords[0].length)}
      </li>
    );
  });
  return (
    <section>
      <h3>{data.heading}</h3>
      <ol>{instructionList}</ol>
      <hr />
    </section>
  );
}

export default InstructionSection;
