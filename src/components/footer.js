import React, { useState } from "react";

const Footer = () => {
  const [closed, setClosed] = useState(false);

  return (
    <footer style={{ display: closed ? "none" : "inherit" }}>
      <span>
        Platforma Finanțarea publică a activităților nonprofit este dezvoltata
        de catre Asociatia Centrul pentru Legislatie Nonprofit în cadrul
        proiectului ”Îmbunătățirea cadrului juridic privind finanțarea publică a
        organizațiilor neguvernamentale” și este finanșat cu sprijinul Fondului
        Social European prin Programul Operațional Capacitate Administrativă.
        Conținutul acestei platforme reflectă numai punctul de vedere al
        Asociației Centrul pentru Legislație Nonprofit şi Comisia nu este
        responsabilă pentru informatiile pe care le conține.
      </span>
      <button onClick={() => setClosed(true)}>X</button>
    </footer>
  );
};

export default Footer;
