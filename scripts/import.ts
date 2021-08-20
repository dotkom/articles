interface Image {
  id: number;
  name: string;
  timestamp: string;
  description: string;
  thumb: string;
  original: string;
  photographer: string;
}

interface Article {
  "absolute_url": string;
  authors: string;
  "changed_date": string;
  "created_date": string;
  "published_date": string;
  content: string;
  heading: string;
  id: number;
  ingress: string;
  "ingress_short": string;
  slug: string;
  tags: string[];
  video: string;
  image: Image;
}

let articles: Article[] = [];

let url = "https://online.ntnu.no/api/v1/articles/";

do {
  const r = await fetch(url);
  const response = await r.json();
  articles = articles.concat(response.results);
  url = response.next;
} while (url != null);

articles.forEach(async a => {
    const file =
        `---
title: "${a.heading}"
layout: post
tags: ${a.tags.map(t => "\n - " + t)}
date: "${a.published_date}"
last_edited: "${a.changed_date}"
---
${a.ingress}

![${a.image.description}](https://online.ntnu.no${a.image.original})

${a.content}`;

    const date = new Date(a.published_date);
    const fileName = `../_posts/${date.getFullYear()}-${String(date.getMonth()+1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-${a.heading.toLowerCase().replace(' ', '-')}.md`;
    Deno.writeTextFileSync(fileName, file)
})

console.log("done")

