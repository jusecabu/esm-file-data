import { assertEquals } from 'jsr:@std/assert'
import { dirname, filename } from '../src/mod.ts'

Deno.test('Filename function returns same string of import.meta.filename', (): void => {
    assertEquals(import.meta.filename, filename(import.meta))
})

Deno.test('Dirname function returns same string of import.meta.dirname', (): void => {
    assertEquals(import.meta.dirname, dirname(import.meta))
})
