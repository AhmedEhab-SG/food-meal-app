import MealsSummary from "./MealsSummery";
import AvailableMeals from "./AvaliableMeals";
import { Fragment } from "react";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
