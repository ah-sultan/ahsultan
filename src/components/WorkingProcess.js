import Link from "next/link";

const workProcessData = [
  {
    _id: 1,
    title: "Planning and Analysis",
    body: "Before starting a project, I first research the project category, the current market, and the most suitable technology for the project, etc.",
  },
  {
    _id: 1,
    title: "design and development",
    body: "In this step, I focus on designing the wireframe and user interface. Once finalized, I can begin building the project and developing its features.",
  },
  {
    _id: 1,
    title: "Testing and fix the bugs",
    body: "After development is complete, I focus on identifying and fixing bugs through testing. Once the project is clear of critical issues, I prepare it for production.",
  },
  {
    _id: 1,
    title: "deploy and live",
    body: "In the final step, I deploy the website to an online hosting platform and then configure it to reaching target audience.",
  },
];

const WorkingProcess = () => {
  return (
    <section
      id="working-process"
      className="working-process-area pt-130 rpt-100 rel z-1"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9">
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Working Process</span>
                  <h2>
                    {/* How i make plan to <span>Solve problem</span> with my Experience */}
                    Here&apos;s how I use my experience to plan for{" "}
                    <span>solving problems</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="big-icon mt-85 rmt-0 rmb-55 wow fadeInUp delay-0-2s ">
              <i className="flaticon-asterisk-1 hidden" />
            </div>
          </div>
        </div>
        {/* Card Section */}
        <div className="row working-process-items-wrap">
          {Array.isArray(workProcessData) &&
            workProcessData.map((data, index) => {
              return (
                <div className="col-12 working-process-item" key={index}>
                  <div className="item-wrapper wow fadeInUp delay-0-3s col-lg-6">
                    <div className="icon">{index + 1}</div>
                    <div className="content">
                      <h4 className="mb-4">{data?.title}</h4>
                      <p>{data?.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default WorkingProcess;
