import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterExpensesIncomes'
})
export class FilterExpensesIncomesPipe implements PipeTransform {

  transform(value: any, campo: string, args: string): any {
    if (!value) return null;
    if (!args) return value;

    return value.filter(singleItem =>
      singleItem[campo].toLowerCase().includes(args.toLowerCase())
    );
  }

}
