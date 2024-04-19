import { createCatchAllMeta } from 'nextra/catch-all'
import json from '../../filepaths.json' assert { type: 'json' }

export default () => createCatchAllMeta(json.filePaths, json.nestedMeta)
