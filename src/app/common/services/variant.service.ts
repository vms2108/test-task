import { Variant } from './../models/variant';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VariantService {

  public getVariant(): Observable<Variant> {
    return of(this.mockGetVariant())
      .pipe(delay(500));
  }

  public mockGetVariant(): Variant {
    const random = Math.random();
    if (random > 0.5) {
      return new Variant('FirstType', 'Цена за продукт составляет', 10, 'USD');
    }
    return new Variant('SecondType', 'Купите наш продукт за ', 100, 'RUB');
  }

  public getCurrency(currencyAbbreviation: string): string {
    const currencyes = [
      { abbreviation: 'USD', sign: '$' },
      { abbreviation: 'RUB', sign: '₽' }
    ];

    return currencyes.find(e => e.abbreviation === currencyAbbreviation).sign;
  }

}
