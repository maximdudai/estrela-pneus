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
                    <div className="tireConfigSeason p-2 mt-10 w-full h-auto">
                        
                        <div className="tireConfigCategory flex flex-wrap justify-evenly items-center">
                            <button 
                                onClick={() => updateModalSeason('summer')}
                                className={`tireConfigSeasonSummer m-2 border-2 p-2 rounded w-2/6 h-auto flex flex-col justify-center items-center hover:border-orange-400 ${selectedSeason === 'summer' ? 'border-orange-400' : ''}`}>
                                <div className="tireConfigSummerImage">
                                    <img 
                                        src={seasonSummer} 
                                        alt="summer tire"
                                    />
                                </div>
                                <div className="tireConfigSummerContent mt-3 text-[12px] uppercase">
                                    <p className="font-semibold">verão</p>
                                </div>
                            </button>

                            <button 
                                onClick={() => updateModalSeason('winter')}
                                className={`tireConfigSeasonSummer m-2 border-2 p-2 rounded w-2/6 h-auto flex flex-col justify-center items-center hover:border-orange-400 ${selectedSeason === 'winter' ? 'border-orange-400' : ''}`}>
                                <div className="tireConfigSummerImage">
                                    <img 
                                        src={seasonWinter} 
                                        alt="summer tire"
                                    />
                                </div>
                                <div className="tireConfigSummerContent mt-3 text-[12px] uppercase">
                                    <p className="font-semibold">inverno</p>
                                </div>
                            </button>

                            <button 
                                onClick={() => updateModalSeason('universal')}
                                className={`tireConfigSeasonSummer m-2 border-2 p-2 rounded w-2/6 h-auto flex flex-col justify-center items-center hover:border-orange-400 ${selectedSeason === 'universal' ? 'border-orange-400' : ''}`}>
                                <div className="tireConfigSummerImage">
                                    <img 
                                        src={seasonUniversal} 
                                        alt="summer tire"
                                    />
                                </div>
                                <div className="tireConfigSummerContent mt-3 text-[12px] uppercase">
                                    <p className="font-semibold">Universal</p>
                                </div>
                            </button>
                        </div>

                        <div className="displayClientSeasonGuide mt-10 p-2 w-full h-auto">
                            <div className="toggleClientSeasonButton">
                                <button 
                                    onClick={toggleTireSeasonGuid}
                                    className="flex items-center text-sm"
                                    type="submit">
                                    <span className="seasonGuideContent">{showSeasonGuide ? 'Esconder' : 'Mostrar'} o guia para melhor escolha</span>
                                    <span className="seasonGuideIcon">{!showSeasonGuide ? <BsChevronDown /> : <BsChevronUp />}</span>
                                </button>
                            </div>

                            {
                                showSeasonGuide &&
                                <div className="tireSeasonGuideContent">
                                    asd
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