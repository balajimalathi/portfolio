import type { AppConfig } from "@types";

export const apps: AppConfig[] = [
  {
    slug: "readstack",
    name: "ReadStack",
    tagline: "Your Daily Reading Habit, Scheduled",
    description:
      'Turn your "I\'ll read it later" pile into a daily habit. Import PDF and Markdown files, set reading goals, get reminders, and watch your streaks grow. Private, offline, beautiful.',
    keywords:
      "reading tracker, PDF reader, daily reading reminder, reading scheduler, reading streak app, markdown reader, reading goal app, habit tracker for reading, local PDF reader",
    category: "LifestyleApplication",
    os: "Android, iOS, Web",
    price: "0",
    status: "Coming Soon",
    emoji: "📚",
    downloadUrl: "#",
    theme: {
      color: "#1B2A4A",
      primary: "#1B2A4A",
      primaryLight: "#E8EDF5",
      primaryDark: "#0F1A30",
      accent: "#D4942B",
    },
    screenshots: [
      { label: "Home Screen", alt: "ReadStack home screen with reading streak" },
      { label: "PDF Reader", alt: "ReadStack PDF reader with annotation" },
      { label: "Progress Dashboard", alt: "ReadStack progress dashboard with charts" },
      { label: "Library View", alt: "ReadStack library with all imported files" },
    ],
    features: [
      {
        name: "Import Local Files",
        description:
          "Import PDFs and Markdown from your device. Your files stay on your phone — no cloud, no accounts, completely offline.",
        icon: "📂",
      },
      {
        name: "Set Your Reading Schedule",
        description:
          "Choose daily goals in pages or minutes. Pick reminder times that fit your routine. Flexible scheduling for weekdays or weekends.",
        icon: "⏰",
      },
      {
        name: "Beautiful In-App Reader",
        description:
          "Full PDF rendering with page navigation, zoom, and scroll modes. Beautifully rendered Markdown with code blocks and table of contents.",
        icon: "📖",
      },
      {
        name: "Track Your Progress",
        description:
          "GitHub-style streak calendar, pages-per-day charts, and reading speed trends. Watch your consistency grow day by day.",
        icon: "📊",
      },
      {
        name: "Private by Design",
        description:
          "No accounts. No cloud. No tracking. All your files and reading data stay on your device — exactly where they belong.",
        icon: "🔒",
      },
    ],
  }
];
