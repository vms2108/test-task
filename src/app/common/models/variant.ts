export class Variant {
  constructor(
    public type: 'FirstType' | 'SecondType',
    public title: string,
    public price: number,
    public currency: string,
  ) {}
}
