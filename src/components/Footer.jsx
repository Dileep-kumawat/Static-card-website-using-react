import FooterLinks from "./FooterLinks";

const Footer = () => {
    const footerLinks = [
        {
            name: 'DIRECTORY',
            subnames: ['How it works', "Why we’re free", 'Agencies']
        },
        {
            name: 'HUBSTAFF',
            subnames: ['About', 'Time tracking', 'Developer', 'Resources']
        },
        {
            name: 'SUPPORT',
            subnames: ['Help center', 'Blog', 'FAQ', 'Email us', 'Terms', 'Privacy']
        }
    ];
    return (
        <div className="bg-[#324259] w-full py-8 px-16 flex flex-col md:flex-row justify-center items-start gap-16 text-white">
            <h1 className="cursor-pointer">Hubstaff Directory</h1>
            {footerLinks.map((elem, idx) => {
                return <FooterLinks elem={elem} key={idx} />;
            })}
            <div>
                <h1 className="mb-4 cursor-pointer">Social</h1>
                <div className="space-x-8 *:cursor-pointer">
                    <i className="ri-twitter-fill"></i>
                    <i className="ri-facebook-fill"></i>
                    <i className="ri-instagram-line"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer
