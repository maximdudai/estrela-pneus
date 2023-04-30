import { useState, useEffect, useRef } from "react";
import { GrClose } from "react-icons/gr";
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

import './tireConfigStyle.css';

import HelpGuide from "../../Modals/HelpGuide/HelpGuide";

import TireDimension from './configContent/tireDimension';
import TireVehicleModel from './configContent/tireVehicle';


import seasonSummer from './configAssets/sunny.png';
import seasonWinter from './configAssets/snowflake.png'
import seasonUniversal from './configAssets/season.png'

const TireConfig = ({ onClose, modal }) => {
    const searchPageContentArea = useRef(null);
    const tireConfigStep = useRef(1);
    const [selectedSeason, setSelectedSeason] = useState(null);
    const [showSeasonGuide, setShowSeasonGuide] = useState(false);

    const onClientCloseModal = () => {
        if(showSeasonGuide) toggleTireSeasonGuid();
        tireConfigStep.current = 1;
        setSelectedSeason(null);

        onClose();
    };

    const onClientUpdateTireConfig = () => {
        tireConfigStep.current ++;
    };

    const updateModalSeason = (season) => {
        setSelectedSeason(season);
        
        onClientUpdateTireConfig();
    };

    const toggleTireSeasonGuid = () => {
        setShowSeasonGuide(!showSeasonGuide);
    };

    useEffect(() => {
        document.addEventListener('mousedown', onClientClickOutside);
    
        return () => {
            document.removeEventListener('mousedown', onClientClickOutside);
        };
    }, []);

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

    const onClientClickOutside = (e) => {
        if(searchPageContentArea.current && !searchPageContentArea.current.contains(e.target)) {
            onClientCloseModal();
        }
    };

    return (
        <>
            {   
                modal === 'dimension' &&
                <div 
                    ref={searchPageContentArea}
                    className="tireConfigModal bg-white p-2 w-full h-full absolute top-0 right-0 md:w-1/3">
                    
                    <div className="configModalCloseButton py-2">
                        <button 
                            onClick={onClientCloseModal}
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
                                <div className="tireSeasonContent mt-5">

                                    <HelpGuide 
                                        img={seasonSummer}
                                        title={`Abril \u2014 Setembro`}
                                        subTitle={'04 \u2014 09'}
                                        content={'Este pneu padrão permite uma condução segura em todas as condições climáticas temperadas, mas é importante lembrar que pneus de verão podem perder desempenho em temperaturas abaixo de 7°C.'}
                                        />

                                    <HelpGuide 
                                        className={'mt-5'}
                                        img={seasonWinter}
                                        title={`Outubro \u2014 Março`}
                                        subTitle={'10 \u2014 03'}
                                        content={'Se a temperatura média de inverno na sua região é inferior a 7°C, é essencial utilizar pneus de inverno para garantir uma condução segura em estradas escorregadias, molhadas, cobertas de neve ou gelo.'}
                                        />

                                    <HelpGuide 
                                        className={'mt-5'}
                                        img={seasonUniversal}
                                        title={`Todas as estações`}
                                        content={'Em áreas onde as temperaturas de inverno raramente caem abaixo de 7°C, os pneus 4 estações ainda são menos eficientes do que os pneus de inverno em condições de inverno, ou os pneus de verão em condições de verão.'}
                                        />

                                </div>
                            }
                        </div>

                    </div>
                }
                {
                    tireConfigStep.current == 2 &&
                    <TireDimension />
                }
                </div>
            }
        </>
    )
};
export default TireConfig;