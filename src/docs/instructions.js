import React from 'react'

export const instructions = [
    {
        title: 'Informații de utilizare a platformei',
        text: <p>Platforma oferă acces la fondurile oferite din 2007 până în prezent diverselor ONG-uri de pe teritoriul României.<br /><br /> Ecranul prinicipal afișează harta României, cu o distrbutie pe județe a fondurilor.<br /><br />Datele pot fi vizualizate atât sub formă de harta, cât și sub formă de grafic, tabel, fișier PDF sau fișier CSV.<br /><br />Toate aceste tipuri de date pot fi descărcate local: săgeata de descărcare este prezența în partea de sus a meniului de selecție.</p>
    },
    {
        title: 'Descriere filtre',
        text: <div><p>În partea din stânga, există meniul cu filtre, ce pot fi folosite pentru a restrânge afișarea datelor în funcție de diversele criterii prezentate. Modificările au loc în timp real.<br /><br />Pentru a șterge un filtru, apăsați pe X-ul din dreptul lui, sau apăsați pe X-ul de deasupra filtrelor pentru o ștergere a tuturor filtrelor.</p><br></br><p>Este important de menționat faptul că lipsa unui filtru înseamnă automat 'Selectează tot' pentru categoria respectivă; așadar, la accesarea site-ului sunt afișate inițial toate datele disponibile.</p></div>,
    },
    {
        title: 'Descriere hartă',
        text: <div><p>Pentru fiecare județ sunt oferite următoarele informații:</p> <ul><li>Suma totală de fonduri primită în toți anii de toate ONG-urile din acel județ</li><li>Numărul de ONG-uri din acel județ</li><li>Suma medie primită de fiecare ONG, calculată pe toți anii.</li></ul><p>Intensitatea culorii este direct proporțională cu suma totală din județul respectiv.</p><br /><br /><p>Pentru a accesa exclusiv datele unui județ anume, dați click pe acesta și veți fi duși la tabel, unde veți găsi lista cu ONG-urile din acel județ.</p></div>
    },
    {
        title: 'Descriere grafic',
        text: <div><p>Graficul afișează inițial suma totală (din toți anii) pentru fiecare județ. Se poate selecta și afișarea numărului de ONG-uri pentru fiecare județ, sau afișarea unei sume medii per ONG pentru fiecare județ.</p><br /><br /><p>Filtrele vor restrânge selecția afișată, iar în cazul în care este selectat un singur județ, vor apărea tabele noi cu informații privitoare la ONG-urile din acel județ, împărțite fie pe domenii, legislații sau ani.</p></div>
    },
    {
        title: 'Descriere tabel',
        text: <div>Tabelul afișează toate ONG-urile conforme selecției. Dacă nu este aplicat niciun filtru, sunt afișate toate ONG-urile din baza de date. Coloanele se pot sorta crescător sau descrescător.</div>
    },

]