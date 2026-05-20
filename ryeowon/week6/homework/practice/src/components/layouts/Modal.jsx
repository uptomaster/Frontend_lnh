const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-[#000018] text-white rounded-xl w-[500px] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-xl font-bold cursor-pointer"
          onClick={onClose}
        >
          X
        </button>

        <img
          src={show.image?.original}
          alt={show.name}
          className="max-h-52 md:max-h-none w-full h-[300px] object-cover rounded-lg mb-4"
        />

        <h2 className="text-2xl font-bold mb-2">{show.name}</h2>
        <p className="mb-1">개봉일: {show.premiered}</p>
        <div
          className="mt-4 text-gray-300"
          dangerouslySetInnerHTML={{ __html: show.summary ?? '' }}
        />
      </div>
    </div>
  );
};

export default Modal;