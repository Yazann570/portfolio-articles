import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    // Keep folders before files
    if (a.isFolder !== b.isFolder) {
      return a.isFolder ? -1 : 1
    }

    // Sort by file/folder slug, not the displayed title
    const aKey = a.slugSegment ?? a.displayName ?? ""
    const bKey = b.slugSegment ?? b.displayName ?? ""

    return aKey.localeCompare(bKey, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
})

const config = await loadQuartzConfig()

export default config
export const layout = await loadQuartzLayout()