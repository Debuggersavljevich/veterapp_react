
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

const handleEliminar = () => {
    const respuesta = confirm('Desea eliminar el paciente?')

    if(respuesta) {
        eliminarPaciente(paciente.id)
    }
}   



  return (
    <div className="mx-5 my-10 shadow-md bg-white px-5 py-10 rounded-xl">
          <p className="font-bold mb-3  text-green-500 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{paciente.nombre}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">{paciente.prop}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">email: {''}
            <span className="font-normal normal-case">{paciente.email}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">{paciente.fecha}</span>
          </p>

          <p className="font-bold mb-3 text-red-400 uppercase">Síntomas: {''}
            <span className="font-normal normal-case"/> {paciente.sintomas}</p>

            <div className='flex justify-around mt-10'>
                <button className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg' type='button' onClick={() => setPaciente(paciente)}>Editar</button>
                <button className='py-2 px-10 bg-red-400 hover:bg-red-500 text-white font-bold uppercase rounded-lg' type='button' onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
  )
}

export default Paciente
