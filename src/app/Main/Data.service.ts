import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    employees: any = [
        {
            "name": "John Doe",
            "id": 1,
            "contactNumber": 1234567890
        },
        {
            "name": "Jane Smith",
            "id": 2,
            "contactNumber": 9876543210
        },
        {
            "name": "Michael Johnson",
            "id": 3,
            "contactNumber": 4567890123
        },
        {
            "name": "Emily Davis",
            "id": 4,
            "contactNumber": 7890123456
        },
        {
            "name": "William Anderson",
            "id": 5,
            "contactNumber": 2345678901
        },
        {
            "name": "Sophia Martinez",
            "id": 6,
            "contactNumber": 9012345678
        },
        {
            "name": "Daniel Taylor",
            "id": 7,
            "contactNumber": 5678901234
        },
        {
            "name": "Olivia Clark",
            "id": 8,
            "contactNumber": 4321098765
        },
        {
            "name": "Matthew Rodriguez",
            "id": 9,
            "contactNumber": 6789012345
        },
        {
            "name": "Ava Wilson",
            "id": 10,
            "contactNumber": 2109876543
        }
    ]

    selectedEmployee: any;

    constructor() { }

    getData() {
        return this.employees;
    }

}
