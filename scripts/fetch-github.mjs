import fs from "fs";
import path from "path";

const GITHUB_USERNAME = "alferrr";
const OUTPUT_PATH = path.resolve("src/data/projects.json");
const INCLUDE = [
  "jeepni",
  "motiq",
  "kwnta",
  "larabill",
  "anguledger",
  "cvue",
  "devpal",
  "truthmatters",
];

async function run() {
  console.log(`Fetching repos for @${GITHUB_USERNAME}...`);

  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json",
      },
    },
  );

  if (!res.ok) throw new Error(`GitHub responded with ${res.status}`);

  const repos = await res.json();

  const projects = repos
    .filter((r) => INCLUDE.includes(r.name.toLowerCase()))
    .sort(
      (a, b) =>
        INCLUDE.indexOf(a.name.toLowerCase()) -
        INCLUDE.indexOf(b.name.toLowerCase()),
    )
    .map((r) => ({
      id: r.id,
      title: r.name,
      description: r.description || "",
      stack: r.topics ?? [],
      link: r.homepage || r.html_url,
    }));

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(projects, null, 2));

  console.log(`✓ Wrote ${projects.length} projects to ${OUTPUT_PATH}`);
}

run().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
