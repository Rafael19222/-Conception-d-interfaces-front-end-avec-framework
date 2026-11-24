import { useState } from 'react';
import useFetch from '../hooks/useFetch.jsx';
import { API_URLS, TEXT_FIELDS } from '../constants/config.js';
import { validateInscription } from '../utils/validation.js';
import { getTitle } from '../utils/helpers.js';

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  course: '',
  consent: false,
};

function InscriptionForm() {
  const { data, error: coursesError } = useFetch(API_URLS.courses);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const courses = data?.courses ?? [];

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((previous) => ({ ...previous, [name]: type === 'checkbox' ? checked : value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateInscription(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      setValues(INITIAL_VALUES);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {isSubmitted && (
        <p className="success" role="status">
          ✅ Inscription envoyée avec succès !
        </p>
      )}

      {TEXT_FIELDS.map(({ name, label, type }) => (
        <div className="form__group" key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            name={name}
            type={type}
            className="input"
            value={values[name]}
            onChange={handleChange}
          />
          {errors[name] && <span className="error">{errors[name]}</span>}
        </div>
      ))}

      <div className="form__group">
        <label htmlFor="course">Formation</label>
        <select id="course" name="course" className="input" value={values.course} onChange={handleChange}>
          <option value="">-- Choisir une formation --</option>
          {courses.map((course, index) => (
            <option key={course.id ?? index} value={getTitle(course)}>
              {getTitle(course)}
            </option>
          ))}
        </select>
        {coursesError && <span className="error">Formations indisponibles : {coursesError}</span>}
        {errors.course && <span className="error">{errors.course}</span>}
      </div>

      <div className="form__group form__group--check">
        <input id="consent" name="consent" type="checkbox" checked={values.consent} onChange={handleChange} />
        <label htmlFor="consent">J'accepte les conditions d'inscription</label>
      </div>
      {errors.consent && <span className="error">{errors.consent}</span>}

      <button type="submit" className="btn">S'inscrire</button>
    </form>
  );
}

export default InscriptionForm;
