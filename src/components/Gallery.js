import React from 'react';

import rick from '../images/rick1.jpg';
import rick2 from '../images/rick2.jpg';
import rick3 from '../images/rick3.jpg';
import rick4 from '../images/rick4.jpg';
import rick5 from '../images/rick5.jpg';
import rick6 from '../images/rick6.jpg';
import rick7 from '../images/rick7.jpg';
import rick8 from '../images/rick8.jpg';
import rick9 from '../images/rick9.jpg';
import rick10 from '../images/rick10.jpg';

const Gallery = () => {
	return (
		<div className='gallery'>
			<div className='grid-item g_one'>
				<figure>
					<img src={rick} alt='' />
					<figcaption>
						What about the reality where Hitler cured cancer, Morty? The answer
						is: don’t think about it.”
					</figcaption>
				</figure>
			</div>
			<div className='grid-item g_txt'>
				<p>Wubba lubba</p>
			</div>
			<div className='grid-item g_two'>
				<figure>
					<img src={rick2} alt='' />
					<figcaption>“Welcome to the club, pal.”</figcaption>
				</figure>
			</div>
			<div className='grid-item g_three'>
				<figure>
					<img src={rick3} alt='' />
					<figcaption>
						“I turned myself into a pickle, Morty! I’m Pickle Ri-i-i-ick!”
					</figcaption>
				</figure>
			</div>
			<div className='grid-item g_four'>
				<figure>
					<img src={rick4} alt='' />
					<figcaption>“Sometimes science is more art than science.”</figcaption>
				</figure>
			</div>

			<div className='grid-item g_five'>
				<figure>
					<img src={rick5} alt='' />
					<figcaption>
						“Oh, boy, so you actually learned something today? What is this,
						Full House?”
					</figcaption>
				</figure>
			</div>
			<div className='grid-item g_six'>
				<figure>
					<img src={rick6} alt='' />
					<figcaption>
						“Have fun with empowerment. It seems to make everyone that gets it
						really happy.”
					</figcaption>
				</figure>
			</div>
			<div className='grid-item g_txt_another'>
				<p>dub dub</p>
			</div>
			<div className='grid-item g_seven'>
				<figure>
					<img src={rick7} alt='' />
					<figcaption>
						“I’ve got a quick solo adventure to go on, and this one will not be
						directed by Ron Howard!”
					</figcaption>
				</figure>
			</div>

			<div className='grid-item g_eight'>
				<figure>
					<img src={rick8} alt='' />
					<figcaption>
						“Nobody exists on purpose. Nobody belongs anywhere. We’re all going
						to die. Come watch TV.”
					</figcaption>
				</figure>
			</div>
			<div className='grid-item g_nine'>
				<figure>
					<img src={rick9} alt='' />
					<figcaption>
						“Yeah, I’d like to order one large phone with extra phones, please.”
						“Cell phone. No-no-no-no, rotary! And pay phone on half.”
					</figcaption>
				</figure>
			</div>
			<div className='grid-item g_ten'>
				<figure>
					<img src={rick10} alt='' />
					<figcaption>
						“Don’t move. Gonorrhea can’t see us if we don’t move...Wait! I was
						wrong! I was thinking of a T-rex.”
					</figcaption>
				</figure>
			</div>
		</div>
	);
};

export default Gallery;
