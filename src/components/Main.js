import React, {Fragment} from 'react';
import Form from "./Form";

const Main = () => {
    return (
        <Fragment>
            <section className="main">
                <div className="overlay"/>
                <div>
                    <h1>
                        <span>Hello</span> Where do you want to explore?
                    </h1>
                    <div>
                        <button>Book a Flight</button>
                        <button>Check-in ? Manage booking</button>
                        <button>Flight status</button>
                    </div>
                    <Form/>
                </div>
            </section>
        </Fragment>
    );
};

export default Main;
