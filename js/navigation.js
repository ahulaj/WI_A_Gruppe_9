// WI_A_Gruppe_9

// Zeigt die gewählte Ansicht an und markiert den passenden Navigationsbutton
function wechsleAnsicht(ansichtName) {
  document.querySelectorAll(".ansicht").forEach(ansicht => ansicht.classList.remove("aktiv"));
  document.querySelectorAll(".nav-button").forEach(button => {
    button.classList.remove("aktiv");
    button.removeAttribute("aria-current");
  });

  document.getElementById("ansicht-" + ansichtName).classList.add("aktiv");

  const aktiverButton = document.querySelector('.nav-button[data-ansicht="' + ansichtName + '"]');
  aktiverButton.classList.add("aktiv");
  aktiverButton.setAttribute("aria-current", "page");
}
