import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { JobService } from './job.service';
import { JobPosition } from 'src/models/job-position.model';
import { JobApplication } from 'src/models/job-application.model';


describe('JobService Integration Tests', () => {
  let service: JobService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [JobService]
    });
    service = TestBed.get(JobService);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;

  });


  fit('JobService_should_be_created', () => {
    expect(service).toBeTruthy();
  });

  fit('JobService_should_retrieve_JobPosition_from_the_backend', (done: DoneFn) => {
    service.getJobPostings().subscribe(
      (teams: JobPosition[]) => {
        console.log("length"+teams.length)
        expect(teams.length).toBeGreaterThan(0); // Check if any teams are retrieved
        done();
      },
      (error: any) => {
        fail('Failed to retrieve teams: ' + JSON.stringify(error));
      }
    );
  });

  fit('JobService_should_retrieve_JopApplications_from_the_backend', (done: DoneFn) => {
    service.getJobApplications().subscribe(
      (teams: JobApplication[]) => {
        console.log("length"+teams.length)
        expect(teams.length).toBeGreaterThan(0); // Check if any teams are retrieved
        done();
      },
      (error: any) => {
        fail('Failed to retrieve teams: ' + JSON.stringify(error));
      }
    );
  });

  fit('JobService_should_have_a_markJobAsClosed_function', () => {
    expect(service.markJobAsClosed).toBeDefined();
  });


})
