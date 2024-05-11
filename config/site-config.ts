export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Linkedin",
    icon: "linkedin",
    username: "@v31l0x1",
    description:
      "Cybersecurity Enthusiast || Passionate About Network Security, Cyber Forensics, and OSCP || Gopher.",
    color: "#0077B5",
    buttonTitle: "Connect",
    buttonLink: "https://www.linkedin.com/in/v31l-0x1/",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Discord",
    icon: "discord",
    username: "@v31l_0x1",
    buttonTitle: "Follow",
    buttonLink: "https://discord.com/",
    color: "#5865F2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@batuhanbilginn",
    buttonTitle: "Follow",
    buttonLink: "https://github.com/v31l0x1",
    color: "#070707",
  },
  {
    layout: "2x4",
    type: "equipment", 
    title: "COCON 2023",
    image: "/cocon.jpg",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@v31l_0x1",
    buttonTitle: "Follow",
    buttonLink: "https://twitter.com/v31l_0x1",
    buttonSecondaryText: "279",
    color: "#1DA1F2",
    description:
      "Cybersecurity Enthusiast  || Passionate About Network Security, Cyber Forensics, and OSCP.",
  },
  {
    layout: "1x2",
    type: "social",
    title: "TryHackMe",
    icon: "tryhackme",
    username: "@v31l_0x1",
    buttonTitle: "View Profile",
    buttonLink: "https://tryhackme.com/p/V31L0x1",
    color: "#1A1A1A",
  },
  {
    layout: "1x2",
    type: "social",
    title: "HackTheBox",
    icon: "hackthebox",
    username: "@v31l_0x1",
    buttonTitle: "View Profile",
    color: "#9FEF00",
    buttonLink: "https://app.hackthebox.com/users/1044801",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Plant-Disease-Identification",
    icon: "github",
    color: "#070707",
    buttonLink: "https://github.com/V31L0x1/Plant-Disease-Identification",
    stars: 73,
  },
  {
    layout: "2x1",
    type: "project",
    title: "Wifi Cracking Automation",
    icon: "github",
    stars: 19,
    color: "#070707",
    buttonLink: "https://github.com/V31L0x1/wifi-cracking-automation",
  },
];

export const siteConfig = {
  creator: "Manikanta",
  title: "Penetration Tester",
  bio: "Jr Penetration Tester ( eJPTv2 ) || Bug Hunter 🐞, CTF Player 🎮",
  resume: "View Resume",
  resumeLink:
    "/resume.pdf",
  email: "pmani9505@gmail.com",
  items: GridItems,
} as const;
