import "./App.css";
import illustration from "./assets/images/illustration-article.svg";
import profilePhoto from "./assets/images/image-avatar.webp";

function App() {
  return (
    <>
      <main>
        <article className="card-wrapper">
          <img
            src={illustration}
            alt=""
            width="336px"
            height="200px"
            className="card-img"
          />
          <section className="card-content">
            <p className="category">Learning</p>
            <p className="published">Published <time datetime="2023-12-21">21 Dec 2023</time></p>
            <h1 className="title">HTML & CSS foundations</h1>
            <p className="paragraph">
              These languages are the backbone of every website, defining structure, content, and presentation.
            </p>
          </section>
          <section className="user-info">
            <div className="user">
              <img src={profilePhoto} alt="User Avatar" className="user-avatar" width="32" height="32"/>
              <p className="user-name">Greg Hooper</p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default App;
