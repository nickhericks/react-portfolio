import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span className="wave" role="img" aria-label="hand wave emoji">
            👋
          </span>
        </div>

        <p>
          <h1 className="name">
            Hello, my name is <br class="mobile-break" />
            <span className="handwriting">Nick Hericks</span>
          </h1>
          <h2 className="role">
            I'm a full stack developer with a passion for building tools and
            communities on the web.
          </h2>
        </p>
      </header>

      {/* <section className='timeline'>
				<div className='left-path'>
				</div>
				<div className='right-path'>
				</div>
			</section> */}

      <section className="highlights">
        <h1>Client highlights</h1>
        <img
          className="card"
          src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1543327352/portfolio/pledge_screenshot_1200.png"
          alt="pledge health project"
        />
        <h3 class="project-name">Pledge Health</h3>
        <h4 class="link-name">pledgehealth.org</h4>
				<p class="testimonial">
					"...redesign of our website catalyzed our nonprofit to a new phase of growth which included fantastic fundraising success, which I attribute in large part to how proud we were to share our beautiful new site."
					<br></br><br></br><span class="client-handwriting">
					- Abigail Hankin-Wei, MD, MPH,<br></br>Vice President, PLeDGE Health</span>
        </p>
      </section>

      <section className="projects" />
    </div>
  );
}

export default App;
