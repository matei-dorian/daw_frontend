import { Component } from "@angular/core";

// export interface IProduct{} -  de facut

@Component({
    selector: 'fs-products',
    templateUrl: './product-list-component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    public pageTitle: string = 'Our Products:';
    public showImage: boolean = true;
    public imageWidth: number = 50;
    public imageMargin: number = 2;
    public listFilter: string = 'cart';
    public products: any[] = [{
        "productName": "a",
        "productType": "b",
        "productFirm": "c",
        "productPrice": 1.5,
        "rating": 5
    },
    {
        "productName": "a",
        "productType": "b",
        "productFirm": "c",
        "productPrice": 1.5,
        "rating": 5
    },
    {
        "productName": "a",
        "productType": "b",
        "productFirm": "c",
        "productPrice": 1.5,
        "rating": 5
    }];

    public toggleImage() : void {
        this.showImage = !this.showImage;
    }
}