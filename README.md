# Étale Cohomology Seminar 2026

This repository supports a public, collaborative five-meeting pilot seminar following Daniel Litt's recorded course [*Étale Cohomology and the Weil Conjectures*](https://www.daniellitt.com/tale-cohomology/).

> Videos, books, and AI tools provide abundant explanations. Our meetings are devoted to what requires a mathematical community: questioning, verification, criticism, examples, proof digestion, judgment, attribution, and shared understanding.

We are not reproducing Litt's lectures. Litt supplies the curriculum. Participants prepare individually. The seminar collectively digests the mathematics.

```text
Litt + references + AI
          ↓
 individual preparation
          ↓
      seminar
          ↓
verification + discussion + judgment
          ↓
   shared mathematical toolkit
```

The repository distinguishes working mathematics from curated seminar memory:

- The meeting folders below contain candidate contributions, friction logs, reviews, and digests. Material there may still contain mistakes or unresolved issues.
- [`toolkit/`](toolkit/) contains only mathematics the group has checked, discussed, and selected as especially useful.

A merged contribution to a meeting folder is not automatically canonical or endorsed.

## Preparation protocol

Each participant prepares:

```text
3 + 2 + 1 + E + R
```

### 3 — Three things I think I understood

Short statements.

### 2 — Two points of friction

Places where understanding was difficult, suspicious, incomplete, or required substantial effort.

### 1 — One question for humans

Preferably something richer than a factual question an LLM can immediately answer.

### E — One example or non-example

Contribute one example or non-example that illuminates a definition, theorem, or phenomenon from the lecture.

### R — Review one contribution

Read and critically check at least one mathematical contribution from another member.

The repository does not need to store every individual's full 3-2-1 permanently. The durable record emphasizes examples, non-examples, proofs, friction worth remembering, reviews, and meeting digestion.

## One seminar, several levels

This is one mixed-level seminar, not three parallel courses.

Undergraduates focus on definitions, examples, intuition, the purpose of constructions, and precise questions. They are not expected to understand every proof. Expected total preparation: approximately 2-2.5 hours.

Master's students additionally work on proof architecture, where hypotheses are used, independent examples, and connections with prior mathematics. Expected total preparation: approximately 3 hours.

PhD students additionally provide context, question formulations and hypotheses, distinguish conceptual from technical steps, connect material to broader mathematics, help review claims, and mentor without dominating discussion. Expected total preparation: approximately 3-4 hours.

> Mathematical sophistication is not the measure of the value of a contribution. A simple example that makes a definition transparent may be more valuable than a complicated example.

## The five-week experiment

Participants initially commit only to five serious meetings. After Meeting 5 the group evaluates:

- Do we actually want to continue?
- Are meetings creating value beyond individual AI-assisted study?
- Is the workload sustainable?
- Is a mathematical community beginning to form?
- What should change for the next block?

## Meetings

1. [Meeting 1: Weil conjectures](meetings/01-weil-conjectures/)
2. [Meeting 2: Étale morphisms and sites](meetings/02-etale-morphisms-and-sites/)
3. [Meeting 3: Sites and sheaves](meetings/03-sites-and-sheaves/)
4. [Meeting 4: fppf descent I](meetings/04-fppf-descent-I/)
5. [Meeting 5: fppf descent II](meetings/05-fppf-descent-II/)

## Repository guides

- [Values](VALUES.md)
- [Roadmap](ROADMAP.md)
- [Contributing](CONTRIBUTING.md)
- [Resources](RESOURCES.md)
- [Shared toolkit](toolkit/)

## Public site and registration

The public entry point for the seminar is prepared in [`docs/`](docs/) for GitHub Pages:

- Site: <https://alequisgs.github.io/etale-cohomology-seminar-2026-/>
- Registration form: <https://alequisgs.github.io/etale-cohomology-seminar-2026-/#register>
- Outreach invitation source: [`outreach/seminar-invitation.tex`](outreach/seminar-invitation.tex)

After merging to `main`, enable Pages with:

```text
Settings → Pages → Deploy from branch → main → /docs
```

Registration submissions require a private external form endpoint. Configure it in [`docs/config.js`](docs/config.js) by setting `registrationEndpoint` to an HTTPS form URL. Schedule options are also configured in that file by editing `scheduleOptions`; leave the array empty until candidate meeting times exist.

**Litt provides the curriculum. Tools help us prepare. The community verifies, digests, and decides what is worth remembering.**
