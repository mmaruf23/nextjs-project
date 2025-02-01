export default function Button({children, onClick}) {
  return (
    <button className="bg-blue-500 hover:bg-blue-900 text-white rounded-lg border border-black px-4 py-1" onClick={onClick}>
      {children}
    </button>
  )
};
