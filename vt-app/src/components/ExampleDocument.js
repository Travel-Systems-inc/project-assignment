import { db } from '../firebaseSetup';
import { doc, getDoc } from 'firebase/firestore'
import React, { useState, useEffect} from "react"

function ExampleDocument(){
    const [documentData, setDocumentData] = useState(null);

    useEffect(()=> {
        const fetchDocById = async () => {
            const userDocRef = doc(db,'User','BtFDE4yHiQIEqqsyxFxK')
            const userDoc = await getDoc(userDocRef)
            if (userDoc.exists) {
                setDocumentData(userDoc.data())
            } else {
                console.log("No document found!")
            }
        }

        fetchDocById()
    }, [])

    return (
        <div>
            {documentData ? (
            <div>
                <h3>Document Data:</h3>
                <pre>{JSON.stringify(documentData, null, 2)}</pre>
            </div>
            ) : (
            <p>Loading data...</p>
            )}
        </div>
    )
}

export default ExampleDocument