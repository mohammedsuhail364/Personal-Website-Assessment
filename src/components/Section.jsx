const Section = ({ title, items, description }) => {
    console.log({ title, items, description });
    
  return (
    <div className=" p-6 text-white">
      <h2 className=" text-3xl font-bold mb-4">{title} </h2>
      {description && <p> {description}</p>}
      {items && (
        <ul className=" list-disc pl-6">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Section;
