import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import Cars from "./components/Cars";
import { calculateTotals } from "./features/cars/carSlice";

function App() {
  const { carModels } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [carModels]);
  return (
    <>
      <Navbar />
      <Cars />
    </>
  );
}

export default App;
