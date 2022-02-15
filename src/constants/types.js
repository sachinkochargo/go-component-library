export const GoTypes = (props) => {
  console.log("props--", typeof props.primary);
  console.log("props--", Boolean(props.secondary) === true);
  let className = "";
  className = props.secondary ? 'bg-secondary text-white' : 'bg-primary text-white'
  return className;
};

export const GoColors = (type) => {
  let colorProps = {};
  switch (type) {
    case "device-type":
      colorProps = {
        color: "#101a5b",
        textColor: "#fff",
      };
      break;
    case "gtp-detail":
      colorProps = {
        color: "#fff",
        textColor: "#fe8400",
      };
      break;
    default:
      colorProps = {
        color: "#fe8400",
        textColor: "#fff",
      };
  }
  return colorProps;
};
