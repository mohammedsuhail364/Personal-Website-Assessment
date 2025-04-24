import Section from "./components/Section";
import data from "./data/content.json";

const App = () => {
  return (
    <div className=" bg-gray-900 min-h-screen text-white font-sans">
      {Object.entries(data).map(([key, section]) => (
        <Section key={key} {...section} />
      ))}
    </div>
  );
};

export default App;
