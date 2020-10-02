import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  public getConfigurations(): Observable<any> {
    return of([
      {
        docType: 'HCGeneral.CareMedicalClinic.PatientAppointment',
      },
      {
        docType: 'FlightData',
        BucketName: 'mpi-flightdata-546674676468',
        Config: {
          collectionDelimeter: '$.Passengers[*]',
          freeTextFields: [
            {
              jsonPath: '$.Passengers[*].comment',
            },
          ],
          PIIData: [
            {
              identifiable: true,
              jsonPath: '@.passengerId',
              pii_type: 'passengerId',
            },
            {
              identifiable: false,
              jsonPath: '@.firstName',
              pii_type: 'name',
            },
            {
              identifiable: false,
              jsonPath: '@.lastName',
              pii_type: 'name',
            },
            {
              identifiable: true,
              jsonPath: '@.frequentFlyerNo',
              pii_type: 'flyerNumber',
            },
            {
              identifiable: false,
              jsonPath: '@.billingAddress.street1',
              pii_type: 'streetAddress',
            },
            {
              identifiable: false,
              jsonPath: '@.billingAddress.street2',
              pii_type: 'streetAddress',
            },
            {
              identifiable: false,
              jsonPath: '@.billingAddress.zipCode',
              pii_type: 'zipCode',
            },
            {
              identifiable: true,
              jsonPath: '@.DriverLicense',
              pii_type: 'driversLicense',
            },
            {
              identifiable: true,
              isDifferentPerson: true,
              jsonPath: '@.party[*].passengerId',
              pii_type: 'passengerId',
            },
          ],
          RehydrationProfiles: {
            analytics_user: {
              excludes: ['driversLicense', 'flyerNumber', 'passengerId'],
            },
            audit_user: {
              includes: ['passengerId'],
            },
          },
        },
        DocType: 'FlightData',
        Version: '1.0',
      },
    ]);

    // ]
    //     'HCGeneral.CareMedicalClinic.PatientAppointment',
    //     'FlightData',
    //     'CarRentalForm',
    //     'HotelReservation',
    //     'HCGeneral.CareMedicalClinic.RiskAssessment',
    //     'HCGeneral.CareMedicalClinic.Immunization',
    //     'GasStationTransaction',
    //     'BankDocument',
    //     'TaxDocument',
    //   ],
  }

  public getDocument(docType: string): Observable<any> {
    return of({
      resourceType: 'FlightData',
      Passengers: [
        {
          passengerId: 'PID45678',
          firstName: 'James',
          lastName: 'Chalmers',
          homeAirportCode: 'LAX',
          seatPreference: 'Aisle',
          DriverLicense: 'CA980762343',
          frequentFlyerNo: 'ABC456789',
          billingAddress: {
            street1: '345 Montrose Ave',
            street2: '',
            city: 'Los Angeles',
            stateCode: 'CA',
            zipCode: '90003',
          },
          mealCode: '002',
          bags: [],
          seat: '8C',
        },
      ],
      Plane: { make: 'Boeing', model: '787-9', planeId: 'b7879-1234' },
      Flight: {
        departure: {
          airportCode: 'SEA',
          time: 'Mon Aug 3 2020 12:38:58 GMT-0600 (Pacific Daylight Time)',
        },
        arrival: {
          airportCode: 'LAX',
          time: 'Mon Aug 3 2020 14:38:58 GMT-0600 (Pacific Daylight Time)',
        },
      },
    });
  }
}
