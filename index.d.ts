/**
 * A module to get the the filename or dirname of the current file
 *
 * ```ts
 * import { dirname, filename } from "@file-info/esm-file-info"
 *
 * const __dirname = dirname(import.meta)
 * const __filename = filename(import.meta)
 * ```
 *
 * @module
 */
declare module '@sicasta/esm-file-info' {
    /**
     * The function uses the import.meta to get the filename path direction
     *
     * ```ts
     * const __filename = filename(import.meta)
     * ```
     *
     * @param {ImportMeta} meta
     * @returns The current filename direction
     */
    export function filename(meta: ImportMeta): string
    /**
     * The function uses the import.meta to get the dirname path direction
     *
     * ```ts
     * const __dirname = dirname(import.meta)
     * ```
     *
     * @param {ImportMeta} meta
     * @returns The current dirname direction
     */
    export function dirname(meta: ImportMeta): string
}
