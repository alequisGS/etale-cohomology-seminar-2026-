# Contributing

This repository records what the seminar community contributes beyond videos, books, and tools: examples, non-examples, proofs, verification, friction, peer review, and selected shared understanding.

## Preparation protocol

Every participant prepares:

```text
3 + 2 + 1 + E + R + P
```

- **3 — Three things I think I understood:** three short mathematical points.
- **2 — Two points of friction:** places where understanding became difficult, suspicious, incomplete, or unexpectedly subtle.
- **1 — One question for humans:** a question worth discussing with other mathematicians rather than merely asking an information-retrieval system.
- **E — Example / non-example:** one object or construction that illuminates a definition, theorem, hypothesis, or phenomenon from the lecture.
- **R — Review:** read and critically check at least one mathematical contribution from another member.
- **P — Problem of the Week:** spend serious time engaging with the common problem selected for that meeting.

P does not mean that every participant must arrive with a complete solution. Valid contributions include a complete solution, partial solution, reduction, useful special case, failed approach, counterexample, obstruction, alternative proof, question about a key step, generalization, or comparison of approaches.

The central question is not "Did you solve it?" but "What did you learn by trying?"

The repository does not need to store every individual's full weekly preparation permanently. The durable GitHub record should emphasize examples, non-examples, proofs, problems, friction worth remembering, reviews, and meeting digestion.

## Problems as digestion

AI can often generate plausible or even correct solutions quickly. Therefore our seminar should not optimize for merely producing solutions.

```text
solution generation ≠ problem digestion
```

The mathematical value lies in attempting the problem, identifying the right definitions, recognizing which approach is natural, understanding failed attempts, checking hypotheses, verifying a proposed solution, comparing several approaches, finding the key idea, understanding whether the result generalizes, and explaining the solution to other humans.

A polished AI-generated solution that nobody understands should not count as serious seminar participation.

## Recommended problem workflow with AI

This is a recommended practice, not rigid policing.

### Stage 1 — Initial attempt without AI

Spend approximately 15-20 minutes trying the problem independently. Use definitions, previous mathematics, scratch paper, examples, and special cases. The purpose is to discover where your own understanding begins to fail.

### Stage 2 — References

Consult Litt, Tsimerman, Milne, the Stacks Project, and other legitimate mathematical references.

### Stage 3 — AI/tools

AI is welcome for hints, alternative approaches, checking calculations, testing ideas, finding possible counterexamples, and criticizing a draft solution.

### Stage 4 — Reconstruct

After assistance, close the tool and ask:

> What is the key idea, in my own mathematical language?

Participants remain responsible for claims they submit.

## Responsibilities by level

This is one mixed-level seminar, not three parallel courses.

Undergraduates focus on definitions, examples, intuition, recognizing the purpose of constructions, and asking precise questions. They are not expected to understand every proof. Expected total preparation: approximately 2-2.5 hours.

Master's students additionally work to understand proof architecture, identify where hypotheses are used, work through examples independently, and connect new constructions with prior mathematics. Expected total preparation: approximately 3 hours.

PhD students additionally provide context, question formulations and hypotheses, identify conceptual versus technical steps, connect material to broader mathematics, help review claims, and mentor without dominating discussion. Expected total preparation: approximately 3-4 hours.

> Mathematical sophistication is not the measure of the value of a contribution. A simple example that makes a definition transparent may be more valuable than a complicated example.

## Contribution statuses

Use one of these statuses near the top of each mathematical contribution, including problem work.

```text
🟡 Candidate
🔵 Peer checked
🟣 Discussed
🟢 Toolkit
```

### 🟡 Candidate

A participant proposes a mathematical contribution. It may still contain an error.

A complete solution generated with AI is still only `🟡 Candidate` until another human checks it.

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

The same convention applies to proof and problem contributions. Problem contribution filenames should use:

```text
githubusername-short-problem-slug.md
```

This preserves authorship, commit history, review history, and easy pull requests.

## Human verification

An AI-generated candidate is allowed. An AI-generated candidate that nobody has checked is still only a candidate.

Human contributors are responsible for the mathematical claims they submit. Peer review is part of participation: checking a claim, asking for a missing hypothesis, or saying "I do not understand this step" all help the seminar.

Finding an error is a successful outcome of reviewing.

## Where to put things

- Candidate examples and non-examples go in the relevant meeting's `contributions/examples/` folder.
- Candidate proof or theorem digestions go in the relevant meeting's `contributions/proofs/` folder.
- Candidate problem work goes in the relevant meeting's `contributions/problems/` folder.
- Personal weekly learning records go in the relevant meeting's `contributors/` folder.
- Meeting friction goes in the relevant `friction.md`.
- Collective meeting memory goes in the relevant `digest.md`.
- Curated material enters [`toolkit/`](toolkit/) only after checking, discussion, and group selection.

If the repository uses GitHub Discussions, problem discussion can continue there, but participants should not publish private registration information. Never use GitHub Issues or Discussions for registration emails.
