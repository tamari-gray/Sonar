<script>
  let userName = "";
  let password = "";
  let email = "";

  function handleSubmit(e) {
    e.preventDefault()
    // firebase auth function
    
  }
</script>

<style>
  form {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    height: 50vh;
    width: 50vw;
    border: thin solid grey;
    margin: auto;
  }
  p {
    text-align: center;
  }
  label {
    text-align: left;
  }
  div {
    width: 100%;
    margin: 1em;
    display: flex;
    justify-content: space-around;
  }
  div label {margin-right: 1em}
</style>

<form onsubmit={handleSubmit}>
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
  <div>
    <button type="submit">Sign up</button>
  </div>
</form>

<p>
  already have an account? Login
  <a href="login">here</a>
</p>
