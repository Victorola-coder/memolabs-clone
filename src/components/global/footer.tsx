import Image from "../ui/image";
import { Twitter, Github, BookOpen, MessageCircle } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export default function Footer() {
  const socialLinks: SocialLink[] = [
    {
      name: "Twitter",
      href: "https://twitter.com/MemoLabsOrg",
      icon: <Twitter className="w-6 h-6" />,
    },
    {
      name: "Mirror",
      href: "https://mirror.xyz/dashboard/project/0x9dDF45674d0Fd1e5D1C11C25273703246661f689/join",
      icon: (
        <Image src="/images/mirror.png" alt="Mirror" width={24} height={24} />
      ),
    },
    {
      name: "Github",
      href: "https://github.com/memoio",
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: "Discord",
      href: "https://discord.gg/YG4Ydv2E7X",
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      name: "Medium",
      href: "https://memolabs.medium.com/",
      icon: <BookOpen className="w-6 h-6" />,
    },
  ];

  return (
    <footer className="bg-[#15193B] text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Stay In Touch, Don't Miss Out!
          </h2>
          <form
            action="https://formspree.io/f/mzbygkoz"
            method="POST"
            className="max-w-xl mx-auto flex flex-col md:flex-row gap-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter Your E-mail Address"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#3B82F6] text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#15193B]">
                {link.icon}
              </div>
              <span className="text-sm">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center mb-8">
          <div className="mb-4 md:mb-0">
            <a href="/megrez-node" className="mx-2 hover:underline">
              Megrez Node
            </a>
            <span className="mx-2">|</span>
            <a href="/wiki" className="mx-2 hover:underline">
              Wiki
            </a>
          </div>
          <div>
            <span className="mx-2">Contact Us:</span>
            <a
              href="mailto:contact@memolabs.org"
              className="hover:underline"
              aria-label="Email us"
            >
              contact@memolabs.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
