import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component( {
    selector: 'app-demo-form-sku-builder',
    templateUrl: './demo-form-sku-builder.component.html',
    styleUrls: ['./demo-form-sku-builder.component.css']
})
export class DemoFormSkuBuilderComponent implements OnInit {

    myForm: FormGroup;

    constructor( fb: FormBuilder ) {
        this.myForm = fb.group( {
            'sku': ['ABC123']
        });
    }

    onSubmit( value: any ): void {
        console.log( 'you submitted value: ', value );
    }

    ngOnInit() {
    }

}
