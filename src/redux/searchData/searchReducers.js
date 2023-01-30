<<<<<<< HEAD
import { carsdata } from "../../data/CarData";

const AllCarsData = {
  cars: [],
  currency: "$",
};
carsdata.map((cardata) => {
  return cardata.cars.map((car) => {
    return AllCarsData.cars.push(car);
  });
});

const CarSearchReducer = (state = AllCarsData, action) => {
  switch (action.type) {
    case "Ascending_Price_Sort":
      const newsorta = state.cars.sort((a, b) => {
        return a.price[0].dolor - b.price[0].dolor;
      });
      return {
        ...state,
        cars: newsorta,
      };
    case "Decending_Price_Sort":
      const newsortd = state.cars
        .sort((a, b) => {
          return a.price[0].dolor - b.price[0].dolor;
        })
        .reverse();
      return { ...state, cars: newsortd };
    case "Ascending_Name_Sort":
      const newnamesorta = state.cars.sort((a, b) => {
        return a.model.localeCompare(b.model);
      });
      return {
        ...state,
        cars: newnamesorta,
      };
    case "Decending_Name_Sort":
      const newnamesortd = state.cars
        .sort((a, b) => {
          return a.model.localeCompare(b.model);
        })
        .reverse();
      return {
        ...state,
        cars: newnamesortd,
      };
    case "Ascending_Date_Sort":
      const newsortdateA = state.cars.sort((a, b) => {
        return a.released_date.split(" ")[2] - b.released_date.split(" ")[2];
      });
      return {
        ...state,
        cars: newsortdateA,
      };
    case "Decending_Date_Sort":
      const newsortdateD = state.cars
        .sort((a, b) => {
          return a.released_date.split(" ")[2] - b.released_date.split(" ")[2];
        })
        .reverse();
      return {
        ...state,
        cars: newsortdateD,
      };
    case "Dollor":
      const dolorsymbol = "$";
      return {
        ...state,
        currency: dolorsymbol,
      };
    case "Pond":
      const pondsymbol = "£";
      return {
        ...state,
        currency: pondsymbol,
      };
    case "Clear":
      return {
        cars: AllCarsData.cars,
        currency: "$",
      };
    case "SearchByName":
      const searchedName = state.cars.filter((car) =>
        car.model.toLowerCase().includes(action.payload)
      );

      return {
        ...state,
        cars: action.payload === "" ? AllCarsData.cars : searchedName,
      };
    default:
      return AllCarsData;
  }
};
export { AllCarsData, CarSearchReducer };
=======
import { carsdata } from "../../data/CarData";

const AllCarsData = {
  cars: [],
  currency: "$",
};
carsdata.map((cardata) => {
  return cardata.cars.map((car) => {
    return AllCarsData.cars.push(car);
  });
});

const CarSearchReducer = (state = AllCarsData, action) => {
  switch (action.type) {
    case "Ascending_Price_Sort":
      const newsorta = state.cars.sort((a, b) => {
        return a.price[0].dolor - b.price[0].dolor;
      });
      return {
        ...state,
        cars: newsorta,
      };
    case "Decending_Price_Sort":
      const newsortd = state.cars
        .sort((a, b) => {
          return a.price[0].dolor - b.price[0].dolor;
        })
        .reverse();
      return { ...state, cars: newsortd };
    case "Ascending_Name_Sort":
      const newnamesorta = state.cars.sort((a, b) => {
        return a.model.localeCompare(b.model);
      });
      return {
        ...state,
        cars: newnamesorta,
      };
    case "Decending_Name_Sort":
      const newnamesortd = state.cars
        .sort((a, b) => {
          return a.model.localeCompare(b.model);
        })
        .reverse();
      return {
        ...state,
        cars: newnamesortd,
      };
    case "Ascending_Date_Sort":
      const newsortdateA = state.cars.sort((a, b) => {
        return a.released_date.split(" ")[2] - b.released_date.split(" ")[2];
      });
      return {
        ...state,
        cars: newsortdateA,
      };
    case "Decending_Date_Sort":
      const newsortdateD = state.cars
        .sort((a, b) => {
          return a.released_date.split(" ")[2] - b.released_date.split(" ")[2];
        })
        .reverse();
      return {
        ...state,
        cars: newsortdateD,
      };
    case "Dollor":
      const dolorsymbol = "$";
      return {
        ...state,
        currency: dolorsymbol,
      };
    case "Pond":
      const pondsymbol = "£";
      return {
        ...state,
        currency: pondsymbol,
      };
    case "Clear":
      return {
        cars: AllCarsData.cars,
        currency: "$",
      };
    case "SearchByName":
      const searchedName = state.cars.filter((car) =>
        car.model.toLowerCase().includes(action.payload)
      );

      return {
        ...state,
        cars: action.payload === "" ? AllCarsData.cars : searchedName,
      };
    default:
      return AllCarsData;
  }
};
export { AllCarsData, CarSearchReducer };
>>>>>>> c8a56cb8c6a7319fadd77e54b612cae83079c501
