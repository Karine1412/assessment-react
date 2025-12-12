import { useState } from "react";
import axios from "axios";

export default function InputForm({ onUserCreated }) {
    const databaseURL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        position: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev,
        [name]: value,}))
        console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
    try {
        await axios.post(databaseURL, formData);

        setFormData({
            name: "",
            lastname: "",
            position: "",
        });
        if(onUserCreated){
            onUserCreated();
        }
    } catch (error) {
        console.log("ErrorUSer:", error);
    } finally {
        setLoading(false);
    }
}
    return(
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
            className="bg-white border rounded-sm"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            disabled={loading} />

            <input
            className="bg-white border rounded-sm"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            disabled={loading} />

            <input
            className="bg-white border rounded-sm"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position"
            disabled={loading} />

            <button
            type="submit"
            className="px-6 py-3 bg-red-400 hover:bg-green-300 hover:text-black text-white rounded-lg shadow-lg text-lg font-semibold transition duration-300 ease-in-out cursor-pointer"
            disabled={loading}>
                Save
            </button>
        </form>
     );
}

