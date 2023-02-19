import React from "react";
import CookieConsent from "react-cookie-consent";

const Cookies = ({ cookies, setCookies }) => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Prihvatam"
      cookieName="cook"
      style={{ background: "linear-gradient(-168.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)", width: "70vw", margin: "0 auto", left: '0', right: '0', borderRadius: '30px', padding: '0 10px'}}
      buttonStyle={{ background: 'linear-gradient(157.81deg, #def9fa -43.27%, #bef3f5 -21.24%, #9dedf0 12.19%, #7de7eb 29.82%, #5ce1e6 51.94%, #33bbcf 90.29%)', color: "#252525", fontSize: "1rem", borderRadius: '15px' }}
      expires={150}
    >
      Kompanija Digist koristi kolačiće u cilju poboljšanja, kako bi vam
      pružila najbolje iskustvo na našoj veb stranici.
    </CookieConsent>
  );
};

export default Cookies;
