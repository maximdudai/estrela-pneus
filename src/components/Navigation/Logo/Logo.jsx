
import estrelaLogo from './images/estrela-logo.png';

export default function Logo() {
    return <img 
        className={`w-12 lg:w-16`}
        src={estrelaLogo}
        alt={'estrela logo'}
    />
};