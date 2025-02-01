

export default function Input({ children, refName, name, type = "text" }) {
  return (
    <div className="flex justify-between gap-3">
      <label htmlFor={name}>{children}</label>
      <div className="flex gap-2">
        <span>:</span>
        <input className="rounded-lg border border-black" ref={refName} type={type} id={name} name={name} />
      </div>
    </div>
  );
};
