
const FooterLinks = ({ elem }) => {
    return (
        <div>
            <h1 className="mb-4 cursor-pointer">{elem.name}</h1>
            {elem.subnames.map((e) => {
                return <h4 className="text-gray-500 cursor-pointer hover:underline">{e}</h4>
            })}
        </div>
    )
}

export default FooterLinks
