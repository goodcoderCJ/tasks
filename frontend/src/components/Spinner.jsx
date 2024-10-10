const Spinner = () => {
  return (
    <div className="spinner-container" data-testid="spin-container">
      <div
        className="spinner"
        data-testid="inner-container"
      ></div>
    </div>
  );
};

export default Spinner;
