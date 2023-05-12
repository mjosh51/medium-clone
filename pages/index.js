// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import PostCard from '../components/PostCard';
import { MediumContext } from '../context/MediumContext';
import { useContext } from 'react';

const styles = {
  wrapper: `mx-auto`,
  postList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`,
  postListContainer: `max-w-7xl flex-1 p-6`,
  main: `flex justify-center`,
};

export default function Home() {
  const { posts } = useContext(MediumContext);
  // console.log(posts, '🎉');

  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <div className={styles.main}>
        <div className={styles.postListContainer}>
          <div className={styles.postList}>
            {posts.map((post) => {
              return (
                <PostCard post={post} key={post.id} author={post.data.author} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
