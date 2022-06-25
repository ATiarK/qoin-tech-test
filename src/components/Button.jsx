import { useId } from "react";

export default function Button(props) {
  const id = useId();
  const { onClick, children, className, variant } = props;
  const addClassName = className ? ` ${className}` : "";
  const variants = {
    solid: "bg-blue-500 text-white",
    outline: "border-blue-500 text-blue-500 border",
  };
  const pickedVariant = variants[variant];
  return (
    <button
      id={id}
      onClick={onClick}
      className={`px-5 rounded-md font-bold ${pickedVariant} ${addClassName}`}
    >
      {children}
    </button>
  );
}
