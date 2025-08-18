import BulletItem from './bulletItem';

export default function Pros() {
  return (
    <div className="lg:col-span-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white text-black py-12 px-6 rounded-lg mt-[-84] shadow-md">
        <div className="space-y-2">
          <h2 className="text-xl lg:text-2xl font-bold">
            Como a <span className="text-[#e6c67c]">mentoria</span> pode ajudar
            você e sua clínica?
          </h2>
          <p>
            Quando você domina a parte gerencial, sobra mais tempo e energia
            para focar no que realmente importa: o atendimento aos pacientes.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl lg:text-2xl font-semibold">
            Uma boa gestão te ajudará a:
          </h2>
          <ul className="space-y-1">
            <BulletItem text="Organizar o fluxo financeiro" />
            <BulletItem text="Eliminar gargalos administrativos" />
            <BulletItem text="Ter previsibilidade e crescimento" />
          </ul>
        </div>
      </div>
    </div>
  );
}
