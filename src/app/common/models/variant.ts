export class Variant {
  constructor(
    private type: 'FirstType' | 'SecondType',
    private title: string,
    private price: number,
    private currency: string,
  ) {}
}
