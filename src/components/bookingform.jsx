import { useState } from "react"
import Input from "../components/input"
import "../css/bookingform.css"

const bookingForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()   // evita que la página se recargue
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit} action="">
            <div className="form-grid">
                <Input
                    Label="Name"
                    type="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                />
                <Input
                    Label="Last Name"
                    type="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    autoComplete="lastname"
                />
                <Input
                    Label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                />
                <Input
                    Label="Phone"
                    type="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="phone"
                />
            </div>
        </form>
    )
}
export default bookingForm