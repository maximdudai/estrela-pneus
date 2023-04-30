import { useRef, useState } from "react"

import { BsSearch } from "react-icons/bs";
import { GrFormPrevious } from 'react-icons/gr'

const tireConfigSpecification = {
    largura: [
        205,225,195,185,31,33,115,125
    ],
    altura: [
        55,45,35,70,60,50,40,30
    ],
    diametro: [
        15,16,17,19
    ],
    indiceCarga: [
        88,92
    ]
}

let tireConfigLetter = [
    'A',
    'B',
    'C',
    'D',
    'E'
]
let tireConfigLetterColor = [
    'text-blue-400',
    'text-green-400',
    'text-red-400',
    'text-fuchsia-700', 
    'text-violet-600'
]
let tireConfigContent = [
    'Largura do Pneu',
    'Altura do Pneu',
    'Diâmetro da Jante',
    'Índice de Carga',
    'Índice de Velocidade Máxima'
]

import tireImage from '../../assets/pneu-dimensao.png';

const TireDimension = () => {

    const [tireConfig, setTireConfig] = useState({
        tireWidth: 205,
        tireHeigth: 55,
        tireDiameter: 15,
        tireIndice: 88
    });
    const [tireDimensionConfigStep, setTireDimensionConfigStep] = useState(1);


    const onClientConfigTire = (step, amount) => {
        switch(step) {
            case 'width':
            {
                setTireConfig((prevState) => ({
                    ...prevState,
                    tireWidth: amount
                }));

                break;
            }
            case 'heigth': {
                setTireConfig((prevState) => ({
                    ...prevState,
                    tireHeigth: amount
                }));
                break;
            }
            case 'diameter': {
                setTireConfig((prevState) => ({
                    ...prevState,
                    tireDiameter: amount
                }));
                break;
            }
            default:
                break;
        }
        setTireDimensionConfigStep(tireDimensionConfigStep+1);
    };

    const handleClientTirePage = (page) => {
        setTireDimensionConfigStep(page);
    };

    return (
        <>
            <div className="tireConfigDimension">
                <div className="tireConfigHelpImage mt-5">
                    <img 
                        src={tireImage}
                        alt="imagem-pneu" />
                </div>

                <div className="tireConfigSettings w-full mt-10">

                    <div className="tireConfigLetterTitle w-full text-center mb-5 leading-[10px]">
                        <h1 className={`text-4xl font-bold ${tireConfigLetterColor[tireDimensionConfigStep - 1]}`}>{tireConfigLetter[tireDimensionConfigStep - 1]}</h1>
                        <span className="text-gray-500 text-[12px]">{tireConfigContent[tireDimensionConfigStep - 1]}</span>
                    </div>

                    {
                        tireDimensionConfigStep == 1 &&
                        <div className="tireConfigWidth w-full">
                            <ul className="list-none w-auto h-auto flex flex-wrap justify-center">
                                {
                                    tireConfigSpecification.altura.map((tireWidth, tireIndex) => {
                                        return <li 
                                            className="text-black text-center rounded text-lg m-2 p-3 w-[7rem] bg-gray-200 border-[1px] border-gray-300 focus:outline-none hover:bg-slate-300 cursor-pointer"
                                            onClick={() => onClientConfigTire('width', tireWidth)}
                                            key={tireIndex}
                                            >
                                            {tireWidth}
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    }

                    {
                        tireDimensionConfigStep == 2 &&
                        <div className="tireConfigHeigth">
                            <ul className="list-none w-auto h-auto flex flex-wrap justify-center">
                                {
                                    tireConfigSpecification.largura.map((tireHeigth, tireIndex) => {
                                        return <li 
                                            className="text-black text-center rounded text-lg m-2 p-3 w-[7rem] bg-gray-200 border-[1px] border-gray-300 focus:outline-none hover:bg-slate-300 cursor-pointer"
                                            onClick={() => onClientConfigTire('heigth', tireHeigth)}
                                            key={tireIndex}
                                            >
                                            {tireHeigth}
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    }

                    {
                        tireDimensionConfigStep == 3 &&
                        <div className="tireConfigDiameter">
                            <ul className="list-none w-auto h-auto flex flex-wrap justify-center">
                                {
                                    tireConfigSpecification.diametro.map((tireDiameter, tireIndex) => {
                                        return <li 
                                            className="text-black text-center rounded text-lg m-2 p-3 w-[7rem] bg-gray-200 border-[1px] border-gray-300 focus:outline-none hover:bg-slate-300 cursor-pointer"
                                            onClick={() => onClientConfigTire('diameter', tireDiameter)}
                                            key={tireIndex}
                                            >
                                            {tireDiameter}
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    }

                    {
                        tireDimensionConfigStep == 4 &&
                        <div className="tireConfigIndice">
                            <ul className="list-none w-auto h-auto flex flex-wrap justify-center">
                                {
                                    tireConfigSpecification.indiceCarga.map((tireDiameter, tireIndex) => {
                                        return <li 
                                            className="text-black text-center rounded text-lg m-2 p-3 w-[7rem] bg-gray-200 border-[1px] border-gray-300 focus:outline-none hover:bg-slate-300 cursor-pointer"
                                            onClick={() => onClientConfigTire('diameter', tireDiameter)}
                                            key={tireIndex}
                                            >
                                            {tireDiameter}
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    }

                    {
                        tireDimensionConfigStep == 5 &&
                        <div className="tireConfigIndiceSpeed"></div>
                    }
                </div>

                <div className="tireConfigAvailablePages w-full flex justify-center items-center mt-10">
                    
                    <div className={`tireConfigPreviousPage flex items-center md:hidden ${tireDimensionConfigStep == 1 ? 'hidden' : ''} `}>
                        <button
                            className="text-lg absolute left-32"
                            onClick={() => handleClientTirePage((tireDimensionConfigStep - 1))}
                        >
                            <GrFormPrevious />
                        </button>
                    </div>

                    <div className="tireConfigPageButtons flex items-center">
                        <button onClick={() => handleClientTirePage(1)} className={`tireConfigPage mx-1 relative w-[7px] h-[7px] rounded-full bg-gray-300 ${tireDimensionConfigStep == 1 ? 'bg-gray-500' : ''}`}></button>
                        <button onClick={() => handleClientTirePage(2)} className={`tireConfigPage mx-1 relative w-[7px] h-[7px] rounded-full bg-gray-300 ${tireDimensionConfigStep == 2 ? 'bg-gray-500' : ''}`}></button>
                        <button onClick={() => handleClientTirePage(3)} className={`tireConfigPage mx-1 relative w-[7px] h-[7px] rounded-full bg-gray-300 ${tireDimensionConfigStep == 3 ? 'bg-gray-500' : ''}`}></button>
                        <button onClick={() => handleClientTirePage(4)} className={`tireConfigPage mx-1 relative w-[7px] h-[7px] rounded-full bg-gray-300 ${tireDimensionConfigStep == 4 ? 'bg-gray-500' : ''}`}></button>
                        <button onClick={() => handleClientTirePage(5)} className={`tireConfigPage mx-1 relative w-[7px] h-[7px] rounded-full bg-gray-300 ${tireDimensionConfigStep == 5 ? 'bg-gray-500' : ''}`}></button>
                    </div>

                </div>

                <div className="tireConfigSearch w-full mt-10">
                    <button 
                        className={`w-full flex justify-center items-center text-center rounded p-3 bg-blue-300 focus:outline-none ${tireDimensionConfigStep <= 4 ? 'cursor-not-allowed': 'hover:bg-blue-400'}`}
                        disabled={tireDimensionConfigStep <= 4}
                        >
                        <span className="btnContent uppercase pr-2 text-lg">search</span>
                        <span className="btnIcon"><BsSearch /></span>
                    </button>
                </div>


            </div>
        </>
    )
};
export default TireDimension;