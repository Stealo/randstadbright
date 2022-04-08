import React from 'react';
import '../index.css';
import Logo from '../images/icone/logo.svg';
import Glass from '../images/icone/glass.svg';
import Pomme from '../images/emplois/apple.svg';
import Fav from '../images/emplois/fav.svg';
import Place from '../images/emplois/place.svg';
import Puce from '../images/emplois/puce.svg';
import Nike from '../images/emplois/nike.svg';
import Totol from '../images/emplois/totol.svg';

const EmploisEnregistre = () => {
    return (
        <div>

            {/* LOGO ET BARRE DE RECHERCHE */}

            <div className='m-2 flex'>
                <img src={Logo} className="mr-auto mb-2" alt="Icone de dashboard" />
                <div className='rounded text-xs bg-slate-200 w-8/12 h-7 flex'>
                    <input className='rounded text-xs bg-slate-200' type="text" id="name" name="name" required
                        minlength="4" maxlength="8" width="264px" height="30px" value=" Trouver un emploi..." ></input>
                    <img src={Glass} className="ml-auto p-1" alt="Icone de loupe" />
                </div>
            </div>

            {/* ONGLET DE NAVIGATION EMPLOIS */}

            <div className='flex w-96'>

                <div className='m-2 flex'>
                    <div className='h-11 inline-block align-middle my-1.5 mr-1'>
                        <p className='font-face-gr text-sm couleurs-primaire my-auto'>Offres&nbsp;d'emplois</p>
                        <div className='border-b-2 border-black mt-2'></div>
                    </div>
                </div>

                <div className='m-2 flex'>
                    <div className='h-11 inline-block align-middle my-1.5 mx-2'>
                        <p className='font-face-gr text-sm text-slate-400 my-auto'>Enregistrés</p>
                        <div className='border-b-2 border-slate-400 mt-2'></div>
                    </div>
                </div>

                <div className='m-2 flex'>
                    <div className='h-11 inline-block align-middle my-1.5 mx-2'>
                        <p className='font-face-gr text-sm text-slate-400 my-auto'>Proposés</p>
                        <div className='border-b-2 border-slate-400 mt-2'></div>
                    </div>
                </div>

                <div className='m-2 flex'>
                    <div className='h-11 inline-block align-middle my-1.5 mx-2'>
                        <p className='font-face-gr text-sm text-slate-400 my-auto'>Envoyés</p>
                        <div className='border-b-2 border-slate-400 mt-2'></div>
                    </div>
                </div>

            </div>

            {/* BLOC EMPLOIS */}

            <div className='bg-white rounded-lg border-2 border-slate-200 m-2 p-4'>

                <div className='flex h-11 inline-block align-middle my-1.5'>
                    <div>
                        <img src={Pomme} className="" alt="Logo marque" />
                    </div>
                    <div>
                        <p className='font-face-gsm text-base couleurs-primaire ml-2'>Product Designer - Junior</p>
                        <p className='font-face-gm text-xs text-slate-800 ml-2'>Google INC</p>
                        <div className='flex ml-2'>
                            <img src={Place} className="" alt="Icone emplacement" />
                            <p className='font-face-gm text-xs text-slate-800 ml-2'>Paris</p>
                        </div>
                    </div>

                    <div className="ml-auto mb-2 h-6">
                        <img src={Fav} className="ml-auto mb-2 h-6" alt="Icone de favoris" />
                    </div>
                </div>

                <div className='flex mt-8'>
                    <p className='font-face-gr text-xs text-slate-800 bg-slate-100 rounded-full p-1 px-2 mr-2'>Temps plein</p>
                    <p className='font-face-gr text-xs text-slate-800 bg-slate-100 rounded-full p-1 px-2 mr-2'>CDI</p>
                    <p className='font-face-gr text-xs text-slate-800 bg-slate-100 rounded-full p-1 px-2 mr-2'>Télétravail</p>
                    <p className='font-face-gr text-xs text-slate-800 p-1 px-2  ml-auto'>38k€ - 40k€</p>
                </div>

                <div className='flex mt-4'>
                    <p className='font-face-gr text-xs text-slate-400 p-1'>Publié il y a 7 jours</p>
                    <img src={Puce} className="mx-1" alt="Une puce" />
                    <p className='font-face-gr text-xs text-slate-400 p-1'>D’après le quizz que vous avez</p>
                </div>
                <p className='font-face-gr text-xs text-slate-400 p-1'>remplis et les postes enregistrés</p>

            </div>

            <div className='bg-white rounded-lg border-2 border-slate-200 m-2 p-4'>

                <div className='flex h-11 inline-block align-middle my-1.5'>
                    <div>
                        <img src={Nike} className="" alt="Logo marque" />
                    </div>
                    <div>
                        <p className='font-face-gsm text-base couleurs-primaire ml-2'>Product Designer - Junior</p>
                        <p className='font-face-gm text-xs text-slate-800 ml-2'>Google INC</p>
                        <div className='flex ml-2'>
                            <img src={Place} className="" alt="Icone emplacement" />
                            <p className='font-face-gm text-xs text-slate-800 ml-2'>Paris</p>
                        </div>
                    </div>

                    <div className="ml-auto mb-2 h-6">
                        <img src={Fav} className="ml-auto mb-2 h-6" alt="Icone de favoris" />
                    </div>
                </div>

                <div className='flex mt-8'>
                    <p className='font-face-gr text-xs text-slate-800 bg-slate-100 rounded-full p-1 px-2 mr-2'>Temps plein</p>
                    <p className='font-face-gr text-xs text-slate-800 bg-slate-100 rounded-full p-1 px-2 mr-2'>CDI</p>
                    <p className='font-face-gr text-xs text-slate-800 bg-slate-100 rounded-full p-1 px-2 mr-2'>Télétravail</p>
                    <p className='font-face-gr text-xs text-slate-800 p-1 px-2  ml-auto'>38k€ - 40k€</p>
                </div>

                <div className='flex mt-4'>
                    <p className='font-face-gr text-xs text-slate-400 p-1'>Publié il y a 7 jours</p>
                    <img src={Puce} className="mx-1" alt="Une puce" />
                    <p className='font-face-gr text-xs text-slate-400 p-1'>D’après le quizz que vous avez</p>
                </div>
                <p className='font-face-gr text-xs text-slate-400 p-1'>remplis et les postes enregistrés</p>

            </div>

            <div className='bg-white rounded-lg border-2 border-slate-200 m-2 p-4'>

                <div className='flex h-11 inline-block align-middle my-1.5'>
                    <div>
                        <img src={Totol} className="" alt="Logo marque" />
                    </div>
                    <div>
                        <p className='font-face-gsm text-base couleurs-primaire ml-2'>Product Designer - Junior</p>
                        <p className='font-face-gm text-xs text-slate-800 ml-2'>Google INC</p>
                        <div className='flex ml-2'>
                            <img src={Place} className="" alt="Icone emplacement" />
                            <p className='font-face-gm text-xs text-slate-800 ml-2'>Paris</p>
                        </div>
                    </div>

                    <div className="ml-auto mb-2 h-6">
                        <img src={Fav} className="ml-auto mb-2 h-6" alt="Icone de favoris" />
                    </div>
                </div>

                <div className='flex mt-8'>
                    <p className='font-face-gr text-xs text-slate-800 bg-slate-100 rounded-full p-1 px-2 mr-2'>Temps plein</p>
                    <p className='font-face-gr text-xs text-slate-800 bg-slate-100 rounded-full p-1 px-2 mr-2'>CDI</p>
                    <p className='font-face-gr text-xs text-slate-800 bg-slate-100 rounded-full p-1 px-2 mr-2'>Télétravail</p>
                    <p className='font-face-gr text-xs text-slate-800 p-1 px-2  ml-auto'>38k€ - 40k€</p>
                </div>

                <div className='flex mt-4'>
                    <p className='font-face-gr text-xs text-slate-400 p-1'>Publié il y a 7 jours</p>
                    <img src={Puce} className="mx-1" alt="Une puce" />
                    <p className='font-face-gr text-xs text-slate-400 p-1'>D’après le quizz que vous avez</p>
                </div>
                <p className='font-face-gr text-xs text-slate-400 p-1'>remplis et les postes enregistrés</p>

            </div>







        </div >
    );
};

export default EmploisEnregistre;
