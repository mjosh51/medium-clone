import Image from 'next/image';
import logo from '../static/banner.png';

const styles = {
  wrapper: `h-max-[10rem] flex items-center justify-center bg-[#FCC017] border-y border-black`,
  accentedButton: `bg-black rounded-full text-white py-1 px-4`,
  content: `max-w-7xl flex-1 flex items-center justify-between px-10 py-10`,
};

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className='space-y-5 flex-[3]'>
          <h1 className='max-w-xl text-[6rem] font-mediumSerif'>
            Stay Curious
          </h1>
          <h3 className='text-2xl'>
            Discover stories, thinking, and expertise from writers on any topic.
          </h3>
          <button className={styles.accentedButton}>Start Reading</button>
        </div>

        <Image
          className='hidden h-32 md:inline-flex object-contain flex-1'
          src={logo}
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default Banner;
