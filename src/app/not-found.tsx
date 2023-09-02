import Link from "next/link"

export default function NotFound () {
  return (
    <div className="w-full flex flex-col items-center justify-center">
        <div className="gap-4 my-[200px] flex items-center justify-center flex-col">
            <p className="text-5xl font-extrabold">PAGINA NO ENCONTRADA</p> 
            <Link className="text-4xl font-extrabold text-red-600" href="/">Volver</Link> 
        </div>
        
    </div>
  )
}
