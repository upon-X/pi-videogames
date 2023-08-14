import loader_pacman from '../assets/loader_pacman.gif';
import './loader.css';

export default function Loader() {
    return (
        <div className="loader">
            <img src={loader_pacman} alt="loading" />
        </div>
    )
};