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
        ${open ? 'w-screen bg-gray-600/75 md:w-64 md:static' : 'w-0'}`}>

        <div className={`flex h-screen ${open ? 'ml-0' : '-ml-96'}`}>
            <div>Barra mesmo</div>
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