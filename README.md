# Articles, as code

Dette er en migrasjon av [OW4's](https://github.com/dotkom/onlineweb4) articles fra Django-modeller til jekyll.

## How to import articles

```sh
cd scripts
deno run --allow-net --allow-write=../_posts import.ts
```

## How to run

See [jekyll-docs](https://jekyllrb.com/docs/) for prerequisits.

```sh
bundle exec jekyll serve
```

