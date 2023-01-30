const sortByPriceA = () => {
  return { type: "Ascending_Price_Sort" };
};
const sortByPriceD = () => {
  return { type: "Decending_Price_Sort" };
};
const sortByNameA = () => {
  return { type: "Ascending_Name_Sort" };
};
const sortByNameD = () => {
  return { type: "Decending_Name_Sort" };
};
const sortByDateA = () => {
  return { type: "Ascending_Date_Sort" };
};
const sortByDateD = () => {
  return { type: "Decending_Date_Sort" };
};
const DollorCurrency = () => {
  return { type: "Dollor" };
};
const PondCurrency = () => {
  return { type: "Pond" };
};
const ClearFilter = () => {
  return { type: "Clear" };
};
const SearchByName = (name) => {
  return { type: "SearchByName", payload: name };
};
export {
  sortByPriceA,
  sortByPriceD,
  sortByNameA,
  sortByNameD,
  sortByDateA,
  sortByDateD,
  DollorCurrency,
  PondCurrency,
  ClearFilter,
  SearchByName,
};
