// Fonctions de validation du formulaire d'inscription

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^(?:\+33|0)[1-9](?:[\s.-]?\d{2}){4}$/;

/**
 * Vérifie le format d'un email.
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => EMAIL_REGEX.test(email.trim());

/**
 * Vérifie le format d'un numéro de téléphone français.
 * @param {string} phone
 * @returns {boolean}
 */
export const isValidPhone = (phone) => PHONE_REGEX.test(phone.trim());

/**
 * Valide tout le formulaire d'inscription.
 * @param {Object} values - valeurs des champs
 * @returns {Object} erreurs { champ: message } (vide si tout est valide)
 */
export const validateInscription = (values) => {
  const errors = {};

  if (values.firstName.trim().length < 2) {
    errors.firstName = 'Le prénom doit contenir au moins 2 caractères.';
  }
  if (values.lastName.trim().length < 2) {
    errors.lastName = 'Le nom doit contenir au moins 2 caractères.';
  }
  if (!isValidEmail(values.email)) {
    errors.email = "L'adresse email n'est pas valide.";
  }
  if (!isValidPhone(values.phone)) {
    errors.phone = 'Numéro invalide (ex : 06 12 34 56 78).';
  }
  if (!values.course) {
    errors.course = 'Choisis une formation.';
  }
  if (!values.consent) {
    errors.consent = 'Tu dois accepter les conditions.';
  }

  return errors;
};
