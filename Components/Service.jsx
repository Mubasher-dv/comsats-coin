import React from "react";

const Service = () => {
  const services = [
    {
      title: 'Secure Storage',
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has more-or-less normal distribution of letters making it look like readable English."
    },
    {
      title: 'Mobile App',
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has more-or-less normal distribution of letters making it look like readable English."
    },
    {
      title: 'Exchange Services',
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has more-or-less normal distribution of letters making it look like readable English."
    },
    {
      title: 'Investment Project',
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has more-or-less normal distribution of letters making it look like readable English."
    },
    {
      title: 'Credit Card Use',
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has more-or-less normal distribution of letters making it look like readable English."
    },
    {
      title: 'Planning',
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has more-or-less normal distribution of letters making it look like readable English."
    },
  ]
  return (
    <section
      id="service"
      className="small_pb"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4
                className="animation"
                data-animation='fadeInUp'
                data-animation-delay='0.2s'
              >
                Meet Our Services
              </h4>
              <p
                className="animation"
                data-animation='fadeInUp'
                data-animation-delay='0.2s'
              >
                It is a long established fact that a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it look like
                readable English.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {
            services.map((service, i) => (
              <div key={i + 1} className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="box_wrap text-center animation"
                  data-animation='fadeInUp'
                  data-animation-delay={`0.${i+1}s`}
                >
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
};

export default Service;
