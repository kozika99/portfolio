export default function Contact() {
  function handleClick() {
    window.location.href = `mailto:${props.email}`;
  }

  return (
    <section id="contact">
      <div className="px-32">
        <h2 className="text-left text-3xl font-bold">Contact</h2>
        <ul className="flex justify-center items-center py-16">
          <li onClick={handleClick}>
            <a
              href="mailto:t.kozak@student.fontys.nl"
              target="_blank"
              className="hover:underline pr-32"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tamás-kozák-26b00114a/"
              target="_blank"
              className="hover:underline pr-32"
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
      </div>
    </section>
  );
}
