import resumePDF from "../assets/Tamás_Kozák_Resume.pdf";

export default function Header() {
  return (
    <header id="header" className="sticky top-0 flex justify-between py-8">
      <a href="/#home" className="logo text-2xl font-bold text-accent">
        TK
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex flex-row justify-end gap-10">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#experience">Experience</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a className="text-red-700" href={resumePDF} target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
