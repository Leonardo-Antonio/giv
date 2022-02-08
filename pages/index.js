import { ContainerLayoutDefault } from "../layouts/ContainerLayoutDefault";

export default function HomePage() {
  return (
    <ContainerLayoutDefault title="GIV - Home">
      <section>
        <div className="p-6">
          <input type="text" name="search" className="w-full h-12 p-4 rounded-md" placeholder="Buscar coincidencias" />
        </div>
      </section>
    </ContainerLayoutDefault>
  );
}
