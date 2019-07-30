<script>
  let userName = "";
  let password = "";

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
  p{text-align: center}
  label {
    text-align: left;
  }
  div {
    margin: 1em;
  }
</style>

<form onsubmit={handleSubmit}>
  <div>
    <label for="userName">User name:</label>
    <input type="text" name="userName" bind:value={userName} />
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" name="password" bind:value={password} />
  </div>
</form>

<p>
  dont have an account yet? Sign up <a href="signUp">here</a>
</p>

