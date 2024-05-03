document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Pour empêcher la soumission du formulaire et le rechargement de la page
    // Ici, vous pourriez ajouter la logique pour valider les entrées de l'utilisateur
    // et ensuite les envoyer à un serveur si elles sont valides, par exemple :

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rememberMe = document.getElementById("rememberMe").checked;

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);

    // Vous devrez remplacer ceci par un appel AJAX/ Fetch pour envoyer les données au serveur
  });
