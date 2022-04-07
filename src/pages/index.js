import React from 'react';
import '../index.css';
import Logo from '../images/icone/logo.svg';
import Glass from '../images/icone/glass.svg';
import Bilan from '../images/illlustrations/bilancandidature.svg';
import ChevronLeft from '../images/icone/chevronleft.svg';
import Debutant70 from '../images/illlustrations/debutant70.svg';
import Reactivite from '../images/illlustrations/reactivite.svg';
import Reactiviteun from '../images/icone/reactiviteun.svg';
import Reactivitedeux from '../images/icone/reactivitedeux.svg';
import Download from '../images/icone/download.svg';

const Home = () => {
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

			{/* DASHBOARD / BILAN DE CANDIDATURE */}

			<h1 className='font-face-gsm text-2xl m-4 couleurs-primaire'>Mon Dashboard Bright</h1>

			<div className='bg-white rounded-lg border-2 border-sky-100 m-2'>
				<div className='flex'>
					<h2 className='font-face-gm text-lg m-2'>Mon bilan de candidatures</h2>
					<img src={ChevronLeft} className="ml-auto mr-2 my-3 p-1 " alt="Fleche droite" />
				</div>

				<img src={Bilan} className="m-auto my-3 p-1" alt="Representation bilan candidature" />

				<div className='flex couleurs-fond-1 h-11 inline-block align-middle my-1.5'>
					<div className='w-6 h-6 couleurs-fond-4 rounded my-auto mx-4'></div>
					<p className='font-face-gm text-sm couleurs-primaire my-auto'>Missions effectuées</p>
					<p className='font-face-gm text-sm couleurs-primaire my-auto ml-auto mr-4'>6</p>
				</div>

				<div className='flex couleurs-fond-1 h-11 inline-block align-middle my-1.5'>
					<div className='w-6 h-6 couleurs-fond-5 rounded my-auto mx-4'></div>
					<p className='font-face-gm text-sm couleurs-primaire my-auto'>Candidatures simplifiés</p>
					<p className='font-face-gm text-sm couleurs-primaire my-auto ml-auto mr-4'>22</p>
				</div>

				<div className='flex couleurs-fond-1 h-11 inline-block align-middle my-1.5'>
					<div className='w-6 h-6 couleurs-fond-2 rounded my-auto mx-4'></div>
					<p className='font-face-gm text-sm couleurs-primaire my-auto'>Entretiens passés</p>
					<p className='font-face-gm text-sm couleurs-primaire my-auto ml-auto mr-4'>12</p>
				</div>

				<div className='flex couleurs-fond-1 h-11 inline-block align-middle mt-1.5 mb-3'>
					<div className='w-6 h-6 couleurs-fond-6 rounded my-auto mx-4'></div>
					<p className='font-face-gm text-sm couleurs-primaire my-auto'>Candidatures refusés</p>
					<p className='font-face-gm text-sm couleurs-primaire my-auto ml-auto mr-4'>4</p>
				</div>

			</div>

			{/* BLOC D'IDE ET DE CONTACT */}

			<div className='couleurs-fond-2 rounded pt-6 pb-3 px-6 my-4'>
				<h2 className='text-white text-lg font-face-gm '>Besoin d’aide ?</h2>
				<p className='text-white text-xs font-face-gr'>Comment préparer et améliorer mes entretiens ou autre...  </p>

				<div className='couleurs-fond-3 rounded w-8/12'>
					<p className='m-2 p-2 text-white text-xs font-face-gr'>Contacter mon conseiller</p>
				</div>
			</div>

			{/* MA PROGRESSION */}

			<div className='bg-white rounded-lg border-2 border-sky-100 m-2 p-4'>
				<div className='flex'>
					<h2 className='font-face-gm couleurs-primaire text-lg my-2'>Ma progression</h2>
				</div>

				<div className='h-11 inline-block align-middle my-1.5'>
					<div className='flex w-12/12'>
						<p className='font-face-gm couleurs-primaire text-sm couleurs-primaire my-auto'>Débutant</p>
						<p className='font-face-gm couleurs-primaire text-sm couleurs-primaire my-auto ml-auto mr-4'>70/100</p>
					</div>

					<img src={Debutant70} className="m-auto my-3 p-1" alt="Representation bilan candidature" />

				</div>

				<p className='couleurs-primaire text-xs font-face-gr mt-3 ml-1'>Encore 30 points pour atteindre le statut Intermédiaire</p>

				<div className='couleurs-fond-3 rounded w-4/12 mt-7'>
					<p className='m-2 p-2 text-white text-xs font-face-gr'>MARS 2022</p>
				</div>

				<img src={Reactivite} className="m-auto my-3 p-1" alt="Courbe de reactivite" />

				<div className='flex'>
					<img src={Reactiviteun} className="p-1" alt="Indicateur bleu" />
					<p className='couleurs-primaire text-xs font-face-gr'>activité du mois dernier</p>
				</div>

				<div className='flex'>
					<img src={Reactivitedeux} className="p-1" alt="Indicateur vert" />
					<p className='couleurs-primaire text-xs font-face-gr'>activité de ce mois</p>
				</div>

			</div>

			{/* MES FICHES DE PAIE */}

			<div className='bg-white rounded-lg border-2 border-sky-100 m-2 pb-2 mb-28'>
				<div className='flex m-2'>
					<h2 className='font-face-gm couleurs-primaire text-lg m-2'>Mes fiches de paie</h2>
				</div>

				<div className='flex couleurs-fond-1 h-11 inline-block align-middle my-1.5'>
					<p className='font-face-gm text-sm couleurs-primaire my-auto ml-8'>Mars 2022</p>
					<img src={Download} className="ml-auto p-1" alt="Icone telechargement" />
				</div>

				<div className='flex couleurs-fond-1 h-11 inline-block align-middle my-1.5'>
					<p className='font-face-gm text-sm couleurs-primaire my-auto ml-8'>Février 2022</p>
					<img src={Download} className="ml-auto p-1" alt="Icone telechargement" />
				</div>

				<div className='flex couleurs-fond-1 h-11 inline-block align-middle my-1.5'>
					<p className='font-face-gm text-sm couleurs-primaire my-auto ml-8'>Janvier 2022</p>
					<img src={Download} className="ml-auto p-1" alt="Icone telechargement" />
				</div>

				<div className='flex couleurs-fond-1 h-11 inline-block align-middle my-1.5'>
					<p className='font-face-gm text-sm couleurs-primaire my-auto ml-8'>Décembre 2022</p>
					<img src={Download} className="ml-auto p-1" alt="Icone telechargement" />
				</div>

				<div className='flex couleurs-fond-1 h-11 inline-block align-middle my-1.5'>
					<p className='font-face-gm text-sm couleurs-primaire my-auto ml-8'>Novembre 2022</p>
					<img src={Download} className="ml-auto p-1" alt="Icone telechargement" />
				</div>

				<div className='flex couleurs-fond-1 h-11 inline-block align-middle my-1.5'>
					<p className='font-face-gm text-sm couleurs-primaire my-auto ml-8'>Octobre 2022</p>
					<img src={Download} className="ml-auto p-1" alt="Icone telechargement" />
				</div>

			</div>

		</div >
	);
};

export default Home;
