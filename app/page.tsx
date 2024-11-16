import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/section/Hero';
import Customsubsectionone from '@/components/section/Customsubsectionone';
import { bigsmallwehavesectionlist,Familyfriendlystayswithfullkitchenssectionlist,amenitieslist,exploreairbnbcategorylist} from '@/constants';
import Customsubsectiontwo from '@/components/section/Customsubsectiontwo';
import Amenities from '@/components/section/Amenities';
import Accordionsection from '@/components/section/Accordionsection'
import Footer from '@/components/section/Footer';
export default function HomePage() {
  return (
      <>
      <Navbar/>
      <Hero/>
      <Customsubsectionone title={'Big, small, we have it all'} subtitle={''} list={bigsmallwehavesectionlist}/>
      <Customsubsectiontwo title={'Family-friendly stays with full kitchens'} 
      subtitle={'Prepare a feast for loved ones in these stays with kitchens and BBQ grills.'}
      list={Familyfriendlystayswithfullkitchenssectionlist} 
      button={"Let's get cooking"}
      />
      <Customsubsectiontwo title={'Homes with refreshing pools'} 
      subtitle={'Relax with your crew by the pool in stays with 2+ bedrooms.'}
      list={Familyfriendlystayswithfullkitchenssectionlist} 
      button={"Keep it chill"}
      />
      <Amenities list={amenitieslist}/>
      <Customsubsectionone title={'Explore 60+ Airbnb Categories'} subtitle={'These are just a few collections grouped by style, location and nearby activities.'} 
      list={exploreairbnbcategorylist}/>
      <Accordionsection/>
      <Footer/>
      </>
  );
}
