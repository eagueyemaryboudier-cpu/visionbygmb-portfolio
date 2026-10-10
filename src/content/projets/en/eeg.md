---
order: 4
tab: {title: "Will They Wake Up — EEG", kpi: "1.5 TB", kpiLabel: "of EEG explored", context: "After cardiac arrest, classifying patients’ neurological outcome from their EEG signals (“Good” label versus other outcomes). Team project.", method: "Eight EEG channels resampled to 100 Hz, 15-second segments every ten minutes, two LSTM layers (64 and 32 units) with dropout and early stopping.", resultLabel: "Assessment", result: "Scores too high to be credible (96.875% accuracy, recall of 0) because patients were not split across sets. An experimental prototype, presented as an approach; next step: a sound evaluation protocol."}
kpis: [[1.5,1,""," TB","of EEG explored"]]
cat: "R"
offer: "Research"
title: "Will They Wake Up — Deep learning on EEG signals"
summary: "Classifying patients’ neurological outcome after cardiac arrest from their EEG signals: Google Cloud Storage pipeline, LSTM network in TensorFlow/Keras."
stack: "Deep learning · LSTM · GCP"
shot: "EEG signal and prediction"
image: "/projets/eeg/pipeline-en.svg"
caseOffer: "Team project · Time series · AI applied to healthcare"
question: "Will They Wake Up — Deep learning on EEG signals"
lede: "After cardiac arrest, electroencephalography (EEG) recordings make it possible to study the brain’s electrical activity. This project explores the use of deep learning to classify patients’ neurological outcome from these signals, separating observations labelled “Good” from other outcomes."
rebuild: false
stages: [1,1,1,0]
meta: [["Data","1.5 TB of EEG · 8 channels, 100 Hz"],["Model","LSTM 64 + 32 units"],["Infrastructure","Google Cloud Storage · BigQuery"],["Setting","Team project"]]
hero: "Pipeline diagram"
heroImage: "/projets/eeg/pipeline-en.svg"
results: ["Preparation of multichannel EEG signals for training.","Development of a sequence classification model with TensorFlow/Keras.","Data storage organised on Google Cloud Storage, with metric logging in BigQuery.","Models and experiment results saved.","Draft demo interface with Streamlit and FastAPI."]
ctaTitle: "Do you have sensor data?"
pme: "Machines, connected devices, continuous measurements: the same signal processing methods apply."
ctaLabel: "Talk about it"
links: [["View the code on GitHub →","https://github.com/kemetsamourai/will-they-wake-up"]]
cta: "contact"
---

## Our approach

We built a pipeline running from data retrieval on Google Cloud Storage to the training of a recurrent neural network.

Recordings are prepared by selecting eight EEG channels, then resampled to 100 Hz. 15-second segments are extracted every ten minutes and normalised to form the model’s input sequences.

Classification relies on two LSTM layers of 64 and 32 units, combined with dropout layers. Training uses early stopping and keeps the best model according to validation loss. Several experiments explore different time windows after cardiac arrest.

## What evaluation revealed

The scores were too high to be credible. One experiment shows 96.875% validation accuracy with a recall of 0: the model detected no favourable outcome at all. Validation and test used the last batches of segments, with no split by patient, so segments from the same patient could end up in several sets. We therefore present this project as an approach, not as a result.

## Lessons and next steps

This project confronted us with the difficulties of physiological data: recording volume, signal preparation and the evaluation of sequences from the same patient.

It highlights the importance of separating patients across training, validation and test sets, and of looking at recall alongside accuracy. The prototype is a basis for experimentation; the next steps are to strengthen this evaluation protocol, unify preprocessing and connect the interface to the trained model.

**Technologies:** Python · NumPy · SciPy · pandas · scikit-learn · TensorFlow/Keras · Google Cloud Storage · BigQuery · Streamlit · FastAPI
