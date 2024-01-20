import { Link } from 'react-router-dom';
import img from "../../assets/img/welcomeImg/boy.png";
import svgSprite from "../../assets/svg/symbol-defs.svg";

const Start = () => {
  return (
    <section>
      <div>
        <img src={img} alt="Task pro user" />
      </div>
      <div>
        <svg>
          <use href={svgSprite + '#icon-task'} />
        </svg>
        <h1>Task Pro</h1>
      </div>

      <p>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>

      <Link to="/auth/register">
        Registration
      </Link>
      <Link to="/auth/login">
        Log In
      </Link>
    </section>
  );
};

export default Start;
