export default function Home(token) {
  return (
    <div className="Home">
      <button onClick={(e) => console.log(token)}>click me</button>
    </div>
  );
}
