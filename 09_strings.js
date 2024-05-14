
/**
 * utilisez les nouveau guillets ` (alt gr + 7) pour concaténer le nom et le prénom passé en paramètre
 * Renvoi le résultat
 * 
 * exemple: "John", "Doe" => "John Doe"
 * 
 * contrainte:
 *  - ne pas utiliser l'opérateur +
 *  - ne pas utiliser la fonction concat de String
 */

/**
 * Concatène le prénom et le nom en utilisant les littéraux de gabarit.
 * @param {string} firstName - 
 * @param {string} lastName - 
 */
const concat = (firstName, lastName) => `${firstName} ${lastName}`;

module.exports = {concat};

// Exemple d'utilisation :
console.log(concat('John', 'Doe')); // Affichera "John Doe"

module.exports = {concat};









