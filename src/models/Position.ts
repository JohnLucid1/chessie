export class Position {
    x: number; // The x-coordinate of the position
    y: number; // The y-coordinate of the position

    constructor(x: number, y: number) {
        this.x = x; // Assigning the provided x-coordinate to the x property
        this.y = y; // Assigning the provided y-coordinate to the y property
    }

    // Checks if the current position is the same as another position
    samePosition(otherPosition: Position): boolean {
        return this.x == otherPosition.x && this.y === otherPosition.y;
    }

    // Creates a clone of the current position
    clone(): Position {
        return new Position(this.x, this.y);
    }
}
