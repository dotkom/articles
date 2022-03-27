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
  absolute_url: string;
  authors: string;
  changed_date: string;
  created_date: string;
  published_date: string;
  content: string;
  heading: string;
  id: number;
  ingress: string;
  ingress_short: string;
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

articles.forEach(async (a) => {
  let imageFilename = "";
  let imageFrontMatter = "";
  if (a.image) {
    const r = await fetch(a.image.original);
    const d = await r.arrayBuffer();
    // HTML-escaped slash instead of slash to allow usage in filename
    // escape " to allow usage in jekyll FrontMatter
    imageFilename = a.image.name
      .replace(/\//gm, "&#47;")
      .replace(/"/gm, '\\"')
      .trim();

    imageFrontMatter = `\nimage: "/assets/${imageFilename}.png"\nimage_alt: "${a.image.description.replace(
      /"/gm,
      '\\"'
    )}"`;

    await Deno.writeFile(`../assets/${imageFilename}.png`, new Uint8Array(d));
  }

  const photographer =
    a.image && a.image.photographer
      ? `\nphotographer: "${a.image.photographer}"`
      : "";
  const video = a.video && `\nvideo: ${a.video}`;

  const file = `---
title: "${a.heading}"
layout: artikkel
tags: ${a.tags.map((t) => `\n - ${t.trim()}`).join("")}
date: "${a.published_date}"
modified_date: "${a.changed_date}"${imageFrontMatter}
author:${a.authors
    .split(",")
    .map((auth) => "\n - " + auth.trim())
    .join("")}
ingress: "${a.ingress.replace(/\\/gm, "\\\\").replace(/"/gm, '\\"').trim()}"
excerpt: "${a.ingress_short.replace(/\\/gm, "\\").replace(/"/gm, '\\"').trim()}"
slug: "${a.slug}"${video}${photographer}
---
${a.content.trim()}`;

  const date = new Date(a.published_date);
  const fileName = `../_posts/${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}-${a.slug}.md`;
  console.log(fileName);
  await Deno.writeTextFile(fileName, file);
});
