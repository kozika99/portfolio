export default function Footer() {
  return (
    <section id="contact">
      <div className="px-[7rem] py-10 ">
        <footer className="p-4">
          <span className="text-sm sm:text-center">Tamás Kozák ⏤ 2023</span>
          <ul className="flex flex-row pl-[90%] text-sm">
            <li>
              <a
                href="https://www.linkedin.com/in/tamás-kozák-26b00114a/"
                target="_blank"
                className="hover:underline pr-8"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kozika99"
                target="_blank"
                className="hover:underline"
              >
                Github
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
}
