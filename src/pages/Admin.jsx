import Table from "../components/Table"
import InputForm from "../components/InputForm"
import {useEffect, useState} from "react";
import axios from "axios"

export default function Admin ({view}){

    const databaseURL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(null);

    const fetchData =async () => {
        setLoading(true);

        try{
            let response = await axios.get(databaseURL)
            setData(response.data);
        } catch (error) {
            console.log("ErrorFetchingData", error)
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="font-semibold text-2xl">Create User Here</h1>
            <InputForm onUserCreated={fetchData}/>
            <Table view={view} data={data}
            Loading={loading} onUserDeleted={fetchData}/>
            </div>
    );
}