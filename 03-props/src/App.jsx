import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="parent">
        <Card
          user="Krutarth"
          bio="Hello, I'm Krutarth Katrodiya, The Founder of Caylwon & Ologon."
          img="https://avatars.githubusercontent.com/u/170127141?v=4"
        />
        <Card
          user="Harsh"
          bio="Hello, I'm Harsh Suvagiya, The Founder of Chokozu."
          img=""
        />
        <Card
          user="Raj"
          bio="Hello, I'm Raj Shamani, The Founder of Figuring out."
          img="https://yt3.googleusercontent.com/qSVJkhoSs6lw5cNMsZAJ8ZAk1pxiewDb_gLtnzOsyM5TWQ6YggQj0eBetOLSxFuJqgxsyQ73NA=s900-c-k-c0x00ffffff-no-rj"
        />
      </div>
    </>
  );
}

export default App;
