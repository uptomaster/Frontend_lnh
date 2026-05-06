import SearchBar from "./SearchBar";
import HeroImage from "../../assets/seoul_hero.jpg";

function SearchSection() {
  return (
    <section className="px-6 pt-8 md:px-20 md:pt-12">
      <div className="max-w-[1200px]">
        <div className="relative">
          <div className="overflow-hidden rounded-[32px] md:ml-[120px]">
            <img
              src={HeroImage}
              alt="서울 도심 풍경"
              className="h-[360px] w-full object-cover md:h-[560px]"
            />
          </div>

          <div className="mt-[14px] md:absolute md:left-0 md:top-1/2 md:z-10 md:mb-0 md:-translate-y-1/2">
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
