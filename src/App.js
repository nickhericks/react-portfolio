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
        <div className="row">
          <div className="client">
            <a
              href="http://www.pledgehealth.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="card"
                src="https://res.cloudinary.com/dtqevfsxh/image/upload/c_scale,w_300/v1543327352/portfolio/pledge_screenshot_1200.png"
                alt="pledge health project"
              />
            </a>
            <h3 class="project-name">Pledge Health</h3>
            <h4 class="link-name">pledgehealth.org</h4>
            <p class="testimonial">
              "...redesign of our website catalyzed our nonprofit to a new
              phase of growth which included fantastic fundraising success,
              which I attribute in large part to how proud we were to share
              our beautiful new site."
              <br />
              <br />
              <span class="client-handwriting">
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
                src="https://res.cloudinary.com/dtqevfsxh/image/upload/c_scale,w_300/v1540559117/portfolio/maputo-a-pe_screenshot_1200.png"
                alt="pledge health project"
              />
            </a>
            <h3 class="project-name">Maputo a Pé</h3>
            <h4 class="link-name">maputo-a-pe.com</h4>
            <p class="testimonial">
              "...we have been able to get lots of bookings coming from all
              over the world as well as partnering with different local
              companies wanting to have their team building activities
              organized by us..."
              <br />
              <br />
              <span class="client-handwriting">
                - Sheldon Aires, Maputo a Pé
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="projects" />
    </div>
  );
}

export default App;
