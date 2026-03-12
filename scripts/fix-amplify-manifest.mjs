import { readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'

const manifestPath = '.amplify-hosting/deploy-manifest.json'

if (!existsSync(manifestPath)) {
  process.exit(0)
}

const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))

if (Array.isArray(manifest.computeResources)) {
  for (const resource of manifest.computeResources) {
    if (resource?.runtime) {
      resource.runtime = 'nodejs22.x'
    }
  }
}

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
