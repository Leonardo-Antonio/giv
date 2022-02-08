import { ContainerUser } from "../layouts/ContainerUser";
import { ButtonLoginUser } from "../components/ButtonsLogin";
import { ButtonsMethodsLoginProvider } from "../components/ButtonMethodLoginProvider";

export default function SignUpPage() {
  return (
    <ContainerUser title="Log in">
      <div>
        <section className="w-1/2 h-screen bg-black text-white flex items-center justify-center">
          <div className="flex justify-center">
            <article>
              <div className="text-center">
                <span className="font-black text-7xl">GIV</span>
                <span>Animation</span>
              </div>

              <div className="flex justify-center p-6">
                <ButtonLoginUser />
              </div>

              <ButtonsMethodsLoginProvider type={false} />
            </article>
          </div>
        </section>
        <section className="w-1/2 h-screen">asdd</section>
      </div>
    </ContainerUser>
  );
}
