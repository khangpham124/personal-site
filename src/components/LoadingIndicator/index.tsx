const LoadingIndicator = () => {
  return (
    <div className='preloader'>
      <div className='loader'>
        <div className='loader__figure'></div>
        <p className='loader__label'>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingIndicator;
