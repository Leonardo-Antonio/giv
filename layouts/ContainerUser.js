import Head from "next/head";

export const ContainerUser = ({ children, title }) => {
  return (
    <div className="bg_user__credentials overflow-hidden">
      <Head>
        <title>{title} | GIV</title>
      </Head>
      <section>{children}</section>
    </div>
  );
};
