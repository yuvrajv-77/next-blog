import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../../lib/firebase';

export const addBlogToFirestore = async (blogData) => {
  try {
    const docRef = await addDoc(collection(db, 'blogs'), {
      ...blogData,
      createdAt: new Date(),
    });
    console.log('Blog added with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding blog: ', e);
  }
};
