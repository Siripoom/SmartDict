import React, { useEffect, useState } from 'react';
import { db } from "../firebase_config";
import {
    collection,
    getDocs,
    doc,
    deleteDoc,
    where,
    query,
    onSnapshot
} from "firebase/firestore";

function Wordlist(props) {
    const { user } = props;
    const [words, setWords] = useState([]);

    useEffect(() => {
        const fetchWords = async () => {
            const q = query(collection(db, 'myWord'), where("userId", "==", user.uid));
            const querySnapshot = await getDocs(q);
            const fetchedWords = [];
            querySnapshot.forEach((doc) => {
                fetchedWords.push({ id: doc.id, ...doc.data() });
            });
            setWords(fetchedWords);
        };

        fetchWords();

        // Subscribe to changes
        const unsubscribe = onSnapshot(query(collection(db, 'myWord'), where("userId", "==", user.uid)), (snapshot) => {
            const fetchedWords = [];
            snapshot.forEach((doc) => {
                fetchedWords.push({ id: doc.id, ...doc.data() });
            });
            setWords(fetchedWords);
        });

        return () => {
            unsubscribe();
        };
    }, [user]);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'myWord', id));
            // You might want to update state after successful deletion
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };

    return (
        <>
        <div className="text-center text-4xl my-5 font-bold">Word list</div>
        <section className="p-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {words.map((word) => (
                    <div className="p-4 border rounded-lg shadow-md" key={word.id}>
                        <h2 className="text-xl font-bold">{word.word}</h2>
                        <p className="text-gray-700">{word.definitions}</p>
                        <h4 className="mt-2 text-gray-600 font-bold">{word.partOfSpeech}</h4>
                        <button className="mt-4 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600" onClick={() => handleDelete(word.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </section>
        </>
    );
}

export default Wordlist;
