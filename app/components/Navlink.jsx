import Link from "next/link"

const Navlink = ({href, title, target}) => {
    return (
        <Link
            target = {target}
            href = {href}
            className = 'block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-[#4474cf]'
        >
            {title}
        </Link>
        
    );
};

export default Navlink;
