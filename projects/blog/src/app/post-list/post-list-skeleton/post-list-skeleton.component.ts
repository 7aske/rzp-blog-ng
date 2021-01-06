import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-post-list-skeleton',
  template: `
    <div>
      <ngx-skeleton-loader [theme]="{
				'border-radius': '5px',
				'height': '50px',
				'width': '300px',
				'background-color': '#4ecca3'
			}" animation="pulse"></ngx-skeleton-loader>
      <ngx-skeleton-loader [theme]="{
				'border-radius': '5px',
				'height': '150px',
				'background-color': '#7d7d7d'
			}" animation="pulse"></ngx-skeleton-loader>
      <ngx-skeleton-loader [theme]="{
				'border-radius': '5px',
				'height': '20px',
				'width': '100px',
				'background-color': '#4ecca3'
			}" animation="pulse"></ngx-skeleton-loader>
    </div>
  `,
})
export class PostListSkeletonComponent {

}
