import React from 'react'
import List from '../List/List';
import "./ProgramInfo.scss";

const ProgramInfo = (props) => {
    return (
        <div id="program_info"> {/*tu bude se isto nesto moglo u komponente vjv*/}

            <h3>Pogodnosti programa:</h3>

            {/*ove tu list iteme pospremi u neka polja i to i onda mapiraj da se dobi kak spada*/}

            <List items={props.items} />
            {/*
            
            <ul>
                <li>Već nakon nekoliko dana vidi se napredak</li>
                <li>Brzo dobivanje mase</li>
                <li>Treca</li>

            </ul>*/}

            <h3>Dodatan opis</h3>

            <p>{props.description}</p>

        </div>
    )
}

export default ProgramInfo