
import { AiOutlineUnorderedList } from "react-icons/ai";
import { GiCarWheel } from "react-icons/gi"
import { BsCarFront } from 'react-icons/bs'

import './tireSearchStyle.css';
import { useState } from "react";
import TireConfig from "./configPage/tireConfig";

const TireSearch = () => {
    const [showModalByType, setShowModalByType] = useState(null);

    const toggleClientModal = (toggle = null) => {
        setShowModalByType(toggle);
    };

    const displayClientModal = (type = 'dimension') => {
        setShowModalByType(type);
    };

    return (
        <>
            <div className="tireSearchContainer mt-10 flex flex-col items-center justify-center w-[95%] h-[15rem] md:w-2/3">
                <div className="tireSearchTitle w-full text-white text-2xl uppercase border-b-2 border-gray-500">
                    <h3>Configurar os pneus</h3>
                </div>

                <div className="tireSearchConfig mt-3 w-full h-full flex flex-col justify-center items-center md:flex-row md:justify-evenly">
                    <button 
                        onClick={() => displayClientModal('dimension')}
                        className="tireSearchDimension w-[95%] m-1 flex justify-between items-center bg-white p-2 rounded md:w-2/5"
                        href="/">
                        
                        <div className="tireSearchDimensionIcon w-10 h-10 flex justify-center items-center rounded-full border-[1px] border-gray-400 text-3xl">
                            <GiCarWheel />
                        </div>

                        <div className="tireSearchDimensionContent">
                            <p className="tireSearchDimensionTitle font-semibold text-orange-400 text-lg">Por dimensão do pneu</p>
                            <p className="tireSearchDimensionTitleContent text-gray-500 text-[12px]">* Encontra-se na lateral do seu pneu</p>
                        </div>

                        <div className="tireSearchDimensionPageIcon flex item-center">
                            <AiOutlineUnorderedList />
                        </div>

                    </button>

                    <button 
                        onClick={() => displayClientModal('model')}
                        className="tireSearchVehicle w-[95%] m-1 flex justify-between items-center bg-white p-2 rounded md:w-2/5"
                        href="/">
                        
                        <div className="tireSearchVehicleIcon w-10 h-10 flex justify-center items-center rounded-full border-[1px] border-gray-400 text-3xl">
                            <BsCarFront />
                        </div>

                        <div className="tireSearchVehicleContent">
                            <p className="tireSearchVehicleTitle font-semibold text-orange-400 text-lg">Por marca e modelo</p>
                            <p className="tireSearchVehicleTitleContent text-gray-500 text-[12px]">* Marca, modelo, ano, versão...</p>
                        </div>

                        <div className="tireSearchVehiclePageIcon flex item-center">
                            <AiOutlineUnorderedList />
                        </div>

                    </button>
                </div>

                {
                    showModalByType !== null && <TireConfig onClose={toggleClientModal} modal={showModalByType}/>
                }

            </div>
        </>
    )
};
export default TireSearch;