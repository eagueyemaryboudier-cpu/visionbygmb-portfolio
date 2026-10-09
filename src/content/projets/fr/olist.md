---
order: 1
tab: {title: "Croissance d’une marketplace e-commerce", kpi: "+139,9 %", kpiLabel: "croissance analysée", context: "Marketplace brésilienne Olist : 96 211 commandes livrées, des milliers de vendeurs, une croissance de +139,9 % sur la période.", method: "26 hypothèses testées : contrôle qualité, tests statistiques corrigés, SQL, projet Power BI.", resultLabel: "Résultat", result: "20 % des vendeurs font 82,2 % du GMV. 6,8 % de retards, qui font perdre 0,57 point de satisfaction. Plan d’action mesurable."}
kpis: [[96211,0,"","","commandes livrées"],[139.9,1,"+"," %","de croissance"]]
cat: "A"
offer: "A · Comprendre"
title: "Accompagner la croissance d’une marketplace sans dégrader les livraisons."
summary: "26 hypothèses testées sur 96 211 commandes livrées : contrôle qualité, tests statistiques corrigés, SQL, projet Power BI et plan d’action mesurable."
stack: "Python · SQL · Power BI"
shot: "ventes livrées par mois"
image: "/projets/olist/01_ventes.png"
heroImage: "/projets/olist/01_ventes.png"
caseOffer: "A · Comprendre · Tableau de bord"
question: "Comment accompagner la croissance d'une marketplace tout en améliorant les livraisons et l'expérience client ?"
lede: "Une étude de 26 hypothèses sur neuf tables Olist, de janvier 2017 à août 2018, traduite en recommandations mesurables. Il s'agit d'un cas portfolio : Olist n'a pas commandé cette mission."
rebuild: false
stages: [1,1,1,2]
meta: [["Données","Olist, 9 tables, 96 211 commandes livrées"],["Méthode","26 hypothèses, tests corrigés (Benjamini–Hochberg)"],["Outils","Python, SQL, Power BI"],["Livrables","Notebook, 15 requêtes SQL, rapport, projet Power BI"]]
hero: "Ventes livrées par mois et GMV"
links: [["Dépôt GitHub","https://github.com/eagueyemaryboudier-cpu/olist-data-analysis"],["Étude complète","https://github.com/eagueyemaryboudier-cpu/olist-data-analysis/blob/main/ETUDE_DE_CAS.md"],["Notebook","https://github.com/eagueyemaryboudier-cpu/olist-data-analysis/blob/main/notebooks/01_etude_olist.ipynb"]]
results: ["96 211 commandes livrées analysées, 26 hypothèses testées avec correction des tests multiples","Croissance de +139,9 % portée par le volume ; 20 % des vendeurs réalisent 82,2 % du GMV","Retard de 6,8 % ; note inférieure de 0,57 point après réception","Plan d'action en cinq priorités, chacune avec son indicateur et sa validation"]
ctaTitle: "Vous vendez en ligne ?"
pme: "Ces données existent dans le back-office de toute boutique en ligne. Le même travail, appliqué à vos commandes, sert de base à un tableau de bord fiable."
ctaLabel: "Voir l'offre Tableau de bord"
cta: "services"
---

## La question métier

Comment accompagner la croissance des ventes tout en améliorant la fiabilité des livraisons et l'expérience client ? L'étude couvre 26 hypothèses sur les ventes, les produits, les vendeurs, les paiements, la géographie, la satisfaction et le réachat.

## Contrôler les sources avant d'analyser

Les neuf tables sont reliées au bon niveau de détail : articles, paiements et avis sont agrégés avant d'être joints aux commandes. Clés, références, chronologies et montants sont vérifiés. Les paiements concordent avec articles et port pour 99,7 % des commandes livrées, et les anomalies restent visibles au lieu d'être corrigées arbitrairement.

## Une croissance portée par le volume

De janvier à août, les commandes livrées passent de 21 998 en 2017 à 52 783 en 2018 (+139,9 %), alors que le panier moyen reste stable (+0,5 %). L'activité est concentrée : 20 % des vendeurs réalisent 82,2 % du GMV, ce qui justifie un suivi prioritaire des vendeurs clés.

![Concentration du GMV par vendeur](/projets/olist/05_vendeurs.png)

## Retard et satisfaction : un résultat qui dépend des avis retenus

6,8 % des commandes livrées arrivent en retard. Parmi les avis écrits après réception, un retard est associé à une note inférieure de 0,57 point (IC 95 % : de −0,63 à −0,51). Mais seuls 29,9 % des avis de commandes en retard sont écrits après réception : inclure ou non les autres change fortement la lecture. Ces écarts sont des associations, pas des effets causaux.

![Satisfaction selon le retard](/projets/olist/02_retards_avis.png)

## Des recommandations à tester, pas des gains annoncés

Le plan d'action propose cinq priorités, chacune avec un indicateur et un protocole de validation : auditer les commandes multi-vendeurs (note inférieure de 1,46 point), adapter la promesse de livraison aux flux géographiques (15,2 jours entre États contre 7,9 dans le même État), sécuriser les vendeurs clés et tester une relance après réception avec un groupe témoin. Le projet Power BI (4 pages, 27 mesures) reste à valider dans Power BI Desktop.

![Taux de retard par État](/projets/olist/04_etats.png)

*Source : Brazilian E-Commerce Public Dataset by Olist (Kaggle). Graphiques issus du dépôt du projet.*
