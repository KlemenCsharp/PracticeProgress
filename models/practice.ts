export class Practice {
  id?: number;

  title: string;

  description: string;

  beatValue: number;

  startingTempo: number;

  endingTempo: number;

  numberOfRepetitions: number;

  status: number;

  constructor(
    title: string,
    description: string,
    beatValue: number,
    startingTempo: number,
    endingTempo: number,
    numberOfRepetitions: number,
    status: number,
    id?: number,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.beatValue = beatValue;
    this.startingTempo = startingTempo;
    this.endingTempo = endingTempo;
    this.numberOfRepetitions = numberOfRepetitions;
    this.status = status;
  }
}
