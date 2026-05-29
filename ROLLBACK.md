# Rollback Notes

If deployment fails, restore the last known good commit or revert the site build commit.

```bash
git revert <commit-sha>
```

Do not force push unless the consequences are understood. Preserve `CNAME` unless the domain itself is the problem.

Emergency checklist:

- `CNAME` is `www.trianglehomedefense.com`.
- `index.html` is at the repository root.
- `styles.css` is at the repository root.
- Navigation links are relative and valid.
- Contact phone/email remain correct.
