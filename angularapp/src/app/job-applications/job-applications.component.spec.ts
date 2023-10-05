import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { JobApplicationsComponent } from './job-applications.component';
import { HttpClientModule } from '@angular/common/http';

describe('JobApplicationsComponent', () => {
  let component: JobApplicationsComponent;
  let fixture: ComponentFixture<JobApplicationsComponent>;
  // let jobServiceSpy: any;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [JobApplicationsComponent],
      imports: [ReactiveFormsModule,HttpClientModule],

    });

    fixture = TestBed.createComponent(JobApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create the component', () => {
  //   expect(component).toBeTruthy();
  // });

  fit('JobApplicationsComponent should initialize the JobApplication applyForJob function', () => {
    expect(component.applyForJob).toBeDefined();

  });


  fit('JobApplicationsComponent should call applyForJob when the form is submitted', fakeAsync(() => {
    spyOn(component, 'applyForJob');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    tick();
    expect(component.applyForJob).toHaveBeenCalled();
  }));

  fit('JobApplicationsComponent should validate required fields in the application form', () => {
    const form = component.jobApplicationForm;
    expect(form.valid).toBeFalsy();
    form.controls['applicantName'].setValue('Test Title');
    form.controls['jobPositionId'].setValue(1);
    expect(form.valid).toBeTruthy();
  });


  fit('JobApplicationsComponent should not submit application if field is empty in the form', () => {
    const form = component.jobApplicationForm;
    expect(form.valid).toBeFalsy();
    form.controls['applicantName'].setValue('Test Title');
    form.controls['jobPositionId'].setValue('');
    expect(form.valid).toBeFalsy();
  });
});
