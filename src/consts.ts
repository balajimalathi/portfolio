import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Skndan",
  DESCRIPTION:
    "Flutter Developer with 6+ years building high-performance cross-platform apps, fintech solutions, and SaaS products. Portfolio and blog of Balaji Malathi.",
  AUTHOR: "Balaji Malathi",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work Experience",
  DESCRIPTION: "Places I have worked — Splenta Systems, Techeva, Joy Infotech, and freelance projects.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Flutter development, SaaS building, fintech, and indie hacking — technical guides and insights by Balaji Malathi.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on — Flutter apps, SaaS products, fintech solutions, and open-source tools.",
}

export const NOTES: Page = {
  TITLE: "Notes",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword — blog posts, projects, and work experience on Skndan.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  }
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "balaji.mailbox@gmail.com",
    HREF: "mailto:balaji.mailbox@gmail.com",
  },
  { 
    NAME: "Work Email",
    ICON: "email", 
    TEXT: "balaji.m@skndan.com",
    HREF: "mailto:balaji.m@skndan.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "balajimalathi",
    HREF: "https://github.com/balajimalathi"
  },
  // { 
  //   NAME: "LinkedIn",
  //   ICON: "linkedin",
  //   TEXT: "balajimalathi",
  //   HREF: "https://www.linkedin.com/in/balaji-mala",
  // },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "balajimalathi_",
    HREF: "https://x.com/balajimalathi_",
  },
]

