export default ({ value, eleClass }) => {
  return (
    <div
      className={`calendar-element ${eleClass}`}
      style={{
        background: value.color,
      }}
    >
      {value.data}
    </div>
  );
};
