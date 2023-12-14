import React, { useEffect } from "react";
import pb from "./lib/pocketbase";
import "./test.css";
import { useTest } from "hooks/useTest";

function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        const record = await pb.collection('testecollection').getOne('RECORD_ID', {
          expand: 'relField1,relField2.subRelField',
        });
        console.log(record);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Logged In: {pb.authStore.isValid.toString() && authStore.model.email}</h1>
      <button onClick={() => useTest("modal", true)}></button>
    </>
  );
}

export default App;
