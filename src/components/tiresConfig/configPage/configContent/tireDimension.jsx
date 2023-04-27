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

const TireDimension = () => {

    const [tireConfig, setTireConfig] = useState({
        tireWidth: 205,
        tireHeigth: 55,
        tireDiameter: 15,
        tireIndice: 88
    });
    const tireDimensionConfig = useRef(1);

    const [configLetter, setConfigLetter] = useState('A');

    const onClientConfigWidth = (el) => {
        console.log(el.target.textContent);
    };


    const updateConfigLetter = (letter = 'A') => {
        setConfigLetter(letter);
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
                    tireDimensionConfig.current == 1 &&
                    <div className="tireConfigWidth w-full">
                        <ul className="list-none w-auto h-auto flex flex-wrap justify-center">
                            {
                                tireConfigSpecification.altura.map((tireWidth, tireIndex) => {
                                    return <li 
                                        className="text-black text-center rounded text-lg m-2 p-3 w-[7rem] bg-slate-400 border-[1px] border-gray-600 focus:outline-none hover:bg-slate-600 cursor-pointer"
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
                    tireDimensionConfig.current == 2 &&
                    <div className="tireConfigHeigth"></div>
                }

                {
                    tireDimensionConfig.current == 3 &&
                    <div className="tireConfigDiameter"></div>
                }

                {
                    tireDimensionConfig.current == 4 &&
                    <div className="tireConfigIndice"></div>
                }

                </div>

            </div>
        </>
    )
};
export default TireDimension;