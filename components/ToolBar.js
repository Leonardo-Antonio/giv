import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";

export const ToolBar = () => {
  const links = [
    { item: "Clips" },
    { item: "Tendencias" },
    { item: "Giff's" },
    { item: "Imagenes" },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center p-4">
        <section className="flex items-center">
          <div>
            <Link href="/">
              <a>
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={55}
                  height={55}
                />
              </a>
            </Link>
          </div>
          <div>
            <strong className="font-bold text-4xl text-white pl-6">GIV</strong>
          </div>
        </section>

        <section>
          <div>
            {links.map((link) => (
              <span
                key={v4().toString()}
                className="font-semibold text-lg pl-4 pr-4 cursor-pointer text-white"
              >
                {link.item}
              </span>
            ))}
          </div>
        </section>

        <section>
          <div>
            <Link href="/login">
              <a className="bg_blue mr-2 p-4 font-bold rounded-md">Ingresar</a>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
