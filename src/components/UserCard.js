function UserCard(platano) {
  return (
    <div className="card-container">
      <img
        className="user-img"
        src={platano.picture.medium}
        alt={`${platano.name.first} profile`}
      />
      <div className="user-title-padding">
        <p>
          {`${platano.name.title}. ${platano.name.first} ${platano.name.last}`}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
