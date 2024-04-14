import { Page } from "./Page";

export function ConsultaNotas() {
  return (
    <Page typeSidebar="student" showSidebar={true}>
      <div className="flex flex-col h-full gap-6">
        <h1 className="text-4xl font-bold roboto">Notas</h1>
        <div className="flex flex-col w-full h-full gap-6 p-6 bg-white rounded-md shadow-2xl">
          <div className="flex gap-8">
            <div className="flex flex-col"></div>
          </div>
        </div>
      </div>
    </Page>
  );
}
