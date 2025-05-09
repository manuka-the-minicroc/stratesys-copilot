
function Form() {


    return (
        <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center', backgroundImage:'url(/images/background.avif)', backgroundSize:'cover', backgroundPosition:'center'}}>
            
            <div style={{ 
      width: '100%', 
      maxWidth: '640px',  // Matches original iframe width
      margin: '0 auto',
      height: '480px',
      
      padding:'1.5rem'
    }}>
      <iframe
        title="Microsoft Copilot Adoption Pack Form"
        width="100%"
        height="100%"
        src="https://forms.office.com/e/8UAQSxbUxH?embed=true"
        frameBorder="0"
        style={{ 
          border: 'none',
          maxWidth: '100%',
          maxHeight: '100vh',
          minHeight: '480px',
          borderRadius: '8px',
        
        }}
        allowFullScreen
        webkitallowfullscreen="true" 
        mozallowfullscreen="true"
        msallowfullscreen="true"
      />
    </div>
        </div>
    );
}

export default Form;

//allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen

