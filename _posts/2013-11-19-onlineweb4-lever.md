---
title: "Onlineweb4 lever!"
layout: artikkel
tags: 
 - onlineweb
 - dotkom
 - onlineweben
date: "2013-11-19T00:00:00+01:00"
modified_date: "2016-04-12T11:57:13.869517+02:00"
image: "/assets/Christian Strand Young på kontoret.png"
image_alt: "Christian smiler fornøyd i det lanseringen av Onlineweb4 nærmer seg med stormskritt."
author:
 - Nils Herde
ingress: "Det siste halvannet året har det bak lukkede dører foregått noe hemmelig og storslått. Hovedstyret har vært tilbakeholdne med informasjon, men i mørket hviskes det likevel om at dotKom nå endelig har klart det; Onlineweb4 er ferdig!"
ingress_short: "Det siste halvannet året har det bak lukkede dører foregått noe hemmelig og storslått. Ta en titt!"
excerpt: "Det siste halvannet året har det bak lukkede dører foregått noe hemmelig og storslått. Ta en titt!"
slug: "onlineweb4-lever"
photographer: "Håvard Slettvold"
---
I forbindelse med den etterlengtede lanseringen av Onlineweb4 tok jeg en prat med Christian Strand Young, prosjektleder for dette omfattende prosjektet, for å høre hva brukerne kan vente seg av denne nye og forbedrede varianten av webtjenesten til vår kjære linjeforening. Det er en tydelig stolt prosjektleder som forteller om det som er skyld i dotKoms mye omtalte "feature freeze", og som nå endelig er klart for lansering. Motivasjonen bak den nye webløsningen var å få til et produkt som reflekterer Online som organisasjon samtidig som det skulle være et solid produkt fra front end til back end.

#### Et utfordrende prosjekt
Christian forteller at som prosjektleder var det hans oppgave å parallellisere arbeidet så mye som mulig uten at det skulle gå utover kvaliteten på arbeidet. Han har vært prosjektets organisator og visjonær, og særlig i startfasen brukte han mye tid på å projektere idéene sine slik at de andre medlemmene skulle forstå hva han så for seg. Dette skulle vise seg å av å til være ganske utfordrende; DotKom består av mange dyktige driftere og kodere, men ikke så mange gode designere og arkitekter. I en komité der kunnskapsnivå og kunnskapsområder varierer er det vanskelig å involvere alle i alle faser av et så omfattende prosjekt. I tillegg har man den utfordringen at medlemmene i dotKom, som i alle frivillige organisasjoner, har et studie som i prinsippet skal gå foran frivillig aktivitet. Man prioriterer forskjellig, og da er det vanskelig å alltid være like effektive.

#### Nytt og gøy! 
OW4 har flere funksjonaliteter som skiller det fra OW3. Christians personlige favoritt er artikkelsystemet som er laget for at OW4 skal kunne ha en nettavis. I tillegg kan nyheter utvides til større saker i stedet for bare en liten notis. Systemet har også støtte for video, noe som lar redaksjonen boltre seg med et nytt medium når de skal lage saker. Av andre nye godsaker kan det nevnes at annonseringskarusellen er erstattet med en egen seksjon for karrieremuligheter, hvor målet er å få en portal som knytter næringsliv og studenter. I tillegg har OW4 et ressurssenter som forklarer hva linjeforeningen kan tilby av tjenester. For øyeblikket er dotKom best representert, med ressurser som mailinglister, Online-notifier og spillserver. Denne seksjonen er utvidbar, og har også en egen seksjon for OpenSource-prosjekter. At pollen er borte er kanskje ikke noen overraskelse for de fleste.

#### Utvikling
Bak det smakfulle ytre finner vi flust av forskjellige språk og teknologier som holder hjulene i gang. OW4 har en Django backend og JQuery frontend med Bootstrap for å støtte responsivt design. Sistnevnte tilrettelegger for en nettside tilpasset mobil, noe som lenge har vært etterspurt. For å hjelpe til under utviklingsfasen og gjøre videre arbeid lettere har det vært lagt mye arbeid i å få gode rutiner og å automatisere arbeid som kan automatiseres. Under utviklingen har det vært nøye kontroll på ny kildekode, slik at ingen kode ble pushet til master uten godkjennelse. Hver gang en ny funksjonalitet ble implementert gikk den gjennom mange iterasjoner før den endelig ble ansett som ferdig. For å forenkle arbeidet brukte de blant annet Jenkins til å bygge features som gir beskjed til GitHub om det fungerer eller ikke. En annen ting som hjalp dotKom i utviklingsfasen var at OW4 nå kan kjøre lokalt hos hver utvikler, noe som ikke var mulig i OW3.

#### Veien videre
Resultatet sitter vi med her i dag; et flunkende nytt produkt som forhåpentligvis både hjelper aktive Online-medlemmer i sin komitéhverdag og være en nyhetsportal for hva som skjer i informatikkhverdagen. Vi gleder oss til å se hvordan nettløsningen blir å bruke for den jevne informatiker og hva dotKom finner på av utvidelser og oppdateringer videre.

Den gamle Onlineweb-en, finnes fortsatt [her](https://old.online.ntnu.no).