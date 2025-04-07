import Link from "next/link"

const NavLink = ({href, title}) => {
  const isLinkedIn = title.toLowerCase() === "linkedin";
    return(
        <a
      href={href}
      className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-white ${
        isLinkedIn ? "text-white border border-r- p-6 font-semibold" : "text-white"
      }`}
    >
      {title}
    </a>
    )
}

export default NavLink;