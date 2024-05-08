

export function InserirAlterarNota() {
    const Alunos = [
        {
          id: 1,
          discente: "Jayme Filho de Cabrobo Corithians",
        },
        {
          id: 2,
          discente: "Lucas Santos Palmeiras Sao Paulo",
        },
        {
            id: 3,
            discente: "Manel Lima Figueira Flamengo",
          },
          {
            id: 4,
            discente: "Emanuel Gonçalves Torres Santos",
          },
          {
            id: 5,
            discente: "Marcio Bota Fogo Refrigerante de 3L",
          },
      ];

    return (
        <div className="pr-36">
            <div className="p-3 mb-12 border  border-dark/10 rounded-lg bg-[#4d77ff0c]">
                <table className="w-full ">
                    <tbody>
                        <tr>
                            <td className="text"><strong>Periodo:</strong></td>
                            <td>2023.2</td>
                            <td><strong>Hora:</strong></td>
                            <td>16:7</td>
                        </tr>
                        <tr>
                            <td><strong>Componente:</strong></td>
                            <td>CCMP0152 - BANCO DE DADOS I</td>
                            <td><strong>Turma:</strong></td>
                            <td>01</td>
                        </tr>
                        <tr>
                            <td><strong>Docente:</strong></td>
                            <td>MARCIO MATHEUS DE SOUZA FERREIRA</td>
                            <td><strong>Discente:</strong></td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td><strong>Formula de Avaliacao:</strong></td>
                            <td>(EE_1+EE_2)/2</td>
                        </tr>
                        <tr>
                            <td><strong>Formula de Avaliacao da Final:</strong></td>
                            <td>(MEDIA+EXFN)/2</td>
                        </tr>
                    </tbody>
                </table>
            </div>    
            
            <div className="boder border-gray-900">
                <table className="w-full border-separate">
                        <thead>
                            <tr className="px-0.5 text-white">
                                <td className="border  border-dark/60 rounded-md bg-[#2E318E]" style={{ width: "2%" }} ></td>
                                <td className="border  border-dark/60 pl-3 rounded-md bg-[#2E318E]" style={{ width: "20%" }} >Discente</td>
                                <td className="border  border-dark/60 pl-3 rounded-md bg-[#2E318E]" style={{ width: "3%" }} >Nota_1</td>
                                <td className="border  border-dark/60 pl-3 rounded-md bg-[#2E318E]" style={{ width: "3%" }} >Nota_2</td>
                                <td className="border  border-dark/60 pl-3 rounded-md bg-[#2E318E]" style={{ width: "3%" }} >MEDIA</td>
                                <td className="border  border-dark/60 pl-3 rounded-md bg-[#2E318E]" style={{ width: "3%" }} >EXFN</td>
                                <td className="border  border-dark/60 pl-3 rounded-md bg-[#2E318E]" style={{ width: "3%" }} >MFIN</td>
                                <td className="border  border-dark/60 pl-3 rounded-md bg-[#2E318E]" style={{ width: "3%" }} >SIT</td>
                                <td className="border  border-dark/60 pl-3 rounded-md bg-[#2E318E]" style={{ width: "3%" }} >FALTAS</td>
                            </tr>
                        </thead>
                        <tbody>
                            {Alunos.map(alunos =>(
                                    <tr>
                                        <td className="border border-dark/60 text-center rounded-md">{alunos.id}</td>
                                        <td className="border border-dark/60 py-1 px-2 rounded-md"> {alunos.discente} </td>
                                        <td className="border  border-dark/60 py-1 px-2 rounded-md"><input className="outline-none w-full"/></td>
                                        <td className="border  border-dark/60 py-1 px-2 rounded-md"><input className="outline-none w-full"/></td>
                                        <td className="border  border-dark/60 py-1 px-2 rounded-md"><input className="outline-none w-full"/></td>
                                        <td className="border  border-dark/60 py-1 px-2 rounded-md"><input className="outline-none w-full"/></td>
                                        <td className="border  border-dark/60 py-1 px-2 rounded-md"><input className="outline-none w-full"/></td>
                                        <td className="border  border-dark/60 py-1 px-2 rounded-md"><input className="outline-none w-full"/></td>
                                        <td className="border  border-dark/60 py-1 px-2 rounded-md"><input className="outline-none w-full"/></td>
                                    </tr>
                            ))}
                        </tbody>
                </table>
            </div>
        </div>
    )
}