import { useState } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import SearchSection from './components/SearchSection';
import InfoCard from './components/InfoCard';
import StayCard from './components/StayCard';
import MoreButton from './components/MoreButton';
import PriceControls from './components/PriceControls';
import { stays } from './data/stays';

function App() {
  const [priceOffset, setPriceOffset] = useState(0);

  const increasePrice = () => {
    setPriceOffset((prevPriceOffset) => prevPriceOffset + 10000);
  };

  const decreasePrice = () => {
    setPriceOffset((prevPriceOffset) => {
      const nextPriceOffset = prevPriceOffset - 10000;

      const hasNegativePrice = stays.some(
        (stay) => stay.price + nextPriceOffset < 0
      );

      if (hasNegativePrice) {
        return prevPriceOffset;
      }

      return nextPriceOffset;
    });
  };

  return (
    <Layout>
      <main className="wrap">
        <SearchSection />

        <InfoCard />

        <section className="cardList">
          {stays.map((stay) => (
            <StayCard key={stay.id} stay={stay} priceOffset={priceOffset} />
          ))}
        </section>

        <section className="buttonArea">
          <MoreButton />
          <PriceControls
            onIncrease={increasePrice}
            onDecrease={decreasePrice}
          />
        </section>
      </main>
    </Layout>
  );
}

export default App;