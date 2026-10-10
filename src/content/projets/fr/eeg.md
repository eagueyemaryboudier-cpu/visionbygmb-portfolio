---
order: 4
tab: {title: "Will They Wake Up — EEG", kpi: "1,5 To", kpiLabel: "d’EEG explorés", context: "Après un arrêt cardiaque, classifier l’issue neurologique des patients à partir de leurs signaux EEG (label « Good » contre les autres issues). Projet collectif.", method: "Huit canaux EEG rééchantillonnés à 100 Hz, segments de 15 secondes toutes les dix minutes, deux couches LSTM (64 et 32 unités) avec dropout et arrêt anticipé.", resultLabel: "Bilan", result: "Des scores trop élevés pour être crédibles (96,875 % d’accuracy, rappel de 0) faute de séparation par patient. Un prototype d’expérimentation, présenté comme une démarche ; prochaine étape : un protocole d’évaluation solide."}
kpis: [[1.5,1,""," To","d’EEG explorés"]]
cat: "R"
offer: "Recherche"
title: "Will They Wake Up — Deep Learning appliqué aux signaux EEG"
summary: "Classifier l’issue neurologique de patients après un arrêt cardiaque à partir de leurs signaux EEG : pipeline Google Cloud Storage, réseau LSTM sous TensorFlow/Keras."
stack: "Deep learning · LSTM · GCP"
shot: "signal EEG et prédiction"
image: "/projets/eeg/pipeline.svg"
caseOffer: "Projet collectif · Séries temporelles · Intelligence artificielle appliquée à la santé"
question: "Will They Wake Up — Deep Learning appliqué aux signaux EEG"
lede: "Après un arrêt cardiaque, les enregistrements électroencéphalographiques (EEG) permettent d’étudier l’activité électrique du cerveau. Ce projet explore l’utilisation du deep learning pour classifier l’issue neurologique des patients à partir de ces signaux, en distinguant les observations associées au label « Good » des autres issues."
rebuild: false
stages: [1,1,1,0]
meta: [["Données","1,5 To d’EEG · 8 canaux, 100 Hz"],["Modèle","LSTM 64 + 32 unités"],["Infrastructure","Google Cloud Storage · BigQuery"],["Cadre","Projet collectif"]]
hero: "Schéma du pipeline"
heroImage: "/projets/eeg/pipeline.svg"
results: ["Préparation de signaux EEG multicanaux pour l’apprentissage.","Développement d’un modèle de classification de séquences avec TensorFlow/Keras.","Organisation du stockage des données sur Google Cloud Storage et intégration de l’enregistrement des métriques dans BigQuery.","Sauvegarde des modèles et des résultats d’expérimentation.","Ébauche d’une interface de démonstration avec Streamlit et FastAPI."]
ctaTitle: "Vous avez des données de capteurs ?"
pme: "Machines, objets connectés, mesures en continu : les mêmes méthodes de traitement du signal s'appliquent."
ctaLabel: "En parler"
links: [["Consulter le code sur GitHub →","https://github.com/kemetsamourai/will-they-wake-up"]]
cta: "contact"
---

## Notre approche

Nous avons développé un pipeline allant de la récupération des données sur Google Cloud Storage à l’entraînement d’un réseau de neurones récurrent.

Les enregistrements sont préparés en sélectionnant huit canaux EEG, puis rééchantillonnés à 100 Hz. Des segments de 15 secondes sont extraits toutes les dix minutes et normalisés pour constituer les séquences d’entrée du modèle.

La classification repose sur deux couches LSTM, de 64 et 32 unités, associées à des couches de dropout. L’entraînement utilise un arrêt anticipé et la sauvegarde du meilleur modèle selon la perte de validation. Plusieurs expériences explorent différentes fenêtres temporelles après l’arrêt cardiaque.

## Ce que l’évaluation a révélé

Les scores obtenus étaient trop élevés pour être crédibles. Une expérience affiche 96,875 % d’accuracy en validation avec un rappel de 0 : le modèle ne détectait aucune issue favorable. La validation et le test reprenaient les derniers lots de segments, sans séparation par patient, si bien que des segments d’un même patient pouvaient se retrouver dans plusieurs ensembles. Nous présentons donc ce projet comme une démarche, pas comme un résultat.

## Enseignements et perspectives

Ce projet nous a confrontés aux difficultés du traitement de données physiologiques : volume des enregistrements, préparation des signaux et évaluation de séquences issues d’un même patient.

Il souligne notamment l’importance de séparer les patients entre les ensembles d’entraînement, de validation et de test, et d’examiner le rappel en complément de l’accuracy. Le prototype constitue une base d’expérimentation ; les prochaines étapes sont de renforcer ce protocole d’évaluation, d’unifier le prétraitement et de connecter l’interface au modèle entraîné.

**Technologies :** Python · NumPy · SciPy · pandas · scikit-learn · TensorFlow/Keras · Google Cloud Storage · BigQuery · Streamlit · FastAPI
