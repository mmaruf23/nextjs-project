export default function List({keyName, valueName}) {
  return (
    <div className="flex w-full border-b pb-3">
      <p className="w-44">{keyName}</p>
      <p className="w-5">:</p>
      <p className="flex-1">{valueName}</p>
    </div>
  );
}
