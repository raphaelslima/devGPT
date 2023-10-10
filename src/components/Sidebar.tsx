import { ReactNode } from "react"

//Icons
import IconClose from "./icons/IconClose";

type Props={
    children: ReactNode;
    open: boolean;
    onClose: () => void
}

const Sidebar = ({open, onClose, children}: Props) => {
    return(
        <section 
        className={`fixed top-0 left-0 bottom-0 text-white 
        ${open ? 'w-screen bg-gray-600/75' : 'w-0'} md:w-64 md:static`}>

        <div className={`transition-all duration-200 flex h-screen ${open ? 'ml-0' : '-ml-96'}`}>
            <div className="flex flex-col w-64 p-2 bg-gray-900">Barra mesmo</div>
            <div 
                className="flex justify-center items-center w-10 h-10 cursor-pointer md:hidden"
                onClick={onClose}
                >
                <IconClose width={24} height={24}/>
            </div>
        </div>

        </section>
    )
}

export default Sidebar