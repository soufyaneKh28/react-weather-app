import "./App.css";
import Search from "./components/Search/Search";

function App() {
  const handleOnSearchData = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchData} />
    </div>
  );
}

export default App;
