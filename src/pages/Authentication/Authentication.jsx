import { React, useState } from "react";
import { Link } from "react-router-dom";

import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import Navigation from "../../components/Navigation/Navigation";

const Authentication = () => {
    const [moreInformationsLabel, toggleMoreInformationsLabel] = useState(false);
    const [visiblePassword, toggleVisiblePassword] = useState(false);

    const toggleClientPasswordInput = () => {
        toggleVisiblePassword(!visiblePassword);
    };

    const toggleClientMoreInformation = () => {
        toggleMoreInformationsLabel(!moreInformationsLabel);
    };

    return (
        <div className="AuthenticationApp w-full flex flex-col justify-center items-center">
            <Navigation />

            <div className="clientAuthenticationApp container mt-40 w-[95%] md:w-1/3 lg:w-1/4">
                <div className="clientEmailAddress p-2 border-[1px] border-blue-500 rounded flex flex-col">
                    <div className="clientEmailAddressLabel">
                        <span className="text-gray-400">Email Address</span>
                    </div>
                    <div className="clientEmaiAddressInput mt-1">
                        <input 
                            className="bg-transparent py-1 w-full text-white text-lg focus:outline-none"
                            type="text" 
                            name="clientEmailAddress" 
                            placeholder="example@estrela-pneus.com"
                            id="clientEmailAddress" />
                    </div>
                </div>

                <div className="clientPassword mt-5 p-2 border-[1px] border-blue-500 rounded flex flex-col">
                    <div className="clientPasswordLabel">
                        <span className="text-gray-400">Password</span>
                    </div>
                    <div className="clientPassword mt-1 flex justify-between">
                        <div className="clientPasswordInput w-full">
                            <input 
                                className="bg-transparent py-1 w-full text-white text-lg focus:outline-none"
                                type={visiblePassword ? 'text' : 'password'} 
                                name="clientPassword" 
                                placeholder={visiblePassword ? 'password' : '********'}
                                id="clientPassword" />
                        </div>
                        <div className="clientPasswordInputType rounded ml-2 hover:bg-blue-500 transition-all duration-200">
                            <button 
                                onClick={toggleClientPasswordInput}
                                className="text-white border-[1px] border-blue-400 p-2 rounded"
                                type="submit">
                                {!visiblePassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="clientForgotPassword w-full mt-2 border-b-[1px]">
                    <button 
                        onClick={toggleClientMoreInformation}
                        className="flex w-full items-center text-gray-300 border-gray-400"
                        type="submit">
                        
                        <span className="clientMoreInformationsLabel">mais informações</span>
                        <span className="clientMoreInformationsIcon ml-2">{!moreInformationsLabel ? <BsChevronDown /> : <BsChevronUp />}</span>
                    </button>
                    {
                        moreInformationsLabel && 
                        <div className="authMoreInformationLabel py-2 text-gray-400 flex flex-col text-sm transition">
                            <Link
                                to={'/'}
                            >
                                Esqueceu-se da password
                            </Link>
                            <Link
                                to={'/'}
                            >
                                Outros problema de autenticação
                            </Link>
                        </div>
                    }
                </div>

                <div className="clientLogInButton cursor-pointer w-full rounded p-2 border-[1px] border-blue-400 mt-5 hover:bg-blue-500 transition-all duration-200">
                    <button 
                        className="transparent uppercase w-full text-white flex items-center justify-center focus:outline-none"
                        type="submit">
                        <span className="authenticationButtonContent">login</span>
                        <span className="authenticationButtonIcon ml-2"><FiLogIn /></span>
                    </button>
                </div>
            </div>

        </div>
    )
};
export default Authentication;