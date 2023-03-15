function getWelcomeText(username) {
  console.log(username);
  if (username === undefined) {
    return <h2>Добро пожаловать</h2>;
  } else {
    return <h2>Добрый вечер, {username.username}</h2>;
  }
}

export default function Welcome(username) {
  //   const welcomeText = getWelcomeText(username);
  return <>{getWelcomeText(username.username)}</>;
}
