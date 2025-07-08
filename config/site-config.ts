export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project" | "companies" | "certifications"; // Added "certifications"

export type EquipmentItem = {
  title: string;
  link: string;
};

export type CertificationItem = {
  name: string;
  badgeUrl: string;
  verificationLink: string;
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
  equipments?: EquipmentItem[];
  image?: string;
  /* Companies */
  companies?: { name?: string; logo: string }[];
  /* Certifications */
  certifications?: CertificationItem[];
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "certifications",
    title: "Certifications",
    certifications: [
      {
        name: "OSCP",
        badgeUrl: "/certifications/oscp.png",
        verificationLink: "https://credentials.offsec.com/6e87f088-d9b1-4669-8b26-604c2bc7aad8"
      },
      {
        name: "CEH",
        badgeUrl: "/certifications/ceh.png",
        verificationLink: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=ZN274teCLMljMYSES1uz2UNMhZZQirgf3TlxiSMnoPI="
      },
      {
        name: "eJPT",
        badgeUrl: "/certifications/ejpt.png",
        verificationLink: "https://certs.ine.com/e5839276-37f1-4b96-9ba5-545ae936868d"
      }
    ]
  },
  {
    layout: "2x2",
    type: "companies",
    title: "COMPANIES I'VE HACKED",
    color: "#4CAF50",
    companies: [
      {
        name: "Red Bull",
        logo: "https://1000logos.net/wp-content/uploads/2021/04/Red-Bull-logo.png",
      },
      {
        name: "NASA",
        logo: "https://gpm.nasa.gov/themes/custom/pmm_bs/images/nasa-logo-large-v1.png",
      },
      {
        name: "Coin Hako",
        logo: "https://press.coinhako.com/content/images/size/w720/2023/04/Coinhako-Logo_Blue--square-.png",
      },
      {
        name: "BEES",
        logo: "https://www.beessoftware.in/wp-content/uploads/2023/05/BEES-e1684225590224.png",
      },
      {
        name: "VM Edu Life",
        logo: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_4906c71ed1631cc3fc76f4aaa9b825c6/vmedulife.png",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Linkedin",
    icon: "linkedin",
    username: "@v31l0x1",
    color: "#0077B5",
    description:
      "Cybersecurity Enthusiast || Passionate About Network Security, Cyber Forensics, and OSCP || Gopher.",
    buttonTitle: "Connect",
    buttonLink: "https://www.linkedin.com/in/v31l0x1/",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Discord",
    icon: "discord",
    username: "@v31l0x1",
    buttonTitle: "Follow",
    buttonLink: "https://discord.com/users/768023173177933844",
    color: "#5865F2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@v31l0x1",
    buttonTitle: "Follow",
    buttonLink: "https://github.com/v31l0x1",
    color: "#070707",
  },
  // {
  //   layout: "2x4",
  //   type: "equipment",
  //   title: "COCON 2023",
  //   image: "/cocon.jpg",
  // },
  {
    layout: "1x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@v31l0x1",
    buttonTitle: "Follow",
    buttonLink: "https://twitter.com/v31l0x1",
    buttonSecondaryText: "279",
    color: "#1DA1F2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "TryHackMe",
    icon: "tryhackme",
    username: "@v31l0x1",
    buttonTitle: "View Profile",
    buttonLink: "https://tryhackme.com/p/v31l0x1",
    color: "#1A1A1A",
  },
  {
    layout: "1x2",
    type: "social",
    title: "HackTheBox",
    icon: "hackthebox",
    username: "@v31l0x1",
    buttonTitle: "View Profile",
    color: "#9FEF00",
    buttonLink: "https://app.hackthebox.com/users/2065925",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Dragonet C2",
    icon: "github",
    color: "#070707",
    buttonLink: "https://github.com/V31L0x1/DragonetC2",
  },
  {
    layout: "2x1",
    type: "project",
    title: "RedTeam Tools",
    icon: "github",
    color: "#070707",
    buttonLink: "https://github.com/V31L0x1/Red-Team-Tools",
  },
  // New Companies Grid Item
  
];

export const siteConfig = {
  creator: "Manikanta",
  title: "Penetration Tester",
  bio: "Jr Penetration Tester (OSCP, CEH, eJPTv2) || Bug Hunter 🐞, CTF Player 🎮",
  resume: "View Resume",
  resumeLink: "/resume.pdf",
  email: "pmani9505@gmail.com",
  items: GridItems,
} as const;