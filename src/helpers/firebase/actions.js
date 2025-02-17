export default function useFirebaseActions () {
    
    const getDataFromCollection = async (collection) => {
        try {
            const data = await window.firebaseService.getCollection(collection);
            return data;
        } catch (error) {
            console.error("Error fetching data:", error, "from collection name: ", collection);
        }
    };

    return {
        getDataFromCollection
    }
}