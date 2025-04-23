

function ContactForm() {


    return (
        <footer className="bg-dark py-3">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            {/* Copyright text - Light grey */}
            <div className="mb-2 mb-md-0">
              <span className="text-white">© 2025 Stratesys. Todos los derechos reservados.</span>
            </div>
      
            {/* Links - White and bold */}
            <div className="d-flex gap-3">
              <a 
                href="https://www.stratesys-ts.com/es/aviso-legal/" 
                className="text-white fw-bold text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aviso Legal
              </a>
              
              <a 
                href="https://www.stratesys-ts.com/es/politica-de-proteccion-de-datos/" 
                className="text-white fw-bold text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                GDPR
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default ContactForm;