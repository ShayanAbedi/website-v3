const About = () => {
  return (
    <div className="w-full h-[800px]">
      <div className="flex flex-col justify-center items-center w-full h-full text-[var(--light-slate)]">
        <div className="max-w-[1000px] w-full px-4">
          <div className="">
            <p className="text-2xl font-bold overflow-hidden after:content-[''] after:inline-block after:h-[0.5em] after:align-bottom after:w-[300px] after:mr-[-100%] after:ml-[20px] after:border-t-2 after:border-[var(--lightest-navy)]">
              <span className="text-[var(--green)] pr-2">01. </span>About Me
            </p>
          </div>
          <div className="w-[500px]">
            <p className="mt-10">
              Hello! My name is Shayan and I enjoy creating things that live on
              the internet. My interest in web development started back in 2019
              when I was studying Computer Science at University Of New
              Brunswick (UNB).
            </p>
            <p className="mt-5">
              Fast-forward to today, and I’ve had the privilege of working at a
              start-up. My main focus these days is ....
            </p>
            <p className="mt-5">
              Here are a few technologies I’ve been working with recently:
              <ul className="mt-5 grid grid-cols-2">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.JS</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>Django</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
