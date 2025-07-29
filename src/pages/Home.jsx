import FashionStore from '../components/home/FashionStore'
import HeroSection from '../components/home/Herosection'
import NewelyAdded from '../components/home/NewelyAdded'
import PopularCategory from '../components/home/PopularCategory'
import TodayDeals from '../components/home/TodaysDeals'
import RecentlyViewed from '../components/home/RecentlyViewed'

const Home = () => {

  return (
    <div className='w-full p-4'>
      <HeroSection/>
      <PopularCategory/>
      <TodayDeals/>
      <NewelyAdded/>
      <FashionStore/>
      <RecentlyViewed/>
    </div>
  )
}

export default Home