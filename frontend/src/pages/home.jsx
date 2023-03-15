import Welcome from "./components/welcome";
import ForYou from "./components/foryou";
import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/user/retrieve", {
      headers: {
        Authorization: "Token " + this.props.token,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Пожалуйста подождите немного.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <Welcome username={items} />
        <ForYou />
      </div>
    );
  }
}

export default Home;
// function Home(token) {
//   const user = userData(token.token);
//   console.log(user);
//   return (
//     <div className="Home">
//       <Welcome username={user} />
//     </div>
//   );
// }
