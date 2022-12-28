function UserCard(platano) {
  return (
    <div className="card">
      <img src={platano.picture.medium} alt={`${platano.name.first} profile`} />
      <div>
        <p>
          {`${platano.name.title}. ${platano.name.first} ${platano.name.last}`}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
