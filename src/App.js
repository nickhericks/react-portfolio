import React, { Component } from 'react';
import './App.css';

class App extends Component {
	
	state = {
		year: document.write(new Date().getFullYear())
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">




					<div className="side dark">
						<div className="side-item profile-photo-div">
							<img className="profile-pic" src="images/nick.jpg" alt="nick hericks" />
						</div>

						<div className="side-item ">
							<div>
								<span className="wave">👋</span>
							</div>
							<h1 className="name">
								Hello, my name is <br className="mobile-break" /><span className="handwriting">Nick Hericks</span>
							</h1>
							<h2 className="role">I'm a full stack developer with a passion for building tools and communities on the web.</h2>
						</div>
		
					</div>

					<div className="arrow"></div>
				</header>

				{/* <section className='timeline'>
					<div className='left-path'>
					</div>
					<div className='right-path'>
					</div>
				</section> */}

				<section className="highlights">
					<h1>Client highlights</h1>
					<div className="row">
						<div className="client">
							<a
								href="http://www.pledgehealth.org/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="card"
									src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1543327352/portfolio/pledge_screenshot_1200.png"
									alt="pledge health project"
								/>
							</a>
							<h3 className="project-name">Pledge Health</h3>
							<h4 className="link-name">pledgehealth.org</h4>
							<p className="testimonial">
								"...redesign of our website catalyzed our nonprofit to a new
								phase of growth which included fantastic fundraising success,
								which I attribute in large part to how proud we were to share
								our beautiful new site."
								<br />
								<br />
								<span className="client-handwriting">
									- Abigail Hankin-Wei, MD, MPH,
									<br />
									Vice President, PLeDGE Health
								</span>
							</p>
						</div>
						<div className="client">
							<a
								href="https://maputo-a-pe.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="card"
									src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1540559117/portfolio/maputo-a-pe_screenshot_1200.png"
									alt="pledge health project"
								/>
							</a>
							<h3 className="project-name">Maputo a Pé</h3>
							<h4 className="link-name">maputo-a-pe.com</h4>
							<p className="testimonial">
								"...we have been able to get lots of bookings coming from all
								over the world as well as partnering with different local
								companies wanting to have their team building activities
								organized by us..."
								<br />
								<br />
								<span className="client-handwriting">
									- Sheldon Aires, Maputo a Pé
								</span>
							</p>
						</div>
					</div>
				</section>

				<section className="projects">
					{/* <!-- featured work --> */}
					<div className="row">
						<div className="col-12">
							<h3 className="featured-header">Additional projects</h3>
						</div>
					</div>
					<section className="row">
						<div className="app col-4">
							<a
								href="https://github.com/nickhericks/techdegree-project-10"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="col-12">
									<img
										className="card"
										src="https://res.cloudinary.com/dtqevfsxh/image/upload/c_scale,w_350/v1565098732/portfolio/techdegreeproject10.png"
										alt="project"
									/>
									<h3 className="project-name">School Database</h3>
								</div>
							</a>
							<p className="tags">
								<span className="tag">Express.js</span>
								<span className="tag">Postman</span>
								<span className="tag">bcrypt</span>
								<span className="tag">basic-auth</span>
								<span className="tag">React</span>
								<span className="tag">ReactRouter</span>
								<span className="tag">Axios</span>
							</p>
							<a
								className="tag-github"
								href="https://github.com/nickhericks/techdegree-project-10"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github" />
							</a>
						</div>

						<div className="app col-4">
							<a
								href="https://github.com/nickhericks/techdegree-project-8"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="col-12">
									<img
										className="card"
										src="https://res.cloudinary.com/dtqevfsxh/image/upload/c_scale,w_350/v1565098732/portfolio/techdegreeproject8.png"
										alt="project"
									/>
									<h3 className="project-name">Library Book Database</h3>
								</div>
							</a>
							<p className="tags">
								<span className="tag">Node.js</span>
								<span className="tag">Express.js</span>
								<span className="tag">Pug</span>
								<span className="tag">Sequelize</span>
								<span className="tag">SQLite</span>
							</p>
							<a
								className="tag-github"
								href="https://github.com/nickhericks/techdegree-project-8"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github" />
							</a>
						</div>

						<div className="app col-4">
							<a
								href="https://nickhericks.com/memory/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="col-12">
									<img
										className="card"
										src="https://res.cloudinary.com/dtqevfsxh/image/upload/c_scale,w_350/v1540559469/portfolio/elb3_screenshot_1200.png"
										alt="project"
									/>
									<h3 className="project-name">elbSafari</h3>
								</div>
							</a>
							<p className="tags">
								<span className="tag">HTML</span>
								<span className="tag">CSS</span>
								<span className="tag">JavaScript</span>
							</p>
							<a
								className="tag-github"
								href="https://github.com/nickhericks/memory-game"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github" />
							</a>
						</div>

						<div className="app col-4">
							<a
								href="https://techdegree-project-7.netlify.com/mountains"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="col-12">
									<img
										className="card"
										src="https://res.cloudinary.com/dtqevfsxh/image/upload/c_scale,w_350/v1565098732/portfolio/techdegreeproject7.png"
										alt="project"
									/>
									<h3 className="project-name">Image Search (Flickr API)</h3>
								</div>
							</a>
							<p className="tags">
								<span className="tag">React</span>
								<span className="tag">JSX</span>
								<span className="tag">ReactRouter</span>
								<span className="tag">APIs</span>
							</p>
							<a
								className="tag-github"
								href="https://github.com/nickhericks/techdegree-project-7"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github" />
							</a>
						</div>

						<div className="app col-4">
							<a
								href="https://nickhericks.github.io/reactScoreboardPremium/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="col-12">
									<img
										className="card"
										src="https://res.cloudinary.com/dtqevfsxh/image/upload/c_scale,w_350/v1565021919/portfolio/scoreboardpremium1.png"
										alt="project"
									/>
									<h3 className="project-name">Scoreboard App</h3>
								</div>
							</a>
							<p className="tags">
								<span className="tag">JavaScript</span>
								<span className="tag">React</span>
							</p>
							<a
								className="tag-github"
								href="https://github.com/nickhericks/reactScoreboardPremium"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github" />
							</a>
						</div>

						<div className="app col-4">
							<a
								href="https://nickhericks.github.io/techdegree-project-5/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="col-12">
									<img
										className="card"
										src="https://res.cloudinary.com/dtqevfsxh/image/upload/c_scale,w_350/v1565098221/portfolio/techdegreeproject5.png"
										alt="project"
									/>
									<h3 className="project-name">Employee Directory</h3>
								</div>
							</a>
							<p className="tags">
								<span className="tag">APIs</span>
								<span className="tag">AJAX</span>
								<span className="tag">JSON</span>
							</p>
							<a
								className="tag-github"
								href="https://github.com/nickhericks/techdegree-project-5"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github" />
							</a>
						</div>

						<div className="app col-4">
							<a
								href="https://nickhericks.github.io/react-router-course-directory/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="col-12">
									<img
										className="card"
										src="https://res.cloudinary.com/dtqevfsxh/image/upload/c_scale,w_350/v1565076048/portfolio/reactcoursedirectory.png"
										alt="project"
									/>
									<h3 className="project-name">Course Directory</h3>
								</div>
							</a>
							<p className="tags">
								<span className="tag">JavaScript</span>
								<span className="tag">React</span>
							</p>
							<a
								className="tag-github"
								href="https://github.com/nickhericks/react-router-course-directory"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github" />
							</a>
						</div>

						<div className="app col-4">
							<a
								href="https://nickhericks.github.io/OOJS-connect-four-game/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="col-12">
									<img
										className="card"
										src="https://res.cloudinary.com/dtqevfsxh/image/upload/c_scale,w_350/v1565022003/portfolio/connect-four.png"
										alt="project"
									/>
									<h3 className="project-name">OOJS Connect Four</h3>
								</div>
							</a>
							<p className="tags">
								<span className="tag">Object-Oriented JavaScript</span>
							</p>
							<a
								className="tag-github"
								href="https://github.com/nickhericks/OOJS-connect-four-game"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github" />
							</a>
						</div>

						<div className="app col-4">
							<a
								href="https://nickhericks.github.io/techdegree-project-4/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="col-12">
									<img
										className="card"
										src="https://res.cloudinary.com/dtqevfsxh/image/upload/c_scale,w_350/v1565098009/portfolio/techdegreeproject4.png"
										alt="project"
									/>
									<h3 className="project-name">Phrase Hunter</h3>
								</div>
							</a>
							<p className="tags">
								<span className="tag">Object-Oriented JavaScript</span>
							</p>
							<a
								className="tag-github"
								href="https://github.com/nickhericks/techdegree-project-4"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github" />
							</a>
						</div>

						<div className="app col-4">
							<a
								href="https://nickhericks.com/tennis/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="col-12">
									<img
										className="card"
										src="https://res.cloudinary.com/dtqevfsxh/image/upload/c_scale,w_350/v1540558830/portfolio/tennis_screenshot_1200.png"
										alt="project"
									/>
									<h3 className="project-name">Tennis Signup</h3>
								</div>
							</a>

							<p className="tags">
								<span className="tag">PHP</span>
								<span className="tag">MySQL</span>
							</p>
							<a
								className="tag-github"
								href="https://github.com/nickhericks/php-tennis"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github" />
							</a>
						</div>

						<div className="app col-4">
							<a
								href="https://nickhericks.github.io/techdegree-project-6/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="col-12">
									<img
										className="card"
										src="https://res.cloudinary.com/dtqevfsxh/image/upload/c_scale,w_350/v1565098221/portfolio/techdegreeproject6.png"
										alt="project"
									/>
									<h3 className="project-name">Portfolio Template</h3>
								</div>
							</a>
							<p className="tags">
								<span className="tag">Node.js</span>
								<span className="tag">Express.js</span>
								<span className="tag">Pug</span>
							</p>
							<a
								className="tag-github"
								href="https://github.com/nickhericks/techdegree-project-6"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github" />
							</a>
						</div>

						<div className="app col-4">
							<a
								href="https://nickhericks.github.io/react-neighborhood/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="col-12">
									<img
										className="card"
										src="https://res.cloudinary.com/dtqevfsxh/image/upload/c_scale,w_350/v1540560618/portfolio/maputo-map_screenshot_1200.png"
										alt="project"
									/>
									<h3 className="project-name">Restaurant Map</h3>
								</div>
							</a>
							<p className="tags">
								<span className="tag">JavaScript</span>
								<span className="tag">React</span>
							</p>
							<a
								className="tag-github"
								href="https://github.com/nickhericks/react-neighborhood"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github" />
							</a>
						</div>
					</section>
				</section>

				<section className="contact" />

				<footer className="dark">
					<div className="footer-icons">
						<a
							className="icon-link"
							href="https://www.linkedin.com/in/nickhericks/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-linkedin-in" />
						</a>
						<a
							className="icon-link"
							href="https://twitter.com/nickhericks"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-twitter" />
						</a>
						<a
							className="icon-link"
							href="https://github.com/nickhericks"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-github" />
						</a>
					</div>
					<br />
					<div className="">
						©
						{ this.state.year }
						nickhericks.com
					</div>
				</footer>
			</div>
		);
	}
}

export default App;
