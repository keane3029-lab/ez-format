<div align="center">
  <img src="https://img.shields.io/badge/PROTOCOL-.EZ-000000?style=for-the-badge&logo=gnu-icecat&color=0f0&labelColor=111111" alt="EZ Protocol Badge">
</div>

# KEANE3029-LAB 💀
The official headquarters for the .EZ protocol. 
We don't do boring, we don't do bloat. We do AURA.

## Protocol Specs
- `.ez` files are key-value based (`KEY VALUE`).
- Delimiter: `>`.
- Tokens: `@anim` (visuals).
- Aura Audit: Enforced by GitHub Actions.

> ⚠️ **No system-execution token.** Earlier drafts referenced a `$exec`
> token for running system commands. That's been removed on purpose —
> a data format that can run arbitrary commands just by being opened
> is a real security risk (that's literally how malicious file formats
> work), not a fun feature. `.ez` stays data-only: it describes things,
> it never executes them.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
