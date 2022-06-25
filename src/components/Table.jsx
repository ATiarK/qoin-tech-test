export default function SimpleTable(props) {
  const { label, value } = props;
  return (
    <div className="flex md:flex-row flex-col">
      <div className="basis-3/12 font-semibold">{label}</div>
      <div className="hidden md:block basis-9/12">: {value}</div>
      <div className="md:hidden basis-9/12">{value}</div>
    </div>
  );
}
