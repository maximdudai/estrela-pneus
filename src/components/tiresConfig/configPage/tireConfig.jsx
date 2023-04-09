import { useState, useRef } from "react";
import { GrClose } from "react-icons/gr";
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

import './tireConfigStyle.css';

import TireDimension from './configContent/tireDimension';
import TireVehicleModel from './configContent/tireVehicle';

import seasonSummer from './configAssets/sunny.png';
import seasonWinter from './configAssets/snowflake.png'
import seasonUniversal from './configAssets/season.png'

const TireConfig = ({ onClose, modal }) => {

    const tireConfigStep = useRef(1);
    const [selectedSeason, setSelectedSeason] = useState('summer');
    const [showSeasonGuide, setShowSeasonGuide] = useState(false);

    const updateModalSeason = (season = 'summer') => {
        setSelectedSeason(season);
    };

    const toggleTireSeasonGuid = () => {
        setShowSeasonGuide(!showSeasonGuide);
    };

    const tireSummerImage = () => {
        return <img 
            src={seasonSummer} 
            alt="summer tire"
        />
    };

    const tireWinterSeason = () => {
        return <img 
            src={seasonWinter} 
            alt="winter tire"
        />
    };

    const tireUniversalImage = () => {
        return <img 
            src={seasonUniversal} 
            alt="universal tire"
        />
    };

    return (
        <>
            {   
                modal === 'dimension' &&
                <div className="tireConfigModal bg-white p-2 w-full h-full absolute top-0 right-0 md:w-1/3">
                    
                    <div className="configModalCloseButton py-2">
                        <button 
                            onClick={onClose}
                            className="closeConfigButton w-full text-2xl text-black">
                            <GrClose />
                        </button>
                    </div>

                    <div className="configModalContent mt-10">

                        <div className="configModalTitle border-b-[1px] border-gray-400 font-semibold uppercase text-black text-sm md:text-lg">
                            <h4>Selecçione os pneus para o seu veículo!</h4>
                        </div>
                    </div>
                {
                    tireConfigStep.current === 1 &&
                    <div className="tireConfigSeason flex flex-col justify-center items-center p-2 mt-10 w-full h-auto">
                        
                        <div className="tireConfigCategory flex flex-col items-center">
                            
                            <div className="tireConfigCategorySeason flex justify-evenly w-full">
                                <button 
                                    onClick={() => updateModalSeason('summer')}
                                    className={`tireConfigSeasonSummer m-2 border-2 p-2 rounded w-[9rem] h-auto flex flex-col justify-center items-center hover:border-orange-400 ${selectedSeason === 'summer' ? 'border-orange-400' : ''}`}>
                                    <div className="tireConfigSummerImage">
                                        {
                                            tireSummerImage()
                                        }
                                    </div>
                                    <div className="tireConfigSummerContent mt-3 text-[12px] uppercase">
                                        <p className="font-semibold">verão</p>
                                    </div>
                                </button>

                                <button 
                                    onClick={() => updateModalSeason('winter')}
                                    className={`tireConfigSeasonSummer m-2 border-2 p-2 rounded w-[9rem] h-auto flex flex-col justify-center items-center hover:border-orange-400 ${selectedSeason === 'winter' ? 'border-orange-400' : ''}`}>
                                    <div className="tireConfigSummerImage">
                                        {
                                            tireWinterSeason()
                                        }
                                    </div>
                                    <div className="tireConfigSummerContent mt-3 text-[12px] uppercase">
                                        <p className="font-semibold">inverno</p>
                                    </div>
                                </button>
                            </div>

                            <div className="tireCategorySeasonUniveral">
                                <button 
                                    onClick={() => updateModalSeason('universal')}
                                    className={`tireConfigSeasonSummer m-2 border-2 p-2 rounded w-[9rem] h-auto flex flex-col justify-center items-center hover:border-orange-400 ${selectedSeason === 'universal' ? 'border-orange-400' : ''}`}>
                                    <div className="tireConfigSummerImage">
                                        {
                                            tireUniversalImage()
                                        }
                                    </div>
                                    <div className="tireConfigSummerContent mt-3 text-[12px] uppercase">
                                        <p className="font-semibold">Universal</p>
                                    </div>
                                </button>
                            </div>

                        </div>

                        <div className="displayClientSeasonGuide flex flex-col items-center mt-10 p-2 w-full h-auto border-b-[1px] border-gray-400 md:w-[90%]">
                            <div className="toggleClientSeasonButton">
                                <button 
                                    onClick={toggleTireSeasonGuid}
                                    className="flex items-center text-sm"
                                    type="submit">
                                    <span className="seasonGuideContent">{showSeasonGuide ? 'Esconder' : 'Mostrar'} o guia para melhor escolha</span>
                                    <span className="seasonGuideIcon px-2">{!showSeasonGuide ? <BsChevronDown /> : <BsChevronUp />}</span>
                                </button>
                            </div>

                            {
                                showSeasonGuide &&
                                <div className="tireSeasonGuideContent">
                                    <div className="tireSeasonSummer mt-5 flex items-start">
                                        <div className="tireSeasonSummerIcon w-26 md:w-24">
                                        {
                                            tireSummerImage()
                                        }
                                        </div>
                                        <div className="tireSeasonSummerContent px-5">
                                            <div className="summerContentTitle flex flex-col">
                                                <span className="font-semibold">Abril &mdash; Setembro</span>
                                                <span className="text-gray-400 text-[12px]">04 &mdash; 09</span>
                                            </div>
                                            <div className="summerContentDescription">
                                                <p>
                                                    Este pneu padrão permite uma condução segura em todas as condições climáticas temperadas, mas é importante lembrar que pneus de verão podem perder desempenho em temperaturas abaixo de 7°C.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tireSeasonWinter mt-5 flex items-start">
                                        <div className="tireSeasonWinterIcon w-26 md:w-24">
                                        {
                                            tireWinterSeason()
                                        }
                                        </div>
                                        <div className="tireSeasonWinterContent px-5">
                                            <div className="winterContentTitle flex flex-col">
                                                <span className="font-semibold">Outubro &mdash; Março</span>
                                                <span className="text-gray-400 text-[12px]">10 &mdash; 03</span>
                                            </div>
                                            <div className="WinterContentDescription">
                                                <p>
                                                Se a temperatura média de inverno na sua região é inferior a 7°C, é essencial utilizar pneus de inverno para garantir uma condução segura em estradas escorregadias, molhadas, cobertas de neve ou gelo.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tireSeasonSummer mt-5 flex items-start">
                                        <div className="tireSeasonSummerIcon w-26 md:w-24">
                                        {
                                            tireUniversalImage()
                                        }
                                        </div>
                                        <div className="tireSeasonSummerContent px-5">
                                            <div className="summerContentTitle flex flex-col">
                                                <span className="font-semibold">Abril &mdash; Setembro</span>
                                            </div>
                                            <div className="summerContentDescription">
                                                <p>
                                                    Em áreas onde as temperaturas de inverno raramente caem abaixo de 7°C, os pneus 4 estações ainda são menos eficientes do que os pneus de inverno em condições de inverno, ou os pneus de verão em condições de verão.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                }
                </div>
            }
        </>
    )
};
export default TireConfig;