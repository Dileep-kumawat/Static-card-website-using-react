import Profile from "./Profile"

const Profiles = () => {
    const profilesInfo = [
        {
            isAvai: true,
            isInCom: true,
            skills: ['UI', 'UX', 'Photoshop', '+4'],
            rate: '$55/hr',
            image: 'img1.jpg',
            name: 'Wade Wilson',
            roll: 'UI/UX designer',
            company: 'Epic Coders',
            about: 'Wade is a 32 years old UI/UX designer with an impressive portfolio behind him.'
        },
        {
            isAvai: false,
            isInCom: false,
            skills: ['PHP', 'Android', 'iOS', '+2'],
            rate: '$32/hr',
            image: 'img2.jpg',
            name: 'Maria Petrescu',
            roll: 'Mobile designer',
            company: 'Freelancer',
            about: 'Maria is an Android and iOS developer who worked at Apple for 6 years.'
        },
        {
            isAvai: false,
            isInCom: false,
            skills: ['PHP', 'Android', 'iOS', '+12'],
            rate: '$42/hr',
            image: 'img3.jpg',
            name: 'Alexandra Morgan',
            roll: 'Mobile designer',
            company: 'Freelancer',
            about: 'Alexandra is a dedicated developer for mobile platforms and is very good at it.'
        },
        {
            isAvai: false,
            isInCom: false,
            skills: ['PHP', 'Android', 'iOS', '+2'],
            rate: '$44/hr',
            image: 'img4.jpg',
            name: 'Jennifer Smith',
            roll: 'Interactive designer',
            company: 'Freelancer',
            about: 'Jennifer is an interactive designer who is really awesome at what she does.'
        },
        {
            isAvai: true,
            isInCom: false,
            skills: ['PHP', 'Android', 'iOS', '+2'],
            rate: '$40/hr',
            image: 'img5.jpg',
            name: 'Svetlana Anyukova',
            roll: 'Mobile designer',
            company: 'Freelancer',
            about: 'Svetlana is an Android and iOS designer with advanced knowledge in coding.'
        },
        {
            isAvai: false,
            isInCom: true,
            skills: ['UI', 'UX', 'Photoshop', '+4'],
            rate: '$30/hr',
            image: 'img6.jpg',
            name: 'Marko van Kooh',
            roll: 'UI/UX designer',
            company: 'Visual Madness',
            about: 'Marko is a 25 years old web designer with an impressive portfolio behind him.'
        },
        {
            isAvai: false,
            isInCom: true,
            skills: ['UI', 'UX', 'Photoshop', '+4'],
            rate: '$50/hr',
            image: 'img7.jpg',
            name: 'Pawel Koszentka',
            roll: 'UX designer',
            company: 'Apple Inc.',
            about: 'Pawel is a 32 years old UX designer with over 10 years of experience.'
        },
        {
            isAvai: false,
            isInCom: false,
            skills: ['PHP', 'Android', 'iOS', '+2'],
            rate: '$32/hr',
            image: 'img8.jpg',
            name: 'Sonia Simionov',
            roll: 'Mobile designer',
            company: 'Freelancer',
            about: 'Sonia is an Android and iOS developer who worked at Apple for 6 years.'
        },
        {
            isAvai: true,
            isInCom: false,
            skills: ['Tech', 'IT', 'Martial Arts', '+4'],
            rate: 'Free',
            image: 'img9.jpg',
            name: 'Batman',
            roll: 'Superhero',
            company: 'Freelancer',
            about: "I'm Batman!"
        },
        {
            isAvai: false,
            isInCom: false,
            skills: ['PHP', 'Android', 'iOS', '+2'],
            rate: '$39/hr',
            image: 'img10.jpg',
            name: 'Georgiana Suclea',
            roll: 'Mobile designer',
            company: 'Freelancer',
            about: 'Georgiana is an Android and iOS developer who worked at Apple for 6 years.'
        },
        {
            isAvai: false,
            isInCom: true,
            skills: ['UI', 'UX', 'Photoshop', '+4'],
            rate: '$45/hr',
            image: 'img11.jpg',
            name: 'Gregory Johnes',
            roll: 'UI/UX designer',
            company: 'Epic Coders',
            about: 'Gregory is a 32 years old UI/UX designer with an impressive portfolio behind him.'
        },
        {
            isAvai: false,
            isInCom: false,
            skills: ['PHP', 'Android', 'iOS', '+2'],
            rate: '$32/hr',
            image: 'img12.jpg',
            name: 'Maria Petrescu',
            roll: 'Mobile designer',
            company: 'Freelancer',
            about: 'Maria is an Android and iOS developer who worked at Apple for 6 years.'
        },
    ];

    return (
        <div className="w-full bg-[#F1F4F9] px-16 py-8">
            <h1 className="text-center text-2xl font-semibold text-gray-600">Profiles (420)</h1>
            <div className="w-full flex flex-col md:flex-row flex-wrap gap-8 py-8 items-stretch">
                {profilesInfo.map((elem, idx) => {
                    return <Profile elem={elem} key={idx} />
                })}
            </div>
        </div>
    )
}

export default Profiles