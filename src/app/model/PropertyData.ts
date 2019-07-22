export class PropertyData {
id: string;
title: string;
icon: string;
vicinity: string;
url: string;
constructor(data) {
this.id = data.id;
this.icon = data.icon;
this.title = data.title;
this.vicinity = data.vicinity;
this.url = data.href;
}
}
