import { React, createContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";

// import instance from "../../api/axios";
// import axios from "../../api/axios";
import axios from "../../api/axios";

import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUserAdd} from 'react-icons/ai'

import Navigation from "../../components/Navigation/Navigation";

import './Authentication.css';

export const AuthContext = createContext();

const Authentication = () => {
    const [authStep, setAuthStep] = useState('login');

    const [moreInformationsLabel, toggleMoreInformationsLabel] = useState(false);
    const [visiblePassword, toggleVisiblePassword] = useState(false);

    const [clientEmail, setClientEmail] = useState('');
    const [clientEmailError, setClientEmailError] = useState('');

    const [clientFullName, setClientFullName] = useState('');
    const [clientPassword, setClientPassword] = useState('');

    const [clientToken, setClientToken] = useState(null);
    const [redirectUser, setRedirectUser] = useState(false);

    const toggleClientAuthStep = () => {
        setAuthStep(authStep === 'login' ? 'register' : 'login');
        if(clientEmailError)
            setClientEmailError('');
    };
    const toggleClientPasswordInput = () => {
        toggleVisiblePassword(!visiblePassword);
    };
    const toggleClientMoreInformation = () => {
        toggleMoreInformationsLabel(!moreInformationsLabel);
    };

    // AUTHENTICATION FORM
    const onClientTypeEmail = (clientMail) => {
        setClientEmail(clientMail.target.value);
    };

    const onClientTypeFullName = (fName) => {
        setClientFullName(fName.target.value);
    };

    const onClientTypePassword = (clientPass) => {
        setClientPassword(clientPass.target.value);
    };

    // AUTHENTICATION SEND INFORMATIONS
    async function onClientClickAuthentication() {
        try {
            
            const authData = await axios.post('/Authentication', {
                email: clientEmail,
                ...(authStep === 'login' ? {} : { name: clientFullName }),
                password: clientPassword,
                authType: authStep
            })
            const authDataToken = authData.data?.token;

            setClientToken(authDataToken);
            sessionStorage.setItem("authToken", authDataToken);
            
            setRedirectUser(true);

        } catch (error) {
            setClientEmailError(error.response?.data?.message);
        }

    };

    return (
        <>
            {redirectUser && <Navigate replace to="/" />}
            <div className="AuthenticationApp w-full flex flex-col justify-center items-center">
                <Navigation />

                <div className="clientAuthenticationApp container flex flex-col items-center mt-36 w-[95%] md:w-1/3 lg:w-1/4">
                    
                    <div className="clientCreateAccount mb-12 px-4 w-full border-l-[1px] border-blue-500">
                        <div className="clientCreateAccountTitle text-gray-400">{authStep === 'login' ? 'Ainda não é nosso cliente?' : 'Já e nosso cliente?'}</div>
                        <button 
                            onClick={toggleClientAuthStep}
                            className="clientCreateAccountButton text-white">
                            {authStep === 'login' ? 'Criar Conta' : 'Autentificação'}
                        </button>
                    </div>
                    <div className="clientEmailAddress w-full h-15 p-2 border-[1px] border-blue-500 rounded flex flex-col">
                        <div className="clientEmailAddressLabel">
                            <span className="text-gray-400 relative bottom-3 bg-theme-background p-2">E-mail</span>
                        </div>
                        <div className="clientEmaiAddressInput">
                            <input 
                                onChange={onClientTypeEmail}
                                className="bg-transparent py-1.5 w-full text-white text-lg focus:outline-none"
                                type="email"
                                name="clientEmailAddress" 
                                placeholder="exemple@estrela-pneus.com"
                                id="clientEmailAddress" />
                        </div>
                    </div>
                    <span className="w-full text-red-400 text-left px-1 mt-[2px]">{clientEmailError}</span>

                    {
                        authStep === 'register' && 
                        <div className="clientFullName w-full mt-5 h-13 p-1 px-2 border-[1px] border-blue-500 rounded flex flex-col">
                            <div className="clientFullNameLabel relative bottom-4">
                                <span className="text-gray-400 bg-theme-background px-2">Nome próprio</span>
                            </div>
                            <div className="clientFullNameInput">
                                <input 
                                    onChange={onClientTypeFullName}
                                    className="bg-transparent w-full text-white text-lg focus:outline-none"
                                    type="text" 
                                    name="clientFullName" 
                                    placeholder="Diogo Inácio"
                                    id="clientFullName" />
                            </div>
                        </div>
                    }

                    <div className="clientPassword w-full mt-5 p-2 border-[1px] border-blue-500 rounded flex flex-col">
                        
                        <div className="clientPasswordLabel w-[7.5rem] text-center relative bottom-4 bg-theme-background p-2">
                            <span className="text-gray-400">Palavra-passe</span>
                        </div>
                        <div className="clientPassword flex justify-between">
                            <div className="clientPasswordInput w-full">
                                <input 
                                    onChange={onClientTypePassword}
                                    className="bg-transparent w-full text-white text-lg focus:outline-none"
                                    type={visiblePassword ? 'text' : 'password'} 
                                    name="clientPassword" 
                                    placeholder={visiblePassword ? 'password' : '********'}
                                    id="clientPassword" />
                            </div>
                            <div className="clientPasswordInputType rounded ml-2 hover:bg-blue-500 transition-all duration-200">
                                <button 
                                    onClick={toggleClientPasswordInput}
                                    className="text-white border-[1px] border-blue-400 p-1 rounded"
                                    type="submit">
                                    {!visiblePassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="clientForgotPassword w-full mt-2 border-b-[1px] border-gray-600">
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
                            type="submit"
                            className="transparent uppercase w-full text-white flex items-center justify-center focus:outline-none"
                            onClick={onClientClickAuthentication}
                        >
                            {authStep === 'login' ? (
                                <div className="authButtonLogIn flex items-center">
                                    <span>Login</span>
                                    <span className="authenticationButtonIcon ml-2"><FiLogIn /></span>
                                </div>
                            ) : (
                                <div className="authButtonCreateAccount flex items-center">
                                    <span>Criar Conta</span>
                                    <span className="authenticationButtonIcon ml-2"><AiOutlineUserAdd /></span>
                                </div>
                            )}
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
};
export default Authentication;