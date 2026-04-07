import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { RoomContext } from "../context/roomContext"
import BookingForm from "../components/bookingform"
import "../css/bookingPage.css"
import { useNavigate } from "react-router-dom"

const booking = () => {
    const { id } = useParams()
    const { roomType } = useContext(RoomContext)
    const navigate = useNavigate()

    const room = roomType.find((room) => {
        return room.id == Number(id)
    })

    useEffect(() => {
        document.title = room.name
    }, [room])


    return (
        <div>
            <div className="booking-container">
                <div className="booking-grid">
                    {/* columna izquierda — formulario */}
                    <div>
                        <div className="booking-left">
                            <h1>Personal Information</h1>
                            <BookingForm />

                        </div>
                        <div className="form-actions">
                            <button className="btn-cancel" onClick={() => navigate(-1)}>
                                Cancel
                            </button>
                            <button className="btn-reserve" type="submit">
                                Reserve
                            </button>
                        </div>
                    </div>

                    {/* columna derecha — detalles */}
                    <div className="booking-right">
                        <h2>Booking Details</h2>
                        <div className="BDt">
                            <div>
                                <img src={room.image} alt={room.name} />
                                <h3>{room.name}</h3>
                                <h4> All inclusive </h4>
                                <h4>2 adults</h4>
                            </div>

                            <div class="dates-container">
                                <div class="date-col">
                                    <span class="date-label">Check-in</span>
                                    <p class="date-main">Mon, April 20, 2026</p>
                                    <span class="date-sub">Starting at 3:00 PM</span>
                                </div>

                                <div class="divider"></div>

                                <div class="date-col">
                                    <span class="date-label">check-out</span>
                                    <p class="date-main">Fri, April 24, 2026</p>
                                    <span class="date-sub">Until 12:00</span>
                                </div>

                                <div class="nights">
                                    <span>4 nights</span>
                                </div>
                            </div>

                        </div>
                        <div className="BPr">
                            <h3>Total amount</h3>
                            <p> USD {room.basePrice * 4} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default booking