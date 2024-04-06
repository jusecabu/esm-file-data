import { dirname as d } from 'node:path'
import { fileURLToPath } from 'node:url'

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
export function filename(meta: ImportMeta): string {
    return fileURLToPath(meta.url)
}

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
export function dirname(meta: ImportMeta): string {
    return d(filename(meta))
}
