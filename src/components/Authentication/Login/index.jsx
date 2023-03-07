export const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="products" onSubmit={(event) => handleSubmit(event)}>
      <input type={"text"} placeholder="Email" />
      <input type={"password"} placeholder="Password" />
      <button>Login</button>
    </form>
  );
};
