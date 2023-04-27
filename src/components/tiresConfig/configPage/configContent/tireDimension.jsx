import { useRef, useState } from "react"

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

import tireImage from '../../assets/pneu-dimensao.png';
import { BsSearch } from "react-icons/bs";

const TireDimension = () => {

    const [tireConfig, setTireConfig] = useState({
        tireWidth: 205,
        tireHeigth: 55,
        tireDiameter: 15,
        tireIndice: 88
    });
    const [tireDimensionConfigStep, setTireDimensionConfigStep] = useState(1);

    const [configLetter, setConfigLetter] = useState('A');

    const updateConfigLetter = (letter = 'A') => {
        setConfigLetter(letter);
    };

    const onClientConfigWidth = (el) => {
        setTireDimensionConfigStep(tireDimensionConfigStep+1);
    };
    const onClientConfigHeigth = (el) => {

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
                        <h1 className="text-4xl font-bold text-blue-700">{configLetter}</h1>
                        <span className="text-gray-500 text-[12px]">Largura do Pneu</span>
                    </div>

                    {
                        tireDimensionConfigStep == 1 &&
                        <div className="tireConfigWidth w-full">
                            <ul className="list-none w-auto h-auto flex flex-wrap justify-center">
                                {
                                    tireConfigSpecification.altura.map((tireWidth, tireIndex) => {
                                        return <li 
                                            className="text-black text-center rounded text-lg m-2 p-3 w-[7rem] bg-gray-200 border-[1px] border-gray-300 focus:outline-none hover:bg-slate-300 cursor-pointer"
                                            onClick={onClientConfigWidth}
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
                                            onClick={onClientConfigHeigth}
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
                        <div className="tireConfigDiameter"></div>
                    }

                    {
                        tireDimensionConfigStep == 4 &&
                        <div className="tireConfigIndice"></div>
                    }
                </div>

                <div className="tireConfigAvailablePages w-full flex justify-center mt-10">
                    <button onClick={() => setTireDimensionConfigStep(1)} className={`tireConfigPage mx-1 relative w-[7px] h-[7px] rounded-full bg-gray-300 ${tireDimensionConfigStep == 1 ? 'bg-gray-500' : ''}`}></button>
                    <button onClick={() => setTireDimensionConfigStep(2)} className={`tireConfigPage mx-1 relative w-[7px] h-[7px] rounded-full bg-gray-300 ${tireDimensionConfigStep == 2 ? 'bg-gray-500' : ''}`}></button>
                    <button onClick={() => setTireDimensionConfigStep(3)} className={`tireConfigPage mx-1 relative w-[7px] h-[7px] rounded-full bg-gray-300 ${tireDimensionConfigStep == 3 ? 'bg-gray-500' : ''}`}></button>
                    <button onClick={() => setTireDimensionConfigStep(4)} className={`tireConfigPage mx-1 relative w-[7px] h-[7px] rounded-full bg-gray-300 ${tireDimensionConfigStep == 4 ? 'bg-gray-500' : ''}`}></button>
                </div>

                <div className="tireConfigSearch w-full mt-10">
                    <button 
                        className="w-full flex justify-center items-center text-center rounded p-3 bg-blue-300 focus:outline-none hover:bg-blue-400">
                        <span className="btnContent uppercase pr-2 text-lg">search</span>
                        <span className="btnIcon"><BsSearch /></span>
                    </button>
                </div>


            </div>
        </>
    )
};
export default TireDimension;