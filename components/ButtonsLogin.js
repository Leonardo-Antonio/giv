import Link from "next/link";
import { useRouter } from "next/router";

export const ButtonLoginUser = () => {
  const { pathname } = useRouter();

  return (
    <div>
      <div className="flex flex-row">
        <div
          className={` p-4 rounded-l-full ${
            pathname == "/login"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          <Link href="/login">
            <a>Log in</a>
          </Link>
        </div>
        <div
          className={`p-4 rounded-r-full ${
            pathname == "/signup"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          <Link href="/signup">
            <a>Sign up</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
