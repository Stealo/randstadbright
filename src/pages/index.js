import React from 'react';
import '../index.css';

const Home = () => {
	return (
		<div className='w-10/12 m-auto'>
			<div class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mt-7">
				<div class="pt-6 md:p-8 text-center space-y-4">
					<div>
						<p className='text-lg font-medium text-teal-400'>
							“Tailwind CSS is the only framework that I've seen scale
							on large teams. It’s easy to customize, adapts to any design,
							and the build size is tiny.”
						</p>
					</div>
					<figcaption class="font-medium">
						<div class="text-sky-500 dark:text-sky-400">
							Sarah Dayan
						</div>
						<div class="text-slate-700 dark:text-slate-500">
							Staff Engineer, Algolia
						</div>
					</figcaption>
				</div>
			</div >
		</div >
	);
};

export default Home;
