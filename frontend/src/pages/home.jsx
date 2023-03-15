import Welcome from "./components/welcome";

function userData(token) {
  return fetch("http://127.0.0.1:8000/api/user/retrieve", {
    method: "GET",
    headers: {
      Authorization: "Token " + token,
    },
  }).then((data) => data.json());
}

export default function Home(token) {
  const user = userData(token.token);
  console.log(user);
  return (
    <div className="Home">
      <Welcome username={user} />
    </div>
  );
}
