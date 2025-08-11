import CommentsSection from "../organisms/CommentsSection";
import FeaturedDestinations from "../organisms/FeaturedDestinations";
import Footer from "../organisms/Footer";
import HomePage from "../organisms/HomePage";
import SectionContact from "../organisms/SectionContact";

export default function Template(){
    return(
        <section className="h-auto w-full overflow-hidden">
            <HomePage />
            <FeaturedDestinations />
            <CommentsSection />
            <SectionContact />
            <Footer />
        </section>
    )
}