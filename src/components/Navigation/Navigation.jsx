import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Logo from "./Logo/Logo";
import './NavStyle.css';

// REACT ICONS
import { GiCarWheel } from 'react-icons/gi';
import { BsCart4 } from 'react-icons/bs'
import { 
    TbBrandFacebook, 
    TbBrandInstagram, 
    TbBrandWhatsapp, 
    TbShoppingCartDiscount, 
} from 'react-icons/tb'

// FONT AWESOME ICONS
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
import SearchBox from '../Modals/LineBreak/SearchBox/SearchBox';

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
        <nav className="w-full flex justify-center items-center h-auto p-2 bg-main-color border-b-2 border-b-orange-400">
            <div className="navigationBarContent w-full flex justify-between md:container">
            
                <div className="navigationLogo w-1/3 flex items-center">
                    <Logo />
                    <div className={`estrelaPneusTitleContent flex flex-col`}>
                        <p className="text-[13px] px-1 text-white font-semibold md:text-md">Sempre ao seu dispor!</p>
                        <h3 className="flex items-center justify-center estrelaTitle text-sm w-44 text-center uppercase text-white bg-orange-500 relative right-[1.35rem] top-[.3rem] md:top-[.5rem] md:left-[-1.65rem] md:h-7">estrela pneus</h3>
                    </div>
                </div>

                {
                    width < 1024 ?
                    <div className="smallNavigationBar flex items-center text-[1.25rem] text-white">
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
                    <div 
                        className='largeNavigationBar flex justify-end items-center text-white w-full'>
                        <div className="largeNavigationSearchBox cursor-pointer md:w-1/3 lg:w-2/4">
                            <SearchBox />
                        </div>

                        <div className="largelNavigationCenterLocation w-40 mx-5 my-2">
                            <a 
                                className='flex items-center'
                                href="/"
                                >
                                <span className='largelNavigationProfileIcon text-lg mr-3 lg:mr-1'>
                                    <FontAwesomeIcon icon={faLocation} />
                                </span>
                                <span className='largelNavigationProfileCenter'>A nossa oficina</span>
                            </a>    
                        </div>

                        <div className="largelNavigationMyVehicle w-48 mx-5 flex items-center my-2">
                            <a 
                                className='flex items-center'
                                href="/"
                                >
                                <span className='largelNavigationProfileIcon text-lg mr-3 lg:mr-1'>
                                    <FontAwesomeIcon icon={faCar} />
                                </span>
                                <span className='largelNavigationProfileVehicle'>O meu automovel</span>
                            </a>    
                        </div>

                        <div className="largelNavigationMyAccount w-40 mx-5 flex items-center my-2">
                            <Link to={'/Authentication'}>Authentication</Link>
                            <a 
                                className='flex items-center'
                                href="/"
                                >
                                <span className='largelNavigationProfileIcon text-lg mr-3 lg:mr-1'>
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <span className='largelNavigationProfileAccount'>A minha conta</span>
                            </a>    
                        </div>

                        <div className="largeNavigationCart">
                            <a 
                                href="/">
                                <span className="text-white">
                                    <BsCart4 />
                                </span>
                            </a>
                        </div>
                    </div>
                } 
            </div>

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

                        <div className="smallNavigationBarSearch w-full flex justify-center">
                            <SearchBox />
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
                                                Descontos
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

                            <div className="smallNavigationContactUs smallNavigationListElement rounded p-2 py-4 w-full">
                                <a 
                                    className='w-full flex justify-between'
                                    href="/">
                                    <div className="smallNavigationContactContent">
                                        <span className="smallNavigationContact">Entre em contacto connosco!</span>
                                    </div>
                                    <div className="smallNavigationContactIcon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                </a>

                            </div>

                            <div className="smallNavigationSocialLinks flex justify-between w-full mt-10">
                                <a 
                                    className='smallNavigationListElement p-3 rounded-full text-4xl'
                                    href="/">
                                    <TbBrandInstagram />
                                </a>
                                <a 
                                    className='smallNavigationListElement p-3 rounded-full text-4xl'
                                    href="/">
                                    <TbBrandFacebook />
                                </a>
                                <a 
                                    className='smallNavigationListElement p-3 rounded-full text-4xl'
                                    href="/">
                                    <TbBrandWhatsapp />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            }
        </nav>
    )
};