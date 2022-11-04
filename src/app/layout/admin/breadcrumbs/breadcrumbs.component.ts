import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  tempState = [];
  breadcrumbs: Array<Object>;

  constructor(private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
  }

}
