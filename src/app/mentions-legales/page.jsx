"use client";

import "../../styles/mentions-legales.css";

export default function MentionsLegalesPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-container">
          <div className="legal-heading">
            <span className="legal-kicker">Informations</span>
            <h1 className="legal-title">Mentions Légales</h1>
            <p className="legal-intro">
              Vous trouverez ci-dessous les informations légales relatives au site
              Mohamed Henni Production.
            </p>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-container">
          <div className="legal-grid">

            {/* EDITEUR */}
            <article className="legal-card">
              <h2>Éditeur du site</h2>

              <p><strong>MOHAMED HENNI PRODUCTION</strong></p>
              <p>SARL – Société à responsabilité limitée</p>

              <p>SIREN : 911 661 122</p>
              <p>SIRET : 911 661 122 00026</p>

              <p>
                Siège social : <br/>
                1403 Rue du Banc Vert <br/>
                59640 Dunkerque <br/>
                France
              </p>

              <p>
                Directeur de publication : <strong>Mohamed Henni</strong>
              </p>

              <p>
                Email :{" "}
                <a href="mailto:mohamedhenniproduction@gmail.com">
                  mohamedhenniproduction@gmail.com
                </a>
              </p>

              <p>
                Téléphone :{" "}
                <a href="tel:+33760121990">
                  +33 7 60 12 19 90
                </a>
              </p>
            </article>


            {/* HEBERGEMENT */}
            <article className="legal-card">
              <h2>Hébergement</h2>

              <p>
                Le site est hébergé par <strong>Vercel Inc.</strong>
              </p>

              <p>
                340 S Lemon Ave #4133 <br/>
                Walnut, CA 91789 <br/>
                États-Unis
              </p>

              <p>
                Site web : <span>https://vercel.com</span>
              </p>
            </article>


            {/* DOMAINE */}
            <article className="legal-card">
              <h2>Nom de domaine</h2>

              <p>
                Le nom de domaine du site est enregistré auprès de{" "}
                <strong>IONOS SARL</strong>.
              </p>

              <p>
                7 Place de la Gare <br/>
                57200 Sarreguemines <br/>
                France
              </p>

              <p>
                Site web : <span>https://www.ionos.fr</span>
              </p>
            </article>


            {/* PROPRIETE INTELLECTUELLE */}
            <article className="legal-card">
              <h2>Propriété intellectuelle</h2>

              <p>
                L’ensemble du contenu présent sur ce site, incluant notamment les
                textes, images, vidéos, graphismes, logo, identité visuelle et
                éléments multimédias, est protégé par le droit de la propriété
                intellectuelle.
              </p>

              <p>
                Toute reproduction, représentation, diffusion, adaptation ou
                exploitation, totale ou partielle, sans autorisation écrite
                préalable, est strictement interdite.
              </p>
            </article>


            {/* RESPONSABILITE */}
            <article className="legal-card">
              <h2>Responsabilité</h2>

              <p>
                L’éditeur du site s’efforce d’assurer l’exactitude et la mise à jour
                des informations diffusées. Toutefois, il ne saurait être tenu
                responsable d’erreurs, d’omissions ou d’une indisponibilité temporaire
                du site.
              </p>
            </article>


            {/* DONNEES */}
            <article className="legal-card">
              <h2>Données personnelles</h2>

              <p>
                Les données éventuellement collectées via le formulaire de contact
                sont utilisées uniquement dans le cadre des échanges commerciaux
                ou de la relation client.
              </p>

              <p>
                Conformément à la réglementation en vigueur, vous pouvez demander
                l’accès, la rectification ou la suppression de vos données en
                écrivant à :
              </p>

              <p>
                <a href="mailto:mohamedhenniproduction@gmail.com">
                  mohamedhenniproduction@gmail.com
                </a>
              </p>
            </article>


            {/* COOKIES */}
            <article className="legal-card">
              <h2>Cookies</h2>

              <p>
                Le site peut utiliser des cookies ou traceurs techniques nécessaires
                à son bon fonctionnement et à l’amélioration de l’expérience
                utilisateur.
              </p>

              <p>
                En cas d’ajout d’outils statistiques ou marketing, une bannière
                de consentement adaptée pourra être mise en place conformément
                à la réglementation en vigueur.
              </p>
            </article>

          </div>
        </div>
      </section>
    </main>
  );
}