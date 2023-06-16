import { useState } from "react";

function Header({ title = "React 💙" }) {
  return <h1>{title}</h1>;
}

function HomePage() {
  const [likes, setLikes] = useState(0);
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  function handleClick() {
    console.log("like clicked");
    setLikes((prev) => prev + 1);
  }

  return (
    <div>
      {/* Nesting the Header component */}
      <Header title="Develop. Preview. Ship. 🚀" />
      <div>Content</div>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <div>Likes: {likes}</div>
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

export default HomePage;
