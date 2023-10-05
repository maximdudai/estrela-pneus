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
    ],
    indiceSpeed: {
        T: '190',
        H: '210',
        V: '240',
        Z: '> 240',
        R: '> 240',
        W: '270',
        Y: '300',
    }
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
import { HelpGuide } from "../../../Modals/HelpGuide/HelpGuide";

import tireIndiceFull from '../configAssets/car-wheel.png';
import tireIndiceEmpty from '../configAssets/flat-tire.png';

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

    const indiceSpeedKeys = Object.keys(tireConfigSpecification.indiceSpeed);

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
                            <div className="tireConfigIndiceAvailableList w-auto">
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

                            <div className="tireConfigIndiceHelpGuide p-2">
                                <div className="tireConfigIndiceGuid">
                                    <HelpGuide 
                                        className={'text-sm'}
                                        img={tireIndiceFull}
                                        title={'Índice de carga'}
                                        content={'Quanto mais elevado o veículo, maior é a carga máxima suportada. É obrigatória a utilização de pneus cujo índice seja igual ou superior às recomendações presentes no livro de manutenção do veículo.'}
                                    />

                                    <HelpGuide 
                                        className={'mt-5 text-sm'}
                                        img={tireIndiceEmpty}
                                        title={'Riscos de um índice de carga incorreto'}
                                        content={'Transportar cargas pesadas aumenta o risco de deformação e estouro do pneu, por isso é essencial seguir as recomendações de carga e pressão dos pneus para garantir a segurança no trânsito e evitar penalidades.'}
                                    />
                                </div>
                            </div>


                        </div>
                    }

                    {
                        tireDimensionConfigStep == 5 &&
                        <div className="tireConfigIndiceSpeed">
                            <div className="tireConfigSpeed">
                                <ul className="list-none w-auto h-auto flex flex-wrap justify-center">
                                    {
                                        indiceSpeedKeys.map((speedKey) => {
                                            return <li 
                                                className="text-black text-center rounded text-sm m-2 p-3 w-min-[7rem] bg-gray-200 border-[1px] border-gray-300 focus:outline-none hover:bg-slate-300 cursor-pointer"
                                                onClick={() => onClientConfigTire('diameter', tireDiameter)}
                                                key={speedKey}
                                                >
                                                {speedKey}
                                                {/* - {speedKey}: {tireConfigSpecification.indiceSpeed[speedKey]} km/h */}
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="tireConfigSpeedGuide">
                                <HelpGuide 
                                    className={'mt-5 text-sm'}
                                    img={tireIndiceFull}
                                    title={'Riscos de um índice de carga incorreto'}
                                    content={
                                        <ul className="grid grid-cols-3">
                                            {indiceSpeedKeys.map((key) => (
                                                <li 
                                                    className="py-1"
                                                    key={key}>
                                                {key}: {tireConfigSpecification.indiceSpeed[key]}
                                                </li>
                                            ))}
                                        </ul>

                                    }
                                />
                                <HelpGuide 
                                    className={'mt-5 text-sm'}
                                    img={tireIndiceEmpty}
                                    title={'Riscos'}
                                    content={'Se você utilizar pneus de inverno ou 4 estações com a etiqueta 3PMSF, é permitida a redução do índice de velocidade em um nível (por exemplo: de V para H) sem comprometer a segurança. No entanto, utilizar pneus com índice de velocidade menor do que o recomendado pode causar perda de aderência, risco de superaquecimento e falha nos pneus, podendo até resultar na recusa do veículo pelas autoridades de trânsito durante as inspeções.'}
                                />
                            </div>
                        </div>
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