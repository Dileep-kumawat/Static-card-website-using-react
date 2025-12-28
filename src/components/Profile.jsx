
const Profile = ({ elem }) => {
    return (
        <div className="md:w-[30%] w-full bg-white p-8 pb-2 flex items-center flex-col gap-2">
            <div className="relative w-full">
                {elem.isAvai ? <button className="bg-[#56D492] text-white absolute font-bold top-0 left-0 py-2 px-4 rounded-4xl">Available</button> : ""}
                <h1 className="w-full text-end text-xl font-bold text-gray-700">{elem.rate}</h1>
            </div>
            <div className="bg-gray-300 rounded-full w-[40%] aspect-square overflow-hidden p-1.5">
                <img className="h-full w-full object-cover rounded-full object-top" src={elem.image} alt="image" loading="lazy" />
            </div>
            <h1 className="text-2xl font-semibold whitespace-nowrap">{elem.name}</h1>
            <p className="text-gray-400">{elem.roll}</p>
            {elem.isInCom ? <h4 className="text-blue-400"><i className="ri-building-2-line"></i> {elem.company}</h4> : <h4 className="text-green-400"><i className="ri-user-fill"></i> Freelancer</h4>}
            <div className="flex flex-wrap w-full gap-4 justify-center items-center">
                {elem.skills.map((e, idx) => {
                    return <button className={`border cursor-pointer hover:-translate-y-1 transition border-gray-500 rounded-4xl py-2 px-4 text-sm font-semibold text-gray-700 ${idx > 2 ? "bg-blue-500 border-none text-white shadow-xl/30 shadow-blue-400" : ""}`} key={idx}>{e}</button>
                })}
            </div>
            <p className="text-center text-gray-500">{elem.about}</p>
            <button className="p-4 w-full hover:bg-blue-500 cursor-pointer transition rounded-2xl border-t border-t-gray-400 hover:text-white hover:border-t-blue-500 active:scale-95">VIEW PROFILE</button>
        </div>
    )
}

export default Profile