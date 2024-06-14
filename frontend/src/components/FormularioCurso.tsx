import { useState } from "react";
import { useForm } from "react-hook-form";
import { AppIcons } from "../assets/exports";
import { api } from "../services/api";

type TipoParametro = {
  curso_id: number | null;
};

export function FormularioCurso({ curso_id }: TipoParametro) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formErrors, setFormErrors] = useState({
    nome: false,
    carga_horaria: false,
    coordenador_id: false,
    sigla: false
  });
  
  // Coordenadores mockados
  const mockCoordenadores = [
    { id: 1, nome: "João da Silva" },
    { id: 2, nome: "Maria Oliveira" },
    { id: 3, nome: "Carlos Pereira" }
  ];

  const [coordenadores, setCoordenadores] = useState<any[]>(mockCoordenadores);
  
  const color_error = '#F50047';
  const cinza = '#626970';
  const tipo = curso_id !== null ? 'Alterar' : 'Cadastrar';

  console.log("Tipo de Operação:", tipo);

  // useEffect(() => {
  //   // Função para buscar coordenadores da API
  //   const fetchCoordenadores = async () => {
  //     try {
  //       const response = await api.get('/v1/coordenadores/list');
  //       setCoordenadores(response.data);
  //     } catch (error) {
  //       console.error("Erro ao buscar coordenadores:", error);
  //     }
  //   };

  //   fetchCoordenadores();
  // }, []);
  // ta comentado porque nao tem no back, masi eu dexei uma representacao de como seria

  const validate = (data: any) => {
    const newErrors = {
      nome: !data.nome,
      carga_horaria: !data.carga_horaria,
      coordenador_id: !data.coordenador_id,
      sigla: !data.sigla
    };
    setFormErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const onSubmit = async (data: any) => {
    if (validate(data)) {
      try {
        if (curso_id !== null) {
          await api.put(/v1/cursos/update/${curso_id}, data);
        } else {
          await api.post(/v1/cursos/store/, data);
        }
        // Sucesso - você pode adicionar uma notificação de sucesso aqui se desejar
      } catch (error) {
        console.error("Erro ao salvar o curso:", error);
        // Erro - você pode adicionar uma notificação de erro aqui se desejar
      }
    }
  };

  return (
    <div className="flex flex-col h-[91%] gap-6">
      <h1 className="text-4xl font-bold">Cursos / {tipo} curso</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full h-full gap-6 p-6 bg-white rounded-md shadow-2xl">
        <div className="flex gap-8">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-[#000000] mx-1 my-2">Nome</label>
            <input {...register('nome', { required: true })} type="text" style={{ border: 2px solid ${formErrors.nome ? color_error : cinza} }} className="w-full h-[47px] bg-[#f0f0f0] rounded-md px-2" id="name" placeholder="Nome do curso" />
            {formErrors.nome && <span className="text-[#F50047] px-2 pt-2 text-[12px]">*Esse campo é obrigatório</span>}
          </div>
          <div className="flex flex-col flex-1 max-w-[264px]">
            <label htmlFor="carga_horaria" className="text-[#000000] mx-1 my-2">Carga Horária</label>
            <input {...register('carga_horaria', { required: true })} type="text" style={{ border: 2px solid ${formErrors.carga_horaria ? color_error : cinza} }} className="w-full h-[47px] bg-[#f0f0f0] rounded-md px-2" id="carga_horaria" placeholder="000 Horas" />
            {formErrors.carga_horaria && <span className="text-[#F50047] px-2 pt-2 text-[12px]">*Esse campo é obrigatório</span>}
          </div>
          <div className="flex flex-col flex-1 max-w-[264px]">
            <label htmlFor="coordenador" className="text-[#000000] mx-1 my-2">Coordenador</label>
            <select {...register('coordenador_id', { required: true })} style={{ border: 2px solid ${formErrors.coordenador_id ? color_error : cinza} }} className={w-full h-[47px] bg-[#f0f0f0] rounded-md px-2} id="coordenador">
              <option value="">Selecione</option>
              {coordenadores.map((coordenador) => (
                <option key={coordenador.id} value={coordenador.id}>
                  {coordenador.nome}
                </option>
              ))}
            </select>
            {formErrors.coordenador_id && <span className="text-[#F50047] px-2 pt-2 text-[12px]">*Esse campo é obrigatório</span>}
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col flex-1 max-w-[264px]">
            <label htmlFor="sigla" className="text-[#000000] mx-1 my-2">Sigla</label>
            <input {...register('sigla', { required: true })} type="text" style={{ border: 2px solid ${formErrors.sigla ? color_error : cinza} }} className="w-full h-[47px] bg-[#f0f0f0] rounded-md px-2" id="sigla" placeholder="Uma sigla para representar o curso" />
            {formErrors.sigla && <span className="text-[#F50047] px-2 pt-2 text-[12px]">*Esse campo é obrigatório</span>}
          </div>
        </div>

        <button type="submit" className="self-end mt-auto w-[180px] hover:opacity-90 transition-all flex items-center justify-center gap-x-2 pt-2 rounded-md bg-green text-white py-2">
          <img src={AppIcons.disk} alt="Disquete" />
          <p className="pl-2">Salvar</p>
        </button>
      </form>
    </div>
  );
}