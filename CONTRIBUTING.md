# Contributing

This repository records what the seminar community contributes beyond videos, books, and tools: examples, non-examples, proofs, verification, friction, peer review, and selected shared understanding.

## Preparation protocol

Every participant prepares:

```text
3 + 2 + 1 + E + R
```

- **3 — Three things I think I understood:** short statements.
- **2 — Two points of friction:** places where understanding was difficult, suspicious, incomplete, or required substantial effort.
- **1 — One question for humans:** preferably something richer than a factual question an LLM can immediately answer.
- **E — One example or non-example:** one object or construction that illuminates a definition, theorem, or phenomenon from the lecture.
- **R — Review one contribution:** read and critically check at least one mathematical contribution from another member.

The repository does not need to store every individual's full 3-2-1 permanently. The durable GitHub record should emphasize examples, non-examples, proofs, friction worth remembering, reviews, and meeting digestion.

## Responsibilities by level

This is one mixed-level seminar, not three parallel courses.

Undergraduates focus on definitions, examples, intuition, recognizing the purpose of constructions, and asking precise questions. They are not expected to understand every proof. Expected total preparation: approximately 2-2.5 hours.

Master's students additionally work to understand proof architecture, identify where hypotheses are used, work through examples independently, and connect new constructions with prior mathematics. Expected total preparation: approximately 3 hours.

PhD students additionally provide context, question formulations and hypotheses, identify conceptual versus technical steps, connect material to broader mathematics, help review claims, and mentor without dominating discussion. Expected total preparation: approximately 3-4 hours.

> Mathematical sophistication is not the measure of the value of a contribution. A simple example that makes a definition transparent may be more valuable than a complicated example.

## Contribution statuses

Use one of these statuses near the top of each mathematical contribution.

```text
🟡 Candidate
🔵 Peer checked
🟣 Discussed
🟢 Toolkit
```

### 🟡 Candidate

A participant proposes a mathematical contribution. It may still contain an error.

### 🔵 Peer checked

At least one other human participant has examined the mathematical claim and left a review. This does not mean infallible or formally certified.

### 🟣 Discussed

The contribution has been seriously discussed during a seminar meeting.

### 🟢 Toolkit

The group has decided that a checked and discussed version is sufficiently clear, useful, and correct to promote into the shared toolkit.

> `🟢 Toolkit` means "our seminar currently stands behind this as a useful and checked formulation." It does not mean original research, formal certification, or universal mathematical canonicality.

## One file per contribution

Do not have all participants edit one giant `examples.md`. That causes merge conflicts and obscures authorship.

Create one file per contribution, for example:

```text
meetings/02-etale-morphisms-and-sites/contributions/examples/
    alequisGS-power-map-on-gm.md
    maria-finite-separable-extension.md
    joao-frobenius-non-example.md
```

Use filenames of the form:

```text
githubusername-short-descriptive-slug.md
```

The same convention applies to proof contributions. This preserves authorship, commit history, review history, and easy pull requests.

## Human verification

An AI-generated candidate is allowed. An AI-generated candidate that nobody has checked is still only a candidate.

Human contributors are responsible for the mathematical claims they submit. Peer review is part of participation: checking a claim, asking for a missing hypothesis, or saying "I do not understand this step" all help the seminar.

## Where to put things

- Candidate examples and non-examples go in the relevant meeting's `contributions/examples/` folder.
- Candidate proof or theorem digestions go in the relevant meeting's `contributions/proofs/` folder.
- Meeting friction goes in the relevant `friction.md`.
- Collective meeting memory goes in the relevant `digest.md`.
- Curated material enters [`toolkit/`](toolkit/) only after checking, discussion, and group selection.
