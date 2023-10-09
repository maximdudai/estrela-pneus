import { useState } from "react";
import carData from "../../../../assets/cars/car-models.json";

const TireVehicleModel = () => {
  const [selecteedVehicle, setSelecteedVehicle] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const handleSelectVehicle = (item) => {
    const vehicle = item.target.value;

    setSelecteedVehicle(vehicle);
  };

  return (
    <>
      <div className="tireVehicleConfig w-full flex flex-col items-center mt-10">
        <p className="p-2 text-gray-400">Selecione o seu modelo </p>
        <select onClick={handleSelectVehicle} className="w-1/2 text-3xl border-2 p-2">
          {carData.map((car, index) => {
            return (
              <option value={car.brand} key={index}>
                {car.brand}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
export default TireVehicleModel;
