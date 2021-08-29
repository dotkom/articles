# Articles, as code

Dette er en migrasjon av [OW4's](https://github.com/dotkom/onlineweb4) articles fra Django-modeller til jekyll.

## How to import articles

Burde ikke være nødvendig å kjøre etter første import.

```sh
cd scripts
deno run --allow-net --allow-write=../_posts import.ts
```

## How to run

See [jekyll-docs](https://jekyllrb.com/docs/) for prerequisits.

```sh
bundle exec jekyll serve
```

## How to write an article

See [Creating posts](https://jekyllrb.com/docs/posts/#creating-posts). Before the markdown-contet, you should paste this
default `FrontMatter`:

```yaml
---
title: "En god artikkel"
layout: artikkel
tags: 
 - skrive
 - dotkom
date: "2021-06-08T18:00:00+02:00"
modified_date: "2021-06-08T17:56:56.973584+02:00"
image: "/assets/<SETT INN ET BILDE HER>.png"
image_alt: "Beskrivende tekst av bildet for folk som ikke kan se"
author:
 - Kari Nordmann
ingress: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
excerpt: "Lorem Ipsum Dolor Sit amet."
slug: "en-god-artikkel" # MÅ VÆRE IDENTISK MED FILNAVNET, og være en gyldig del av en URL
photographer: "Ola Nordmann" # Photograf bak bildet
# Kan også ha video:
# video: <VIMEO-ID>
---
```

Note that we use `markdownlint` in CI, to ensure that the markdown is parseable, and the articles follow an OK style.
