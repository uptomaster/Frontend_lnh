export default function RoomCard({ room }) {
  return (
    <div className="room-card">
      <div className="room-image-wrapper">
        <img src={room.img} className="room-image" alt="숙소" />
        {room.tag && <div className="guest-favorite-tag">✨ 게스트 선호</div>}
      </div>
      <div className="room-header">
        <span>{room.location}</span>
        <span>★ {room.rating}</span>
      </div>
      <p className="room-desc">{room.description}</p>
      <p className="room-info">{room.details}</p>
      <p className="room-info">{room.date}</p>
      <p className="room-price">총액 ₩{room.price.toLocaleString()}</p>
    </div>
  );
}