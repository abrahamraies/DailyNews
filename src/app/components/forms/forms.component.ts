import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  @Output() selectedParam = new EventEmitter<any>();

  selectedCategory = 'general';
  selectedCountry = 'ar';

  // categories
  categories: any[] = [
    {value: 'general',name: 'General'},
    {value: 'business',name: 'Negocios'},
    {value: 'entertainment',name: 'Entretenimiento'},
    {value: 'health',name: 'Salud'},
    {value: 'science',name: 'Ciencia'},
    {value: 'sports',name: 'Deportes'},
    {value: 'technology',name: 'Tecnología'},
  ];
  // countries
  countries: any[] = [
    {value: 'ar',name: 'Argentina'},
    {value: 'br',name: 'Brasil'},
    {value: 'fr',name: 'Francia'},
    {value: 'gb',name: 'Reino Unido'},
    {value: 'mx',name: 'Mexico'},
    {value: 'es',name: 'España'},
  ];

  constructor(){

  }

  newsSearch(){
    const params = {
      category: this.selectedCategory,
      country: this.selectedCountry
    }

    this.selectedParam.emit(params);
  }

}
