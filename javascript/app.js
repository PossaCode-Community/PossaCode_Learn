const person = {
  nom: "Sanctifier", //Type string (Chaine de caractères)
  age: 20, //Type number (type  nombre)
  adresse: {
    ville: "Brazzaville",
    quarrier: "Kombo",
  },
  presentation: function () {
    console.log(
      `Bonjour je m'appelle ${this.nom}, j'ai ${this.age} ans et je vis à ${this.adresse.ville} dans le quartier de ${this.adresse.quarrier}.`
    );
  },
};

person.presentation();
