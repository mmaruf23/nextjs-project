export default function Input({ children, name, type = 'text' }) {
  return (
    <div className="flex justify-between gap-3 font-semibold">
      <label htmlFor={name}>{children}</label>
      <div className="flex gap-2">
        <span>:</span>
        <input
          className="rounded-lg border border-black px-2"
          type={type}
          id={name}
          name={name}
        />
      </div>
    </div>
  );
}
