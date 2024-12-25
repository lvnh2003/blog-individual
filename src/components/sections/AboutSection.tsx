import Image from "../Image";


const AboutSection = () => (
  <div className="mt-[400px] py-16 px-4 flex bg-black justify-center">
    <div className="p-4">
      <Image src="/assets/images/avatar.png" size={500} alt="avatar" />
    </div>
    <div className="text-white">
      <h3 className="text-2xl font-semibold mb-4">About me</h3>
      <p className="mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officiis aliquam reprehenderit obcaecati iusto officia atque ea illo,
        id quidem quod maiores placeat voluptatem quaerat dignissimos
        ab asperiores, et quia ducimus?
      </p>
      <dl className="grid grid-cols-2 gap-2">
        <dt>Name:</dt>
        <dd>Lanh</dd>
        <dt>Age:</dt>
        <dd>22</dd>
        <dt>Address:</dt>
        <dd>Vietnam</dd>
        <dt>Phone Number:</dt>
        <dd>03xxxxxxxx</dd>
        <dt>Email:</dt>
        <dd>hello@gmail.com</dd>
      </dl>
    </div>
  </div>
);

export default AboutSection;