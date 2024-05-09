export default ({ arr, Component, eleClass, setstates, states }) => {
  if (arr.length > 0 && (arr[0].length == undefined || typeof arr[0] == String))
    return (
      <>
        {arr.map((d, index) => (
          <Component
            value={d}
            index={index}
            setstates={setstates}
            states={states}
          />
        ))}
      </>
    );
  else
    return (
      <>
        {arr.map((subarr) => (
          <div className="calendar-rows">
            {subarr.map((ele) => (
              <Component value={ele} eleClass={eleClass} />
            ))}
          </div>
        ))}
      </>
    );
};
