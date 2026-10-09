# DiffBeacon temporary Windows consumer (throwaway)

This repository exists for one purpose: to prove that the published DiffBeacon GitHub
Action runs from a **different** repository on a **hosted Windows** runner, triggered by
an ordinary `pull_request` event.

- Action under test: `Pavithran-R-A/DiffBeacon@a89d8bb7d048bfd4e016e494428d04f060e82112` (immutable `v0.1.1`).
- Permissions: `contents: read` only. No PAT, no secrets, no `pull_request_target`.
- Nothing here is product code. This repository is archived once the proof run is captured.
