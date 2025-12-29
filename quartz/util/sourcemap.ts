import fs from "fs"
import sourceMapSupport from "source-map-support"
import { fileURLToPath } from "url"

export const options: sourceMapSupport.Options = {
  retrieveSourceMap(source) {
    if (source.startsWith("file://")) {
      try {
        const url = new URL(source)
        url.search = ""
        url.hash = ""
        const realSource = fileURLToPath(url.href) + ".map"
        if (fs.existsSync(realSource)) {
          return {
            map: fs.readFileSync(realSource, "utf8"),
          }
        }
      } catch {
        // ignore errors
      }
    }

    return null
  },
}
