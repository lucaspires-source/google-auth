import "./styles.scss";

import { GoogleLogo } from "phosphor-react";
export function SignIn() {
  return (
    <div className="container">
      <h1>Acesse sua conta</h1>
      <span>
        Utilizando autentificação social, por exemplo, autentificação com a
        Google você <br />
        facilita a vida do usuário, o permitindo utilizar sua aplicação sem
        fazer cadastro.
      </span>
      <button type="button" className="button">
        <GoogleLogo />
        Entrar com Google
      </button>
    </div>
  );
}
