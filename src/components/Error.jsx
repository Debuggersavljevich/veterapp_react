
const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 font-bold text-center text-white p-3 uppercase mb-3 rounded-md">
            <p>
               {mensaje}
            </p>
         </div>
  )
}

export default Error