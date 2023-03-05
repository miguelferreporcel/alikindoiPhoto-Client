import { Link } from "react-router-dom";
export function NotFoundPage() {
    return (
      <div>
       {/*  <h1 className=" text-white "><b>Oops! You seem to be lost</b></h1> */}
        <img
        src="https://cdn1.iconfinder.com/data/icons/photo-stickers-words/128/word_18-1024.png"
        alt="Not Found"
        className="not-found-image" />
        <p className=" text-white text-center">
          <Link to="/">Ir a Home </Link>
        </p>
      </div>
    );
  }