const Home = () => {
  return (
    <>
      <div className="containerCard">
        <div className="card WebDev">
          <div>
            <img
              src="/public/img/ChatGPT Image 3 nov 2025, 19_06_21.png"
              alt=""
            />
          </div>
          <div>
            <h2>Web Developer</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACT</li>
              <li>NODE.JS</li>
              <li>MYSQL</li>
            </ul>
          </div>
        </div>
        <div className="card blender">
          <div>
            <img
              src="/public/img/scacchiera.jpg"
              alt=""
            />
          </div>
          <div>
            <h2>Blender</h2>
            <ul>
              <li>Modellazione 3D</li>
              <li>UV Mapping</li>
              <li>Texturizzazione</li>
              <li>Materiali e shader</li>
              <li>Illuminazione</li>
              <li>Rendering (Cycles, Eevee)</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div>
            <img src="/public/img/vespa2.jpg" alt="" />
          </div>
          <div>
            <h2>Photography</h2>
          </div>
        </div>
        <div className="card">
          <div>
            <img src="/public/img/DJI_0042-1.jpg" alt="" />
          </div>
          <div>
            <h2>Drone</h2>
          </div>
        </div>
        <div className="card">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2>3D Printer</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
