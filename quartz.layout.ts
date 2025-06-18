import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'pkm365/my-digital-garden',
        // from data-repo-id
        repoId: 'R_kgDOO4KXWQ',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDOO4KXWc4Crkg1',
        // from data-lang
        lang: 'zh-CN',
        themeUrl: "https://www.pkm365.com/static/giscus", // corresponds to quartz/static/giscus/
        lightTheme: "light", // corresponds to light-theme.css in quartz/static/giscus/
        darkTheme: "dark", // corresponds to dark-theme.css quartz/static/giscus/
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      "X (Twitter)": "https://x.com/jarryfeng1",
      "Discord": "https://discord.gg/2ng2fTCQ",
      "Linkedin": "https://www.linkedin.com/in/kejia-feng-a2b66579/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      direction: "row",
      wrap: "nowrap",
      gap: "0.5rem",
      components: [
        { Component: Component.Search(), grow: true, shrink: true },
        { Component: Component.Darkmode(), shrink: false },
        { Component: Component.ReaderMode(), shrink: false },
      ],
    }),
    Component.RecentNotes(),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks({ hideWhenEmpty: true }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      direction: "row",
      wrap: "nowrap",
      gap: "0.5rem",
      components: [
        { Component: Component.Search(), grow: true, shrink: true },
        { Component: Component.Darkmode(), shrink: false },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
