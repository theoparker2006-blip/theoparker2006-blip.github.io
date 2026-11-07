
import './App.css';

function App() {
  return (
    <div className="website">
      <nav className="navbar">
        <h2>Theo Parker</h2>

        <div className="links">
          <a href="#home">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#interests">Interests</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="about">
        <h1>Theo Parker</h1>
        <img
          src="/images/SelfPhoto.jpg"
          alt="That's me!"
          />

        <p>
          Computer Science major and Product Engineer at Kanopy.
          Aspiring Game Developer, Software Engineer, Animator,
          Digital Artist, basically every creative field I have
          applicable skills for.
        </p>

      </section>
      <section classname="stuff" id="stuff">
        <h1>Education and Experience</h1>
        <h2>3rd Year St. Mary's College of Maryland Computer Science major</h2>
        <ul classname="classes">
          <li>Algorithms and Data Structures</li>
          <li>Game Design and Development</li>
          <li>Computer Architecture</li>
          <li>Distributed and Parallel Computing</li>
          <li>Software Engineering</li>
        </ul>
        <h2>Skills</h2>
        <ul classname="skills">
          <li>Java</li>
          <li>C</li>
          <li>Python</li>
          <li>HTML</li>
          <li>React Js</li>
          <li>HDFS</li>
          <li>Spark</li>
        </ul>
      </section>

      <div
    style={{
      width: '100%',
      height: '4px',
      backgroundColor: 'mediumspringgreen',
      margin: '16px 0',
    }}
  />

      <section className="projects" id="projects">
        <h1>Projects</h1>
        <h2>Job</h2>
        <img
          src="/images/KanopyAI_Logo.png"
          alt="KanopyAI Logo"
        />
        <p>
          Kanopy is a computer vision company using Deep Learning AI.
          I Worked as a Product Engineer. I did the majority of training the AI 
          (identifying and correcting its mistakes). I also wrote the tutorial
          on how to use the software for new employees.
        </p>
        <h2>Games</h2>
        <iframe
                src="/specialFiles/paco-8.html"
                title="Paco-8"
                width="750"
                height="600"
                allowFullScreen
            />
        
        <p>
          Above is an iframe containing a modified version of Pac-Man
          I coded from scratch with two of my classmates for a school project.
          It replicates the player controls and enemy targeting and pathfinding
          AI, and has an additional enemy with a unique, original targeting system.
          Unfortunately, due to time constraints, it is still a bit buggy, 
          so you might have to refresh the page if you encounter a glitch.
        </p>

      </section>
      
      <div
    style={{
      width: '100%',
      height: '4px',
      backgroundColor: 'mediumspringgreen',
      margin: '16px 0',
    }}
  />

      <section className="interests" id="interests">
        <h1>Interests</h1>
        
          <h2>Animation</h2>
          <div classname = "animations">
          <img
          src="/images/SManimationFinal (1).gif"
          alt="Spiderman Animation"
          />
          <video controls>
                <source
                    src="/videos/AnimatedCollage2.mp4"
                    type="video/mp4"
                />
                Your browser does not support video.
            </video>
          </div>
          <div classname="graphics">
          <h2>Digital Art and Design</h2>
          <img
          src="/images/NewYorkVics.png"
          alt="Logo 1"
          />
          <img
          src="/images/SanJoseSwamps.png"
          alt="Logo 2"
          />
          </div>
          <p>Above are some spoofs of sports team logos I made
            for a Pokemon Draft League.
          </p>

          <h2>Drawing and Character Design</h2>
          <div classname="drawings">
          <img
          src="/images/SilverDnD-Red.png"
          alt="Silver"
          />
          <img
          src="/images/RiversVampire.png"
          alt="Rivers"
          />
          <img
          src="/images/SideSleeper.png"
          alt="Side Sleeper"
          />
          <img
          src="/images/Attack-Jaiden.png"
          alt="Jaiden"
          />
          <img
          src="/images/Attack-Charlotte.png"
          alt="Charlotte"
          />
          </div>
          <p>Last Summer I competed in an online character design event
            called ArtFight, in which you submit your character drawings,
            and then draw other players'. The three on the top are my designs,
            the other two are my depictions of other users' designs.
          </p>

          <h2>Game Design</h2>
          <p>(see project section)</p>
        
      </section>

      <section classname="contact" id="contact">
        
        <h2>Email:</h2>
        <p>theo.parker2006@gmail.com</p>
        <h2>LinkedIn:</h2>
        <p>www.linkedin.com/in/theo-parker-tdp208</p>
        
      </section>
    </div>
  );
}

export default App;
