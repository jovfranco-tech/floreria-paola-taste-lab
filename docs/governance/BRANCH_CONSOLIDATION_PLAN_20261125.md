# Branch consolidation plan — floreria-paola-taste-lab (2026-11-25)

Local-only closure. Nothing was pushed; no remote branch, tag or PR was touched.

- `main` before: `ccb83ce` (= `origin/main`). `main` after: the fast-forward commit that adds this document (see `git log -1 -- docs/governance/BRANCH_CONSOLIDATION_PLAN_20261125.md`).
- Backup: `C:\Repositorios\_aloria_backups$r$r-all-refs-20261125.bundle` (`git bundle create --all`, verified okay).
- Stash: none
- Source: forensic report in `C:\Repositorios\_consolidation_reports`.

## Branch classification

| Branch | Class | Decision |
|---|---|---|
| `docs/readme-reconciliation-001` (local+origin) | MERGE → RETAIN | Full README rewrite; not integrated (content loss/unverifiable claims). Tagged. |
| `origin/docs/public-portfolio-upgrade` | CLOSE | 0 diff vs main; PR #1 merged. Remote kept. |
| `origin/fix/gallery-provenance-truth-20261006` | CLOSE | 0 diff vs main; PR #2 merged. Remote kept. |

## Local archive tags created (not pushed)
- `archive/20261125/docs/readme-reconciliation-001`

## Local branches deleted
None.

## Open PRs (listed only, per forensic report; not touched)
- #3 (readme) OPEN

## Pending owner authorization
- Review/merge/close of the PRs above and any deletion of remote branches.
- README rewrites on `docs/readme-reconciliation-001` were NOT integrated: they replace existing README content wholesale and add claims not verifiable from code here. Review before merging.
- The local branch `docs/readme-reconciliation-001` remains because it is checked out in an external Antigravity scratch worktree; it is preserved by the archive tag.
- No push of local `main` is required (main = origin/main before this doc); pushing this doc commit awaits authorization.
