import { useContext, useEffect, useState } from 'react';
import ArticleMain from '../../components/ArticleMain';
import ReadersNav from '../../components/ReadersNav';
import Recommendations from '../../components/Recommendations';
import { MediumContext } from '../../context/MediumContext';
import { useRouter } from 'next/router';

const styles = {
  content: `flex`,
};

const Post = () => {
  const { posts, users } = useContext(MediumContext);
  const router = useRouter();
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);
  useEffect(() => {
    if (posts.length === 0) {
      return;
    }
    setPost(posts.find((post) => post.id === router.query.slug));
    author = post.data?.author;
    for (const user of users) {
      user.id === author;
      setAuthor(author);
    }

    // console.log(
    //   users.find((user) => user.id === post?.data?.author),
    //   'work'
    // );
  }, [post]);

  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain post={post} author={author} />
      <Recommendations />
    </div>
  );
};

export default Post;
