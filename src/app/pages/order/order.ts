import { Component } from '@angular/core';
import { Control, FORM_DIRECTIVES, Validators, FormBuilder, ControlGroup, NgForm }    from '@angular/common';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { Client } from './../../models/client';

@Component({
  selector: 'home',
  templateUrl: 'app/pages/order/order.html',
  styleUrls: ['app/pages/order/order.css'],
  providers: [],
  directives: [FORM_DIRECTIVES,ROUTER_DIRECTIVES],
  pipes: []
})


export class Order {


  orderForm:ControlGroup;

  clients:Client[];

  changedSelectedClient(e){
    
    
    console.log(e);


    var selectedClient = this.clients[0];

    (<Control>this.orderForm.controls['clientName']).updateValue('xxx');

    //this.orderForm.controls['clientName'] ='foo';

    /*

    this.orderForm.controls['clientName'].value=selectedClient.name;

    */

  }


  constructor(formBuilder:FormBuilder) {

    this.clients = [ 
        { id:'1',name:'ABAB',address:'adr1',zipCode:'zip1',city:'city1',phone:'phone1',email:'email1'},
        { id:'2',name:'BOBOB',address:'adr2',zipCode:'zip2',city:'city2',phone:'phone2',email:'email2'}
    ]

    this.orderForm = formBuilder.group({
        'clientSelected':'2',
        'clientCompany':'foo',
        'clientName':'name',
        'clientAddress':[''],
        'clientZipCode':[''],
        'clientCity':[''],
        'clientPhone':[''],
        'clientEmail':[''],
        'clientConfirmSendPostal':[''],
        'numberOfRooms':['2', Validators.required]
    });


  }

    ngOnInit() {

  }

  onSubmit(form){

    console.log(form);


  }


}
