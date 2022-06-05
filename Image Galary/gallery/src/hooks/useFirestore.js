import React, { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

// collection is name of collection.Here 'images' (given when we call this function)
const useFirestore = (collection) => {

    const [docs, setDocs] = useState([])

    useEffect(() => {
        const unsubscribe = projectFirestore.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot( (snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id:doc.id})
            })
            setDocs(documents)
        })

        return () => unsubscribe()  //for cleanup purpose
    }, [collection])

    return {docs}
}

export default useFirestore
