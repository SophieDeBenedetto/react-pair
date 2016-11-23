import React from 'react'
const style = {
  width: "100%",
  height: "60px",
  marginTop: "5%",
  backgroundColor: "#f5f5f5"
}
const Footer = () => {
  return (
    <footer className="footer" style={style}>
      <p className="col-lg-offset-3" style={{paddingTop: "15px"}}>created by <a href="http://www.thegreatcodeadventure.com/">sophie debenedetto</a> {"||"} <a href="https://github.com/SophieDeBenedetto/react-pair">view source</a> {"||"} code challenges courtesy of <a href="https://projecteuler.net/">Project Euler</a></p>
    </footer>
  )
}

export default Footer;