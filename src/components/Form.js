import React, {useState} from 'react';

const Form = (props) => {

    const [tripType, setTripType] = useState('Round trip');
    const [hasAwardTicket, setAwardTicket] = useState(false);
    const [departure, setDeparture] = useState('Cape Town');
    const [destination, setDestination] = useState('');


    return (
        <form>
            <div>
                <input
                    type="radio"
                    name="triptype"
                    id="Round trip"
                    value="Round trip"
                    checked={tripType === 'Round trip'}
                    onChange={e => setTripType(e.target.value)}
                />
                <label htmlFor="Round trip"> Round trip</label>
                <input
                    type="radio"
                    name="triptype"
                    id="One way"
                    value="One way"
                    checked={tripType === 'One way'}
                    onChange={e => setTripType(e.target.value)}
                />
                <label htmlFor="One way"> One way</label>
                <input
                    type="radio"
                    name="triptype"
                    id="Multi-city"
                    value="Multi-city"
                    checked={tripType === 'Multi-city'}
                    onChange={e => setTripType(e.target.value)}
                />
                <label htmlFor="Multi-city"> Multi-city</label>
                <input
                    type="checkbox"
                    name="AwardTicket"
                    id="AwardTicket"
                    checked={hasAwardTicket}
                    onChange={e => setAwardTicket(e.target.checked)}
                />
                <label htmlFor="Award ticket">Award ticket - Buy a ticket with Miles</label>
            </div>
            <div>
                <label htmlFor="departure">From</label>
                <input
                    type="text"
                    id="departure"
                    name="departure"
                    value={departure}
                    onChange={e => setDeparture(e.target.value)}
                />
                <label htmlFor="to">To</label>
                <input
                    type="text" id="destination"
                    name="destination"
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                />
                <div>
                    Dates
                </div>
                <div>
                    ECO
                </div>
                <button type="submit">Submit</button>
            </div>
            <div>
                Previous Search
            </div>
        </form>
    );
};

export default Form;