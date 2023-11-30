const Experience = () => {
  return (
    <div className="w-full h-[800px]">
      <div className="flex flex-col justify-center items-center w-full h-full text-[var(--light-slate)]">
        <div className="max-w-[1000px] w-full px-4">
          <div className="">
            <p className="text-2xl font-bold overflow-hidden after:content-[''] after:inline-block after:h-[0.5em] after:align-bottom after:w-[300px] after:mr-[-100%] after:ml-[20px] after:border-t-2 after:border-[var(--lightest-navy)]">
              <span className="text-[var(--green)] pr-2">02. </span>Experience
            </p>
          </div>
          <div className="w-[500px]">
            <p className="mt-10">
              These are some of the technologies I've worked with
            </p>
          </div>
          <div className="p-20 grid grid-cols-4 gap-4">
            <i className="devicon-html5-plain text-9xl"></i>
            <i className="devicon-css3-plain text-9xl"></i>
            <i className="devicon-javascript-plain text-9xl"></i>
            <i className="devicon-typescript-plain text-9xl"></i>
            <i className="devicon-python-plain text-9xl"></i>
            <i className="devicon-nodejs-plain text-9xl"></i>
            <i className="devicon-react-plain text-9xl"></i>
            <i className="devicon-git-plain text-9xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
