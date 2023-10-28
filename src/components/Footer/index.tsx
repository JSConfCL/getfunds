import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const footer = [
    {
      id: 1,
      name: "CÓDIGO DE CONDUCTA",
      url: "https://github.com/jsconfcl/code_of_conduct",
    },
    { id: 2, name: "CONTACTO@JSCHILE.ORG", url: "mailto:contacto@jschile.org" },
    {
      id: 3,
      name: "MIT Licencse  - JavaScript Chile",
      url: "https://github.com/jsconfcl/org-landing",
    },
    {
      id: 4,
      name: "Con ❤️ - El equipo JavaScript Chile",
      url: "https://github.com/jsconfcl",
    },
  ];

  return (
    <footer className="container flex flex-col items-center justify-between gap-4 py-3 lg:my-0 lg:h-[60px] lg:flex-row">
      <div className="flex justify-center gap-4">
        <a
          target="_blank"
          href="https://www.linkedin.com/company/javascript-chile/"
        >
          <Linkedin />
        </a>
        <a target="_blank" href="https://twitter.com/javascriptChile">
          <Twitter />
        </a>
        <a target="_blank" href="https://www.instagram.com/javascriptchile/">
          <Instagram />
        </a>
      </div>
      <div className="flex flex-col gap-4 text-center lg:flex-row lg:gap-8">
        {footer.map((link) => (
          <a key={link.id} href={link.url}>
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
