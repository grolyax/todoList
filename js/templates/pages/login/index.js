const template = `
    <div class="login-form">
        <form>
            <label>Email</label>
            <input name="user"/>
            <span class="error"></span>

            <label>Password</label>
            <input name="password" type="password" autocomplete="chrome-off"/>
            <span class="error"></span>

            <button class="button-registration" type="submit">Login</button>
            <a class="register-link" href="/registration">Register</a>
        </form>
    </div>
`;

export default template;