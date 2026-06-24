# Files Safe to Remove After the 1.3.2 Upgrade

The following paths are obsolete after the extension is consolidated around **Manage Blocks**. None is imported by the 1.3.2 runtime.

## Obsolete command and helper source files

```text
src/start-block.tsx
src/add-entry.tsx
src/create-block.tsx
src/control-break.tsx
src/components/block-field.tsx
```

The four command entry files were replaced by contextual workflows in `src/manage-blocks.tsx`. `block-field.tsx` was an old selector helper used by those standalone commands.

## Superseded migration and review files

```text
scripts/upgrade-manifest-v1.1.0.mjs
scripts/upgrade-manifest-v1.2.0.mjs
scripts/upgrade-manifest-v1.3.0.mjs
scripts/upgrade-manifest-v1.3.1.mjs
UX_AUDIT.md
```

`UX_AUDIT.md` is superseded by `UX_REVIEW.md`. The older migration scripts are no longer needed once 1.3.2 is installed.

After successfully running it, `scripts/upgrade-manifest-v1.3.2.mjs` is also optional; it is retained only to support another in-place installation of this release.

## macOS archive metadata

These are never part of the extension and can be deleted wherever found:

```text
__MACOSX/
.DS_Store
._*
```

The v1.3.2 upgrade script removes every path above automatically, except itself.
