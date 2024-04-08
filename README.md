# esm-file-info
A module to get the the filename or dirname of the current file most exactly for node.

[![JSR](https://jsr.io/badges/@sicasta/esm-file-info)](https://jsr.io/@sicasta/esm-file-info)
[![JSR Score](https://jsr.io/badges/@sicasta/esm-file-info/score)](https://jsr.io/@sicasta/esm-file-info)

## Usage

```ts
import { filename, dirname } from '@sicasta/esm-file-info'

const __dirname: string = dirname(import.meta)
const __filename: string = filename(import.meta)
```

## License

[MIT](https://github.com/siCasta/esm-file-data/blob/main/LICENSE)
