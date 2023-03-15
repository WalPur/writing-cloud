import React, { useState } from "react";

async function loginUser(credentials) {
  return fetch("http://127.0.0.1:8000/api/token-auth/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassWord] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    console.log(token);
    setToken(token);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Имя пользователя</p>
        <input
          type="text"
          name="username"
          id=""
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label>
        <p>Пароль</p>
        <input
          type="text"
          name="password"
          id=""
          onChange={(e) => setPassWord(e.target.value)}
        />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
