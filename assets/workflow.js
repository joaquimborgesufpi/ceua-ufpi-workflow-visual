const filterButtons = Array.from(document.querySelectorAll("[data-actor-filter]"));
const actorItems = Array.from(document.querySelectorAll("[data-actor]"));

function normalizeActors(rawValue) {
  return String(rawValue || "")
    .split(/\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function applyActorFilter(filter) {
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.actorFilter === filter);
  });

  actorItems.forEach((item) => {
    const actors = normalizeActors(item.dataset.actor);
    const matches = filter === "all" || actors.includes(filter);
    item.classList.toggle("is-dimmed", !matches);
    item.classList.toggle("is-highlighted", matches && filter !== "all");
  });
}

if (filterButtons.length && actorItems.length) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => applyActorFilter(button.dataset.actorFilter || "all"));
  });

  applyActorFilter("all");
}
