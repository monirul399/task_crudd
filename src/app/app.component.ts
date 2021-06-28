import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 // to store all employees
 public students: Student[] =[];
  
  constructor(private studentService: StudentService) {} // service is injected to the app component
  
  ngOnInit(){
    this.getStudents();
  }

// method which calls service
public getStudents(): void {
  this.studentService.getStudents().subscribe( // since this is unobservable ... so we need to subscribe to observable
    (response: Student[]) => {
      this.students = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

}
