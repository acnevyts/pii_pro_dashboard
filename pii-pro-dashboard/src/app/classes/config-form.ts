export class ConfigForm {
  constructor(
    public docType: string,
    public BucketName: string,
    public version: string,
    public Config: PIIConfig
  ) {}
}

export class PIIConfig {
  constructor(
    public collectionDelimeter: string,
    public freeTextFields: JsonPathConfig[],
    public PIIData: JsonPathConfig[],
    public RehydrationProfiles: RegydrationProfile[]
  ) {}
}

export class JsonPathConfig {
  constructor(
    public identifiable: boolean,
    public jsonPath: string,
    public pii_type: string,
    public isDifferentPerson: boolean
  ) {}
}

export class RegydrationProfile {
  constructor(
    public profileName: string,
    public includes: string[],
    public excludes: string[]
  ) {}
}
