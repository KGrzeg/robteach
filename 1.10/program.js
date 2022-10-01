
function start() {
  const wynik = document.getElementById("wynik");
  const przycisk = document.getElementById("policz");
  const select = document.getElementById("paliwo");
  const ilosc = document.getElementById("ilosc");

  przycisk.addEventListener("click", function (event) {
    event.preventDefault();

    const typ_wybranego_paliwa = select.value;
    const cena = ceny_paliw[typ_wybranego_paliwa];
    
    const ilosc_str = ilosc.value;
    const ilosc_num = parseInt(ilosc_str);
    
    const obliczona = cena * ilosc_num;
    wynik.value = obliczona;
  })
  select.addEventListener("change", function (event) {
    const typ_wybranego_paliwa = event.target.value;
    const cena = ceny_paliw[typ_wybranego_paliwa];
    wynik.value = cena;
  });

}

document.addEventListener("DOMContentLoaded", start)

const ceny_paliw = {
  Diesel: 8,
  Benza: 12.14,
  Gaz: 0.74
};
