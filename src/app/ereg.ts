import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {Home} from './pages/home/home';
import {Order} from './pages/order/order';
import {Execution} from './pages/execution/execution';
import {Preview} from './pages/preview/preview';
import {Entrepreneur} from './pages/entrepreneur/entrepreneur';
import {About} from './pages/about/about';
import {RepoBrowser} from './components/repo-browser/repo-browser';

@Component({
  selector: 'ereg-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/ereg.html',
})
@Routes([
  { path: '/',       component: Home,       },
  { path: '/about',  component: About,      },
  { path: '/github', component: RepoBrowser },
  { path: '/order', component: Order },
  { path: '/execution', component: Execution },
  { path: '/entrepreneur', component: Entrepreneur },
  { path: '/preview', component: Preview },
])
export class EregApp {

  constructor() {}

}
