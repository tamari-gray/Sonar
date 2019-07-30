<script>
  let authType = "sign up";

  let userName = "";
  let email = "";
  let password = "";

  function handleAuthType(type) {
    authType = type;
  }
  function handleSubmit(e) {
    e.preventDefault();
    // firebase auth function
  }
</script>

<style>
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    height: 50vh;
    width: 50vw;
    border: thin solid grey;
    margin: auto;
  }
  h1 {
    text-align: center;
  }
  p{text-align: center}
  label {
    text-align: left;
  }
  div {
    margin: 1em;
  }
</style>

<form onsubmit="handleSubmit">
  <div>
    <label for="userName">User name:</label>
    <input type="text" name="userName" bind:value={userName} />
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="text" name="email" bind:value={email} />
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" name="password" bind:value={password} />
  </div>
</form>

<p>
  already have an account? Login <a href="login">here</a>
</p>

