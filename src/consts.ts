import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Balaji Malathi",
  DESCRIPTION: "Welcome to my dev portfolio and blog",
  AUTHOR: "Balaji Malathi",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
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
    TEXT: "balaji.m@skndan.com",
    HREF: "mailto:balaji.m@skndan.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "balajimalathi",
    HREF: "https://github.com/balajimalathi"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "balajimalathi",
    HREF: "https://www.linkedin.com/in/balaji-mala",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "balajimalathi_",
    HREF: "https://twitter.com/balajimalathi_",
  },
]

