function envoi() {
  var book_1 = document.getElementById("book_1").value;
  var book_2 = document.getElementById("book_2").value;
  var book_3 = document.getElementById("book_3").value;
  var cout=0;
  if (book_1 == "" && book_2 == "" && book_3 == "") {
      alert("Entrez au moins une quantité s'il vous plaît.");
  }
  else {
      if ((book_1.match(/^\d*/g) == book_1) && (book_2.match(/^\d*/g) == book_2) && (book_3.match(/^\d*/g) == book_3)) {
        document.getElementById("container").innerHTML += `<p id = "line"><br></p>`;
        if (book_1 != "") {
            document.getElementById("container").innerHTML += `<p>Basic XHTML (Quantité = <b>${book_1}</b>): $${(parseFloat(book_1) * parseFloat(19.99)).toFixed(2)}</p>`;
            cout += parseFloat(book_1) * parseFloat(19.99);
        }
        if (book_2 != "") {
            document.getElementById("container").innerHTML += `<p>Intro to PHP (Quantité = <b>${book_2}</b>): $${(parseFloat(book_2) * parseFloat(86)).toFixed(2)}</p>`;
            cout += parseFloat(book_2) * parseFloat(86);
        }
        if (book_3 != "") {
            document.getElementById("container").innerHTML += `<p>Advanced JQuery (Quantité = <b>${book_3}</b>): $${(parseFloat(book_3) * parseFloat(55)).toFixed(2)}</p>`;
            cout += parseFloat(book_3) * parseFloat(55);
        }
        document.getElementById("container").innerHTML += `<p><br>Coût total global = <b>$${cout.toFixed(2)}</b></p>`;
      }
      else {
          alert("Les quantités doivent être uniquement des entiers.");
      }
  }
}

function acOff() {
    document.getElementById("frm").autocomplete = "off";
}
window.addEventListener ("load", acOff, false);
window.addEventListener ("submit", envoi, false);
