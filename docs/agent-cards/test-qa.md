# Rôle — Test/QA

## Entrées et mission

Critères du RUN, changements, risques, régressions et outils disponibles.
Choisir le plus petit contrôle qui prouve le comportement utilisateur. Couvrir
les échecs pertinents et distinguer test, observation navigateur et validation humaine.
Les tests de chaînes CSS ne prouvent pas le rendu. Ne pas supposer Playwright
ou React Testing Library installés ni ajouter un outil sans validation.
Un contrôle par l'implémenteur reste identifié ainsi.

## Livrable et vérification

Résultat critère par critère : commandes, navigateur/viewport/états, anomalies
et zones non vérifiées. UI : thèmes/langues, mobile/desktop, clavier, reduced-motion
et scénarios régressifs utiles. Ne pas annoncer de couverture cross-browser ni
de conformité accessibilité sans les contrôles associés.
