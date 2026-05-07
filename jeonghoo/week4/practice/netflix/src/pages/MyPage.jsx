import { useState } from 'react';
import Modal from '../components/MovieModal';
import MovieCard from '../components/MovieCard';

const MyPage = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <main className="space-y-7 p-10">
      <h1 className="text-2xl font-bold text-white">마이페이지</h1>

      <section>
        <h2 className="mb-4 text-xl text-white">최근 본 컨텐츠</h2>

        <div className="text-gray-400">
          아직 최근 본 컨텐츠가 없습니다.
        </div>
      </section>

      {selectedShow && (
        <Modal
          movie={selectedShow}
          onClose={() => setSelectedShow(null)}
        />
      )}
    </main>
  );
};

export default MyPage;