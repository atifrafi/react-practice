const Quote = () => {
    const Container = {
        border:'1px solid',
        width:'600px',
        padding:'20px',
        margin:'auto'
    }
  return (
    <>
      <div style={Container}>
        <p
          style={{
            fontSize: "18px",
            marginBottom: "20px",
            fontStyle: "italic",
          }}
        >
          “To speak less is wisdom, to eat less is healthy, and to mingle less
          with the people is safe and serene.”
        </p>
        <span style={{fontWeight:"bold", fontSize:'22px'}}>Umar ibn Al-Khattab</span>
      </div>
    </>
  );
};

export default Quote;
