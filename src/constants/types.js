export const GoTypes = (type) => {
  let colorProps = {};
  switch (type) {
    case "device-type":
      colorProps = {
        backgroundColor: "#101a5b",
        textColor: "#fff",
      };
      break;
    case "gtp-detail":
      colorProps = {
        backgroundColor: "#fe8400",
        textColor: "#fff",
      };
      break;
    default:
      colorProps = {
        backgroundColor: "#ffff",
        textColor: "black",
      };
  }
  return colorProps;
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
