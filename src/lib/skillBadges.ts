export type SkillBadge = {
  href: string
  alt: string
  badge: string
}

export type SkillCategory = {
  title: string
  badges: SkillBadge[]
}

type Category =
  | "Languages"
  | "Mobile & Frameworks"
  | "Frontend & UI"
  | "Databases & Storage"
  | "Cloud & Infrastructure"
  | "AI & ML"
  | "Architecture"
  | "Fintech & Payments"
  | "Tools & Integrations"
  | "Domain"

type TagConfig = {
  label: string
  color: string
  category: Category
  logo?: string
  href?: string
}

const CATEGORY_ORDER: Category[] = [
  "Languages",
  "Mobile & Frameworks",
  "Frontend & UI",
  "Databases & Storage",
  "Cloud & Infrastructure",
  "AI & ML",
  "Architecture",
  "Fintech & Payments",
  "Tools & Integrations",
  "Domain",
]

function badgeUrl(label: string, color: string, logo?: string): string {
  const slug = label.replace(/ /g, "_")
  const logoPart = logo ? `&logo=${logo}&logoColor=white` : ""
  return `https://img.shields.io/badge/${encodeURIComponent(slug)}-${color}?style=for-the-badge${logoPart}`
}

function toBadge({ label, color, logo, href }: TagConfig): SkillBadge {
  return {
    alt: label,
    href: href ?? `https://www.google.com/search?q=${encodeURIComponent(label)}`,
    badge: badgeUrl(label, color, logo),
  }
}

const TAG_CONFIG: Record<string, TagConfig> = {
  dart: { label: "Dart", color: "0175C2", category: "Languages", logo: "dart", href: "https://dart.dev" },
  typescript: { label: "TypeScript", color: "3178C6", category: "Languages", logo: "typescript", href: "https://www.typescriptlang.org" },
  java: { label: "Java", color: "ED8B00", category: "Languages", logo: "openjdk", href: "https://www.java.com" },
  php: { label: "PHP", color: "777BB4", category: "Languages", logo: "php", href: "https://www.php.net" },
  csharp: { label: "C#", color: "239120", category: "Languages", logo: "csharp", href: "https://dotnet.microsoft.com/languages/csharp" },

  flutter: { label: "Flutter", color: "02569B", category: "Mobile & Frameworks", logo: "flutter", href: "https://flutter.dev" },
  nextjs: { label: "Next.js", color: "000000", category: "Mobile & Frameworks", logo: "nextdotjs", href: "https://nextjs.org" },
  angular: { label: "Angular", color: "DD0031", category: "Mobile & Frameworks", logo: "angular", href: "https://angular.dev" },
  springboot: { label: "Spring Boot", color: "6DB33F", category: "Mobile & Frameworks", logo: "springboot", href: "https://spring.io/projects/spring-boot" },
  quarkus: { label: "Quarkus", color: "4695EB", category: "Mobile & Frameworks", logo: "quarkus", href: "https://quarkus.io" },
  riverpod: { label: "Riverpod", color: "6366F1", category: "Mobile & Frameworks", href: "https://riverpod.dev" },
  aspnetmvc: { label: "ASP.NET MVC", color: "512BD4", category: "Mobile & Frameworks", logo: "dotnet", href: "https://dotnet.microsoft.com/apps/aspnet" },
  codeignitor: { label: "CodeIgniter", color: "EF4223", category: "Mobile & Frameworks", href: "https://codeigniter.com" },
  android: { label: "Android", color: "3DDC84", category: "Mobile & Frameworks", logo: "android", href: "https://developer.android.com" },

  tailwind: { label: "Tailwind CSS", color: "06B6D4", category: "Frontend & UI", logo: "tailwindcss", href: "https://tailwindcss.com" },
  bootstrap: { label: "Bootstrap", color: "7952B3", category: "Frontend & UI", logo: "bootstrap", href: "https://getbootstrap.com" },

  postgresql: { label: "PostgreSQL", color: "4169E1", category: "Databases & Storage", logo: "postgresql", href: "https://www.postgresql.org" },
  mysql: { label: "MySQL", color: "4479A1", category: "Databases & Storage", logo: "mysql", href: "https://www.mysql.com" },
  sqlserver: { label: "SQL Server", color: "CC2927", category: "Databases & Storage", logo: "microsoftsqlserver", href: "https://www.microsoft.com/sql-server" },
  msaccess: { label: "MS Access", color: "A4373A", category: "Databases & Storage", logo: "microsoftaccess", href: "https://www.microsoft.com/microsoft-365/access" },
  firebase: { label: "Firebase", color: "DD2C00", category: "Databases & Storage", logo: "firebase", href: "https://firebase.google.com" },

  aws: { label: "AWS", color: "232F3E", category: "Cloud & Infrastructure", logo: "amazonwebservices", href: "https://aws.amazon.com" },
  saas: { label: "SaaS", color: "4F46E5", category: "Cloud & Infrastructure" },

  openai: { label: "OpenAI", color: "412991", category: "AI & ML", logo: "openai", href: "https://openai.com" },
  langchain: { label: "LangChain", color: "1C3C3C", category: "AI & ML", href: "https://www.langchain.com" },
  qdrant: { label: "Qdrant", color: "DC244C", category: "AI & ML", href: "https://qdrant.tech" },
  openrouter: { label: "OpenRouter", color: "6366F1", category: "AI & ML", href: "https://openrouter.ai" },
  ai: { label: "AI", color: "7C3AED", category: "AI & ML" },

  cleanarchitecture: { label: "Clean Architecture", color: "334155", category: "Architecture" },
  mvvm: { label: "MVVM", color: "475569", category: "Architecture" },

  banking: { label: "Banking", color: "0F766E", category: "Fintech & Payments" },
  fintech: { label: "Fintech", color: "047857", category: "Fintech & Payments" },
  upi: { label: "UPI", color: "15803D", category: "Fintech & Payments" },
  rbicompliance: { label: "RBI Compliance", color: "B45309", category: "Fintech & Payments" },
  paytm: { label: "Paytm", color: "00BAF2", category: "Fintech & Payments", href: "https://paytm.com" },
  coinbase: { label: "Coinbase", color: "0052FF", category: "Fintech & Payments", logo: "coinbase", href: "https://www.coinbase.com" },

  githubapi: { label: "GitHub", color: "181717", category: "Tools & Integrations", logo: "github", href: "https://github.com" },
  nextauth: { label: "NextAuth", color: "000000", category: "Tools & Integrations", href: "https://next-auth.js.org" },
  vsto: { label: "VSTO", color: "217346", category: "Tools & Integrations", logo: "microsoftexcel", href: "https://learn.microsoft.com/office/dev/add-ins/" },
  excel: { label: "Excel", color: "217346", category: "Tools & Integrations", logo: "microsoftexcel", href: "https://www.microsoft.com/microsoft-365/excel" },
  webrtc: { label: "WebRTC", color: "333333", category: "Tools & Integrations", href: "https://webrtc.org" },
  livekit: { label: "LiveKit", color: "002CF2", category: "Tools & Integrations", href: "https://livekit.io" },

  edtech: { label: "EdTech", color: "7C3AED", category: "Domain" },
}

const TAG_ALIASES: Record<string, string> = {
  nextjs: "nextjs",
  postgresql: "postgresql",
  springboot: "springboot",
  tailwindcss: "tailwind",
  tailwind: "tailwind",
  codeignitor: "codeignitor",
  php: "php",
  mysql: "mysql",
  aspnetmvc: "aspnetmvc",
  sqlserver: "sqlserver",
  msaccess: "msaccess",
  githubapi: "githubapi",
  rbicompliance: "rbicompliance",
  cleanarchitecture: "cleanarchitecture",
}

export const CORE_SKILL_KEYS = ["dart", "flutter", "firebase", "riverpod", "typescript", "nextjs"] as const

function normalizeKey(tag: string): string {
  const lowered = tag.toLowerCase()
  if (lowered === "c#" || lowered === "c") return "csharp"

  const compact = lowered.replace(/[^a-z0-9]/g, "")
  return TAG_ALIASES[compact] ?? compact
}

function tagToConfig(tag: string): TagConfig {
  const key = normalizeKey(tag)
  const known = TAG_CONFIG[key]
  if (known) return known

  return {
    label: tag,
    color: "52525B",
    category: "Domain",
  }
}

export function buildSkillCategories(tags: string[]): SkillCategory[] {
  const seen = new Set<string>()
  const grouped = new Map<Category, SkillBadge[]>()

  for (const category of CATEGORY_ORDER) {
    grouped.set(category, [])
  }

  const addTag = (tag: string) => {
    const key = normalizeKey(tag)
    if (seen.has(key)) return
    seen.add(key)

    const config = tagToConfig(tag)
    grouped.get(config.category)?.push(toBadge(config))
  }

  for (const key of CORE_SKILL_KEYS) {
    addTag(TAG_CONFIG[key].label)
  }

  for (const tag of tags) {
    addTag(tag)
  }

  return CATEGORY_ORDER
    .map((title) => ({
      title,
      badges: (grouped.get(title) ?? []).sort((a, b) => a.alt.localeCompare(b.alt)),
    }))
    .filter((category) => category.badges.length > 0)
}

/** @deprecated Use buildSkillCategories instead */
export function buildSkillBadges(tags: string[]): SkillBadge[] {
  return buildSkillCategories(tags).flatMap((category) => category.badges)
}
