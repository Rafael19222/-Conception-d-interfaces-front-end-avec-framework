import InscriptionForm from '../components/InscriptionForm.jsx';

function InscriptionPage() {
  return (
    <div className="container page">
      <h1>Inscription</h1>
      <p className="muted">Remplis le formulaire pour t'inscrire à une formation.</p>
      <InscriptionForm />
    </div>
  );
}

export default InscriptionPage;
