const template = `
    <div class="login-form">
        <form>
            <label>Email</label>
            <input name="email"/>

            <label>Password</label>
            <input name="password" type="password" autocomplete="chrome-off"/>
      
            <button class="button-registration" type="submit">Login</button>
            <a class="register-link" href="/registration">Register</a>
        </form>
    </div>
`;

export default template;