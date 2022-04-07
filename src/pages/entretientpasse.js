import React from 'react';
import '../index.css';
import Bilan from '../images/illlustrations/bilancandidature.svg';
import Debutant70 from '../images/illlustrations/debutant70.svg';
import Reactivite from '../images/illlustrations/reactivite.svg';
import Reactiviteun from '../images/icone/reactiviteun.svg';
import Reactivitedeux from '../images/icone/reactivitedeux.svg';
import Download from '../images/icone/download.svg';
import Return from '../images/icone/return.svg';
import Offre from '../images/illlustrations/offre.svg';

const EntretientPasse = () => {
    return (
        <div>

            {/* ENTRETIENS PASSEES */}

            <div className='inline-block align-middle mx-4'>
                <img src={Return} className="mr-auto mr-2 my-1 p-1 " alt="Fleche gauche" />
                <h2 className='font-face-gsm text-lg m-1'>Entretiens passés</h2>
            </div>

            <img src={Offre} className="m-auto my-3 p-1 mt-24" alt="Representation bilan entretient" />

            <div className='flex couleurs-fond-1 h-11 inline-block align-middle my-1.5'>
                <div className='w-6 h-6 couleurs-fond-4 rounded my-auto mx-4'></div>
                <p className='font-face-gm text-sm couleurs-primaire my-auto'>Offres proposés par Randstad</p>
                <p className='font-face-gm text-sm couleurs-primaire my-auto ml-auto mr-4'>5</p>
            </div>

            <div className='flex couleurs-fond-1 h-11 inline-block align-middle my-1.5'>
                <div className='w-6 h-6 couleurs-fond-2 rounded my-auto mx-4'></div>
                <p className='font-face-gm text-sm couleurs-primaire my-auto'>Candidatures envoyés en autonomie</p>
                <p className='font-face-gm text-sm couleurs-primaire my-auto ml-auto mr-4'>7</p>
            </div>

        </div >
    );
};

export default EntretientPasse;
