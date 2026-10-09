---
order: 3
kpis: [[3,0,""," languages","French, Portuguese, English"]]
cat: "B"
offer: "B · Save time"
title: "Analysing thousands of customer reviews in minutes."
summary: "Multilingual review analysis tool: sentiment from a local model, themes, uncertain cases to review and exports. Online demo, no installation."
stack: "Python · local NLP · ONNX"
shot: "review analysis demo"
image: "/projets/avis/demo.png"
heroImage: "/projets/avis/demo.png"
caseOffer: "B · Save time · Analysis tool"
question: "How do you understand what thousands of customer reviews say without reading them one by one?"
lede: "Customer review analysis extends the Olist study with a tool that can be reused on other data: it turns review files into a usable overview, with sentiment, themes, cases to review and exports."
rebuild: false
stages: [1,1,1,1]
meta: [["Model","Multilingual XLM-T, local (ONNX int8)"],["Languages","French, Portuguese, English"],["Formats","CSV, Excel, JSON, TXT, DOCX, PDF"],["Data","Processed locally, no external service"]]
hero: "review analysis demo"
results: ["Sentiment from a local multilingual model, with an “Undetermined” abstention when the score is too low","Themes based on editable words and phrases","Manual correction, with the original sentiment kept in exports","Imports up to 100 MB and 500,000 rows, processed in batches of 64 reviews","CSV and JSON exports","Online demo on 36 pre-analysed fictional reviews"]
ctaTitle: "Do you receive lots of reviews or messages?"
pme: "Google reviews, emails, support tickets: the same tool sorts your customer feedback and flags what deserves a second look."
ctaLabel: "See the AI assistant offer"
links: [["Try the demo →","https://eagueyemaryboudier-cpu.github.io/olist-data-analysis/"],["View the code on GitHub →","https://github.com/eagueyemaryboudier-cpu/olist-data-analysis/tree/main/avis-tri"]]
cta: "services"
---

## The question

Beyond a few hundred reviews, reading them by hand no longer works. The tool takes a review file (CSV, Excel, JSON, text, DOCX or PDF) and gives an overview: sentiment, themes, contradictions between rating and text, duplicates.

## A multilingual model that runs locally

Sentiment is computed by Cardiff NLP’s XLM-T, a multilingual model converted to ONNX and quantised to int8. It runs on the computer, without sending reviews to an external service. Long reviews are split into 256-token segments, all of which are analysed.

When the best score is below 0.60, or too close to the second, the result is “Undetermined” rather than a forced label. A review with clearly positive and negative passages is labelled “Mixed”. These cases are offered for review.

## An interface to explore and correct

![Demo dashboard: sentiment and detected themes](/projets/avis/tableau.png)

Filters, charts and exports run in the browser. Themes rely on words and phrases that users can adapt to their domain. Every manual correction is exported along with the original sentiment.

## What the check measures, and what it does not

On 24 constructed examples (8 French, 8 Portuguese, 8 English), the model gives 23 expected labels and one abstention. This check is not an independent benchmark: it does not support any claim about production accuracy. The model was trained on tweets, so a gap with retail reviews is possible, and irony or typos can still cause errors.
