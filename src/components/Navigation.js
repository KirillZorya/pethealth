import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

export default function Navigation() {
    const navigate = useNavigate();
    const { t,i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <a class="navbar-brand mx-3" href="">PetHealth</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href=""><Trans i18nKey={"home"}/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Pet"><Trans i18nKey={"pet"}/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Breed"><Trans i18nKey={"breed"}/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Color"><Trans i18nKey={"color"}/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Pulse"><Trans i18nKey={"pulse"}/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Sleep"><Trans i18nKey={"sleep"}/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Temperature"><Trans i18nKey={"temperature"}/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="User"><Trans i18nKey={"user"}/></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <Trans i18nKey={"statistics"}/>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="Stat_sleep"><Trans i18nKey={"statistics_sleep"}/></a></li>
            <li><a class="dropdown-item" href="Stat_temp"><Trans i18nKey={"statistics_temp"}/></a></li>
            <li><a class="dropdown-item" href="Stat_pulse"><Trans i18nKey={"statistics_pulse"}/></a></li>
          </ul>
        </li>
        <div class="row">
                    
                    <div class="col-2">
                        <div class="btn-group col-1 dropstart">
                        <button type="button" class="btn btn-dark rounded" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faLanguage} />
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onClick={ () => changeLanguage("en") }><Trans i18nKey={"english"}/></a></li>
                            <li><a class="dropdown-item" onClick={ () => changeLanguage("ua") }><Trans i18nKey={"ukr"}/></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
        </ul>
        </div>
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                    <a class="nav-link" onClick={() => navigate("/")}>    
                    </a>
                </li>
                    <a class="nav-link" onClick={() => navigate("/Pet")}>  
                    </a>
                <li class="nav-item">
                    <a class="nav-link" onClick={() => navigate("/Breed")}>  
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick={() => navigate("/Color")}>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick={() => navigate("/Pulse")}>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick={() => navigate("/Sleep")}>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick={() => navigate("/Temperature")}>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick={() => navigate("/User")}>
                    </a>
                </li>
                <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onClick={ () => navigate("/Stat_sleep") }>Statistics(sleep)</a></li>
                            <li><a class="dropdown-item" onClick={ () => navigate("/Stat_temp") }>Statistics(temperature)</a></li>
                            <li><a class="dropdown-item" onClick={ () => navigate("/Stat_pulse") }>Statistics(pulse)</a></li>
                </ul>
        </ul>
      </nav>
    )
}