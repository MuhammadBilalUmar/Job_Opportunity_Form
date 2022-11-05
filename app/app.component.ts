import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './_helpers/must-match.validator';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    JobOppForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.JobOppForm = this.formBuilder.group({
            Title: ['', Validators.required],
            Description: ['', Validators.required],
            Rate: ['', Validators.required],
            Client: ['', Validators.required],
            Attachement: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.JobOppForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.JobOppForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.JobOppForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.JobOppForm.reset();
    }
}
