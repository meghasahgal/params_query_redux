import "./SingleArticle.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { findArticleById } from "../../store/articleReducer";

// place articles as arg
const SingleArticle = () => {
  const { id } = useParams();
  // clean way
  const chosenArticle = useSelector(findArticleById(id));
  // const chosenArticle = useSelector((store) => {
  //   const articles = store.articleState.entries;
  //   return articles.find((el) => el.id === id);
  // });
  // const articles = useSelector((store) => store.articleState.entries);
  // find the article id equal to the param by passing props
  //second way
  // const chosenArticle = articles.find((el) => el.id === id);
  // console.log(chosenArticle);
  return (
    <>
      {chosenArticle && (
        <div className="singleArticle">
          <h1>{chosenArticle.title}</h1>
          <img src={chosenArticle.imageUrl} alt="{chosenArticle.title}" />
          <p>{chosenArticle.body}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse
            laboriosam officia accusantium veritatis fugiat exercitationem vero
            autem nihil aliquid ullam recusandae, quis odit odio voluptates
            explicabo nobis! Consequuntur, aliquam?
          </p>
        </div>
      )}
      ;
    </>
  );
};

export default SingleArticle;
