const Datemob = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const today = new Date().toLocaleDateString("en-US", options);

  return <div className="dmob">{today}</div>;
};

export default Datemob;
