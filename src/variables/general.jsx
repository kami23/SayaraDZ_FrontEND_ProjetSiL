// ##############################
// // // table head data and table body data for Tables view
// #############################
import deletee from "../assets/icons/delete.png";
import edit from "../assets/icons/edit.png";

const thead = ["Nom", "Prix"];
const tbody = [
  {
    className: "table-success",
    data: ["Dakota Rice", "20.000.000 DA"]
  },
  {
    className: "",
    data: ["Minerva Hooper", "20.000.000 DA"]
  },
  {
    className: "table-info",
    data: ["Sage Rodriguez", "20.000.000 DA"]
  },
  {
    className: "",
    data: ["Philip Chaney", "20.000.000 DA"]
  },
];

// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { thead, tbody };
