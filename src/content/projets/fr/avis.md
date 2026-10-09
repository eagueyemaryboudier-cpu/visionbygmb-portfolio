---
order: 3
tab: {title: "Analyse multilingue d’avis clients", kpi: "3 langues", kpiLabel: "FR · PT · EN", context: "Au-delà de quelques centaines d’avis, la lecture manuelle ne suffit plus. Le projet prolonge l’étude Olist avec un outil réutilisable sur d’autres données.", method: "Modèle multilingue XLM-T exécuté en local (ONNX int8), abstention « Indéterminé » sous un score de 0,60, thèmes par mots et expressions modifiables.", resultLabel: "Résultat", result: "Un outil qui importe CSV, Excel, JSON, DOCX ou PDF, signale les cas à relire et exporte les corrections. Démo en ligne sur 36 avis fictifs."}
kpis: [[3,0,""," langues","français, portugais, anglais"]]
cat: "B"
offer: "B · Gagner du temps"
title: "Analyser des milliers d’avis clients en quelques minutes."
summary: "Outil d’analyse multilingue d’avis : sentiment par modèle local, thèmes, cas incertains à relire et exports. Démo en ligne sans installation."
stack: "Python · NLP local · ONNX"
shot: "démo de l’analyse d’avis"
image: "/projets/avis/demo.png"
heroImage: "/projets/avis/demo.png"
caseOffer: "B · Gagner du temps · Outil d’analyse"
question: "Comment comprendre ce que disent des milliers d’avis clients sans les lire un par un ?"
lede: "Analyse d’avis clients prolonge l’étude Olist avec un outil réutilisable sur d’autres données : il transforme des fichiers d’avis en une vue exploitable, avec sentiments, thèmes, cas à relire et exports."
rebuild: false
stages: [1,1,1,1]
meta: [["Modèle","XLM-T multilingue, local (ONNX int8)"],["Langues","Français, portugais, anglais"],["Formats","CSV, Excel, JSON, TXT, DOCX, PDF"],["Données","Traitées en local, sans service extérieur"]]
hero: "démo de l’analyse d’avis"
results: ["Sentiment par modèle multilingue local, avec abstention « Indéterminé » quand le score est trop faible","Thèmes par mots et expressions, modifiables","Correction manuelle, le sentiment initial restant dans les exports","Imports jusqu’à 100 Mo et 500 000 lignes, traités par lots de 64 avis","Exports CSV et JSON","Démo en ligne sur 36 avis fictifs préanalysés"]
ctaTitle: "Vous recevez beaucoup d’avis ou de messages ?"
pme: "Avis Google, e-mails, tickets de support : le même outil classe vos retours clients et signale ceux qui méritent une relecture."
ctaLabel: "Voir l’offre Assistant IA"
links: [["Tester la démo →","https://eagueyemaryboudier-cpu.github.io/olist-data-analysis/"],["Consulter le code sur GitHub →","https://github.com/eagueyemaryboudier-cpu/olist-data-analysis/tree/main/avis-tri"]]
cta: "services"
---

## La question

Au-delà de quelques centaines d’avis, la lecture manuelle ne suffit plus. L’outil prend un fichier d’avis (CSV, Excel, JSON, texte, DOCX ou PDF) et en donne une vue d’ensemble : sentiments, thèmes, contradictions entre la note et le texte, doublons.

## Un modèle multilingue qui tourne en local

Le sentiment est calculé par XLM-T de Cardiff NLP, un modèle multilingue converti en ONNX et quantifié en int8. Il fonctionne sur l’ordinateur, sans envoyer les avis à un service extérieur. Les avis longs sont découpés en segments de 256 tokens, tous analysés.

Quand le meilleur score est inférieur à 0,60, ou trop proche du deuxième, le résultat est « Indéterminé » plutôt qu’un classement forcé. Un avis qui contient des passages nettement positifs et négatifs est classé « Mixte ». Ces cas sont proposés à la relecture.

## Une interface pour explorer et corriger

![Tableau de bord de la démo : sentiments et thèmes détectés](/projets/avis/tableau.png)

Les filtres, graphiques et exports fonctionnent dans le navigateur. Les thèmes reposent sur des mots et expressions que l’utilisateur peut adapter à son domaine. Chaque correction manuelle est exportée avec le sentiment initial.

## Ce que le contrôle mesure, et ce qu’il ne mesure pas

Sur 24 exemples construits (8 en français, 8 en portugais, 8 en anglais), le modèle donne 23 classements attendus et une abstention. Ce contrôle n’est pas un benchmark indépendant : il ne permet pas d’annoncer une précision en production. Le modèle a été entraîné sur des tweets, un décalage avec des avis marchands est donc possible, et l’ironie ou les fautes peuvent encore produire des erreurs.
