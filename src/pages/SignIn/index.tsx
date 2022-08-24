import "./styles.scss";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { GoogleLogo } from "phosphor-react";
import { auth } from "../../services/firebase";
export function SignIn() {
  const [user, setUser] = useState<User>({} as User);
  function handleGoogleSigIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(user);
  return (
    <div className="container">
      {user.displayName ? (
        <div className="user">
          {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}
          <strong>Seja Bem Vindo, {user.displayName}!</strong>
          <small>{user.email}</small>
        </div>
      ) : (
        <>
          <h1>Acesse sua conta</h1>
          <span>
            Utilizando autentificação social, por exemplo, autentificação com a
            Google você <br />
            facilita a vida do usuário, o permitindo utilizar sua aplicação sem
            fazer cadastro.
          </span>
          <button type="button" className="button" onClick={handleGoogleSigIn}>
            <GoogleLogo />
            Entrar com Google
          </button>
        </>
      )}
    </div>
  );
}
