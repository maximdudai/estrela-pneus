import { useEffect, useState } from "react";
import carData from "../../../../assets/cars/car-list.json";

const TireVehicleModel = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const handleSelectBrand = (item) => {
    const vehicle = item.target.value;

    setSelectedVehicle(vehicle);
  };

  const handleSelectModel = (item) => {
    const vehicle = item.target.value;

    setSelectedModel(vehicle);
  };

  return (
    <>
      <div className="tireVehicleConfig w-full flex flex-col items-center mt-10">
        <div className="tireVehicleSelectBrand">
          <p className="p-2 text-gray-400">Selecione o seu modelo</p>
          <select
            onChange={handleSelectBrand}
            className="w-96 text-3xl border-2 p-2"
          >
            {carData.map((car, index) => {
              return (
                <option value={car.brand} key={index}>
                  {car.brand}
                </option>
              );
            })}
          </select>
        </div>
        {selectedVehicle !== null && (
          <div className="tireVehicleSelectModel">
            <p className="p-2 text-gray-400">Selecione o seu modelo</p>
            <select
              onChange={handleSelectModel}
              className="w-96 text-3xl border-2 p-2"
            >
              {carData.map((car, index) => {
                if (car.brand === selectedVehicle) {
                  return car.models.map((model, index) => {
                    return (
                      <option  value={model} key={index}>
                        {model}
                      </option>
                    );
                  });
                }
              })}
            </select>
          </div>
        )}
        <div className="tireVehicleSelectModel"></div>
      </div>
    </>
  );
};
export default TireVehicleModel;
