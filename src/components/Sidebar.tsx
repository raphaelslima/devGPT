import { ReactNode } from "react"

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

        </section>
    )
}

export default Sidebar