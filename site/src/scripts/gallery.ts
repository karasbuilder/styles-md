import MiniSearch from "minisearch";

type Doc = { id: string; name: string; mood: string; summary: string; tags: string; type: string; palette: string };
const docs: Doc[] = JSON.parse(document.getElementById("search-docs")!.textContent!);
const tagsById = new Map(docs.map((doc) => [doc.id, new Set(doc.tags.split(" "))]));
const tones = new Set(["light", "dark"]);
const knownTags = new Set(docs.flatMap((doc) => doc.tags.split(" ")));
const search = new MiniSearch<Doc>({
  fields: ["name", "mood", "summary", "tags", "type", "palette"],
  storeFields: ["id"],
  tokenize: (text) => text.split(/[\s,"'`]+/).filter(Boolean),
  processTerm: (term) => term.replace(/[.;:()]+$/g, "").toLowerCase() || null,
  searchOptions: { prefix: true, fuzzy: 0.2, combineWith: "AND", boost: { name: 3, tags: 2, mood: 1.5 } },
});
search.addAll(docs);

const input = document.getElementById("q") as HTMLInputElement;
const grid = document.getElementById("grid")!;
const cards = [...grid.querySelectorAll<HTMLAnchorElement>(".style-card")];
const empty = document.getElementById("empty")!;
const count = document.getElementById("count")!;
const countSr = document.getElementById("count-sr")!;
const railAll = document.getElementById("rail-all")!;
const title = document.getElementById("results-title")!;
const active = document.getElementById("active-filters")!;
const activeList = document.getElementById("active-list")!;
const panel = document.getElementById("filter-panel") as HTMLDetailsElement;
const more = document.getElementById("more-filters") as HTMLDetailsElement | null;
const filterCount = document.getElementById("filter-count")!;
const options = [...document.querySelectorAll<HTMLButtonElement>("[data-tag]")];
const toneOptions = [...document.querySelectorAll<HTMLButtonElement>("[data-tone]")];
const labels = new Map(options.map((option) => [option.dataset.tag!, option.dataset.label!]));
labels.set("light", "Light");
labels.set("dark", "Dark");
const selected = new Set<string>();

function hasTags(id: string, tags: Iterable<string>) {
  const own = tagsById.get(id)!;
  return [...tags].every((tag) => own.has(tag));
}

function readUrl() {
  const params = new URLSearchParams(location.search);
  input.value = params.get("q") ?? "";
  selected.clear();
  for (const tag of (params.get("tags") ?? "").split(",")) {
    if (!knownTags.has(tag)) continue;
    if (tones.has(tag)) for (const tone of tones) selected.delete(tone);
    selected.add(tag);
  }
}

function writeUrl() {
  const params = new URLSearchParams();
  if (input.value.trim()) params.set("q", input.value.trim());
  if (selected.size) params.set("tags", [...selected].join(","));
  const query = params.toString();
  history.replaceState(null, "", `${location.pathname}${query ? `?${query}` : ""}${location.hash}`);
}

function addActiveFilter(text: string, value: string) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "active-filter";
  button.dataset.remove = value;
  button.setAttribute("aria-label", `Remove ${text} filter`);
  const label = document.createElement("span");
  label.textContent = text;
  const icon = document.createElement("span");
  icon.textContent = "×";
  icon.setAttribute("aria-hidden", "true");
  button.append(label, icon);
  activeList.append(button);
}

function apply() {
  const query = input.value.trim();
  const hits = query ? search.search(query) : null;
  const ranks = hits ? new Map(hits.map((hit, index) => [hit.id as string, index])) : null;
  const ordered = [...cards].sort((a, b) => ranks
    ? (ranks.get(a.dataset.id!) ?? Infinity) - (ranks.get(b.dataset.id!) ?? Infinity)
    : cards.indexOf(a) - cards.indexOf(b));
  let visible = 0;
  for (const card of ordered) {
    const id = card.dataset.id!;
    card.hidden = !((!ranks || ranks.has(id)) && hasTags(id, selected));
    if (!card.hidden) visible++;
    // Keep reading/tab order consistent with visual relevance order.
    grid.append(card);
  }
  for (const option of options) {
    const tag = option.dataset.tag!;
    const on = selected.has(tag);
    const probe = new Set([...selected, tag]);
    const n = docs.filter((doc) => (!ranks || ranks.has(doc.id)) && hasTags(doc.id, probe)).length;
    option.setAttribute("aria-pressed", String(on));
    option.querySelector(".n")!.textContent = String(n);
    option.disabled = !on && n === 0;
  }
  const tone = [...selected].find((tag) => tones.has(tag)) ?? "";
  for (const option of toneOptions) option.setAttribute("aria-pressed", String(option.dataset.tone === tone));
  // Tone is a switch, so light and dark remain available even with zero matches.
  empty.hidden = visible > 0;
  const narrowed = Boolean(query) || selected.size > 0;
  // The bar shows the count the way the rail shows tallies: bracketed digits.
  // Screen readers get the sentence from the live region instead.
  count.textContent = `[${visible}${narrowed ? `/${cards.length}` : ""}]`;
  countSr.textContent = `${visible} ${visible === 1 ? "style" : "styles"}${narrowed ? ` of ${cards.length}` : ""}`;
  railAll.setAttribute("aria-pressed", String(!narrowed));
  title.textContent = query ? "Search results" : selected.size ? "Filtered styles" : "All styles";
  document.getElementById("sort-note")!.textContent = query ? "Best match first" : "Name A-Z";
  active.hidden = !query && selected.size === 0;
  activeList.replaceChildren();
  if (query) addActiveFilter(`“${query}”`, "query");
  for (const tag of selected) addActiveFilter(labels.get(tag) ?? tag, tag);
  filterCount.textContent = selected.size ? String(selected.size) : "";
  if (more && [...more.querySelectorAll<HTMLButtonElement>("[data-tag]")].some((option) => selected.has(option.dataset.tag!))) more.open = true;
  writeUrl();
}

function reset() {
  input.value = "";
  selected.clear();
  apply();
  input.focus({ preventScroll: true });
}
input.addEventListener("input", apply);
for (const option of options) option.addEventListener("click", () => {
  const tag = option.dataset.tag!;
  if (selected.has(tag)) selected.delete(tag);
  else selected.add(tag);
  apply();
});
for (const option of toneOptions) option.addEventListener("click", () => {
  for (const tone of tones) selected.delete(tone);
  if (option.dataset.tone) selected.add(option.dataset.tone);
  apply();
});
for (const button of document.querySelectorAll<HTMLButtonElement>("[data-query]")) button.addEventListener("click", () => {
  input.value = button.dataset.query!;
  apply();
  input.focus({ preventScroll: true });
});
activeList.addEventListener("click", (event) => {
  const button = (event.target as Element).closest<HTMLButtonElement>("[data-remove]");
  if (!button) return;
  if (button.dataset.remove === "query") input.value = "";
  else selected.delete(button.dataset.remove!);
  apply();
  (activeList.querySelector<HTMLButtonElement>("button") ?? input).focus({ preventScroll: true });
});
for (const button of document.querySelectorAll<HTMLButtonElement>("[data-reset]")) button.addEventListener("click", reset);
document.addEventListener("keydown", (event) => {
  const editing = document.activeElement?.matches("input, textarea, select, [contenteditable]");
  if (event.key === "/" && !editing && !event.metaKey && !event.ctrlKey && !event.altKey) {
    event.preventDefault();
    input.focus();
  } else if (event.key === "Escape" && document.activeElement === input) {
    input.value = "";
    apply();
    input.blur();
  }
});
// Must match the breakpoint where the rail folds into a disclosure in site.css.
const compact = matchMedia("(max-width: 1000px)");
panel.open = !compact.matches;
compact.addEventListener("change", () => { panel.open = !compact.matches; });
window.addEventListener("popstate", () => { readUrl(); apply(); });
readUrl();
apply();
