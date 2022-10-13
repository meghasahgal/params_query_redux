import "./SingleArticle.css";
import { useParams } from "react-router-dom";
import ArticleList from "../ArticleList";

// place articles as arg
const SingleArticle = ({ articles }) => {
  const { id } = useParams();
  return (
    <div className="singleArticle">
      <h1>{articles[id].title}</h1>
      <img src={articles[id].imageUrl} alt="" />
      <p>{articles[id].body}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse
        laboriosam officia accusantium veritatis fugiat exercitationem vero
        autem nihil aliquid ullam recusandae, quis odit odio voluptates
        explicabo nobis! Consequuntur, aliquam?
      </p>
    </div>
  );
};

export default SingleArticle;
