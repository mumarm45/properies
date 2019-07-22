import {PropertyData} from './PropertyData';

export class Records {
next: string;
previous: string;
propertyData: PropertyData[];
constructor(propertyData: PropertyData[], next: string, previous: string) {
this.next = next;
this.previous = previous;
this.propertyData = propertyData;
}
}
