export default function About() {
  return (
    <section id="about">
      <div className="flex flex-col md:flex-row md:gap-20 py-16">
        <div className="w-full md:w-7/12">
          <h2 className="text-3xl font-bold mb-5">About</h2>
          <p className="pt-3 pb-6">
            I have a Bachelor's degree Information Technology and currently
            looking for <br></br> job opportunities in the Netherlands.{" "}
          </p>
          <p className="pt-1 pb-12">
            I have worked on numerous projects throughout my education, both for
            <br></br> the university and for customers. I am happy to answer if
            you have any questions.
          </p>
        </div>
      </div>
    </section>
  );
}
