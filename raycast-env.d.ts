/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Cold Turkey Executable - Absolute path to the Cold Turkey Blocker CLI executable. */
  "executablePath": string,
  /** CLI Timeout - Maximum time in milliseconds to wait for a CLI command. */
  "commandTimeoutMs": string,
  /** Safety - Ask for confirmation before commands that may lock a block or immediately activate a device block. */
  "confirmLockingActions": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `manage-blocks` command */
  export type ManageBlocks = ExtensionPreferences & {}
  /** Preferences accessible in the `cli-diagnostics` command */
  export type CliDiagnostics = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `manage-blocks` command */
  export type ManageBlocks = {}
  /** Arguments passed to the `cli-diagnostics` command */
  export type CliDiagnostics = {}
}

