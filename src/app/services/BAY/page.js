import HeaderSection from "@components/sections/HeaderSection"
import FooterSection from "@components/sections/FooterSection"
import BAYCard from "@components/BAYCard"


const data = {
    first: {
        title: "01 Therapy",
        content: `Discover personalized therapy sessions to enhance your well-being. Our experienced professionals are here to help you navigate life’s challenges with confidence and clarity.`,
        path: "/BAY Graphics/therapy.svg",
        order: true
    }, 
    second: {
        title: "02 Psychiatric Care",
        content: `Consultations with a psychiatrist will also be available, if and when required. Sessions will be scheduled at the beginning of the program and after every 20 days.`,
        path: "/BAY Graphics/psycare.svg",
        order: false
    }, 
    third: {
        title: "03 Fitness",
        content: `Mobility and fitness is crucial to your mental health and so our certified fitness coaches will take you through the journey of becoming active and healthier! Sessions will be conducted twice/thrice every week for 6 weeks.`,
        path: "/BAY Graphics/fitness.svg",
        order: true
    }, 
    fourth: { 
        title: "04 Nutrition",
        content: `Our consultant nutritionist will help make dietary changes to aid and boost healthy, happy hormones. With the right amount of nutrients you are on the path to recovery. Sessions will be conducted at the beginning and end of the 6 week program.`,
        path: "/BAY Graphics/nutrition.svg",
        order: false
    }, 
    fifth: {
        title: "05 Community",
        content: `Our supportive community of individuals with similar interests will help you understand that you are not alone in this brjourney and that we have your back! Community events will take place once in two weeks and are free to attend for BAY members for the first year.`,
        path: "/BAY Graphics/community.svg",
        order: true
    },

}

export default function BAY() {
    return (
        <div>
            <HeaderSection />
            <div className="text-center">

                <h1>Bright As You</h1>
                <p className="p-10"> Discover yourself, find balance, connect with a supportive community, and learn, grow, and heal—all at Better Together
                </p>

                <BAYCard title={data.first.title} content={data.first.content} path={data.first.path} order={data.first.order} />
                <BAYCard title={data.second.title} content={data.second.content} path={data.second.path} order={data.second.order} />
                <BAYCard title={data.third.title} content={data.third.content} path={data.third.path} order={data.third.order} />
                <BAYCard title={data.fourth.title} content={data.fourth.content} path={data.fourth.path} order={data.fourth.order} />
                <BAYCard title={data.fifth.title} content={data.fifth.content} path={data.fifth.path} order={data.fifth.order} />


            </div>
            <FooterSection />
        </div>
    )
}
