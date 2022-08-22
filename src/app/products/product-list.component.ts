import { Component, OnInit } from "@angular/core";

// export interface IProduct{} -  de facut

@Component({
    selector: 'fs-products',
    templateUrl: './product-list-component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    public pageTitle: string = 'Our Products:';
    public showImage: boolean = true;
    public imageWidth: number = 50;
    public imageMargin: number = 2;
    private _listFilter: string = '';
    
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
    }

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
    public filteredProducts: any[] = []

    public toggleImage() : void {
        this.showImage = !this.showImage;
    }

    public performFilter(filterBy: string): any[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product) => product.productName.toLocaleLowerCase().includes(filterBy))
    }
    ngOnInit(): void {
        this._listFilter = 'cart';
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}