import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CarModel from "./CarDetail";
import { clearModels } from "../features/cars/carSlice";

const Cars = () => {
  const { carModels, totalValue } = useSelector((store) => store.cars);
  const dispatch = useDispatch();

  return (
    <section className='block'>
      <header>
        <h2 className='text-center font-extrabold text-2xl p-10'>
          Available Models
        </h2>
      </header>

      <div>
        {carModels.map((car) => {
          return <CarModel key={car.id} {...car} />;
        })}
      </div>
      <footer className='text-center font-extrabold text-xl p-10'>
        <h4>
          totalValue <span>${totalValue.toFixed(0)}</span>{" "}
        </h4>
        <button
          className='rounded-lg border-2 border-orange-800  text-xl  font-normal w-15 mt-5 p-4'
          onClick={() => dispatch(clearModels())}>
          Clear Warehose
        </button>
      </footer>
    </section>
  );
};

export default Cars;
