import { Link } from "react-router-dom";


function Main(){
    return (
        <>
              {/* <!-- Bootstrap CSS -->

      {/* <!-- Section 1: Hero Section --> */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="hero-titleB" >Human + IA: La Fórmula del Éxito con Microsoft 365 Copilot</h1>
            <p>En Stratesys creemos que el futuro de la productividad no es humano ni artificial, es híbrido. Microsoft 365 Copilot es más que una herramienta: es tu compañero de trabajo impulsado por Inteligencia Artificial que transforma el potencial humano en resultados excepcionales.</p>
            <Link to="/form"  className="btn hoverStyle ">Get Started</Link>
          </div>
          <div className="col-md-6">
            <img src="/images/hero.png" alt="Microsoft Copilot" className="img-fluid hero-image" />
          </div>
        </div>
      </section>



      {/* <!-- Section 2: Packs Cards --> */}
      <section className="container py-5">
        <div className="row justify-content-center g-4 row-cols-1 row-cols-md-3">
          {/* <!-- Pack 1 --> */}
          <div className="col d-flex justify-content-center">
            <div className="card custom-card w-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title hero-title">Fundamentos Copilot</h5>
                <h6 className="card-subtitle mb-2 text-muted">Inicia tu viaje con IA</h6>
                <hr />
                <ul className="flex-grow-1 " style={{marginLeft:"-20px"}}>
                  <li>Despliegue técnico inicial con seguridad avanzada (Infraestructura preparada para IA).</li>
                  <li>Sesiones Awareness: Conciencia y sensibilización sobre el potencial y uso ético de Copilot.</li>
                  <li>Cursos Founderz (sin coste adicional): Formación básica accesible para todos.</li>
                  <li>Comunicación interna personalizada:
                    <ul>
                      <li> Infografías claras y atractivas</li>
                      <li> Vídeos explicativos con casos reales</li>
                      <li> Guías rápidas: Funcionalidades y beneficios claros.</li>
                    </ul>
                  </li>
                </ul>
                <Link to="/form" className="btn hoverStyleVari">Solicitar Información</Link>
              </div>
            </div>
          </div>
          {/* <!-- Pack 2 (Recommended) --> */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card custom-card w-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title hero-title">Productividad Aumentada</h5>
                <h6 className="card-subtitle mb-2 text-muted">Optimiza tu día a día
                  <span className="badge bg-purple text-white ms-2 align-middle">Popular</span>
                </h6>
                <hr />
                <ul className="flex-grow-1" style={{marginLeft:"-20px"}}>
                  <li>Contenidos exclusivos EdTech desarrollados por expertos en pedagogía tecnológica.</li>
                  <li>Taller "Copilot-in-a-day": aprende y aplica en una sola jornada.</li>
                  <li>Monitorización avanzada de productividad (KPIs específicos del negocio).</li>
                  <li>Integración técnica con Copilot Studio vía equipos de IT.</li>
                </ul>
                <Link to="/form"  className="btn hoverStyle">Solicitar Información</Link>
              </div>
            </div>
          </div>
          {/* <!-- Pack 3 --> */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card custom-card w-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title hero-title">Innovación y Excelencia</h5>
                <h6 className="card-subtitle mb-2 text-muted">Lidera el futuro</h6>
                <hr />
                <ul className="flex-grow-1" style={{marginLeft:"-20px"}}>
                  <li>Creación de un Centro de Excelencia (CoE) especializado en Copilot y Prompt Engineering.</li>
                  <li>Contenidos avanzados EdTech+: Formación especializada para equipos estratégicos.</li>
                  <li>Programa Masters Founders: Eleva a tus líderes a expertos internos en Copilot.</li>
                  <li>Organización de Hackathon Copilots: Genera innovación interna a través del talento humano potenciado con IA.</li>
                </ul>
                <Link to="/form" className="btn hoverStyleVari">Solicitar Información</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section 3: Horizontal Card with Side Image --> */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* <!-- Left Column: Image --> */}
            <div className="col-md-6">
              <img src="/images/section3.avif" alt="Stratesys" className="img-fluid hero-image" />
            </div>
            {/* <!-- Right Column: Copy --> */}
            <div style={{marginLeft:"20px"}}  className="col-md-5 text-black ">
              <h2 className="hero-title">¿Por qué elegir Stratesys?</h2>
              <ul>
                <li>Expertise único en IA Generativa aplicada a negocios reales.</li>
                <li>Metodología propia de adopción tecnológica con acompañamiento personalizado.</li>
                <li>Compromiso con resultados tangibles: incrementos medibles en eficiencia y satisfacción.</li>
              </ul>
              <Link to="/form" className="btn hoverStyle">Habla con un Experto en Copilot</Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section 4: Final Section --> */}
      <section className="container py-5 text-center">
        <h2 className="hero-title">Stratesys: La transformación inteligente comienza aquí.</h2>
        <p>Empieza hoy mismo con Microsoft Copilot junto a nosotros y experimenta una productividad de otro nivel.</p>
      </section>
        </>
    )
}
export default Main;