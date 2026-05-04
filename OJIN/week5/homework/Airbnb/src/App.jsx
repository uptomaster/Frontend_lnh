import NavBar from "./components/layout/Navbar";
import SearchSection from "./components/search/SearchSection";
import InfoSection from "./components/info/InfoSection";
import StaySection from "./components/stay/StaySection";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <SearchSection />
        <InfoSection />
        <StaySection />
      </main>
    </div>
  );
}

export default App;
