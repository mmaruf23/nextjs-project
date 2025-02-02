export default function Button({ children, onClick = () => {}, typeButton = 'submit', isDisabled = false }) {



  return isDisabled ? (
    <button
      type={typeButton}
      className="bg-gray-500 text-white rounded-lg border border-black px-4 py-1"
      onClick={onClick}
      disabled
    >
      {children}
      
    </button>
  ) : (
    <button
      type={typeButton}
      className="bg-blue-500 hover:bg-blue-900 text-white rounded-lg border border-black px-4 py-1"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
