import { PieceType, TeamType } from "../Types"; // Importing necessary types
import { Piece } from "./Piece"; // Importing the Piece class
import { Position } from "./Position"; // Importing the Position class

// Defining the Pawn class that extends the Piece class
export class Pawn extends Piece {
    enPassant?: boolean; // Optional property to indicate en passant eligibility

    constructor(
        position: Position, // Current position of the pawn
        team: TeamType, // Team/color of the pawn
        hasMoved: boolean, // Indicates whether the pawn has moved or not
        enPassant?: boolean, // Optional parameter indicating en passant eligibility
        possibleMoves: Position[] = [] // Defaulted empty array for possible moves
    ) {
        super(position, PieceType.PAWN, team, hasMoved, possibleMoves); // Invoking the constructor of the Piece class
        this.enPassant = enPassant; // Assigning the enPassant parameter to the enPassant property
    }

    clone(): Pawn {
        return new Pawn(
            this.position.clone(), // Cloning the current position using the clone method of the Position class
            this.team, // Team/color of the pawn
            this.hasMoved, // Indicates whether the pawn has moved or not
            this.enPassant, // en passant eligibility
            this.possibleMoves?.map(m => m.clone()) // Cloning each possible move using the clone method of the Position class
        );
    }
}