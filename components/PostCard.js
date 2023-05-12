import Image from 'next/image';
import Logo from '../static/logo.png';
import { FiBookmark } from 'react-icons/fi';
import Link from 'next/link';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useState, useEffect } from 'react';

const styles = {
  wrapper: `flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer`,
  authorContainer: `flex gap-[.4rem]`,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage: `object-cover`,
  authorName: `font-semibold`,
  title: `font-bold text-2xl`,
  briefing: `text-[#787878]`,
  detailsContainer: `flex items-center justify-between text-[#787878]`,
  articleDetails: `my-2 text-[.8rem]`,
  category: `bg-[#F2F3F2] p-1 rounded-full`,
  bookmarkContainer: `cursor-pointer`,
  postDetails: `flex-[2.5] flex flex-col`,
  thumbnailContainer: `flex-1`,
};

const PostCard = ({ post, author, imageUrl }) => {
  const [authorData, setAuthorData] = useState([]);
  // console.log(imageUrl);

  useEffect(() => {
    const getAuthorData = async () => {
      let dataSnap = await getDocs(collection(db, 'users'));
      dataSnap.docs.map((doc) => {
        authorData = { ...doc.data() };
        // console.log(authorData.imageUrl);
        return {
          id: doc.id,
          authorData: {
            ...doc.data(),
          },
        };
      });

      setAuthorData(authorData);
    };

    getAuthorData();
  }, []);

  return (
    <Link href={`/post/${post.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                className={styles.authorimage}
                src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
                width={40}
                height={40}
              />
            </div>

            <div className={styles.authorName}>{author}</div>
          </div>

          <div className={styles.title}>{post.data.title}</div>
          <div className={styles.briefing}>{post.data.brief}</div>
          <div className={styles.detailsContainer}>
            <div className={styles.articleDetails}>
              {new Date(post.data.postedOn).toLocaleString('en-US', {
                day: 'numeric',
                month: 'short',
              })}{' '}
              ∙ {post.data.postLength} min read ∙
              <span className={styles.category}>{post.data.category}</span>
            </div>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image
            height={100}
            width={100}
            src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
