import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { easeIn } from "motion/react";
import { IoMdArrowForward } from "react-icons/io";

import Larabill from "../assets/images/larabill.png";
import Anguledger from "../assets/images/1.png";
import Cvue from "../assets/images/cv.png";
import Devpal from "../assets/images/devpal.png";
import Truth from "../assets/images/truthmatters.png";
import Jeepni from "../assets/images/jeepni.png";
import Kwnta from "../assets/images/kwnta.png";
import Wandmag from "../assets/images/wandmag.png";
import { Link } from "react-router-dom";

const GITHUB_USERNAME = "alferrr";

const PROJECT_IMAGES = {
  larabill: Larabill,
  anguledger: Anguledger,
  cvue: Cvue,
  devpal: Devpal,
  truthmatters: Truth,
  jeepni: Jeepni,
  kwnta: Kwnta,
  wanderingmagnolia: Wandmag,
};

const INCLUDE = ["wanderingmagnolia", "jeepni", "kwnta", "anguledger"];

const OVERRIDES = {
  wanderingmagnolia: {
    description:
      "A community-driven recipe sharing platform where you can discover curated recipes, add your own, remix others' creations, and generate grocery lists.",
    stack: [
      "HTML",
      "CSS",
      "Javascript",
      "PHP",
      "Resend",
      "Cloudinary",
      "Docker",
    ],
    offline: true,
  },
  jeepni: {
    description:
      "JeepNi is a community-driven Cebu transport app for jeepneys, buses, and tricycles with route planning, real-time alerts, intelligent rerouting, rewards, and local business promotions.",
    stack: ["React", "Express", "Supabase", "Mapbox"],
    offline: true,
  },
  // kwnta: {
  //   description:
  //     "Kwnta is a personal finance tracker that helps users manage their expenses, income, and budgets in one clean dashboard.",
  //   stack: ["React", "Laravel", "SQLite"],
  // },
  larabill: {
    description:
      "Larabill is a full-stack subscription management platform designed to help users organize recurring bills, monitor expenses, and stay on top of their finances.",
    stack: ["Vue", "Laravel", "Axios", "SQLite"],
  },
  anguledger: {
    description:
      "Anguledger is a lightweight expense-tracking web app built with Angular, allowing users to record, categorize, and visualize expenses through a clean, intuitive dashboard.",
    stack: ["React", "Angular", "Typescript"],
  },
  cvue: {
    description:
      "A modern resume builder built with Vue that lets users create professional resumes with real-time preview and instant PDF export.",
    stack: ["Vue"],
  },
  devpal: {
    description:
      "DevPal is a docs-based learning platform that helps beginners build a strong foundation in frontend development. It currently covers HTML, CSS, and Git, with more lessons and topics coming soon.",
    stack: ["HTML", "CSS", "Javascript"],
  },
  truthmatters: {
    description: "Fictional campaign website for Purposive Communication.",
    stack: ["React"],
  },
};

const STACK_ORDER = {
  html: 0,
  css: 1,
  javascript: 2,
  typescript: 3,
  react: 4,
  vue: 5,
  angular: 6,
  php: 7,
  laravel: 7,
  nodejs: 8,
  express: 9,
  sqlite: 10,
  mysql: 11,
  postgresql: 12,
  supabase: 13,
  axios: 14,
  mapbox: 15,
  resend: 16,
  cloudinary: 17,
  docker: 18,
};

const sortStack = (stack) =>
  [...stack].sort(
    (a, b) =>
      (STACK_ORDER[a.toLowerCase()] ?? 99) -
      (STACK_ORDER[b.toLowerCase()] ?? 99),
  );

export default function Works() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`,
          {
            headers: {
              Accept: "application/vnd.github.mercy-preview+json",
            },
          },
        );

        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

        const repos = await res.json();

        const filtered = repos
          .filter((r) => INCLUDE.includes(r.name.toLowerCase()))
          .sort(
            (a, b) =>
              INCLUDE.indexOf(a.name.toLowerCase()) -
              INCLUDE.indexOf(b.name.toLowerCase()),
          )
          .map((r) => {
            const key = r.name.toLowerCase();
            const override = OVERRIDES[key] ?? {};
            return {
              id: r.id,
              title: r.name,
              description:
                override.description ||
                r.description ||
                "No description provided.",
              stack: override.stack ?? r.topics ?? [],
              link: r.homepage || r.html_url,
              image: PROJECT_IMAGES[key] ?? null,
              offline: override.offline ?? false,
            };
          });

        setProjects(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section>
      <main className="works first-works" id="projects">
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2>My Works</h2>
        </motion.div>

        {loading && (
          <p style={{ opacity: 0.5, fontSize: "0.9rem" }}>Loading projects…</p>
        )}

        {error && (
          <p style={{ color: "red", fontSize: "0.9rem" }}>
            Failed to load projects: {error}
          </p>
        )}

        {!loading &&
          !error &&
          projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: easeIn }}
              className="container"
            >
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="no-image">{project.title[0]}</div>
              )}

              <div className="text">
                <div className="cntr">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.stack.length > 0 && (
                    <div className="stack">
                      {sortStack(project.stack).map((tag) => (
                        <span key={tag} className={tag.toLowerCase()}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {project.offline ? (
                  <span className="offline-badge">Server Offline</span>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link.includes("github.com")
                      ? "View Repo"
                      : "View Website"}{" "}
                    <IoMdArrowForward className="icon" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}

        <Link to="/works" className="seemore">
          See more of my Works
        </Link>
      </main>
    </section>
  );
}
