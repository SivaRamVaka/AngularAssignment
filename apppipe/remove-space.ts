import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name : "removeSpaces"
})

export class RemoveSpaces  implements PipeTransform {
	transform(value: string): string{
		return value.replace("a", "d");
	}
}