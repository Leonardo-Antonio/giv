import Image from "next/image";
import { useAuth } from "../hook/auth.hook";

export const ButtonsMethodsLoginProvider = ({ type = false }) => {
  const [handlerLoginWithFb, handlerLoginWithGoogle, handlerSignOut, error] =
    useAuth();

  // true = Login - false = "SignUp"
  const text = type ? "Ingrese con " : "Registrese con ";
  return (
    <div>
      <div className="flex flex-col">
        <button
          onClick={handlerLoginWithGoogle}
          className="bg_gris text-white font-bold flex justify-center p-2 m-2 rounded-md"
        >
          <div className="flex flex-row items-center gap-4">
            <Image
              src="/icons/icon_google.png"
              width={35}
              height={35}
              alt="fb"
            />
            <span>{text} Google</span>
          </div>
        </button>
        <button
          onClick={handlerLoginWithFb}
          className="bg_gris text-white font-bold flex justify-center p-2 m-2 rounded-md"
        >
          <div className="flex flex-row items-center gap-4">
            <Image src="/icons/icon_fb.png" width={35} height={35} alt="fb" />
            <span>{text} Facebook</span>
          </div>
        </button>
      </div>
      <div className="p-6">
        <p>
          Al iniciar sesión y registrarse, acepta los Términos de servicio de
          <strong> GIV</strong>
        </p>
      </div>
    </div>
  );
};
