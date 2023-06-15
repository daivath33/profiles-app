import "./Main.scss";
import { BsArrowRightCircle } from "react-icons/bs";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { PROJECTS_ROUTE } from "../../routes/const";

const Main = () => {
  const navigate = useNavigate();

  const handleProjectsRewiev = () => {
    navigate(PROJECTS_ROUTE);
  };
  return (
    <div className="main-container">
      <div className="left">
        <h1>Statybos Projektų Valdymas</h1>
        <h1>Projektų Priežiūra</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          dignissimos, eos distinctio facilis consectetur quos obcaecati
          pariatur quasi quas exercitationem.{" "}
        </p>
        <Button variant="main-btn" onClick={handleProjectsRewiev}>
          <div className="btn-text">
            Peržiūrėti Projektus <BsArrowRightCircle className="btn-icon" />
          </div>
        </Button>
      </div>
      <div className="right">
        <div className="img-wrapper">
          <div className="img-box">
            <img
              src="https://cdn.ca.emap.com/wp-content/uploads/sites/9/2023/05/shutterstock_1989846932-modular-1024x684.jpg"
              alt=""
            />
          </div>
          <div className="img-box">
            <img
              src="https://www.constructionspecifier.com/wp-content/uploads/2019/05/Opener-3.jpg"
              alt=""
            />
          </div>
          <div className="img-box">
            <img
              src="https://assets.isu.pub/document-structure/210923124603-3e3463bbe3108ea2d5213734579cbc71/v1/d151357d97b131db90f1b9bd98386902.jpeg"
              alt=""
            />
          </div>
          <div className="img-box">
            <img
              src="https://www.nordic-swan-ecolabel.org/492955/contentassets/b9969713cbc445949d910bce4d4f3c1c/089-new-buildings.jpg?w=1800&quality=80&format=&mode=crop"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
