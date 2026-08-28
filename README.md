# Warming-up S2 -> S3

Voordat we met het project goed en wel starten gaan we eerst even wat zaken uit S2 opfrissen, en er een zo klein-mogelijke 
S3 draai aan geven. Het idee is dat je de meeste van deze dingen of uitgebreid in S2 hebt gedaan, of er zijdelings langs bent gekomen.
In beide gevallen is het de moeite waard om even te zorgen dat die kennis iets steviger vastzit.

Per week mikken we erop dat je per week (inclusief tijd-in-de-les) ong. 8-10 uur geconcentreerd werk hier aan kwijt bent, idealiter 
verdeeld over 3-4 momenten. Als je de 12 uur raakt is het tijd om af te hechten, maar als je de 14 uur raakt is het tijd om gewoon  
in te leveren wat je op dat moment hebt, want dan is het tijd om samen te kijken waar de moeilijkheden zitten.

## Opdracht - Pokemon OHNO

Om alles weer een beetje op te frissen gaan we een (vrij crappy) kloon maken van het spelletje Pokemon GO.

Als je denkt, nou daar heb ik totaal geen zin in, ik heb niets met Pokemon. Dat is ook helemaal prima, 
alleen dan moet je zelf een algemene kapstok verzinnen waar je dit aan kan ophangen. 

Grofweg heb je nodig:

* Een onderwerp met een lijst van dingen, waarvan je de details kan opvragen, en die logischerwijs ergens in de wereld staan (Pokemon, gebouwen, winkels, skateparken, etc.)
* Een set van acties die je op die dingen kan ondernemen (Pokemon vangen, producten bestellen, trucs uitvoeren op skateparken, etc.)
* Idealiter: een publieke API waar je wat dummy-data kan ophalen voor week 1, anders moet je dat zelf maken. Zie bijv. https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/

## Weekplanning

Op Canvas vind je per week de gedetailleerde opdracht. Hoog over gaan we de volgende dingen doen:

* Week 1: We gaan puur een frontend bouwen, met een externe library, en gebruiken een externe API voor data. Evt. ontbrekende data verzinnen we.
* Week 2: We gaan de een Jersey backend toevoegen, en onze frontend daarop aansluiten. We gebruiken puur in-memory dummy-data.
* Week 3: De laatste week voegen we een database toe en deployen we het geheel naar een Azure Virtual Machine

Al deze stappen heb je nodig om direct vanaf sprint 1, zoals het hoort in een Agile project, een werkend deel-product aan je opdrachtgever 
op te leveren.

## AI-gebruik

Een chatbot die je als 'betere google' / 'studentassistent' gebruikt om je dingen uit te leggen is ideaal voor deze opdrachten.
Let er dan wel op dat je mikt op het *waarom*, want we zijn echt geïntereseerd in jouw kennis, en niet zozeer in het
product dat je oplevert.

Als je een agent stukken laat genereren (omdat je bijv. echt vast zit), zorg dan dat al die code in een losse branch zit,
zodat voor jezelf (en voor ons) altijd duidelijk is wat *jij* kan (de Git `author` optie is hier ideaal voor).
(en er is echt niets mis met een voorbeeld laten genereren, maar zodra die het doet ben je gewoon nog lang niet klaar)