import Head from "next/head";
import { ToolBar } from '../components/ToolBar';

export const ContainerLayoutDefault = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title> {title} </title>
      </Head>

      <ToolBar />
      <div className="container mx-auto">{children}</div>
    </div>
  );
};
