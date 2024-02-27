import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <div>
      <section id="contact">
        <h2 className="text-left text-3xl font-bold">Contact</h2>
        <h3 className="pt-8 grid place-items-center grid-cols-1 text-xl font-bold">
          Get in Touch!
        </h3>
        <ul className="pt-10 grid place-items-center grid-cols-2 gap-5">
          <li>
            <a
              href="mailto:t.kozak@student.fontys.nl"
              target="_blank"
              className="hover:underline"
            >
              <HiOutlineMail size={"36"} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tamás-kozák-26b00114a/"
              target="_blank"
              className="hover:underline"
            >
              <div className="text-lg">
                <AiOutlineLinkedin size={"36"} />
              </div>
            </a>
          </li>
        </ul>
      </section>
      <section id="footer">
        <footer className="py-4 pb-8">
          <span className="pt-4 grid place-items-center grid-cols-1">
            Tamás Kozák ⏤ 2024
          </span>
        </footer>
      </section>
    </div>
  );
}
