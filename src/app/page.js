import Headers from "./components/layouts/Header";
import Hero from "./components/layouts/Hero";
import HomeMenu from "./components/layouts/HomeMenu";
import SectionHeaders from "./components/layouts/SectionHeaders";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">

      <Hero />

      <HomeMenu />

      <section className="text-center my-16">
        <SectionHeaders 
          subHeader={"Our Story"}
          mainHeader={"About Us"}
        />
        <div className="max-w-2xl mx-auto text-gray-500 text-sm mt-4 flex flex-col gap-4">
          <p >
            It is a long established fact that a reader will be distracted by the readable 
            content of a page when looking at its layout. The point of using Lorem Ipsum is 
            that it has a more-or-less normal distribution of letters, as opposed to using 
            'Content here, content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as their default 
            model text, and a search for 'lorem ipsum' will uncover many web sites still in 
            their infancy. Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </p>
          <p >
            It is a long established fact that a reader will be distracted by the readable 
            content of a page when looking at its layout. The point of using Lorem Ipsum is 
            that it has a more-or-less normal distribution of letters, as opposed to using 
            'Content here, content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as their default 
            model text, and a search for 'lorem ipsum' will uncover many web sites still in 
            their infancy. Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </p>

        </div>
      </section>
      <section className="text-center my-16">
        <SectionHeaders 
          subHeader={"Don\'t hesistate"}
          mainHeader={"Contact Us"}
        />
        <div className="my-8">
          <a href="tel:+2349062540453" className="text-2xl underline text-gray-500">
            +234 906 2540 453
          </a>
        </div>
        
      </section>
    </div>
  );
}
