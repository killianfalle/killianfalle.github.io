import { collection, getDocs } from 'firebase/firestore';
import db from "../../config/firebase-config"

class FirebaseService {
	getCollection = async(collectionName) => {
		 const querySnapshot = await getDocs(collection(db, collectionName));
        return querySnapshot.docs.map(doc => doc.data());
	}
}

export default new FirebaseService();