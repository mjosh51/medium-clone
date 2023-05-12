import { useState, useContext } from 'react';
import { MediumContext } from '../context/MediumContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const styles = {
  wrapper: `w-[50rem] h-[40rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll`,
  title: `my-[2rem] font-bold text-3xl`,
  smallField: `w-full flex justify-between gap-[1rem]`,
  fieldTitle: `flex-1 text-end`,
  inputContainer: `flex-[5] h-min border-2 border-[#787878]`,
  inputField: `w-full border-0 outline-none bg-transparent `,
  accentedButton: `bg-black rounded-full text-white py-1 px-4`,
};

const PostModal = () => {
  const { loggedInUser } = useContext(MediumContext);

  const [title, setTitle] = useState('');
  const [brief, setBrief] = useState('');
  const [bannerImage, setBannerImage] = useState('');
  const [category, setCategory] = useState('');
  const [postLength, setPostLength] = useState('');
  const [body, setBody] = useState('');

  const addPostToFirebase = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, 'articles'), {
      bannerImage: bannerImage,
      body: body,
      category: category,
      title: title,
      brief: brief,
      postedOn: serverTimestamp(),
      postLength: Number(postLength),
      author: loggedInUser.name,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Create a New Post</div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Title</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Brief</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Banner Image URL</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={bannerImage}
            onChange={(e) => setBannerImage(e.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Category</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>
          Estimated Read Length (in minutes)
        </span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={postLength}
            onChange={(e) => setPostLength(e.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Article Text</span>
        <span className={styles.inputContainer}>
          <textarea
            className={styles.inputField}
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={12}
          />
        </span>
      </div>
      <button onClick={addPostToFirebase} className={styles.accentedButton}>
        Submit
      </button>
    </div>
  );
};

export default PostModal;
