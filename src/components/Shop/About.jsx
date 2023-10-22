import { useSelector } from "react-redux";

const About = () => {
    const counterVal = useSelector((state) => state.counter.counter)
  return (
    <div className="container py-5">
      <h2 className="pb-4">About</h2>
      <div className="row align-items-center">
        <div className="col-8">
          <h4 className="pb-4">Info</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
            voluptas. Alias, accusantium eum esse eaque harum, neque eius
            accusamus recusandae fugiat cum, ab quisquam similique ipsam? Fugiat
            sapiente quos eum!
          </p>

          <p className="mt-4 fs-5">Donations: $<span className="fw-bold">{counterVal}</span></p>
        </div>
        <div className="col-4">
            <figure className="">
                <img src='./images/avatar.png' className="img-fluid rounded-circle" alt="avatar" />
            </figure>
        </div>
      </div>
    </div>
  );
};

export default About;
