import React, { useState, useEffect } from 'react';

import Logo from "./Logo/Logo";
import './NavStyle.css';

import { GiCarWheel } from 'react-icons/gi';
import { TbShoppingCartDiscount } from 'react-icons/tb'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faBars, 
    faXmark, 
    faUser,
    faSearch,
    faArrowRight,
    faHeart,
    faLocation,
    faCar,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import LineBreak from '../Modals/LineBreak/LineBreak';

export default function Navigation () {
    const [showMenu, setShowMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const displayMobileDeviceMenu = () => setShowMenu(!showMenu);

    return (
        <nav className="w-full flex justify-between h-auto p-2 bg-main-color border-b-2 border-b-orange-400 md:container-fluid md:justify-around">
            <div className="navigationLogo flex items-end">
                <Logo overScreen={showMenu}/>
                <div className={`estrelaPneusTitleContent`}>
                    <p className="text-[13px] px-1 text-orange-400 font-semibold">Sempre ao seu dispor!</p>
                    <h3 className="estrelaTitle text-sm w-44 text-center uppercase text-white bg-orange-500 relative right-[1.32rem]">estrela pneus</h3>
                </div>
            </div>

            {
                width < 768 ?
                <div className="navigationPagesContent flex items-center text-[1.25rem] text-orange-400">
                    <button
                        className='px-3 text-md'
                    >
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    <button
                        onClick={displayMobileDeviceMenu}
                        >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                :
                <div className='navigationBarLinksLarge'>
                    
                </div>
            } 

            {
                showMenu && 
                <div className={`mobileDeviceNavigationContent bg-main-color absolute left-0 top-0 right-0 bottom-0 z-10`}>
                    <div className="navigationBarContent text-white flex flex-col justify-center items-center">
                        
                        <div className="closeNavigationMenu w-full flex justify-between p-5 text-2xl">
                            
                            <div className="smallNavigationAccountMenu">
                                <button>
                                    <FontAwesomeIcon icon={faUser} />
                                </button>
                            </div>

                            { // is user loggedin
                                <div className="smallNavigationFavoriteItems">
                                    <button>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                </div>
                            }

                            <div className="smallNavigationCloseMenu">
                                <button
                                    className='text-md'
                                    onClick={displayMobileDeviceMenu}
                                >
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                        </div>

                        <div className="smallNavigationBarSearch flex justify-between items-center rounded bg-white w-[98%] p-2 text-white font-md">
                            <div className="smallNavigationBarButton p-1.5">
                                <button className="smallNavigationBarSearchButton focus:outline-none">
                                    <p className='text-gray-500 font-bold'>Pesquisar..</p>
                                </button>
                            </div>

                            <div className="smallNavigationBarSearchIcon text-gray-500">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>

                        <div className="smallNavigationBarLinks w-full flex flex-col items-center p-1">
                            <div className="smallNavigationShopLinks w-full">
                                <ul>
                                    <li className='smallNavigationListElement my-2 w-full rounded flex justify-between items-center  p-2 text-white text-md font-semibold'>
                                        <div className="smallNavigationPneuType flex items-center">
                                            <span className='smallNavigationPneuIcon text-3xl'>
                                                <GiCarWheel />
                                            </span>
                                            <span className='smallNavigationPneuName uppercase px-2'>
                                                Pneu Auto
                                            </span>
                                        </div>

                                        <div className="smallNavigationLinkIcon">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    </li>

                                    <li className='smallNavigationListElement my-2 w-full rounded flex justify-between items-center  p-2 text-white text-md font-semibold'>
                                        <div className="smallNavigationPneuType flex items-center">
                                            <span className='smallNavigationPneuIcon text-3xl'>
                                                <GiCarWheel />
                                            </span>
                                            <span className='smallNavigationPneuName uppercase px-2'>
                                                Pneu mota
                                            </span>
                                        </div>

                                        <div className="smallNavigationLinkIcon">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    </li>
                                    <li className='smallNavigationListElement my-2 w-full rounded flex justify-between items-center  p-2 text-white text-md font-semibold'>
                                        <div className="smallNavigationPneuType flex items-center">
                                            <span className='smallNavigationPneuIcon text-3xl'>
                                                <GiCarWheel />
                                            </span>
                                            <span className='smallNavigationPneuName uppercase px-2'>
                                                Pneu Quad
                                            </span>
                                        </div>

                                        <div className="smallNavigationLinkIcon">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    </li>

                                    
                                    <li className='smallNavigationListElement my-2 w-full rounded flex justify-between items-center  p-2 text-white text-md font-semibold'>
                                        <div className="smallNavigationPneuType flex items-center">
                                            <span className='smallNavigationPneuIcon text-3xl text-orange-400'>
                                                <TbShoppingCartDiscount />
                                            </span>
                                            <span className='smallNavigationPneuName uppercase px-2 text-orange-400'>
                                                Discontos
                                            </span>
                                        </div>

                                        <div className="smallNavigationLinkIcon text-orange-400">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            
                            <LineBreak />

                            <div className="smallNavigationProfileLinks w-full">
                                <div className="smallNavigationCenterLocation my-2">
                                    <a 
                                        className='flex items-center'
                                        href="/"
                                        >
                                        <span className='smallNavigationProfileIcon mr-3 text-lg'>
                                            <FontAwesomeIcon icon={faLocation} />
                                        </span>
                                        <span className='smallNavigationProfileCenter'>A nossa oficina</span>
                                    </a>    
                                </div>

                                <div className="smallNavigationMyVehicle flex items-center my-2">
                                    <a 
                                        className='flex items-center'
                                        href="/"
                                        >
                                        <span className='smallNavigationProfileIcon mr-3 text-lg'>
                                            <FontAwesomeIcon icon={faCar} />
                                        </span>
                                        <span className='smallNavigationProfileVehicle'>O meu automovel</span>
                                    </a>    
                                </div>

                                <div className="smallNavigationMyAccount flex items-center my-2">
                                    <a 
                                        className='flex items-center'
                                        href="/"
                                        >
                                        <span className='smallNavigationProfileIcon mr-3 text-lg'>
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                        <span className='smallNavigationProfileAccount'>A minha conta</span>
                                    </a>    
                                </div>
                            </div>

                            <LineBreak />

                            <div className="smallNavigationContactUs smallNavigationListElement p-2 w-full flex justify-between items-center">
                                <div className="smallNavigationContactContent">
                                    <span className="smallNavigationContact">Entre em contacto connosco!</span>
                                </div>
                                <div className="smallNavigationContactIcon">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            }
        </nav>
    )
};