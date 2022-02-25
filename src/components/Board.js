import React, {Component} from 'react'
import '../css/Board.css';
import Note from './Note';

class Board extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="div-board">
                    <div className="row">
                        <Note title="The Lion King" body="Year: 1994
                        Genre: Children's Film Description: The Lion King tells the story of Simba (Swahili for lion), 
                        a young lion who is to succeed his father, Mufasa, as King of the Pride Lands; however, after 
                        Simba's paternal uncle Scar murders Mufasa to seize the throne, Simba is manipulated into thinking 
                        he was responsible and flees into exile. After growing up in the company of the carefree outcasts 
                        Timon and Pumbaa, Simba receives valuable perspective from his childhood friend, Nala, and his shaman, 
                        Rafiki, before returning to challenge Scar to end his tyranny and take his place in the Circle of Life 
                        as the rightful King."/>

                        <Note title="The Hobbit" body="Years: 2012 - 2014 Genre: Fantasy Fiction Decription: The 
                        Hobbit is a film series consisting of three high fantasy adventure films directed by Peter 
                        Jackson. The films are based on the 1937 novel The Hobbit by J. R. R. Tolkien, with large portions 
                        of the trilogy inspired by the appendices to The Return of the King, which expand on the story 
                        told in The Hobbit, as well as new material and characters written especially for the films. 
                        Together they act as a prequel to Jackson's The Lord of the Rings film trilogy."/>

                        <Note title="Miss Congeniality" body="Year: 2000 Genre: Comedy/Action Description: When a 
                        terrorist threatens to bomb the Miss United States pageant, the FBI rushes to find a 
                        female agent to go under cover as a contestant. Unfortunately, Gracie is the only female 
                        FBI agent who can look the part despite her complete lack of refinement and femininity."/>
                     </div>
                </div>
                <div>
                    <button className="btn btn-success add-button">Add</button>
                </div>
            </div>
         );
    }
}

export default Board;

