import HeaderSection from "@components/sections/HeaderSection"
import FooterSection from "@components/sections/FooterSection"
import BAYCard from "@components/BAYCard"


const data = {
    first: {
        title: "01 Therapy",
        content: `Discover personalized therapy sessions to enhance your well-being. Our experienced professionals are here to help you navigate life’s challenges with confidence and clarity.`,
        path: "/images/BAY Graphics/therapy.svg",
        order: true
    },
    second: {
        title: "02 Psychiatric Care",
        content: `Consultations with a psychiatrist will also be available, if and when required. Sessions will be scheduled at the beginning of the program and after every 20 days.`,
        path: "/images/BAY Graphics/psycare.svg",
        order: false
    },
    third: {
        title: "03 Fitness",
        content: `Mobility and fitness is crucial to your mental health and so our certified fitness coaches will take you through the journey of becoming active and healthier! Sessions will be conducted twice/thrice every week for 6 weeks.`,
        path: "/images/BAY Graphics/fitness.svg",
        order: true
    },
    fourth: {
        title: "04 Nutrition",
        content: `Our consultant nutritionist will help make dietary changes to aid and boost healthy, happy hormones. With the right amount of nutrients you are on the path to recovery. Sessions will be conducted at the beginning and end of the 6 week program.`,
        path: "/images/BAY Graphics/nutrition.svg",
        order: false
    },
    fifth: {
        title: "05 Community",
        content: `Our supportive community of individuals with similar interests will help you understand that you are not alone in this brjourney and that we have your back! Community events will take place once in two weeks and are free to attend for BAY members for the first year.`,
        path: "/images/BAY Graphics/community.svg",
        order: true
    },

}

const tableData = [
    { key: "1", service: "Therapy/Counselling", offered_by: "Psychologist", no_of_sessions: "once every week", cost_per_session: "800", total_cost: "1600" },
    { key: "2", service: "Psychiatric Care(if needed)", offered_by: "Psychiatrist", no_of_sessions: "once in 3 weeks", cost_per_session: "1000", total_cost: "6000" },
    { key: "3", service: "Diet Plan", offered_by: "Nutritionist", no_of_sessions: "once in 4 weeks", cost_per_session: "700", total_cost: "1400" },
    { key: "4", service: "Movement Traning", offered_by: "Fitness Coach", no_of_sessions: "twice every weeks", cost_per_session: "500", total_cost: "6000" },
    { key: "5", service: "Community Events", offered_by: "Better Together Team", no_of_sessions: "once in 2 weeks", cost_per_session: "Free", total_cost: "Free" },
];

export default function BAY() {
    return (
        <div>
            <HeaderSection />
            <div className="text-center">

                <h1>Bright As You</h1>
                <p className="p-10  text-gray-800"> Discover yourself, find balance, connect with a supportive community, and learn, grow, and heal—all at Better Together
                </p>

                <BAYCard title={data.first.title} content={data.first.content} path={data.first.path} order={data.first.order} />
                <BAYCard title={data.second.title} content={data.second.content} path={data.second.path} order={data.second.order} />
                <BAYCard title={data.third.title} content={data.third.content} path={data.third.path} order={data.third.order} />
                <BAYCard title={data.fourth.title} content={data.fourth.content} path={data.fourth.path} order={data.fourth.order} />
                <BAYCard title={data.fifth.title} content={data.fifth.content} path={data.fifth.path} order={data.fifth.order} />

                <p className=" w-[80%] mx-auto text-center text-gray-800"> Through a personalized wellness plan, accountabiltiy, and access to a full range of mental health professionals, we empower individuals to sustain their healing journey. With us, mental wellness becomes a collective, well-rounded experience, where support and care are seamelesly integrated for lasting transformation.
                </p>


                <a href="https://rzp.io/rzp/bettertogether"
                >

                    <button className="my-5">
                        Enroll Today
                    </button>
                </a>


                <div className="py-10">
                    <div className="overflow-x-auto">
                        <table className="table-auto mx-auto border-collapse border border-gray-300 rounded-lg shadow-lg">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-800">Services</th>
                                    <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-800">Offered By</th>
                                    <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-800">No. of Sessions</th>
                                    <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-800">Cost Per Session (Rs)</th>
                                    <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-800">Total Cost (Rs)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr
                                        key={row.key}
                                        className={`transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-200`}
                                    >
                                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-800">{row.service}</td>
                                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-800">{row.offered_by}</td>
                                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-800">{row.no_of_sessions}</td>
                                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-800">{row.cost_per_session}</td>
                                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-800">{row.total_cost}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <FooterSection />
        </div>
    )
}
