import NavBar from "@/components/NavBar";
import SearchSection from "@/components/SearchSection";
import InfoSection from "@/components/InfoSection";
import StaySection from "@/components/StaySection";

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
