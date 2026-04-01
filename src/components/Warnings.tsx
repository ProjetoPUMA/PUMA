function Warnings({ message }: { message: string }) {
  return (
    <div className="warning">
      <div className="warning__header"></div>
      <div className="warning__content">
        <span>!!! ATENÇÃO !!!</span>
        <p>{message}</p>
        <span>!!! ATENÇÃO !!!</span>
      </div>
    </div>
  );
}

export default Warnings;
