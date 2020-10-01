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

  public getDocuments(docType: string): Observable<any> {
    return of({
      documents: [],
    });
  }

  public getConfig(docType: string): Observable<any> {
    return of({
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
    });
  }
}
