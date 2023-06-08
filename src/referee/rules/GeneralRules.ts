import { Piece, Position } from "../../models"; // Importing necessary modules
import { TeamType } from "../../Types"; // Importing the TeamType type

// Checks if a tile on the board is occupied by any piece
export const tileIsOccupied = (position: Position, boardState: Piece[]): boolean => {
    const piece = boardState.find((p) => p.samePosition(position)); // Find a piece that has the same position as the provided position

    if (piece) {
        return true; // If a piece is found, the tile is occupied
    } else {
        return false; // If no piece is found, the tile is not occupied
    }
}

// Checks if a tile on the board is occupied by an opponent's piece
export const tileIsOccupiedByOpponent = (
    position: Position,
    boardState: Piece[],
    team: TeamType
): boolean => {
    const piece = boardState.find((p) => p.samePosition(position) && p.team !== team);
    // Find a piece that has the same position as the provided position and belongs to a different team

    if (piece) {
        return true; // If a piece is found, and it belongs to the opponent's team, the tile is occupied by an opponent's piece
    } else {
        return false; // If no piece is found or the found piece belongs to the same team, the tile is either empty or occupied by the player's own piece
    }
}

// Checks if a tile on the board is either empty or occupied by an opponent's piece
export const tileIsEmptyOrOccupiedByOpponent = (
    position: Position,
    boardState: Piece[],
    team: TeamType
) => {
    return (!tileIsOccupied(position, boardState) ||
        tileIsOccupiedByOpponent(position, boardState, team)
    );
}