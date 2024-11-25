export function creerClasseDynamique() {
    const nomClasse = process.env.NOM_CLASSE;
  
    if (!nomClasse) {
      throw new Error("CLASS_NAME n'est pas défini comme variable d'environnement.");
    }
  
    return {
      [nomClasse]: class {
        constructor() {
          console.log(`La classe '${nomClasse}' a été créée.`);
        }
  
        afficherNomClasse() {
          return `Nom de la classe: ${nomClasse}`;
        }
      }
    }[nomClasse];
  }
