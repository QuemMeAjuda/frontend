import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }
}
