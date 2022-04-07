import React from 'react';
import '../index.css';
import Logo from '../images/icone/logo.svg';
import Glass from '../images/icone/glass.svg';
import Bilan from '../images/illlustrations/bilancandidature.svg';
import ChevronLeft from '../images/icone/chevronleft.svg';

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
					<div className='w-6 h-6 bg-black rounded my-auto mx-4'></div>
					<p className='font-face-gm text-sm couleurs-primaire my-auto'>Missions effectuées</p>
					<p className='font-face-gm text-sm couleurs-primaire my-auto ml-auto mr-4'>6</p>
				</div>

				<div className='flex couleurs-fond-1 h-11 inline-block align-middle my-1.5'>
					<div className='w-6 h-6 bg-white rounded my-auto mx-4'></div>
					<p className='font-face-gm text-sm couleurs-primaire my-auto'>Candidatures acceptés</p>
					<p className='font-face-gm text-sm couleurs-primaire my-auto ml-auto mr-4'>6</p>
				</div>

				<div className='flex couleurs-fond-1 h-11 inline-block align-middle my-1.5'>
					<div className='w-6 h-6 bg-black rounded my-auto mx-4'></div>
					<p className='font-face-gm text-sm couleurs-primaire my-auto'>Entretiens passés</p>
					<p className='font-face-gm text-sm couleurs-primaire my-auto ml-auto mr-4'>6</p>
				</div>

				<div className='flex couleurs-fond-1 h-11 inline-block align-middle mt-1.5 mb-3'>
					<div className='w-6 h-6 bg-white rounded my-auto mx-4'></div>
					<p className='font-face-gm text-sm couleurs-primaire my-auto'>Candidatures refusés</p>
					<p className='font-face-gm text-sm couleurs-primaire my-auto ml-auto mr-4'>6</p>
				</div>

			</div>

			{/* BLOC D'IDE ET DE CONTACT */}

			<div className='couleurs-fond-2 rounded pt-6 pb-3 px-6'>
				<h2 className='text-white text-lg font-face-gm '>Besoin d’aide ?</h2>
				<p className='text-white text-xs font-face-gr'>Comment préparer et améliorer mes entretiens ou autre...  </p>

				<div className='couleurs-fond-3 rounded w-8/12'>
					<p className='m-2 p-2 text-white text-xs font-face-gr'>Contacter mon conseiller</p>
				</div>

			</div>

		</div >
	);
};

export default Home;
