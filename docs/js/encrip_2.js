function encriptar() {
  var texto = document.getElementById("cod").value;
    console.log("El texto original es:", texto);

    var encriptacion = texto
    .replaceAll("e", "enter")
    .replaceAll("é", "éntér")
    .replaceAll("E", "EntEr")
    .replaceAll("i", "imes")
    .replaceAll("í", "ímés")
    .replaceAll("I", "ImEs")
    .replaceAll("a", "ai")
    .replaceAll("á", "áí")
    .replaceAll("A", "AI")
    .replaceAll("o", "ober")
    .replaceAll("ó", "óbér")
    .replaceAll("O", "ObEr")
    .replaceAll("u", "ufat")
    .replaceAll("ú", "úfát")
    .replaceAll("U", "UfAt");
    console.log("El texto encriptado es:", encriptacion);
    limpiar_pantalla_selectivo();
    mostrar_rdo(encriptacion);

}

function desencriptar() {
  var texto = document.getElementById("cod").value;
    console.log("El texto encriptado es:", texto);

    var desencriptacion = texto
    .replaceAll("enter", "e")
    .replaceAll("éntér", "é")
    .replaceAll("EntEr", "E")
    .replaceAll("imes", "i")
    .replaceAll("ímés", "í")
    .replaceAll("ImEs", "I")
    .replaceAll("ai", "a")
    .replaceAll("áí", "á")
    .replaceAll("AI", "A")
    .replaceAll("ober", "o")
    .replaceAll("óbér", "ó")
    .replaceAll("ObEr", "O")
    .replaceAll("ufat", "u")
    .replaceAll("úfát", "ú")
    .replaceAll("UfAt", "U");
    console.log("El texto desencriptado es:", desencriptacion);
    limpiar_pantalla_selectivo();
    mostrar_rdo(desencriptacion);
}

function limpiar_pantalla_selectivo() {
  var limpieza = ``;
  document.getElementById("cod").value = "Ingrese el texto aquí";
  document.getElementById("tercer-col").innerHTML = limpieza;
}

function mostrar_rdo(texto) {
  document.getElementById(
    "tercer-col"
  ).innerHTML = `<p class="resultado" id="resultado"> ${texto} </p>`;
  agregar_boton_copiar();
}


function agregar_boton_copiar() {
  document.getElementById(
    "tercer-col"
  ).innerHTML += `  <input type="button" class="copiar" value="Copiar" id="copiar" onclick="copiar()"/>`;
}

function copiar() {
  var auxiliar = document.createElement("input");
  auxiliar.setAttribute(
    "value",
    document.getElementById("resultado").innerHTML
  );
  document.body.appendChild(auxiliar);
  auxiliar.select();
  document.execCommand("copy");
  document.body.removeChild(auxiliar);
  console.log(auxiliar);
}
