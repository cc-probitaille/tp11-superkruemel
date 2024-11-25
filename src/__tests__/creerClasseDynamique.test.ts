import { creerClasseDynamique } from "../creerClasseDynamique";

describe("Création de classes par réflexion", () => {
    afterEach(() => {
        delete process.env.NOM_CLASSE;
    });

    test("créer une classe avec le nom donné", () => {
        process.env.NOM_CLASSE = "TestClass";

        const classe = creerClasseDynamique();
        const instance = new classe();

        expect(instance.afficherNomClasse()).toBe("Nom de la classe: TestClass");
    });

    test("devrait lever une erreur si CLASS_NAME n'est pas défini", () => {
        expect(() => creerClasseDynamique()).toThrow(
            "CLASS_NAME n'est pas défini comme variable d'environnement."
        );
    });
});
