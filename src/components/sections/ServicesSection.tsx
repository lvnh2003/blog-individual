import Card from "../Card";
import HeaderTitle from "../icon/HeaderTitle";

const ServicesSection = () => {
    return(
        <div className="bg-gray-100 flex justify-center py-16 px-6 flex-col">
            <div className="self-center">
                <HeaderTitle 
                value={"Services"}
                className='text-4xl font-extrabold'
                />
            </div>
            <div className="flex justify-center mt-[100px] max-w-7xl self-center space-x-12">
                <Card title="Website" icon="/assets/images/pc.svg" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deserunt quasi animi veniam culpa placeat enim minus obcaecati autem ipsum tempora magni sed fugit, nihil omnis! Voluptate sunt fuga quod."/>
                <Card title="AI" icon="/assets/images/ai.svg" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deserunt quasi animi veniam culpa placeat enim minus obcaecati autem ipsum tempora magni sed fugit, nihil omnis! Voluptate sunt fuga quod."/>
                <Card title="Mobile" icon="/assets/images/mobile.svg" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deserunt quasi animi veniam culpa placeat enim minus obcaecati autem ipsum tempora magni sed fugit, nihil omnis! Voluptate sunt fuga quod."/>
            </div>
        </div>
    )
}
export default ServicesSection;