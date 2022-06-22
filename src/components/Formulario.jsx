import { useState, useEffect } from "react"
import Error from "./Error";


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

   const [nombre, setNombre] = useState('');
   const [prop, setProp] = useState('');
   const [email, setEmail] = useState('');
   const [fecha, setFecha] = useState('');
   const [sintomas, setSintomas] = useState('');

   const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
       setNombre(paciente.nombre)
       setProp(paciente.prop)
       setEmail(paciente.email)
       setFecha(paciente.fecha)
       setSintomas(paciente.sintomas)
    }
  }, [paciente])
  

   const generarId = () => {
      const random = Math.random().toString(36).substr(2);
      const fecha = Date.now().toString(36);

      return random + fecha;
   }


   const handleSubmit = (e) => {
      e.preventDefault();
   
      //Validando el Formulario
      if([nombre, prop, email, fecha, sintomas].includes('')){
         console.log('Hay al menos un campo vacío')

         setError(true);
         return;
      }

      setError(false);

      //Objeto de paciente
      const objetoPaciente = {
         nombre,
         prop,
         email,
         fecha,
         sintomas,
         id: generarId()
      }

      if(paciente.id){
         //Editando el registro
         objetoPaciente.id = paciente.id

         const pacientesActualizados = pacientes.map( 
            pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )


         setPacientes(pacientesActualizados)
         setPaciente({})

      } else {
         //Nuevo registro
         objetoPaciente.id = generarId()
         setPacientes([...pacientes, objetoPaciente])

      }
      




      //Reiniciamos el form
      setNombre('')
      setProp('')
      setEmail('')
      setFecha('')
      setSintomas('')
   }

  return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y  {''}
      <span className="text-indigo-600 font-bold">Administralos</span>
      </p>


      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

         {error && <Error mensaje='Todos los campos son obligatorios'/>}  

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
          <input id="mascota" type="text" value={nombre} onChange={(e) => {setNombre(e.target.value)}} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"  placeholder="Nombre de la mascota..."/>
       </div>
       <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="prop">Nombre Propietario</label>
          <input id="prop" type="text" value={prop} onChange={(e) => {setProp(e.target.value)}} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"  placeholder="Nombre del propietario..."/>
       </div>
       <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
          <input id="email" type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"  placeholder="Email..."/>
       </div>
       <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
          <input id="alta" type="date" value={fecha} onChange={(e) => {setFecha(e.target.value)}} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
       </div>
       <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">¿Qué síntomas tiene?</label>
          <textarea className="block text-gray-700 w-full placeholder-gray-400 border-2" value={sintomas} onChange={(e) => {setSintomas(e.target.value)}} id="sintomas" placeholder="Que sintomas tiene..."></textarea>
         </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}/>
      
      </form>
      </div>
  )
}

export default Formulario