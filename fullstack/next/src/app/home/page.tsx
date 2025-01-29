
import BannerSection from '@/components/home/Banner/BannerSection';
import TypesSection from '@/components/home/TypesSection/TypesSection';
import OurStory from '@/components/home/StorySection/OurStory';
import FreshActivities from '@/components/home/FreshBeansActivitie/FreshActivities';
import GreatMealsSection from '@/components/home/GreatMealsSection/GreatMealsSection';
import BestRoomsSection from '@/components/home/BestRoomsSection/BestRoomsSection';
import GallerySection from '@/components/home/GallerySection/GallerySection';
import BlogSection from '@/components/home/BlogSection/BlogSection';


/* Comentados temporalmente
import Head from 'next/head';
import CarrouselPrincipal from '@/components/home/CarrouselPrincipal';
import CarrouselSecundario from '@/components/home/CarrouselSecundario';
import ServicesApplication from '@/components/home/ServicesApplication';
import EmblaCarousel from '@/components/home/EmblaCarousel';
import EmblaCarousel2 from '@/components/home/EmblaCarousel2';
import EmblaCarousel3 from '@/components/home/EmblaCarousel3';
import styles from '@/styles/home/home.module.css';
import '@/styles/home/base.css';
import '@/styles/home/sandbox.css';
import '@/styles/home/embla.css';
*/

export default function HomePage() {
  // const slides = [0, 1, 2, 3, 4];

  return (
    <>
      {/* Comentado temporalmente
      <Head>
        <title>Home Page - VitalNest</title>
        <meta name="description" content="Welcome to VitalNest, your go-to platform for amazing services and features." />
        <meta name="keywords" content="VitalNest, services, features, carousel, application" />
        <meta name="author" content="VitalNest Team" />
        <meta property="og:title" content="Home Page - VitalNest" />
        <meta property="og:description" content="Welcome to VitalNest, your go-to platform for amazing services and features." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vitalnest.com/home" />
        <meta property="og:image" content="https://www.vitalnest.com/images/og-image.jpg" />
      </Head>
      */}
      <BannerSection />
      <TypesSection />
      <OurStory />
      <FreshActivities />
      <GreatMealsSection />
      <BestRoomsSection />
      <GallerySection />
      <BlogSection />
    </>
  );
}