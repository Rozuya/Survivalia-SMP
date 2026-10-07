SURVIVALIA SMP — SITE WEB V2

Pages:
- index.html : accueil, bannière, IP copiable, Bedrock bientôt
- server.html : Terralith + mods + commandes/raccourcis utiles
- join.html : guide Discord → Falix → Minecraft
- styles.css : thème sombre/gaming/vert forêt
- script.js : menu mobile + copie IP
- assets/survivalia-smp.jpg : bannière fournie

LOGO:
La bannière fournie est utilisée comme placeholder dans le header.
Ajoutez votre logo séparé dans assets/logo-survivalia.png puis remplacez
src="assets/survivalia-smp.jpg" par src="assets/logo-survivalia.png"
dans les 3 HTML.

DISCORD:
Tous les href="#" liés au Discord sont des placeholders. Remplacez-les
par votre véritable invitation Discord.

COMMANDES:
Les raccourcis indiqués sont ceux demandés pour le site. Certains raccourcis
de mods peuvent être personnalisés dans Options > Contrôles selon la configuration
du pack/mod serveur.


DISCORD:
Lien officiel intégré partout où il est utile :
https://discord.gg/4M2A5RjQ4A

GITHUB PAGES — ÉVITER LES 404:
1. Mets le CONTENU de ce dossier à la racine du dépôt GitHub :
   index.html, server.html, join.html, 404.html, styles.css, script.js, assets/
2. Dans Settings > Pages, choisis "Deploy from a branch".
3. Sélectionne ta branche (souvent main) et le dossier "/ (root)".
4. Enregistre. La page d'accueil est index.html.
5. Les liens internes utilisent des chemins relatifs "./..." pour fonctionner
   aussi sur une URL du type https://toncompte.github.io/nom-du-repo/
6. Ne renomme pas index.html et ne déplace pas assets/ hors de la racine.
7. Le fichier .nojekyll est présent pour un hébergement statique simple.
8. 404.html est inclus comme page de secours si une URL invalide est visitée.
