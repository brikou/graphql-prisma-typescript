export const typeDefs = /* GraphQL */ `type AggregateAmenities {
  count: Int!
}

type AggregateBooking {
  count: Int!
}

type AggregateCity {
  count: Int!
}

type AggregateCreditCardInformation {
  count: Int!
}

type AggregateExperience {
  count: Int!
}

type AggregateExperienceCategory {
  count: Int!
}

type AggregateFoo {
  count: Int!
}

type AggregateGuestRequirements {
  count: Int!
}

type AggregateHouseRules {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateNeighbourhood {
  count: Int!
}

type AggregateNotification {
  count: Int!
}

type AggregatePayment {
  count: Int!
}

type AggregatePaymentAccount {
  count: Int!
}

type AggregatePaypalInformation {
  count: Int!
}

type AggregatePicture {
  count: Int!
}

type AggregatePlace {
  count: Int!
}

type AggregatePolicies {
  count: Int!
}

type AggregatePricing {
  count: Int!
}

type AggregateRestaurant {
  count: Int!
}

type AggregateReview {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateViews {
  count: Int!
}

type Amenities {
  id: ID!
  place: Place!
  elevator: Boolean!
  petsAllowed: Boolean!
  internet: Boolean!
  kitchen: Boolean!
  wirelessInternet: Boolean!
  familyKidFriendly: Boolean!
  freeParkingOnPremises: Boolean!
  hotTub: Boolean!
  pool: Boolean!
  smokingAllowed: Boolean!
  wheelchairAccessible: Boolean!
  breakfast: Boolean!
  cableTv: Boolean!
  suitableForEvents: Boolean!
  dryer: Boolean!
  washer: Boolean!
  indoorFireplace: Boolean!
  tv: Boolean!
  heating: Boolean!
  hangers: Boolean!
  iron: Boolean!
  hairDryer: Boolean!
  doorman: Boolean!
  paidParkingOffPremises: Boolean!
  freeParkingOnStreet: Boolean!
  gym: Boolean!
  airConditioning: Boolean!
  shampoo: Boolean!
  essentials: Boolean!
  laptopFriendlyWorkspace: Boolean!
  privateEntrance: Boolean!
  buzzerWirelessIntercom: Boolean!
  babyBath: Boolean!
  babyMonitor: Boolean!
  babysitterRecommendations: Boolean!
  bathtub: Boolean!
  changingTable: Boolean!
  childrensBooksAndToys: Boolean!
  childrensDinnerware: Boolean!
  crib: Boolean!
}

type AmenitiesConnection {
  pageInfo: PageInfo!
  edges: [AmenitiesEdge]!
  aggregate: AggregateAmenities!
}

input AmenitiesCreateInput {
  place: PlaceCreateOneWithoutAmenitiesInput!
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
}

input AmenitiesCreateOneWithoutPlaceInput {
  create: AmenitiesCreateWithoutPlaceInput
  connect: AmenitiesWhereUniqueInput
}

input AmenitiesCreateWithoutPlaceInput {
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
}

type AmenitiesEdge {
  node: Amenities!
  cursor: String!
}

enum AmenitiesOrderByInput {
  id_ASC
  id_DESC
  elevator_ASC
  elevator_DESC
  petsAllowed_ASC
  petsAllowed_DESC
  internet_ASC
  internet_DESC
  kitchen_ASC
  kitchen_DESC
  wirelessInternet_ASC
  wirelessInternet_DESC
  familyKidFriendly_ASC
  familyKidFriendly_DESC
  freeParkingOnPremises_ASC
  freeParkingOnPremises_DESC
  hotTub_ASC
  hotTub_DESC
  pool_ASC
  pool_DESC
  smokingAllowed_ASC
  smokingAllowed_DESC
  wheelchairAccessible_ASC
  wheelchairAccessible_DESC
  breakfast_ASC
  breakfast_DESC
  cableTv_ASC
  cableTv_DESC
  suitableForEvents_ASC
  suitableForEvents_DESC
  dryer_ASC
  dryer_DESC
  washer_ASC
  washer_DESC
  indoorFireplace_ASC
  indoorFireplace_DESC
  tv_ASC
  tv_DESC
  heating_ASC
  heating_DESC
  hangers_ASC
  hangers_DESC
  iron_ASC
  iron_DESC
  hairDryer_ASC
  hairDryer_DESC
  doorman_ASC
  doorman_DESC
  paidParkingOffPremises_ASC
  paidParkingOffPremises_DESC
  freeParkingOnStreet_ASC
  freeParkingOnStreet_DESC
  gym_ASC
  gym_DESC
  airConditioning_ASC
  airConditioning_DESC
  shampoo_ASC
  shampoo_DESC
  essentials_ASC
  essentials_DESC
  laptopFriendlyWorkspace_ASC
  laptopFriendlyWorkspace_DESC
  privateEntrance_ASC
  privateEntrance_DESC
  buzzerWirelessIntercom_ASC
  buzzerWirelessIntercom_DESC
  babyBath_ASC
  babyBath_DESC
  babyMonitor_ASC
  babyMonitor_DESC
  babysitterRecommendations_ASC
  babysitterRecommendations_DESC
  bathtub_ASC
  bathtub_DESC
  changingTable_ASC
  changingTable_DESC
  childrensBooksAndToys_ASC
  childrensBooksAndToys_DESC
  childrensDinnerware_ASC
  childrensDinnerware_DESC
  crib_ASC
  crib_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AmenitiesPreviousValues {
  id: ID!
  elevator: Boolean!
  petsAllowed: Boolean!
  internet: Boolean!
  kitchen: Boolean!
  wirelessInternet: Boolean!
  familyKidFriendly: Boolean!
  freeParkingOnPremises: Boolean!
  hotTub: Boolean!
  pool: Boolean!
  smokingAllowed: Boolean!
  wheelchairAccessible: Boolean!
  breakfast: Boolean!
  cableTv: Boolean!
  suitableForEvents: Boolean!
  dryer: Boolean!
  washer: Boolean!
  indoorFireplace: Boolean!
  tv: Boolean!
  heating: Boolean!
  hangers: Boolean!
  iron: Boolean!
  hairDryer: Boolean!
  doorman: Boolean!
  paidParkingOffPremises: Boolean!
  freeParkingOnStreet: Boolean!
  gym: Boolean!
  airConditioning: Boolean!
  shampoo: Boolean!
  essentials: Boolean!
  laptopFriendlyWorkspace: Boolean!
  privateEntrance: Boolean!
  buzzerWirelessIntercom: Boolean!
  babyBath: Boolean!
  babyMonitor: Boolean!
  babysitterRecommendations: Boolean!
  bathtub: Boolean!
  changingTable: Boolean!
  childrensBooksAndToys: Boolean!
  childrensDinnerware: Boolean!
  crib: Boolean!
}

type AmenitiesSubscriptionPayload {
  mutation: MutationType!
  node: Amenities
  updatedFields: [String!]
  previousValues: AmenitiesPreviousValues
}

input AmenitiesSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AmenitiesWhereInput
  AND: [AmenitiesSubscriptionWhereInput!]
  OR: [AmenitiesSubscriptionWhereInput!]
  NOT: [AmenitiesSubscriptionWhereInput!]
}

input AmenitiesUpdateInput {
  place: PlaceUpdateOneWithoutAmenitiesInput
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
}

input AmenitiesUpdateOneWithoutPlaceInput {
  create: AmenitiesCreateWithoutPlaceInput
  update: AmenitiesUpdateWithoutPlaceDataInput
  upsert: AmenitiesUpsertWithoutPlaceInput
  delete: Boolean
  connect: AmenitiesWhereUniqueInput
}

input AmenitiesUpdateWithoutPlaceDataInput {
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
}

input AmenitiesUpsertWithoutPlaceInput {
  update: AmenitiesUpdateWithoutPlaceDataInput!
  create: AmenitiesCreateWithoutPlaceInput!
}

input AmenitiesWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  place: PlaceWhereInput
  elevator: Boolean
  elevator_not: Boolean
  petsAllowed: Boolean
  petsAllowed_not: Boolean
  internet: Boolean
  internet_not: Boolean
  kitchen: Boolean
  kitchen_not: Boolean
  wirelessInternet: Boolean
  wirelessInternet_not: Boolean
  familyKidFriendly: Boolean
  familyKidFriendly_not: Boolean
  freeParkingOnPremises: Boolean
  freeParkingOnPremises_not: Boolean
  hotTub: Boolean
  hotTub_not: Boolean
  pool: Boolean
  pool_not: Boolean
  smokingAllowed: Boolean
  smokingAllowed_not: Boolean
  wheelchairAccessible: Boolean
  wheelchairAccessible_not: Boolean
  breakfast: Boolean
  breakfast_not: Boolean
  cableTv: Boolean
  cableTv_not: Boolean
  suitableForEvents: Boolean
  suitableForEvents_not: Boolean
  dryer: Boolean
  dryer_not: Boolean
  washer: Boolean
  washer_not: Boolean
  indoorFireplace: Boolean
  indoorFireplace_not: Boolean
  tv: Boolean
  tv_not: Boolean
  heating: Boolean
  heating_not: Boolean
  hangers: Boolean
  hangers_not: Boolean
  iron: Boolean
  iron_not: Boolean
  hairDryer: Boolean
  hairDryer_not: Boolean
  doorman: Boolean
  doorman_not: Boolean
  paidParkingOffPremises: Boolean
  paidParkingOffPremises_not: Boolean
  freeParkingOnStreet: Boolean
  freeParkingOnStreet_not: Boolean
  gym: Boolean
  gym_not: Boolean
  airConditioning: Boolean
  airConditioning_not: Boolean
  shampoo: Boolean
  shampoo_not: Boolean
  essentials: Boolean
  essentials_not: Boolean
  laptopFriendlyWorkspace: Boolean
  laptopFriendlyWorkspace_not: Boolean
  privateEntrance: Boolean
  privateEntrance_not: Boolean
  buzzerWirelessIntercom: Boolean
  buzzerWirelessIntercom_not: Boolean
  babyBath: Boolean
  babyBath_not: Boolean
  babyMonitor: Boolean
  babyMonitor_not: Boolean
  babysitterRecommendations: Boolean
  babysitterRecommendations_not: Boolean
  bathtub: Boolean
  bathtub_not: Boolean
  changingTable: Boolean
  changingTable_not: Boolean
  childrensBooksAndToys: Boolean
  childrensBooksAndToys_not: Boolean
  childrensDinnerware: Boolean
  childrensDinnerware_not: Boolean
  crib: Boolean
  crib_not: Boolean
  AND: [AmenitiesWhereInput!]
  OR: [AmenitiesWhereInput!]
  NOT: [AmenitiesWhereInput!]
}

input AmenitiesWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Booking {
  id: ID!
  createdAt: DateTime!
  bookee: User!
  place: Place!
  startDate: DateTime!
  endDate: DateTime!
  payment: Payment
}

type BookingConnection {
  pageInfo: PageInfo!
  edges: [BookingEdge]!
  aggregate: AggregateBooking!
}

input BookingCreateInput {
  bookee: UserCreateOneWithoutBookingsInput!
  place: PlaceCreateOneWithoutBookingsInput!
  startDate: DateTime!
  endDate: DateTime!
  payment: PaymentCreateOneWithoutBookingInput
}

input BookingCreateManyWithoutBookeeInput {
  create: [BookingCreateWithoutBookeeInput!]
  connect: [BookingWhereUniqueInput!]
}

input BookingCreateManyWithoutPlaceInput {
  create: [BookingCreateWithoutPlaceInput!]
  connect: [BookingWhereUniqueInput!]
}

input BookingCreateOneWithoutPaymentInput {
  create: BookingCreateWithoutPaymentInput
  connect: BookingWhereUniqueInput
}

input BookingCreateWithoutBookeeInput {
  place: PlaceCreateOneWithoutBookingsInput!
  startDate: DateTime!
  endDate: DateTime!
  payment: PaymentCreateOneWithoutBookingInput
}

input BookingCreateWithoutPaymentInput {
  bookee: UserCreateOneWithoutBookingsInput!
  place: PlaceCreateOneWithoutBookingsInput!
  startDate: DateTime!
  endDate: DateTime!
}

input BookingCreateWithoutPlaceInput {
  bookee: UserCreateOneWithoutBookingsInput!
  startDate: DateTime!
  endDate: DateTime!
  payment: PaymentCreateOneWithoutBookingInput
}

type BookingEdge {
  node: Booking!
  cursor: String!
}

enum BookingOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  startDate_ASC
  startDate_DESC
  endDate_ASC
  endDate_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BookingPreviousValues {
  id: ID!
  createdAt: DateTime!
  startDate: DateTime!
  endDate: DateTime!
}

type BookingSubscriptionPayload {
  mutation: MutationType!
  node: Booking
  updatedFields: [String!]
  previousValues: BookingPreviousValues
}

input BookingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookingWhereInput
  AND: [BookingSubscriptionWhereInput!]
  OR: [BookingSubscriptionWhereInput!]
  NOT: [BookingSubscriptionWhereInput!]
}

input BookingUpdateInput {
  bookee: UserUpdateOneWithoutBookingsInput
  place: PlaceUpdateOneWithoutBookingsInput
  startDate: DateTime
  endDate: DateTime
  payment: PaymentUpdateOneWithoutBookingInput
}

input BookingUpdateManyWithoutBookeeInput {
  create: [BookingCreateWithoutBookeeInput!]
  delete: [BookingWhereUniqueInput!]
  connect: [BookingWhereUniqueInput!]
  disconnect: [BookingWhereUniqueInput!]
  update: [BookingUpdateWithWhereUniqueWithoutBookeeInput!]
  upsert: [BookingUpsertWithWhereUniqueWithoutBookeeInput!]
}

input BookingUpdateManyWithoutPlaceInput {
  create: [BookingCreateWithoutPlaceInput!]
  delete: [BookingWhereUniqueInput!]
  connect: [BookingWhereUniqueInput!]
  disconnect: [BookingWhereUniqueInput!]
  update: [BookingUpdateWithWhereUniqueWithoutPlaceInput!]
  upsert: [BookingUpsertWithWhereUniqueWithoutPlaceInput!]
}

input BookingUpdateOneWithoutPaymentInput {
  create: BookingCreateWithoutPaymentInput
  update: BookingUpdateWithoutPaymentDataInput
  upsert: BookingUpsertWithoutPaymentInput
  delete: Boolean
  connect: BookingWhereUniqueInput
}

input BookingUpdateWithoutBookeeDataInput {
  place: PlaceUpdateOneWithoutBookingsInput
  startDate: DateTime
  endDate: DateTime
  payment: PaymentUpdateOneWithoutBookingInput
}

input BookingUpdateWithoutPaymentDataInput {
  bookee: UserUpdateOneWithoutBookingsInput
  place: PlaceUpdateOneWithoutBookingsInput
  startDate: DateTime
  endDate: DateTime
}

input BookingUpdateWithoutPlaceDataInput {
  bookee: UserUpdateOneWithoutBookingsInput
  startDate: DateTime
  endDate: DateTime
  payment: PaymentUpdateOneWithoutBookingInput
}

input BookingUpdateWithWhereUniqueWithoutBookeeInput {
  where: BookingWhereUniqueInput!
  data: BookingUpdateWithoutBookeeDataInput!
}

input BookingUpdateWithWhereUniqueWithoutPlaceInput {
  where: BookingWhereUniqueInput!
  data: BookingUpdateWithoutPlaceDataInput!
}

input BookingUpsertWithoutPaymentInput {
  update: BookingUpdateWithoutPaymentDataInput!
  create: BookingCreateWithoutPaymentInput!
}

input BookingUpsertWithWhereUniqueWithoutBookeeInput {
  where: BookingWhereUniqueInput!
  update: BookingUpdateWithoutBookeeDataInput!
  create: BookingCreateWithoutBookeeInput!
}

input BookingUpsertWithWhereUniqueWithoutPlaceInput {
  where: BookingWhereUniqueInput!
  update: BookingUpdateWithoutPlaceDataInput!
  create: BookingCreateWithoutPlaceInput!
}

input BookingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  bookee: UserWhereInput
  place: PlaceWhereInput
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  endDate: DateTime
  endDate_not: DateTime
  endDate_in: [DateTime!]
  endDate_not_in: [DateTime!]
  endDate_lt: DateTime
  endDate_lte: DateTime
  endDate_gt: DateTime
  endDate_gte: DateTime
  payment: PaymentWhereInput
  AND: [BookingWhereInput!]
  OR: [BookingWhereInput!]
  NOT: [BookingWhereInput!]
}

input BookingWhereUniqueInput {
  id: ID
}

type City {
  id: ID!
  name: String!
  neighbourhoods(where: NeighbourhoodWhereInput, orderBy: NeighbourhoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Neighbourhood!]
}

type CityConnection {
  pageInfo: PageInfo!
  edges: [CityEdge]!
  aggregate: AggregateCity!
}

input CityCreateInput {
  name: String!
  neighbourhoods: NeighbourhoodCreateManyWithoutCityInput
}

input CityCreateOneWithoutNeighbourhoodsInput {
  create: CityCreateWithoutNeighbourhoodsInput
  connect: CityWhereUniqueInput
}

input CityCreateWithoutNeighbourhoodsInput {
  name: String!
}

type CityEdge {
  node: City!
  cursor: String!
}

enum CityOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CityPreviousValues {
  id: ID!
  name: String!
}

type CitySubscriptionPayload {
  mutation: MutationType!
  node: City
  updatedFields: [String!]
  previousValues: CityPreviousValues
}

input CitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CityWhereInput
  AND: [CitySubscriptionWhereInput!]
  OR: [CitySubscriptionWhereInput!]
  NOT: [CitySubscriptionWhereInput!]
}

input CityUpdateInput {
  name: String
  neighbourhoods: NeighbourhoodUpdateManyWithoutCityInput
}

input CityUpdateOneWithoutNeighbourhoodsInput {
  create: CityCreateWithoutNeighbourhoodsInput
  update: CityUpdateWithoutNeighbourhoodsDataInput
  upsert: CityUpsertWithoutNeighbourhoodsInput
  delete: Boolean
  connect: CityWhereUniqueInput
}

input CityUpdateWithoutNeighbourhoodsDataInput {
  name: String
}

input CityUpsertWithoutNeighbourhoodsInput {
  update: CityUpdateWithoutNeighbourhoodsDataInput!
  create: CityCreateWithoutNeighbourhoodsInput!
}

input CityWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  neighbourhoods_every: NeighbourhoodWhereInput
  neighbourhoods_some: NeighbourhoodWhereInput
  neighbourhoods_none: NeighbourhoodWhereInput
  AND: [CityWhereInput!]
  OR: [CityWhereInput!]
  NOT: [CityWhereInput!]
}

input CityWhereUniqueInput {
  id: ID
}

type CreditCardInformation {
  id: ID!
  createdAt: DateTime!
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
  paymentAccount: PaymentAccount
}

type CreditCardInformationConnection {
  pageInfo: PageInfo!
  edges: [CreditCardInformationEdge]!
  aggregate: AggregateCreditCardInformation!
}

input CreditCardInformationCreateInput {
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
  paymentAccount: PaymentAccountCreateOneWithoutCreditcardInput
}

input CreditCardInformationCreateOneWithoutPaymentAccountInput {
  create: CreditCardInformationCreateWithoutPaymentAccountInput
  connect: CreditCardInformationWhereUniqueInput
}

input CreditCardInformationCreateWithoutPaymentAccountInput {
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
}

type CreditCardInformationEdge {
  node: CreditCardInformation!
  cursor: String!
}

enum CreditCardInformationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  cardNumber_ASC
  cardNumber_DESC
  expiresOnMonth_ASC
  expiresOnMonth_DESC
  expiresOnYear_ASC
  expiresOnYear_DESC
  securityCode_ASC
  securityCode_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  postalCode_ASC
  postalCode_DESC
  country_ASC
  country_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CreditCardInformationPreviousValues {
  id: ID!
  createdAt: DateTime!
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
}

type CreditCardInformationSubscriptionPayload {
  mutation: MutationType!
  node: CreditCardInformation
  updatedFields: [String!]
  previousValues: CreditCardInformationPreviousValues
}

input CreditCardInformationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CreditCardInformationWhereInput
  AND: [CreditCardInformationSubscriptionWhereInput!]
  OR: [CreditCardInformationSubscriptionWhereInput!]
  NOT: [CreditCardInformationSubscriptionWhereInput!]
}

input CreditCardInformationUpdateInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
  paymentAccount: PaymentAccountUpdateOneWithoutCreditcardInput
}

input CreditCardInformationUpdateOneWithoutPaymentAccountInput {
  create: CreditCardInformationCreateWithoutPaymentAccountInput
  update: CreditCardInformationUpdateWithoutPaymentAccountDataInput
  upsert: CreditCardInformationUpsertWithoutPaymentAccountInput
  delete: Boolean
  disconnect: Boolean
  connect: CreditCardInformationWhereUniqueInput
}

input CreditCardInformationUpdateWithoutPaymentAccountDataInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
}

input CreditCardInformationUpsertWithoutPaymentAccountInput {
  update: CreditCardInformationUpdateWithoutPaymentAccountDataInput!
  create: CreditCardInformationCreateWithoutPaymentAccountInput!
}

input CreditCardInformationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  cardNumber: String
  cardNumber_not: String
  cardNumber_in: [String!]
  cardNumber_not_in: [String!]
  cardNumber_lt: String
  cardNumber_lte: String
  cardNumber_gt: String
  cardNumber_gte: String
  cardNumber_contains: String
  cardNumber_not_contains: String
  cardNumber_starts_with: String
  cardNumber_not_starts_with: String
  cardNumber_ends_with: String
  cardNumber_not_ends_with: String
  expiresOnMonth: Int
  expiresOnMonth_not: Int
  expiresOnMonth_in: [Int!]
  expiresOnMonth_not_in: [Int!]
  expiresOnMonth_lt: Int
  expiresOnMonth_lte: Int
  expiresOnMonth_gt: Int
  expiresOnMonth_gte: Int
  expiresOnYear: Int
  expiresOnYear_not: Int
  expiresOnYear_in: [Int!]
  expiresOnYear_not_in: [Int!]
  expiresOnYear_lt: Int
  expiresOnYear_lte: Int
  expiresOnYear_gt: Int
  expiresOnYear_gte: Int
  securityCode: String
  securityCode_not: String
  securityCode_in: [String!]
  securityCode_not_in: [String!]
  securityCode_lt: String
  securityCode_lte: String
  securityCode_gt: String
  securityCode_gte: String
  securityCode_contains: String
  securityCode_not_contains: String
  securityCode_starts_with: String
  securityCode_not_starts_with: String
  securityCode_ends_with: String
  securityCode_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  postalCode: String
  postalCode_not: String
  postalCode_in: [String!]
  postalCode_not_in: [String!]
  postalCode_lt: String
  postalCode_lte: String
  postalCode_gt: String
  postalCode_gte: String
  postalCode_contains: String
  postalCode_not_contains: String
  postalCode_starts_with: String
  postalCode_not_starts_with: String
  postalCode_ends_with: String
  postalCode_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  paymentAccount: PaymentAccountWhereInput
  AND: [CreditCardInformationWhereInput!]
  OR: [CreditCardInformationWhereInput!]
  NOT: [CreditCardInformationWhereInput!]
}

input CreditCardInformationWhereUniqueInput {
  id: ID
}

enum CURRENCY {
  CAD
  CHF
  EUR
  JPY
  USD
  ZAR
}

scalar DateTime

type Experience {
  id: ID!
  category: ExperienceCategory
  title: String!
  host: User!
  location: Location!
  pricePerPerson: Int!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  preview: Picture!
  popularity: Int!
}

type ExperienceCategory {
  id: ID!
  mainColor: String!
  name: String!
  experience: Experience
}

type ExperienceCategoryConnection {
  pageInfo: PageInfo!
  edges: [ExperienceCategoryEdge]!
  aggregate: AggregateExperienceCategory!
}

input ExperienceCategoryCreateInput {
  mainColor: String
  name: String!
  experience: ExperienceCreateOneWithoutCategoryInput
}

input ExperienceCategoryCreateOneWithoutExperienceInput {
  create: ExperienceCategoryCreateWithoutExperienceInput
  connect: ExperienceCategoryWhereUniqueInput
}

input ExperienceCategoryCreateWithoutExperienceInput {
  mainColor: String
  name: String!
}

type ExperienceCategoryEdge {
  node: ExperienceCategory!
  cursor: String!
}

enum ExperienceCategoryOrderByInput {
  id_ASC
  id_DESC
  mainColor_ASC
  mainColor_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ExperienceCategoryPreviousValues {
  id: ID!
  mainColor: String!
  name: String!
}

type ExperienceCategorySubscriptionPayload {
  mutation: MutationType!
  node: ExperienceCategory
  updatedFields: [String!]
  previousValues: ExperienceCategoryPreviousValues
}

input ExperienceCategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ExperienceCategoryWhereInput
  AND: [ExperienceCategorySubscriptionWhereInput!]
  OR: [ExperienceCategorySubscriptionWhereInput!]
  NOT: [ExperienceCategorySubscriptionWhereInput!]
}

input ExperienceCategoryUpdateInput {
  mainColor: String
  name: String
  experience: ExperienceUpdateOneWithoutCategoryInput
}

input ExperienceCategoryUpdateOneWithoutExperienceInput {
  create: ExperienceCategoryCreateWithoutExperienceInput
  update: ExperienceCategoryUpdateWithoutExperienceDataInput
  upsert: ExperienceCategoryUpsertWithoutExperienceInput
  delete: Boolean
  disconnect: Boolean
  connect: ExperienceCategoryWhereUniqueInput
}

input ExperienceCategoryUpdateWithoutExperienceDataInput {
  mainColor: String
  name: String
}

input ExperienceCategoryUpsertWithoutExperienceInput {
  update: ExperienceCategoryUpdateWithoutExperienceDataInput!
  create: ExperienceCategoryCreateWithoutExperienceInput!
}

input ExperienceCategoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  mainColor: String
  mainColor_not: String
  mainColor_in: [String!]
  mainColor_not_in: [String!]
  mainColor_lt: String
  mainColor_lte: String
  mainColor_gt: String
  mainColor_gte: String
  mainColor_contains: String
  mainColor_not_contains: String
  mainColor_starts_with: String
  mainColor_not_starts_with: String
  mainColor_ends_with: String
  mainColor_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  experience: ExperienceWhereInput
  AND: [ExperienceCategoryWhereInput!]
  OR: [ExperienceCategoryWhereInput!]
  NOT: [ExperienceCategoryWhereInput!]
}

input ExperienceCategoryWhereUniqueInput {
  id: ID
}

type ExperienceConnection {
  pageInfo: PageInfo!
  edges: [ExperienceEdge]!
  aggregate: AggregateExperience!
}

input ExperienceCreateInput {
  category: ExperienceCategoryCreateOneWithoutExperienceInput
  title: String!
  host: UserCreateOneWithoutHostingExperiencesInput!
  location: LocationCreateOneWithoutExperienceInput!
  pricePerPerson: Int!
  reviews: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput!
  popularity: Int!
}

input ExperienceCreateManyWithoutHostInput {
  create: [ExperienceCreateWithoutHostInput!]
  connect: [ExperienceWhereUniqueInput!]
}

input ExperienceCreateOneWithoutCategoryInput {
  create: ExperienceCreateWithoutCategoryInput
  connect: ExperienceWhereUniqueInput
}

input ExperienceCreateOneWithoutLocationInput {
  create: ExperienceCreateWithoutLocationInput
  connect: ExperienceWhereUniqueInput
}

input ExperienceCreateOneWithoutReviewsInput {
  create: ExperienceCreateWithoutReviewsInput
  connect: ExperienceWhereUniqueInput
}

input ExperienceCreateWithoutCategoryInput {
  title: String!
  host: UserCreateOneWithoutHostingExperiencesInput!
  location: LocationCreateOneWithoutExperienceInput!
  pricePerPerson: Int!
  reviews: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput!
  popularity: Int!
}

input ExperienceCreateWithoutHostInput {
  category: ExperienceCategoryCreateOneWithoutExperienceInput
  title: String!
  location: LocationCreateOneWithoutExperienceInput!
  pricePerPerson: Int!
  reviews: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput!
  popularity: Int!
}

input ExperienceCreateWithoutLocationInput {
  category: ExperienceCategoryCreateOneWithoutExperienceInput
  title: String!
  host: UserCreateOneWithoutHostingExperiencesInput!
  pricePerPerson: Int!
  reviews: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput!
  popularity: Int!
}

input ExperienceCreateWithoutReviewsInput {
  category: ExperienceCategoryCreateOneWithoutExperienceInput
  title: String!
  host: UserCreateOneWithoutHostingExperiencesInput!
  location: LocationCreateOneWithoutExperienceInput!
  pricePerPerson: Int!
  preview: PictureCreateOneInput!
  popularity: Int!
}

type ExperienceEdge {
  node: Experience!
  cursor: String!
}

enum ExperienceOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  pricePerPerson_ASC
  pricePerPerson_DESC
  popularity_ASC
  popularity_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ExperiencePreviousValues {
  id: ID!
  title: String!
  pricePerPerson: Int!
  popularity: Int!
}

type ExperienceSubscriptionPayload {
  mutation: MutationType!
  node: Experience
  updatedFields: [String!]
  previousValues: ExperiencePreviousValues
}

input ExperienceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ExperienceWhereInput
  AND: [ExperienceSubscriptionWhereInput!]
  OR: [ExperienceSubscriptionWhereInput!]
  NOT: [ExperienceSubscriptionWhereInput!]
}

input ExperienceUpdateInput {
  category: ExperienceCategoryUpdateOneWithoutExperienceInput
  title: String
  host: UserUpdateOneWithoutHostingExperiencesInput
  location: LocationUpdateOneWithoutExperienceInput
  pricePerPerson: Int
  reviews: ReviewUpdateManyWithoutExperienceInput
  preview: PictureUpdateOneInput
  popularity: Int
}

input ExperienceUpdateManyWithoutHostInput {
  create: [ExperienceCreateWithoutHostInput!]
  delete: [ExperienceWhereUniqueInput!]
  connect: [ExperienceWhereUniqueInput!]
  disconnect: [ExperienceWhereUniqueInput!]
  update: [ExperienceUpdateWithWhereUniqueWithoutHostInput!]
  upsert: [ExperienceUpsertWithWhereUniqueWithoutHostInput!]
}

input ExperienceUpdateOneWithoutCategoryInput {
  create: ExperienceCreateWithoutCategoryInput
  update: ExperienceUpdateWithoutCategoryDataInput
  upsert: ExperienceUpsertWithoutCategoryInput
  delete: Boolean
  disconnect: Boolean
  connect: ExperienceWhereUniqueInput
}

input ExperienceUpdateOneWithoutLocationInput {
  create: ExperienceCreateWithoutLocationInput
  update: ExperienceUpdateWithoutLocationDataInput
  upsert: ExperienceUpsertWithoutLocationInput
  delete: Boolean
  disconnect: Boolean
  connect: ExperienceWhereUniqueInput
}

input ExperienceUpdateOneWithoutReviewsInput {
  create: ExperienceCreateWithoutReviewsInput
  update: ExperienceUpdateWithoutReviewsDataInput
  upsert: ExperienceUpsertWithoutReviewsInput
  delete: Boolean
  disconnect: Boolean
  connect: ExperienceWhereUniqueInput
}

input ExperienceUpdateWithoutCategoryDataInput {
  title: String
  host: UserUpdateOneWithoutHostingExperiencesInput
  location: LocationUpdateOneWithoutExperienceInput
  pricePerPerson: Int
  reviews: ReviewUpdateManyWithoutExperienceInput
  preview: PictureUpdateOneInput
  popularity: Int
}

input ExperienceUpdateWithoutHostDataInput {
  category: ExperienceCategoryUpdateOneWithoutExperienceInput
  title: String
  location: LocationUpdateOneWithoutExperienceInput
  pricePerPerson: Int
  reviews: ReviewUpdateManyWithoutExperienceInput
  preview: PictureUpdateOneInput
  popularity: Int
}

input ExperienceUpdateWithoutLocationDataInput {
  category: ExperienceCategoryUpdateOneWithoutExperienceInput
  title: String
  host: UserUpdateOneWithoutHostingExperiencesInput
  pricePerPerson: Int
  reviews: ReviewUpdateManyWithoutExperienceInput
  preview: PictureUpdateOneInput
  popularity: Int
}

input ExperienceUpdateWithoutReviewsDataInput {
  category: ExperienceCategoryUpdateOneWithoutExperienceInput
  title: String
  host: UserUpdateOneWithoutHostingExperiencesInput
  location: LocationUpdateOneWithoutExperienceInput
  pricePerPerson: Int
  preview: PictureUpdateOneInput
  popularity: Int
}

input ExperienceUpdateWithWhereUniqueWithoutHostInput {
  where: ExperienceWhereUniqueInput!
  data: ExperienceUpdateWithoutHostDataInput!
}

input ExperienceUpsertWithoutCategoryInput {
  update: ExperienceUpdateWithoutCategoryDataInput!
  create: ExperienceCreateWithoutCategoryInput!
}

input ExperienceUpsertWithoutLocationInput {
  update: ExperienceUpdateWithoutLocationDataInput!
  create: ExperienceCreateWithoutLocationInput!
}

input ExperienceUpsertWithoutReviewsInput {
  update: ExperienceUpdateWithoutReviewsDataInput!
  create: ExperienceCreateWithoutReviewsInput!
}

input ExperienceUpsertWithWhereUniqueWithoutHostInput {
  where: ExperienceWhereUniqueInput!
  update: ExperienceUpdateWithoutHostDataInput!
  create: ExperienceCreateWithoutHostInput!
}

input ExperienceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  category: ExperienceCategoryWhereInput
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  host: UserWhereInput
  location: LocationWhereInput
  pricePerPerson: Int
  pricePerPerson_not: Int
  pricePerPerson_in: [Int!]
  pricePerPerson_not_in: [Int!]
  pricePerPerson_lt: Int
  pricePerPerson_lte: Int
  pricePerPerson_gt: Int
  pricePerPerson_gte: Int
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  preview: PictureWhereInput
  popularity: Int
  popularity_not: Int
  popularity_in: [Int!]
  popularity_not_in: [Int!]
  popularity_lt: Int
  popularity_lte: Int
  popularity_gt: Int
  popularity_gte: Int
  AND: [ExperienceWhereInput!]
  OR: [ExperienceWhereInput!]
  NOT: [ExperienceWhereInput!]
}

input ExperienceWhereUniqueInput {
  id: ID
}

type Foo {
  id: ID!
  foo: String!
}

type FooConnection {
  pageInfo: PageInfo!
  edges: [FooEdge]!
  aggregate: AggregateFoo!
}

input FooCreateInput {
  foo: String!
}

type FooEdge {
  node: Foo!
  cursor: String!
}

enum FooOrderByInput {
  id_ASC
  id_DESC
  foo_ASC
  foo_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FooPreviousValues {
  id: ID!
  foo: String!
}

type FooSubscriptionPayload {
  mutation: MutationType!
  node: Foo
  updatedFields: [String!]
  previousValues: FooPreviousValues
}

input FooSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FooWhereInput
  AND: [FooSubscriptionWhereInput!]
  OR: [FooSubscriptionWhereInput!]
  NOT: [FooSubscriptionWhereInput!]
}

input FooUpdateInput {
  foo: String
}

input FooWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  foo: String
  foo_not: String
  foo_in: [String!]
  foo_not_in: [String!]
  foo_lt: String
  foo_lte: String
  foo_gt: String
  foo_gte: String
  foo_contains: String
  foo_not_contains: String
  foo_starts_with: String
  foo_not_starts_with: String
  foo_ends_with: String
  foo_not_ends_with: String
  AND: [FooWhereInput!]
  OR: [FooWhereInput!]
  NOT: [FooWhereInput!]
}

input FooWhereUniqueInput {
  id: ID
}

type GuestRequirements {
  id: ID!
  govIssuedId: Boolean!
  recommendationsFromOtherHosts: Boolean!
  guestTripInformation: Boolean!
  place: Place!
}

type GuestRequirementsConnection {
  pageInfo: PageInfo!
  edges: [GuestRequirementsEdge]!
  aggregate: AggregateGuestRequirements!
}

input GuestRequirementsCreateInput {
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
  place: PlaceCreateOneWithoutGuestRequirementsInput!
}

input GuestRequirementsCreateOneWithoutPlaceInput {
  create: GuestRequirementsCreateWithoutPlaceInput
  connect: GuestRequirementsWhereUniqueInput
}

input GuestRequirementsCreateWithoutPlaceInput {
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
}

type GuestRequirementsEdge {
  node: GuestRequirements!
  cursor: String!
}

enum GuestRequirementsOrderByInput {
  id_ASC
  id_DESC
  govIssuedId_ASC
  govIssuedId_DESC
  recommendationsFromOtherHosts_ASC
  recommendationsFromOtherHosts_DESC
  guestTripInformation_ASC
  guestTripInformation_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GuestRequirementsPreviousValues {
  id: ID!
  govIssuedId: Boolean!
  recommendationsFromOtherHosts: Boolean!
  guestTripInformation: Boolean!
}

type GuestRequirementsSubscriptionPayload {
  mutation: MutationType!
  node: GuestRequirements
  updatedFields: [String!]
  previousValues: GuestRequirementsPreviousValues
}

input GuestRequirementsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GuestRequirementsWhereInput
  AND: [GuestRequirementsSubscriptionWhereInput!]
  OR: [GuestRequirementsSubscriptionWhereInput!]
  NOT: [GuestRequirementsSubscriptionWhereInput!]
}

input GuestRequirementsUpdateInput {
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
  place: PlaceUpdateOneWithoutGuestRequirementsInput
}

input GuestRequirementsUpdateOneWithoutPlaceInput {
  create: GuestRequirementsCreateWithoutPlaceInput
  update: GuestRequirementsUpdateWithoutPlaceDataInput
  upsert: GuestRequirementsUpsertWithoutPlaceInput
  delete: Boolean
  disconnect: Boolean
  connect: GuestRequirementsWhereUniqueInput
}

input GuestRequirementsUpdateWithoutPlaceDataInput {
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
}

input GuestRequirementsUpsertWithoutPlaceInput {
  update: GuestRequirementsUpdateWithoutPlaceDataInput!
  create: GuestRequirementsCreateWithoutPlaceInput!
}

input GuestRequirementsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  govIssuedId: Boolean
  govIssuedId_not: Boolean
  recommendationsFromOtherHosts: Boolean
  recommendationsFromOtherHosts_not: Boolean
  guestTripInformation: Boolean
  guestTripInformation_not: Boolean
  place: PlaceWhereInput
  AND: [GuestRequirementsWhereInput!]
  OR: [GuestRequirementsWhereInput!]
  NOT: [GuestRequirementsWhereInput!]
}

input GuestRequirementsWhereUniqueInput {
  id: ID
}

type HouseRules {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  suitableForChildren: Boolean
  suitableForInfants: Boolean
  petsAllowed: Boolean
  smokingAllowed: Boolean
  partiesAndEventsAllowed: Boolean
  additionalRules: String
}

type HouseRulesConnection {
  pageInfo: PageInfo!
  edges: [HouseRulesEdge]!
  aggregate: AggregateHouseRules!
}

input HouseRulesCreateInput {
  suitableForChildren: Boolean
  suitableForInfants: Boolean
  petsAllowed: Boolean
  smokingAllowed: Boolean
  partiesAndEventsAllowed: Boolean
  additionalRules: String
}

input HouseRulesCreateOneInput {
  create: HouseRulesCreateInput
  connect: HouseRulesWhereUniqueInput
}

type HouseRulesEdge {
  node: HouseRules!
  cursor: String!
}

enum HouseRulesOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  suitableForChildren_ASC
  suitableForChildren_DESC
  suitableForInfants_ASC
  suitableForInfants_DESC
  petsAllowed_ASC
  petsAllowed_DESC
  smokingAllowed_ASC
  smokingAllowed_DESC
  partiesAndEventsAllowed_ASC
  partiesAndEventsAllowed_DESC
  additionalRules_ASC
  additionalRules_DESC
}

type HouseRulesPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  suitableForChildren: Boolean
  suitableForInfants: Boolean
  petsAllowed: Boolean
  smokingAllowed: Boolean
  partiesAndEventsAllowed: Boolean
  additionalRules: String
}

type HouseRulesSubscriptionPayload {
  mutation: MutationType!
  node: HouseRules
  updatedFields: [String!]
  previousValues: HouseRulesPreviousValues
}

input HouseRulesSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: HouseRulesWhereInput
  AND: [HouseRulesSubscriptionWhereInput!]
  OR: [HouseRulesSubscriptionWhereInput!]
  NOT: [HouseRulesSubscriptionWhereInput!]
}

input HouseRulesUpdateDataInput {
  suitableForChildren: Boolean
  suitableForInfants: Boolean
  petsAllowed: Boolean
  smokingAllowed: Boolean
  partiesAndEventsAllowed: Boolean
  additionalRules: String
}

input HouseRulesUpdateInput {
  suitableForChildren: Boolean
  suitableForInfants: Boolean
  petsAllowed: Boolean
  smokingAllowed: Boolean
  partiesAndEventsAllowed: Boolean
  additionalRules: String
}

input HouseRulesUpdateOneInput {
  create: HouseRulesCreateInput
  update: HouseRulesUpdateDataInput
  upsert: HouseRulesUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: HouseRulesWhereUniqueInput
}

input HouseRulesUpsertNestedInput {
  update: HouseRulesUpdateDataInput!
  create: HouseRulesCreateInput!
}

input HouseRulesWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  suitableForChildren: Boolean
  suitableForChildren_not: Boolean
  suitableForInfants: Boolean
  suitableForInfants_not: Boolean
  petsAllowed: Boolean
  petsAllowed_not: Boolean
  smokingAllowed: Boolean
  smokingAllowed_not: Boolean
  partiesAndEventsAllowed: Boolean
  partiesAndEventsAllowed_not: Boolean
  additionalRules: String
  additionalRules_not: String
  additionalRules_in: [String!]
  additionalRules_not_in: [String!]
  additionalRules_lt: String
  additionalRules_lte: String
  additionalRules_gt: String
  additionalRules_gte: String
  additionalRules_contains: String
  additionalRules_not_contains: String
  additionalRules_starts_with: String
  additionalRules_not_starts_with: String
  additionalRules_ends_with: String
  additionalRules_not_ends_with: String
  AND: [HouseRulesWhereInput!]
  OR: [HouseRulesWhereInput!]
  NOT: [HouseRulesWhereInput!]
}

input HouseRulesWhereUniqueInput {
  id: ID
}

type Location {
  id: ID!
  lat: Float!
  lng: Float!
  neighbourHood: Neighbourhood
  user: User
  place: Place
  address: String
  directions: String
  experience: Experience
  restaurant: Restaurant
}

type LocationConnection {
  pageInfo: PageInfo!
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  lat: Float!
  lng: Float!
  neighbourHood: NeighbourhoodCreateOneWithoutLocationsInput
  user: UserCreateOneWithoutLocationInput
  place: PlaceCreateOneWithoutLocationInput
  address: String
  directions: String
  experience: ExperienceCreateOneWithoutLocationInput
  restaurant: RestaurantCreateOneWithoutLocationInput
}

input LocationCreateManyWithoutNeighbourHoodInput {
  create: [LocationCreateWithoutNeighbourHoodInput!]
  connect: [LocationWhereUniqueInput!]
}

input LocationCreateOneWithoutExperienceInput {
  create: LocationCreateWithoutExperienceInput
  connect: LocationWhereUniqueInput
}

input LocationCreateOneWithoutPlaceInput {
  create: LocationCreateWithoutPlaceInput
  connect: LocationWhereUniqueInput
}

input LocationCreateOneWithoutRestaurantInput {
  create: LocationCreateWithoutRestaurantInput
  connect: LocationWhereUniqueInput
}

input LocationCreateOneWithoutUserInput {
  create: LocationCreateWithoutUserInput
  connect: LocationWhereUniqueInput
}

input LocationCreateWithoutExperienceInput {
  lat: Float!
  lng: Float!
  neighbourHood: NeighbourhoodCreateOneWithoutLocationsInput
  user: UserCreateOneWithoutLocationInput
  place: PlaceCreateOneWithoutLocationInput
  address: String
  directions: String
  restaurant: RestaurantCreateOneWithoutLocationInput
}

input LocationCreateWithoutNeighbourHoodInput {
  lat: Float!
  lng: Float!
  user: UserCreateOneWithoutLocationInput
  place: PlaceCreateOneWithoutLocationInput
  address: String
  directions: String
  experience: ExperienceCreateOneWithoutLocationInput
  restaurant: RestaurantCreateOneWithoutLocationInput
}

input LocationCreateWithoutPlaceInput {
  lat: Float!
  lng: Float!
  neighbourHood: NeighbourhoodCreateOneWithoutLocationsInput
  user: UserCreateOneWithoutLocationInput
  address: String
  directions: String
  experience: ExperienceCreateOneWithoutLocationInput
  restaurant: RestaurantCreateOneWithoutLocationInput
}

input LocationCreateWithoutRestaurantInput {
  lat: Float!
  lng: Float!
  neighbourHood: NeighbourhoodCreateOneWithoutLocationsInput
  user: UserCreateOneWithoutLocationInput
  place: PlaceCreateOneWithoutLocationInput
  address: String
  directions: String
  experience: ExperienceCreateOneWithoutLocationInput
}

input LocationCreateWithoutUserInput {
  lat: Float!
  lng: Float!
  neighbourHood: NeighbourhoodCreateOneWithoutLocationsInput
  place: PlaceCreateOneWithoutLocationInput
  address: String
  directions: String
  experience: ExperienceCreateOneWithoutLocationInput
  restaurant: RestaurantCreateOneWithoutLocationInput
}

type LocationEdge {
  node: Location!
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  lat_ASC
  lat_DESC
  lng_ASC
  lng_DESC
  address_ASC
  address_DESC
  directions_ASC
  directions_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LocationPreviousValues {
  id: ID!
  lat: Float!
  lng: Float!
  address: String
  directions: String
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
  AND: [LocationSubscriptionWhereInput!]
  OR: [LocationSubscriptionWhereInput!]
  NOT: [LocationSubscriptionWhereInput!]
}

input LocationUpdateInput {
  lat: Float
  lng: Float
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
  user: UserUpdateOneWithoutLocationInput
  place: PlaceUpdateOneWithoutLocationInput
  address: String
  directions: String
  experience: ExperienceUpdateOneWithoutLocationInput
  restaurant: RestaurantUpdateOneWithoutLocationInput
}

input LocationUpdateManyWithoutNeighbourHoodInput {
  create: [LocationCreateWithoutNeighbourHoodInput!]
  delete: [LocationWhereUniqueInput!]
  connect: [LocationWhereUniqueInput!]
  disconnect: [LocationWhereUniqueInput!]
  update: [LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput!]
  upsert: [LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput!]
}

input LocationUpdateOneWithoutExperienceInput {
  create: LocationCreateWithoutExperienceInput
  update: LocationUpdateWithoutExperienceDataInput
  upsert: LocationUpsertWithoutExperienceInput
  delete: Boolean
  connect: LocationWhereUniqueInput
}

input LocationUpdateOneWithoutPlaceInput {
  create: LocationCreateWithoutPlaceInput
  update: LocationUpdateWithoutPlaceDataInput
  upsert: LocationUpsertWithoutPlaceInput
  delete: Boolean
  connect: LocationWhereUniqueInput
}

input LocationUpdateOneWithoutRestaurantInput {
  create: LocationCreateWithoutRestaurantInput
  update: LocationUpdateWithoutRestaurantDataInput
  upsert: LocationUpsertWithoutRestaurantInput
  delete: Boolean
  connect: LocationWhereUniqueInput
}

input LocationUpdateOneWithoutUserInput {
  create: LocationCreateWithoutUserInput
  update: LocationUpdateWithoutUserDataInput
  upsert: LocationUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: LocationWhereUniqueInput
}

input LocationUpdateWithoutExperienceDataInput {
  lat: Float
  lng: Float
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
  user: UserUpdateOneWithoutLocationInput
  place: PlaceUpdateOneWithoutLocationInput
  address: String
  directions: String
  restaurant: RestaurantUpdateOneWithoutLocationInput
}

input LocationUpdateWithoutNeighbourHoodDataInput {
  lat: Float
  lng: Float
  user: UserUpdateOneWithoutLocationInput
  place: PlaceUpdateOneWithoutLocationInput
  address: String
  directions: String
  experience: ExperienceUpdateOneWithoutLocationInput
  restaurant: RestaurantUpdateOneWithoutLocationInput
}

input LocationUpdateWithoutPlaceDataInput {
  lat: Float
  lng: Float
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
  user: UserUpdateOneWithoutLocationInput
  address: String
  directions: String
  experience: ExperienceUpdateOneWithoutLocationInput
  restaurant: RestaurantUpdateOneWithoutLocationInput
}

input LocationUpdateWithoutRestaurantDataInput {
  lat: Float
  lng: Float
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
  user: UserUpdateOneWithoutLocationInput
  place: PlaceUpdateOneWithoutLocationInput
  address: String
  directions: String
  experience: ExperienceUpdateOneWithoutLocationInput
}

input LocationUpdateWithoutUserDataInput {
  lat: Float
  lng: Float
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
  place: PlaceUpdateOneWithoutLocationInput
  address: String
  directions: String
  experience: ExperienceUpdateOneWithoutLocationInput
  restaurant: RestaurantUpdateOneWithoutLocationInput
}

input LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput {
  where: LocationWhereUniqueInput!
  data: LocationUpdateWithoutNeighbourHoodDataInput!
}

input LocationUpsertWithoutExperienceInput {
  update: LocationUpdateWithoutExperienceDataInput!
  create: LocationCreateWithoutExperienceInput!
}

input LocationUpsertWithoutPlaceInput {
  update: LocationUpdateWithoutPlaceDataInput!
  create: LocationCreateWithoutPlaceInput!
}

input LocationUpsertWithoutRestaurantInput {
  update: LocationUpdateWithoutRestaurantDataInput!
  create: LocationCreateWithoutRestaurantInput!
}

input LocationUpsertWithoutUserInput {
  update: LocationUpdateWithoutUserDataInput!
  create: LocationCreateWithoutUserInput!
}

input LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput {
  where: LocationWhereUniqueInput!
  update: LocationUpdateWithoutNeighbourHoodDataInput!
  create: LocationCreateWithoutNeighbourHoodInput!
}

input LocationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  lat: Float
  lat_not: Float
  lat_in: [Float!]
  lat_not_in: [Float!]
  lat_lt: Float
  lat_lte: Float
  lat_gt: Float
  lat_gte: Float
  lng: Float
  lng_not: Float
  lng_in: [Float!]
  lng_not_in: [Float!]
  lng_lt: Float
  lng_lte: Float
  lng_gt: Float
  lng_gte: Float
  neighbourHood: NeighbourhoodWhereInput
  user: UserWhereInput
  place: PlaceWhereInput
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  directions: String
  directions_not: String
  directions_in: [String!]
  directions_not_in: [String!]
  directions_lt: String
  directions_lte: String
  directions_gt: String
  directions_gte: String
  directions_contains: String
  directions_not_contains: String
  directions_starts_with: String
  directions_not_starts_with: String
  directions_ends_with: String
  directions_not_ends_with: String
  experience: ExperienceWhereInput
  restaurant: RestaurantWhereInput
  AND: [LocationWhereInput!]
  OR: [LocationWhereInput!]
  NOT: [LocationWhereInput!]
}

input LocationWhereUniqueInput {
  id: ID
}

scalar Long

type Message {
  id: ID!
  createdAt: DateTime!
  from: User!
  to: User!
  deliveredAt: DateTime!
  readAt: DateTime!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  from: UserCreateOneWithoutSentMessagesInput!
  to: UserCreateOneWithoutReceivedMessagesInput!
  deliveredAt: DateTime!
  readAt: DateTime!
}

input MessageCreateManyWithoutFromInput {
  create: [MessageCreateWithoutFromInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutToInput {
  create: [MessageCreateWithoutToInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutFromInput {
  to: UserCreateOneWithoutReceivedMessagesInput!
  deliveredAt: DateTime!
  readAt: DateTime!
}

input MessageCreateWithoutToInput {
  from: UserCreateOneWithoutSentMessagesInput!
  deliveredAt: DateTime!
  readAt: DateTime!
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  deliveredAt_ASC
  deliveredAt_DESC
  readAt_ASC
  readAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  createdAt: DateTime!
  deliveredAt: DateTime!
  readAt: DateTime!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  from: UserUpdateOneWithoutSentMessagesInput
  to: UserUpdateOneWithoutReceivedMessagesInput
  deliveredAt: DateTime
  readAt: DateTime
}

input MessageUpdateManyWithoutFromInput {
  create: [MessageCreateWithoutFromInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutFromInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutFromInput!]
}

input MessageUpdateManyWithoutToInput {
  create: [MessageCreateWithoutToInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutToInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutToInput!]
}

input MessageUpdateWithoutFromDataInput {
  to: UserUpdateOneWithoutReceivedMessagesInput
  deliveredAt: DateTime
  readAt: DateTime
}

input MessageUpdateWithoutToDataInput {
  from: UserUpdateOneWithoutSentMessagesInput
  deliveredAt: DateTime
  readAt: DateTime
}

input MessageUpdateWithWhereUniqueWithoutFromInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutFromDataInput!
}

input MessageUpdateWithWhereUniqueWithoutToInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutToDataInput!
}

input MessageUpsertWithWhereUniqueWithoutFromInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutFromDataInput!
  create: MessageCreateWithoutFromInput!
}

input MessageUpsertWithWhereUniqueWithoutToInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutToDataInput!
  create: MessageCreateWithoutToInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  from: UserWhereInput
  to: UserWhereInput
  deliveredAt: DateTime
  deliveredAt_not: DateTime
  deliveredAt_in: [DateTime!]
  deliveredAt_not_in: [DateTime!]
  deliveredAt_lt: DateTime
  deliveredAt_lte: DateTime
  deliveredAt_gt: DateTime
  deliveredAt_gte: DateTime
  readAt: DateTime
  readAt_not: DateTime
  readAt_in: [DateTime!]
  readAt_not_in: [DateTime!]
  readAt_lt: DateTime
  readAt_lte: DateTime
  readAt_gt: DateTime
  readAt_gte: DateTime
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createFoo(data: FooCreateInput!): Foo!
  updateFoo(data: FooUpdateInput!, where: FooWhereUniqueInput!): Foo
  updateManyFoos(data: FooUpdateInput!, where: FooWhereInput): BatchPayload!
  upsertFoo(where: FooWhereUniqueInput!, create: FooCreateInput!, update: FooUpdateInput!): Foo!
  deleteFoo(where: FooWhereUniqueInput!): Foo
  deleteManyFoos(where: FooWhereInput): BatchPayload!
  createPlace(data: PlaceCreateInput!): Place!
  updatePlace(data: PlaceUpdateInput!, where: PlaceWhereUniqueInput!): Place
  updateManyPlaces(data: PlaceUpdateInput!, where: PlaceWhereInput): BatchPayload!
  upsertPlace(where: PlaceWhereUniqueInput!, create: PlaceCreateInput!, update: PlaceUpdateInput!): Place!
  deletePlace(where: PlaceWhereUniqueInput!): Place
  deleteManyPlaces(where: PlaceWhereInput): BatchPayload!
  createPricing(data: PricingCreateInput!): Pricing!
  updatePricing(data: PricingUpdateInput!, where: PricingWhereUniqueInput!): Pricing
  updateManyPricings(data: PricingUpdateInput!, where: PricingWhereInput): BatchPayload!
  upsertPricing(where: PricingWhereUniqueInput!, create: PricingCreateInput!, update: PricingUpdateInput!): Pricing!
  deletePricing(where: PricingWhereUniqueInput!): Pricing
  deleteManyPricings(where: PricingWhereInput): BatchPayload!
  createGuestRequirements(data: GuestRequirementsCreateInput!): GuestRequirements!
  updateGuestRequirements(data: GuestRequirementsUpdateInput!, where: GuestRequirementsWhereUniqueInput!): GuestRequirements
  updateManyGuestRequirementses(data: GuestRequirementsUpdateInput!, where: GuestRequirementsWhereInput): BatchPayload!
  upsertGuestRequirements(where: GuestRequirementsWhereUniqueInput!, create: GuestRequirementsCreateInput!, update: GuestRequirementsUpdateInput!): GuestRequirements!
  deleteGuestRequirements(where: GuestRequirementsWhereUniqueInput!): GuestRequirements
  deleteManyGuestRequirementses(where: GuestRequirementsWhereInput): BatchPayload!
  createPolicies(data: PoliciesCreateInput!): Policies!
  updatePolicies(data: PoliciesUpdateInput!, where: PoliciesWhereUniqueInput!): Policies
  updateManyPolicieses(data: PoliciesUpdateInput!, where: PoliciesWhereInput): BatchPayload!
  upsertPolicies(where: PoliciesWhereUniqueInput!, create: PoliciesCreateInput!, update: PoliciesUpdateInput!): Policies!
  deletePolicies(where: PoliciesWhereUniqueInput!): Policies
  deleteManyPolicieses(where: PoliciesWhereInput): BatchPayload!
  createHouseRules(data: HouseRulesCreateInput!): HouseRules!
  updateHouseRules(data: HouseRulesUpdateInput!, where: HouseRulesWhereUniqueInput!): HouseRules
  updateManyHouseRuleses(data: HouseRulesUpdateInput!, where: HouseRulesWhereInput): BatchPayload!
  upsertHouseRules(where: HouseRulesWhereUniqueInput!, create: HouseRulesCreateInput!, update: HouseRulesUpdateInput!): HouseRules!
  deleteHouseRules(where: HouseRulesWhereUniqueInput!): HouseRules
  deleteManyHouseRuleses(where: HouseRulesWhereInput): BatchPayload!
  createViews(data: ViewsCreateInput!): Views!
  updateViews(data: ViewsUpdateInput!, where: ViewsWhereUniqueInput!): Views
  updateManyViewses(data: ViewsUpdateInput!, where: ViewsWhereInput): BatchPayload!
  upsertViews(where: ViewsWhereUniqueInput!, create: ViewsCreateInput!, update: ViewsUpdateInput!): Views!
  deleteViews(where: ViewsWhereUniqueInput!): Views
  deleteManyViewses(where: ViewsWhereInput): BatchPayload!
  createLocation(data: LocationCreateInput!): Location!
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateManyLocations(data: LocationUpdateInput!, where: LocationWhereInput): BatchPayload!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  createNeighbourhood(data: NeighbourhoodCreateInput!): Neighbourhood!
  updateNeighbourhood(data: NeighbourhoodUpdateInput!, where: NeighbourhoodWhereUniqueInput!): Neighbourhood
  updateManyNeighbourhoods(data: NeighbourhoodUpdateInput!, where: NeighbourhoodWhereInput): BatchPayload!
  upsertNeighbourhood(where: NeighbourhoodWhereUniqueInput!, create: NeighbourhoodCreateInput!, update: NeighbourhoodUpdateInput!): Neighbourhood!
  deleteNeighbourhood(where: NeighbourhoodWhereUniqueInput!): Neighbourhood
  deleteManyNeighbourhoods(where: NeighbourhoodWhereInput): BatchPayload!
  createCity(data: CityCreateInput!): City!
  updateCity(data: CityUpdateInput!, where: CityWhereUniqueInput!): City
  updateManyCities(data: CityUpdateInput!, where: CityWhereInput): BatchPayload!
  upsertCity(where: CityWhereUniqueInput!, create: CityCreateInput!, update: CityUpdateInput!): City!
  deleteCity(where: CityWhereUniqueInput!): City
  deleteManyCities(where: CityWhereInput): BatchPayload!
  createPicture(data: PictureCreateInput!): Picture!
  updatePicture(data: PictureUpdateInput!, where: PictureWhereUniqueInput!): Picture
  updateManyPictures(data: PictureUpdateInput!, where: PictureWhereInput): BatchPayload!
  upsertPicture(where: PictureWhereUniqueInput!, create: PictureCreateInput!, update: PictureUpdateInput!): Picture!
  deletePicture(where: PictureWhereUniqueInput!): Picture
  deleteManyPictures(where: PictureWhereInput): BatchPayload!
  createExperience(data: ExperienceCreateInput!): Experience!
  updateExperience(data: ExperienceUpdateInput!, where: ExperienceWhereUniqueInput!): Experience
  updateManyExperiences(data: ExperienceUpdateInput!, where: ExperienceWhereInput): BatchPayload!
  upsertExperience(where: ExperienceWhereUniqueInput!, create: ExperienceCreateInput!, update: ExperienceUpdateInput!): Experience!
  deleteExperience(where: ExperienceWhereUniqueInput!): Experience
  deleteManyExperiences(where: ExperienceWhereInput): BatchPayload!
  createExperienceCategory(data: ExperienceCategoryCreateInput!): ExperienceCategory!
  updateExperienceCategory(data: ExperienceCategoryUpdateInput!, where: ExperienceCategoryWhereUniqueInput!): ExperienceCategory
  updateManyExperienceCategories(data: ExperienceCategoryUpdateInput!, where: ExperienceCategoryWhereInput): BatchPayload!
  upsertExperienceCategory(where: ExperienceCategoryWhereUniqueInput!, create: ExperienceCategoryCreateInput!, update: ExperienceCategoryUpdateInput!): ExperienceCategory!
  deleteExperienceCategory(where: ExperienceCategoryWhereUniqueInput!): ExperienceCategory
  deleteManyExperienceCategories(where: ExperienceCategoryWhereInput): BatchPayload!
  createAmenities(data: AmenitiesCreateInput!): Amenities!
  updateAmenities(data: AmenitiesUpdateInput!, where: AmenitiesWhereUniqueInput!): Amenities
  updateManyAmenitieses(data: AmenitiesUpdateInput!, where: AmenitiesWhereInput): BatchPayload!
  upsertAmenities(where: AmenitiesWhereUniqueInput!, create: AmenitiesCreateInput!, update: AmenitiesUpdateInput!): Amenities!
  deleteAmenities(where: AmenitiesWhereUniqueInput!): Amenities
  deleteManyAmenitieses(where: AmenitiesWhereInput): BatchPayload!
  createReview(data: ReviewCreateInput!): Review!
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateManyReviews(data: ReviewUpdateInput!, where: ReviewWhereInput): BatchPayload!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
  createBooking(data: BookingCreateInput!): Booking!
  updateBooking(data: BookingUpdateInput!, where: BookingWhereUniqueInput!): Booking
  updateManyBookings(data: BookingUpdateInput!, where: BookingWhereInput): BatchPayload!
  upsertBooking(where: BookingWhereUniqueInput!, create: BookingCreateInput!, update: BookingUpdateInput!): Booking!
  deleteBooking(where: BookingWhereUniqueInput!): Booking
  deleteManyBookings(where: BookingWhereInput): BatchPayload!
  createPayment(data: PaymentCreateInput!): Payment!
  updatePayment(data: PaymentUpdateInput!, where: PaymentWhereUniqueInput!): Payment
  updateManyPayments(data: PaymentUpdateInput!, where: PaymentWhereInput): BatchPayload!
  upsertPayment(where: PaymentWhereUniqueInput!, create: PaymentCreateInput!, update: PaymentUpdateInput!): Payment!
  deletePayment(where: PaymentWhereUniqueInput!): Payment
  deleteManyPayments(where: PaymentWhereInput): BatchPayload!
  createPaymentAccount(data: PaymentAccountCreateInput!): PaymentAccount!
  updatePaymentAccount(data: PaymentAccountUpdateInput!, where: PaymentAccountWhereUniqueInput!): PaymentAccount
  updateManyPaymentAccounts(data: PaymentAccountUpdateInput!, where: PaymentAccountWhereInput): BatchPayload!
  upsertPaymentAccount(where: PaymentAccountWhereUniqueInput!, create: PaymentAccountCreateInput!, update: PaymentAccountUpdateInput!): PaymentAccount!
  deletePaymentAccount(where: PaymentAccountWhereUniqueInput!): PaymentAccount
  deleteManyPaymentAccounts(where: PaymentAccountWhereInput): BatchPayload!
  createPaypalInformation(data: PaypalInformationCreateInput!): PaypalInformation!
  updatePaypalInformation(data: PaypalInformationUpdateInput!, where: PaypalInformationWhereUniqueInput!): PaypalInformation
  updateManyPaypalInformations(data: PaypalInformationUpdateInput!, where: PaypalInformationWhereInput): BatchPayload!
  upsertPaypalInformation(where: PaypalInformationWhereUniqueInput!, create: PaypalInformationCreateInput!, update: PaypalInformationUpdateInput!): PaypalInformation!
  deletePaypalInformation(where: PaypalInformationWhereUniqueInput!): PaypalInformation
  deleteManyPaypalInformations(where: PaypalInformationWhereInput): BatchPayload!
  createCreditCardInformation(data: CreditCardInformationCreateInput!): CreditCardInformation!
  updateCreditCardInformation(data: CreditCardInformationUpdateInput!, where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  updateManyCreditCardInformations(data: CreditCardInformationUpdateInput!, where: CreditCardInformationWhereInput): BatchPayload!
  upsertCreditCardInformation(where: CreditCardInformationWhereUniqueInput!, create: CreditCardInformationCreateInput!, update: CreditCardInformationUpdateInput!): CreditCardInformation!
  deleteCreditCardInformation(where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  deleteManyCreditCardInformations(where: CreditCardInformationWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createNotification(data: NotificationCreateInput!): Notification!
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateManyNotifications(data: NotificationUpdateInput!, where: NotificationWhereInput): BatchPayload!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  createRestaurant(data: RestaurantCreateInput!): Restaurant!
  updateRestaurant(data: RestaurantUpdateInput!, where: RestaurantWhereUniqueInput!): Restaurant
  updateManyRestaurants(data: RestaurantUpdateInput!, where: RestaurantWhereInput): BatchPayload!
  upsertRestaurant(where: RestaurantWhereUniqueInput!, create: RestaurantCreateInput!, update: RestaurantUpdateInput!): Restaurant!
  deleteRestaurant(where: RestaurantWhereUniqueInput!): Restaurant
  deleteManyRestaurants(where: RestaurantWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type Neighbourhood {
  id: ID!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location!]
  name: String!
  slug: String!
  homePreview: Picture
  city: City!
  featured: Boolean!
  popularity: Int!
}

type NeighbourhoodConnection {
  pageInfo: PageInfo!
  edges: [NeighbourhoodEdge]!
  aggregate: AggregateNeighbourhood!
}

input NeighbourhoodCreateInput {
  locations: LocationCreateManyWithoutNeighbourHoodInput
  name: String!
  slug: String!
  homePreview: PictureCreateOneInput
  city: CityCreateOneWithoutNeighbourhoodsInput!
  featured: Boolean!
  popularity: Int!
}

input NeighbourhoodCreateManyWithoutCityInput {
  create: [NeighbourhoodCreateWithoutCityInput!]
  connect: [NeighbourhoodWhereUniqueInput!]
}

input NeighbourhoodCreateOneWithoutLocationsInput {
  create: NeighbourhoodCreateWithoutLocationsInput
  connect: NeighbourhoodWhereUniqueInput
}

input NeighbourhoodCreateWithoutCityInput {
  locations: LocationCreateManyWithoutNeighbourHoodInput
  name: String!
  slug: String!
  homePreview: PictureCreateOneInput
  featured: Boolean!
  popularity: Int!
}

input NeighbourhoodCreateWithoutLocationsInput {
  name: String!
  slug: String!
  homePreview: PictureCreateOneInput
  city: CityCreateOneWithoutNeighbourhoodsInput!
  featured: Boolean!
  popularity: Int!
}

type NeighbourhoodEdge {
  node: Neighbourhood!
  cursor: String!
}

enum NeighbourhoodOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  featured_ASC
  featured_DESC
  popularity_ASC
  popularity_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NeighbourhoodPreviousValues {
  id: ID!
  name: String!
  slug: String!
  featured: Boolean!
  popularity: Int!
}

type NeighbourhoodSubscriptionPayload {
  mutation: MutationType!
  node: Neighbourhood
  updatedFields: [String!]
  previousValues: NeighbourhoodPreviousValues
}

input NeighbourhoodSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NeighbourhoodWhereInput
  AND: [NeighbourhoodSubscriptionWhereInput!]
  OR: [NeighbourhoodSubscriptionWhereInput!]
  NOT: [NeighbourhoodSubscriptionWhereInput!]
}

input NeighbourhoodUpdateInput {
  locations: LocationUpdateManyWithoutNeighbourHoodInput
  name: String
  slug: String
  homePreview: PictureUpdateOneInput
  city: CityUpdateOneWithoutNeighbourhoodsInput
  featured: Boolean
  popularity: Int
}

input NeighbourhoodUpdateManyWithoutCityInput {
  create: [NeighbourhoodCreateWithoutCityInput!]
  delete: [NeighbourhoodWhereUniqueInput!]
  connect: [NeighbourhoodWhereUniqueInput!]
  disconnect: [NeighbourhoodWhereUniqueInput!]
  update: [NeighbourhoodUpdateWithWhereUniqueWithoutCityInput!]
  upsert: [NeighbourhoodUpsertWithWhereUniqueWithoutCityInput!]
}

input NeighbourhoodUpdateOneWithoutLocationsInput {
  create: NeighbourhoodCreateWithoutLocationsInput
  update: NeighbourhoodUpdateWithoutLocationsDataInput
  upsert: NeighbourhoodUpsertWithoutLocationsInput
  delete: Boolean
  disconnect: Boolean
  connect: NeighbourhoodWhereUniqueInput
}

input NeighbourhoodUpdateWithoutCityDataInput {
  locations: LocationUpdateManyWithoutNeighbourHoodInput
  name: String
  slug: String
  homePreview: PictureUpdateOneInput
  featured: Boolean
  popularity: Int
}

input NeighbourhoodUpdateWithoutLocationsDataInput {
  name: String
  slug: String
  homePreview: PictureUpdateOneInput
  city: CityUpdateOneWithoutNeighbourhoodsInput
  featured: Boolean
  popularity: Int
}

input NeighbourhoodUpdateWithWhereUniqueWithoutCityInput {
  where: NeighbourhoodWhereUniqueInput!
  data: NeighbourhoodUpdateWithoutCityDataInput!
}

input NeighbourhoodUpsertWithoutLocationsInput {
  update: NeighbourhoodUpdateWithoutLocationsDataInput!
  create: NeighbourhoodCreateWithoutLocationsInput!
}

input NeighbourhoodUpsertWithWhereUniqueWithoutCityInput {
  where: NeighbourhoodWhereUniqueInput!
  update: NeighbourhoodUpdateWithoutCityDataInput!
  create: NeighbourhoodCreateWithoutCityInput!
}

input NeighbourhoodWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  locations_every: LocationWhereInput
  locations_some: LocationWhereInput
  locations_none: LocationWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  homePreview: PictureWhereInput
  city: CityWhereInput
  featured: Boolean
  featured_not: Boolean
  popularity: Int
  popularity_not: Int
  popularity_in: [Int!]
  popularity_not_in: [Int!]
  popularity_lt: Int
  popularity_lte: Int
  popularity_gt: Int
  popularity_gte: Int
  AND: [NeighbourhoodWhereInput!]
  OR: [NeighbourhoodWhereInput!]
  NOT: [NeighbourhoodWhereInput!]
}

input NeighbourhoodWhereUniqueInput {
  id: ID
}

interface Node {
  id: ID!
}

type Notification {
  id: ID!
  createdAt: DateTime!
  type: NOTIFICATION_TYPE
  user: User!
  link: String!
  readDate: DateTime!
}

enum NOTIFICATION_TYPE {
  OFFER
  INSTANT_BOOK
  RESPONSIVENESS
  NEW_AMENITIES
  HOUSE_RULES
}

type NotificationConnection {
  pageInfo: PageInfo!
  edges: [NotificationEdge]!
  aggregate: AggregateNotification!
}

input NotificationCreateInput {
  type: NOTIFICATION_TYPE
  user: UserCreateOneWithoutNotificationsInput!
  link: String!
  readDate: DateTime!
}

input NotificationCreateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
}

input NotificationCreateWithoutUserInput {
  type: NOTIFICATION_TYPE
  link: String!
  readDate: DateTime!
}

type NotificationEdge {
  node: Notification!
  cursor: String!
}

enum NotificationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  type_ASC
  type_DESC
  link_ASC
  link_DESC
  readDate_ASC
  readDate_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NotificationPreviousValues {
  id: ID!
  createdAt: DateTime!
  type: NOTIFICATION_TYPE
  link: String!
  readDate: DateTime!
}

type NotificationSubscriptionPayload {
  mutation: MutationType!
  node: Notification
  updatedFields: [String!]
  previousValues: NotificationPreviousValues
}

input NotificationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NotificationWhereInput
  AND: [NotificationSubscriptionWhereInput!]
  OR: [NotificationSubscriptionWhereInput!]
  NOT: [NotificationSubscriptionWhereInput!]
}

input NotificationUpdateInput {
  type: NOTIFICATION_TYPE
  user: UserUpdateOneWithoutNotificationsInput
  link: String
  readDate: DateTime
}

input NotificationUpdateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  delete: [NotificationWhereUniqueInput!]
  connect: [NotificationWhereUniqueInput!]
  disconnect: [NotificationWhereUniqueInput!]
  update: [NotificationUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [NotificationUpsertWithWhereUniqueWithoutUserInput!]
}

input NotificationUpdateWithoutUserDataInput {
  type: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
}

input NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  data: NotificationUpdateWithoutUserDataInput!
}

input NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  update: NotificationUpdateWithoutUserDataInput!
  create: NotificationCreateWithoutUserInput!
}

input NotificationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  type: NOTIFICATION_TYPE
  type_not: NOTIFICATION_TYPE
  type_in: [NOTIFICATION_TYPE!]
  type_not_in: [NOTIFICATION_TYPE!]
  user: UserWhereInput
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  readDate: DateTime
  readDate_not: DateTime
  readDate_in: [DateTime!]
  readDate_not_in: [DateTime!]
  readDate_lt: DateTime
  readDate_lte: DateTime
  readDate_gt: DateTime
  readDate_gte: DateTime
  AND: [NotificationWhereInput!]
  OR: [NotificationWhereInput!]
  NOT: [NotificationWhereInput!]
}

input NotificationWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Payment {
  id: ID!
  createdAt: DateTime!
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
  booking: Booking!
  paymentMethod: PaymentAccount!
}

enum PAYMENT_PROVIDER {
  PAYPAL
  CREDIT_CARD
}

type PaymentAccount {
  id: ID!
  createdAt: DateTime!
  type: PAYMENT_PROVIDER
  user: User!
  payments(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Payment!]
  paypal: PaypalInformation
  creditcard: CreditCardInformation
}

type PaymentAccountConnection {
  pageInfo: PageInfo!
  edges: [PaymentAccountEdge]!
  aggregate: AggregatePaymentAccount!
}

input PaymentAccountCreateInput {
  type: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput!
  payments: PaymentCreateManyWithoutPaymentMethodInput
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateManyWithoutUserInput {
  create: [PaymentAccountCreateWithoutUserInput!]
  connect: [PaymentAccountWhereUniqueInput!]
}

input PaymentAccountCreateOneWithoutCreditcardInput {
  create: PaymentAccountCreateWithoutCreditcardInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateOneWithoutPaymentsInput {
  create: PaymentAccountCreateWithoutPaymentsInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateOneWithoutPaypalInput {
  create: PaymentAccountCreateWithoutPaypalInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateWithoutCreditcardInput {
  type: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput!
  payments: PaymentCreateManyWithoutPaymentMethodInput
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateWithoutPaymentsInput {
  type: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput!
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateWithoutPaypalInput {
  type: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput!
  payments: PaymentCreateManyWithoutPaymentMethodInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateWithoutUserInput {
  type: PAYMENT_PROVIDER
  payments: PaymentCreateManyWithoutPaymentMethodInput
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

type PaymentAccountEdge {
  node: PaymentAccount!
  cursor: String!
}

enum PaymentAccountOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PaymentAccountPreviousValues {
  id: ID!
  createdAt: DateTime!
  type: PAYMENT_PROVIDER
}

type PaymentAccountSubscriptionPayload {
  mutation: MutationType!
  node: PaymentAccount
  updatedFields: [String!]
  previousValues: PaymentAccountPreviousValues
}

input PaymentAccountSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PaymentAccountWhereInput
  AND: [PaymentAccountSubscriptionWhereInput!]
  OR: [PaymentAccountSubscriptionWhereInput!]
  NOT: [PaymentAccountSubscriptionWhereInput!]
}

input PaymentAccountUpdateInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneWithoutPaymentAccountInput
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateManyWithoutUserInput {
  create: [PaymentAccountCreateWithoutUserInput!]
  delete: [PaymentAccountWhereUniqueInput!]
  connect: [PaymentAccountWhereUniqueInput!]
  disconnect: [PaymentAccountWhereUniqueInput!]
  update: [PaymentAccountUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [PaymentAccountUpsertWithWhereUniqueWithoutUserInput!]
}

input PaymentAccountUpdateOneWithoutCreditcardInput {
  create: PaymentAccountCreateWithoutCreditcardInput
  update: PaymentAccountUpdateWithoutCreditcardDataInput
  upsert: PaymentAccountUpsertWithoutCreditcardInput
  delete: Boolean
  disconnect: Boolean
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountUpdateOneWithoutPaymentsInput {
  create: PaymentAccountCreateWithoutPaymentsInput
  update: PaymentAccountUpdateWithoutPaymentsDataInput
  upsert: PaymentAccountUpsertWithoutPaymentsInput
  delete: Boolean
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountUpdateOneWithoutPaypalInput {
  create: PaymentAccountCreateWithoutPaypalInput
  update: PaymentAccountUpdateWithoutPaypalDataInput
  upsert: PaymentAccountUpsertWithoutPaypalInput
  delete: Boolean
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountUpdateWithoutCreditcardDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneWithoutPaymentAccountInput
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateWithoutPaymentsDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneWithoutPaymentAccountInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateWithoutPaypalDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneWithoutPaymentAccountInput
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateWithoutUserDataInput {
  type: PAYMENT_PROVIDER
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateWithWhereUniqueWithoutUserInput {
  where: PaymentAccountWhereUniqueInput!
  data: PaymentAccountUpdateWithoutUserDataInput!
}

input PaymentAccountUpsertWithoutCreditcardInput {
  update: PaymentAccountUpdateWithoutCreditcardDataInput!
  create: PaymentAccountCreateWithoutCreditcardInput!
}

input PaymentAccountUpsertWithoutPaymentsInput {
  update: PaymentAccountUpdateWithoutPaymentsDataInput!
  create: PaymentAccountCreateWithoutPaymentsInput!
}

input PaymentAccountUpsertWithoutPaypalInput {
  update: PaymentAccountUpdateWithoutPaypalDataInput!
  create: PaymentAccountCreateWithoutPaypalInput!
}

input PaymentAccountUpsertWithWhereUniqueWithoutUserInput {
  where: PaymentAccountWhereUniqueInput!
  update: PaymentAccountUpdateWithoutUserDataInput!
  create: PaymentAccountCreateWithoutUserInput!
}

input PaymentAccountWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  type: PAYMENT_PROVIDER
  type_not: PAYMENT_PROVIDER
  type_in: [PAYMENT_PROVIDER!]
  type_not_in: [PAYMENT_PROVIDER!]
  user: UserWhereInput
  payments_every: PaymentWhereInput
  payments_some: PaymentWhereInput
  payments_none: PaymentWhereInput
  paypal: PaypalInformationWhereInput
  creditcard: CreditCardInformationWhereInput
  AND: [PaymentAccountWhereInput!]
  OR: [PaymentAccountWhereInput!]
  NOT: [PaymentAccountWhereInput!]
}

input PaymentAccountWhereUniqueInput {
  id: ID
}

type PaymentConnection {
  pageInfo: PageInfo!
  edges: [PaymentEdge]!
  aggregate: AggregatePayment!
}

input PaymentCreateInput {
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
  booking: BookingCreateOneWithoutPaymentInput!
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput!
}

input PaymentCreateManyWithoutPaymentMethodInput {
  create: [PaymentCreateWithoutPaymentMethodInput!]
  connect: [PaymentWhereUniqueInput!]
}

input PaymentCreateOneWithoutBookingInput {
  create: PaymentCreateWithoutBookingInput
  connect: PaymentWhereUniqueInput
}

input PaymentCreateWithoutBookingInput {
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput!
}

input PaymentCreateWithoutPaymentMethodInput {
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
  booking: BookingCreateOneWithoutPaymentInput!
}

type PaymentEdge {
  node: Payment!
  cursor: String!
}

enum PaymentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  serviceFee_ASC
  serviceFee_DESC
  placePrice_ASC
  placePrice_DESC
  totalPrice_ASC
  totalPrice_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PaymentPreviousValues {
  id: ID!
  createdAt: DateTime!
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
}

type PaymentSubscriptionPayload {
  mutation: MutationType!
  node: Payment
  updatedFields: [String!]
  previousValues: PaymentPreviousValues
}

input PaymentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PaymentWhereInput
  AND: [PaymentSubscriptionWhereInput!]
  OR: [PaymentSubscriptionWhereInput!]
  NOT: [PaymentSubscriptionWhereInput!]
}

input PaymentUpdateInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  booking: BookingUpdateOneWithoutPaymentInput
  paymentMethod: PaymentAccountUpdateOneWithoutPaymentsInput
}

input PaymentUpdateManyWithoutPaymentMethodInput {
  create: [PaymentCreateWithoutPaymentMethodInput!]
  delete: [PaymentWhereUniqueInput!]
  connect: [PaymentWhereUniqueInput!]
  disconnect: [PaymentWhereUniqueInput!]
  update: [PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput!]
  upsert: [PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput!]
}

input PaymentUpdateOneWithoutBookingInput {
  create: PaymentCreateWithoutBookingInput
  update: PaymentUpdateWithoutBookingDataInput
  upsert: PaymentUpsertWithoutBookingInput
  delete: Boolean
  disconnect: Boolean
  connect: PaymentWhereUniqueInput
}

input PaymentUpdateWithoutBookingDataInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  paymentMethod: PaymentAccountUpdateOneWithoutPaymentsInput
}

input PaymentUpdateWithoutPaymentMethodDataInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  booking: BookingUpdateOneWithoutPaymentInput
}

input PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentWhereUniqueInput!
  data: PaymentUpdateWithoutPaymentMethodDataInput!
}

input PaymentUpsertWithoutBookingInput {
  update: PaymentUpdateWithoutBookingDataInput!
  create: PaymentCreateWithoutBookingInput!
}

input PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentWhereUniqueInput!
  update: PaymentUpdateWithoutPaymentMethodDataInput!
  create: PaymentCreateWithoutPaymentMethodInput!
}

input PaymentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  serviceFee: Float
  serviceFee_not: Float
  serviceFee_in: [Float!]
  serviceFee_not_in: [Float!]
  serviceFee_lt: Float
  serviceFee_lte: Float
  serviceFee_gt: Float
  serviceFee_gte: Float
  placePrice: Float
  placePrice_not: Float
  placePrice_in: [Float!]
  placePrice_not_in: [Float!]
  placePrice_lt: Float
  placePrice_lte: Float
  placePrice_gt: Float
  placePrice_gte: Float
  totalPrice: Float
  totalPrice_not: Float
  totalPrice_in: [Float!]
  totalPrice_not_in: [Float!]
  totalPrice_lt: Float
  totalPrice_lte: Float
  totalPrice_gt: Float
  totalPrice_gte: Float
  booking: BookingWhereInput
  paymentMethod: PaymentAccountWhereInput
  AND: [PaymentWhereInput!]
  OR: [PaymentWhereInput!]
  NOT: [PaymentWhereInput!]
}

input PaymentWhereUniqueInput {
  id: ID
}

type PaypalInformation {
  id: ID!
  createdAt: DateTime!
  email: String!
  paymentAccount: PaymentAccount!
}

type PaypalInformationConnection {
  pageInfo: PageInfo!
  edges: [PaypalInformationEdge]!
  aggregate: AggregatePaypalInformation!
}

input PaypalInformationCreateInput {
  email: String!
  paymentAccount: PaymentAccountCreateOneWithoutPaypalInput!
}

input PaypalInformationCreateOneWithoutPaymentAccountInput {
  create: PaypalInformationCreateWithoutPaymentAccountInput
  connect: PaypalInformationWhereUniqueInput
}

input PaypalInformationCreateWithoutPaymentAccountInput {
  email: String!
}

type PaypalInformationEdge {
  node: PaypalInformation!
  cursor: String!
}

enum PaypalInformationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  email_ASC
  email_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PaypalInformationPreviousValues {
  id: ID!
  createdAt: DateTime!
  email: String!
}

type PaypalInformationSubscriptionPayload {
  mutation: MutationType!
  node: PaypalInformation
  updatedFields: [String!]
  previousValues: PaypalInformationPreviousValues
}

input PaypalInformationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PaypalInformationWhereInput
  AND: [PaypalInformationSubscriptionWhereInput!]
  OR: [PaypalInformationSubscriptionWhereInput!]
  NOT: [PaypalInformationSubscriptionWhereInput!]
}

input PaypalInformationUpdateInput {
  email: String
  paymentAccount: PaymentAccountUpdateOneWithoutPaypalInput
}

input PaypalInformationUpdateOneWithoutPaymentAccountInput {
  create: PaypalInformationCreateWithoutPaymentAccountInput
  update: PaypalInformationUpdateWithoutPaymentAccountDataInput
  upsert: PaypalInformationUpsertWithoutPaymentAccountInput
  delete: Boolean
  disconnect: Boolean
  connect: PaypalInformationWhereUniqueInput
}

input PaypalInformationUpdateWithoutPaymentAccountDataInput {
  email: String
}

input PaypalInformationUpsertWithoutPaymentAccountInput {
  update: PaypalInformationUpdateWithoutPaymentAccountDataInput!
  create: PaypalInformationCreateWithoutPaymentAccountInput!
}

input PaypalInformationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  paymentAccount: PaymentAccountWhereInput
  AND: [PaypalInformationWhereInput!]
  OR: [PaypalInformationWhereInput!]
  NOT: [PaypalInformationWhereInput!]
}

input PaypalInformationWhereUniqueInput {
  id: ID
}

type Picture {
  id: ID!
  url: String!
}

type PictureConnection {
  pageInfo: PageInfo!
  edges: [PictureEdge]!
  aggregate: AggregatePicture!
}

input PictureCreateInput {
  url: String!
}

input PictureCreateManyInput {
  create: [PictureCreateInput!]
  connect: [PictureWhereUniqueInput!]
}

input PictureCreateOneInput {
  create: PictureCreateInput
  connect: PictureWhereUniqueInput
}

type PictureEdge {
  node: Picture!
  cursor: String!
}

enum PictureOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PicturePreviousValues {
  id: ID!
  url: String!
}

type PictureSubscriptionPayload {
  mutation: MutationType!
  node: Picture
  updatedFields: [String!]
  previousValues: PicturePreviousValues
}

input PictureSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PictureWhereInput
  AND: [PictureSubscriptionWhereInput!]
  OR: [PictureSubscriptionWhereInput!]
  NOT: [PictureSubscriptionWhereInput!]
}

input PictureUpdateDataInput {
  url: String
}

input PictureUpdateInput {
  url: String
}

input PictureUpdateManyInput {
  create: [PictureCreateInput!]
  delete: [PictureWhereUniqueInput!]
  connect: [PictureWhereUniqueInput!]
  disconnect: [PictureWhereUniqueInput!]
  update: [PictureUpdateWithWhereUniqueNestedInput!]
  upsert: [PictureUpsertWithWhereUniqueNestedInput!]
}

input PictureUpdateOneInput {
  create: PictureCreateInput
  update: PictureUpdateDataInput
  upsert: PictureUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: PictureWhereUniqueInput
}

input PictureUpdateWithWhereUniqueNestedInput {
  where: PictureWhereUniqueInput!
  data: PictureUpdateDataInput!
}

input PictureUpsertNestedInput {
  update: PictureUpdateDataInput!
  create: PictureCreateInput!
}

input PictureUpsertWithWhereUniqueNestedInput {
  where: PictureWhereUniqueInput!
  update: PictureUpdateDataInput!
  create: PictureCreateInput!
}

input PictureWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [PictureWhereInput!]
  OR: [PictureWhereInput!]
  NOT: [PictureWhereInput!]
}

input PictureWhereUniqueInput {
  id: ID
}

type Place {
  id: ID!
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  amenities: Amenities!
  host: User!
  pricing: Pricing!
  location: Location!
  views: Views!
  guestRequirements: GuestRequirements
  policies: Policies
  houseRules: HouseRules
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking!]
  pictures(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Picture!]
  popularity: Int!
}

enum PLACE_SIZES {
  ENTIRE_HOUSE
  ENTIRE_APARTMENT
  ENTIRE_EARTH_HOUSE
  ENTIRE_CABIN
  ENTIRE_VILLA
  ENTIRE_PLACE
  ENTIRE_BOAT
  PRIVATE_ROOM
}

type PlaceConnection {
  pageInfo: PageInfo!
  edges: [PlaceEdge]!
  aggregate: AggregatePlace!
}

input PlaceCreateInput {
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
  popularity: Int!
}

input PlaceCreateManyWithoutHostInput {
  create: [PlaceCreateWithoutHostInput!]
  connect: [PlaceWhereUniqueInput!]
}

input PlaceCreateOneWithoutAmenitiesInput {
  create: PlaceCreateWithoutAmenitiesInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutBookingsInput {
  create: PlaceCreateWithoutBookingsInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutGuestRequirementsInput {
  create: PlaceCreateWithoutGuestRequirementsInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutLocationInput {
  create: PlaceCreateWithoutLocationInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutPoliciesInput {
  create: PlaceCreateWithoutPoliciesInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutPricingInput {
  create: PlaceCreateWithoutPricingInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutReviewsInput {
  create: PlaceCreateWithoutReviewsInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutViewsInput {
  create: PlaceCreateWithoutViewsInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateWithoutAmenitiesInput {
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
  popularity: Int!
}

input PlaceCreateWithoutBookingsInput {
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  pictures: PictureCreateManyInput
  popularity: Int!
}

input PlaceCreateWithoutGuestRequirementsInput {
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
  popularity: Int!
}

input PlaceCreateWithoutHostInput {
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
  popularity: Int!
}

input PlaceCreateWithoutLocationInput {
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
  popularity: Int!
}

input PlaceCreateWithoutPoliciesInput {
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
  popularity: Int!
}

input PlaceCreateWithoutPricingInput {
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
  popularity: Int!
}

input PlaceCreateWithoutReviewsInput {
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
  popularity: Int!
}

input PlaceCreateWithoutViewsInput {
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
  popularity: Int!
}

type PlaceEdge {
  node: Place!
  cursor: String!
}

enum PlaceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  size_ASC
  size_DESC
  shortDescription_ASC
  shortDescription_DESC
  description_ASC
  description_DESC
  slug_ASC
  slug_DESC
  maxGuests_ASC
  maxGuests_DESC
  numBedrooms_ASC
  numBedrooms_DESC
  numBeds_ASC
  numBeds_DESC
  numBaths_ASC
  numBaths_DESC
  popularity_ASC
  popularity_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PlacePreviousValues {
  id: ID!
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
}

type PlaceSubscriptionPayload {
  mutation: MutationType!
  node: Place
  updatedFields: [String!]
  previousValues: PlacePreviousValues
}

input PlaceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlaceWhereInput
  AND: [PlaceSubscriptionWhereInput!]
  OR: [PlaceSubscriptionWhereInput!]
  NOT: [PlaceSubscriptionWhereInput!]
}

input PlaceUpdateInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  pricing: PricingUpdateOneWithoutPlaceInput
  location: LocationUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
  popularity: Int
}

input PlaceUpdateManyWithoutHostInput {
  create: [PlaceCreateWithoutHostInput!]
  delete: [PlaceWhereUniqueInput!]
  connect: [PlaceWhereUniqueInput!]
  disconnect: [PlaceWhereUniqueInput!]
  update: [PlaceUpdateWithWhereUniqueWithoutHostInput!]
  upsert: [PlaceUpsertWithWhereUniqueWithoutHostInput!]
}

input PlaceUpdateOneWithoutAmenitiesInput {
  create: PlaceCreateWithoutAmenitiesInput
  update: PlaceUpdateWithoutAmenitiesDataInput
  upsert: PlaceUpsertWithoutAmenitiesInput
  delete: Boolean
  connect: PlaceWhereUniqueInput
}

input PlaceUpdateOneWithoutBookingsInput {
  create: PlaceCreateWithoutBookingsInput
  update: PlaceUpdateWithoutBookingsDataInput
  upsert: PlaceUpsertWithoutBookingsInput
  delete: Boolean
  connect: PlaceWhereUniqueInput
}

input PlaceUpdateOneWithoutGuestRequirementsInput {
  create: PlaceCreateWithoutGuestRequirementsInput
  update: PlaceUpdateWithoutGuestRequirementsDataInput
  upsert: PlaceUpsertWithoutGuestRequirementsInput
  delete: Boolean
  connect: PlaceWhereUniqueInput
}

input PlaceUpdateOneWithoutLocationInput {
  create: PlaceCreateWithoutLocationInput
  update: PlaceUpdateWithoutLocationDataInput
  upsert: PlaceUpsertWithoutLocationInput
  delete: Boolean
  disconnect: Boolean
  connect: PlaceWhereUniqueInput
}

input PlaceUpdateOneWithoutPoliciesInput {
  create: PlaceCreateWithoutPoliciesInput
  update: PlaceUpdateWithoutPoliciesDataInput
  upsert: PlaceUpsertWithoutPoliciesInput
  delete: Boolean
  connect: PlaceWhereUniqueInput
}

input PlaceUpdateOneWithoutPricingInput {
  create: PlaceCreateWithoutPricingInput
  update: PlaceUpdateWithoutPricingDataInput
  upsert: PlaceUpsertWithoutPricingInput
  delete: Boolean
  connect: PlaceWhereUniqueInput
}

input PlaceUpdateOneWithoutReviewsInput {
  create: PlaceCreateWithoutReviewsInput
  update: PlaceUpdateWithoutReviewsDataInput
  upsert: PlaceUpsertWithoutReviewsInput
  delete: Boolean
  connect: PlaceWhereUniqueInput
}

input PlaceUpdateOneWithoutViewsInput {
  create: PlaceCreateWithoutViewsInput
  update: PlaceUpdateWithoutViewsDataInput
  upsert: PlaceUpsertWithoutViewsInput
  delete: Boolean
  connect: PlaceWhereUniqueInput
}

input PlaceUpdateWithoutAmenitiesDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  pricing: PricingUpdateOneWithoutPlaceInput
  location: LocationUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
  popularity: Int
}

input PlaceUpdateWithoutBookingsDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  pricing: PricingUpdateOneWithoutPlaceInput
  location: LocationUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  pictures: PictureUpdateManyInput
  popularity: Int
}

input PlaceUpdateWithoutGuestRequirementsDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  pricing: PricingUpdateOneWithoutPlaceInput
  location: LocationUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
  popularity: Int
}

input PlaceUpdateWithoutHostDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  pricing: PricingUpdateOneWithoutPlaceInput
  location: LocationUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
  popularity: Int
}

input PlaceUpdateWithoutLocationDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  pricing: PricingUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
  popularity: Int
}

input PlaceUpdateWithoutPoliciesDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  pricing: PricingUpdateOneWithoutPlaceInput
  location: LocationUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
  popularity: Int
}

input PlaceUpdateWithoutPricingDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  location: LocationUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
  popularity: Int
}

input PlaceUpdateWithoutReviewsDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  pricing: PricingUpdateOneWithoutPlaceInput
  location: LocationUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
  popularity: Int
}

input PlaceUpdateWithoutViewsDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  pricing: PricingUpdateOneWithoutPlaceInput
  location: LocationUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
  popularity: Int
}

input PlaceUpdateWithWhereUniqueWithoutHostInput {
  where: PlaceWhereUniqueInput!
  data: PlaceUpdateWithoutHostDataInput!
}

input PlaceUpsertWithoutAmenitiesInput {
  update: PlaceUpdateWithoutAmenitiesDataInput!
  create: PlaceCreateWithoutAmenitiesInput!
}

input PlaceUpsertWithoutBookingsInput {
  update: PlaceUpdateWithoutBookingsDataInput!
  create: PlaceCreateWithoutBookingsInput!
}

input PlaceUpsertWithoutGuestRequirementsInput {
  update: PlaceUpdateWithoutGuestRequirementsDataInput!
  create: PlaceCreateWithoutGuestRequirementsInput!
}

input PlaceUpsertWithoutLocationInput {
  update: PlaceUpdateWithoutLocationDataInput!
  create: PlaceCreateWithoutLocationInput!
}

input PlaceUpsertWithoutPoliciesInput {
  update: PlaceUpdateWithoutPoliciesDataInput!
  create: PlaceCreateWithoutPoliciesInput!
}

input PlaceUpsertWithoutPricingInput {
  update: PlaceUpdateWithoutPricingDataInput!
  create: PlaceCreateWithoutPricingInput!
}

input PlaceUpsertWithoutReviewsInput {
  update: PlaceUpdateWithoutReviewsDataInput!
  create: PlaceCreateWithoutReviewsInput!
}

input PlaceUpsertWithoutViewsInput {
  update: PlaceUpdateWithoutViewsDataInput!
  create: PlaceCreateWithoutViewsInput!
}

input PlaceUpsertWithWhereUniqueWithoutHostInput {
  where: PlaceWhereUniqueInput!
  update: PlaceUpdateWithoutHostDataInput!
  create: PlaceCreateWithoutHostInput!
}

input PlaceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  size: PLACE_SIZES
  size_not: PLACE_SIZES
  size_in: [PLACE_SIZES!]
  size_not_in: [PLACE_SIZES!]
  shortDescription: String
  shortDescription_not: String
  shortDescription_in: [String!]
  shortDescription_not_in: [String!]
  shortDescription_lt: String
  shortDescription_lte: String
  shortDescription_gt: String
  shortDescription_gte: String
  shortDescription_contains: String
  shortDescription_not_contains: String
  shortDescription_starts_with: String
  shortDescription_not_starts_with: String
  shortDescription_ends_with: String
  shortDescription_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  maxGuests: Int
  maxGuests_not: Int
  maxGuests_in: [Int!]
  maxGuests_not_in: [Int!]
  maxGuests_lt: Int
  maxGuests_lte: Int
  maxGuests_gt: Int
  maxGuests_gte: Int
  numBedrooms: Int
  numBedrooms_not: Int
  numBedrooms_in: [Int!]
  numBedrooms_not_in: [Int!]
  numBedrooms_lt: Int
  numBedrooms_lte: Int
  numBedrooms_gt: Int
  numBedrooms_gte: Int
  numBeds: Int
  numBeds_not: Int
  numBeds_in: [Int!]
  numBeds_not_in: [Int!]
  numBeds_lt: Int
  numBeds_lte: Int
  numBeds_gt: Int
  numBeds_gte: Int
  numBaths: Int
  numBaths_not: Int
  numBaths_in: [Int!]
  numBaths_not_in: [Int!]
  numBaths_lt: Int
  numBaths_lte: Int
  numBaths_gt: Int
  numBaths_gte: Int
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  amenities: AmenitiesWhereInput
  host: UserWhereInput
  pricing: PricingWhereInput
  location: LocationWhereInput
  views: ViewsWhereInput
  guestRequirements: GuestRequirementsWhereInput
  policies: PoliciesWhereInput
  houseRules: HouseRulesWhereInput
  bookings_every: BookingWhereInput
  bookings_some: BookingWhereInput
  bookings_none: BookingWhereInput
  pictures_every: PictureWhereInput
  pictures_some: PictureWhereInput
  pictures_none: PictureWhereInput
  popularity: Int
  popularity_not: Int
  popularity_in: [Int!]
  popularity_not_in: [Int!]
  popularity_lt: Int
  popularity_lte: Int
  popularity_gt: Int
  popularity_gte: Int
  AND: [PlaceWhereInput!]
  OR: [PlaceWhereInput!]
  NOT: [PlaceWhereInput!]
}

input PlaceWhereUniqueInput {
  id: ID
}

type Policies {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  checkInStartTime: Float!
  checkInEndTime: Float!
  checkoutTime: Float!
  place: Place!
}

type PoliciesConnection {
  pageInfo: PageInfo!
  edges: [PoliciesEdge]!
  aggregate: AggregatePolicies!
}

input PoliciesCreateInput {
  checkInStartTime: Float!
  checkInEndTime: Float!
  checkoutTime: Float!
  place: PlaceCreateOneWithoutPoliciesInput!
}

input PoliciesCreateOneWithoutPlaceInput {
  create: PoliciesCreateWithoutPlaceInput
  connect: PoliciesWhereUniqueInput
}

input PoliciesCreateWithoutPlaceInput {
  checkInStartTime: Float!
  checkInEndTime: Float!
  checkoutTime: Float!
}

type PoliciesEdge {
  node: Policies!
  cursor: String!
}

enum PoliciesOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  checkInStartTime_ASC
  checkInStartTime_DESC
  checkInEndTime_ASC
  checkInEndTime_DESC
  checkoutTime_ASC
  checkoutTime_DESC
}

type PoliciesPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  checkInStartTime: Float!
  checkInEndTime: Float!
  checkoutTime: Float!
}

type PoliciesSubscriptionPayload {
  mutation: MutationType!
  node: Policies
  updatedFields: [String!]
  previousValues: PoliciesPreviousValues
}

input PoliciesSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PoliciesWhereInput
  AND: [PoliciesSubscriptionWhereInput!]
  OR: [PoliciesSubscriptionWhereInput!]
  NOT: [PoliciesSubscriptionWhereInput!]
}

input PoliciesUpdateInput {
  checkInStartTime: Float
  checkInEndTime: Float
  checkoutTime: Float
  place: PlaceUpdateOneWithoutPoliciesInput
}

input PoliciesUpdateOneWithoutPlaceInput {
  create: PoliciesCreateWithoutPlaceInput
  update: PoliciesUpdateWithoutPlaceDataInput
  upsert: PoliciesUpsertWithoutPlaceInput
  delete: Boolean
  disconnect: Boolean
  connect: PoliciesWhereUniqueInput
}

input PoliciesUpdateWithoutPlaceDataInput {
  checkInStartTime: Float
  checkInEndTime: Float
  checkoutTime: Float
}

input PoliciesUpsertWithoutPlaceInput {
  update: PoliciesUpdateWithoutPlaceDataInput!
  create: PoliciesCreateWithoutPlaceInput!
}

input PoliciesWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  checkInStartTime: Float
  checkInStartTime_not: Float
  checkInStartTime_in: [Float!]
  checkInStartTime_not_in: [Float!]
  checkInStartTime_lt: Float
  checkInStartTime_lte: Float
  checkInStartTime_gt: Float
  checkInStartTime_gte: Float
  checkInEndTime: Float
  checkInEndTime_not: Float
  checkInEndTime_in: [Float!]
  checkInEndTime_not_in: [Float!]
  checkInEndTime_lt: Float
  checkInEndTime_lte: Float
  checkInEndTime_gt: Float
  checkInEndTime_gte: Float
  checkoutTime: Float
  checkoutTime_not: Float
  checkoutTime_in: [Float!]
  checkoutTime_not_in: [Float!]
  checkoutTime_lt: Float
  checkoutTime_lte: Float
  checkoutTime_gt: Float
  checkoutTime_gte: Float
  place: PlaceWhereInput
  AND: [PoliciesWhereInput!]
  OR: [PoliciesWhereInput!]
  NOT: [PoliciesWhereInput!]
}

input PoliciesWhereUniqueInput {
  id: ID
}

type Pricing {
  id: ID!
  place: Place!
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int!
  smartPricing: Boolean!
  basePrice: Int!
  averageWeekly: Int!
  averageMonthly: Int!
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
}

type PricingConnection {
  pageInfo: PageInfo!
  edges: [PricingEdge]!
  aggregate: AggregatePricing!
}

input PricingCreateInput {
  place: PlaceCreateOneWithoutPricingInput!
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int!
  smartPricing: Boolean
  basePrice: Int!
  averageWeekly: Int!
  averageMonthly: Int!
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
}

input PricingCreateOneWithoutPlaceInput {
  create: PricingCreateWithoutPlaceInput
  connect: PricingWhereUniqueInput
}

input PricingCreateWithoutPlaceInput {
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int!
  smartPricing: Boolean
  basePrice: Int!
  averageWeekly: Int!
  averageMonthly: Int!
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
}

type PricingEdge {
  node: Pricing!
  cursor: String!
}

enum PricingOrderByInput {
  id_ASC
  id_DESC
  monthlyDiscount_ASC
  monthlyDiscount_DESC
  weeklyDiscount_ASC
  weeklyDiscount_DESC
  perNight_ASC
  perNight_DESC
  smartPricing_ASC
  smartPricing_DESC
  basePrice_ASC
  basePrice_DESC
  averageWeekly_ASC
  averageWeekly_DESC
  averageMonthly_ASC
  averageMonthly_DESC
  cleaningFee_ASC
  cleaningFee_DESC
  securityDeposit_ASC
  securityDeposit_DESC
  extraGuests_ASC
  extraGuests_DESC
  weekendPricing_ASC
  weekendPricing_DESC
  currency_ASC
  currency_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PricingPreviousValues {
  id: ID!
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int!
  smartPricing: Boolean!
  basePrice: Int!
  averageWeekly: Int!
  averageMonthly: Int!
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
}

type PricingSubscriptionPayload {
  mutation: MutationType!
  node: Pricing
  updatedFields: [String!]
  previousValues: PricingPreviousValues
}

input PricingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PricingWhereInput
  AND: [PricingSubscriptionWhereInput!]
  OR: [PricingSubscriptionWhereInput!]
  NOT: [PricingSubscriptionWhereInput!]
}

input PricingUpdateInput {
  place: PlaceUpdateOneWithoutPricingInput
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int
  smartPricing: Boolean
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
}

input PricingUpdateOneWithoutPlaceInput {
  create: PricingCreateWithoutPlaceInput
  update: PricingUpdateWithoutPlaceDataInput
  upsert: PricingUpsertWithoutPlaceInput
  delete: Boolean
  connect: PricingWhereUniqueInput
}

input PricingUpdateWithoutPlaceDataInput {
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int
  smartPricing: Boolean
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
}

input PricingUpsertWithoutPlaceInput {
  update: PricingUpdateWithoutPlaceDataInput!
  create: PricingCreateWithoutPlaceInput!
}

input PricingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  place: PlaceWhereInput
  monthlyDiscount: Int
  monthlyDiscount_not: Int
  monthlyDiscount_in: [Int!]
  monthlyDiscount_not_in: [Int!]
  monthlyDiscount_lt: Int
  monthlyDiscount_lte: Int
  monthlyDiscount_gt: Int
  monthlyDiscount_gte: Int
  weeklyDiscount: Int
  weeklyDiscount_not: Int
  weeklyDiscount_in: [Int!]
  weeklyDiscount_not_in: [Int!]
  weeklyDiscount_lt: Int
  weeklyDiscount_lte: Int
  weeklyDiscount_gt: Int
  weeklyDiscount_gte: Int
  perNight: Int
  perNight_not: Int
  perNight_in: [Int!]
  perNight_not_in: [Int!]
  perNight_lt: Int
  perNight_lte: Int
  perNight_gt: Int
  perNight_gte: Int
  smartPricing: Boolean
  smartPricing_not: Boolean
  basePrice: Int
  basePrice_not: Int
  basePrice_in: [Int!]
  basePrice_not_in: [Int!]
  basePrice_lt: Int
  basePrice_lte: Int
  basePrice_gt: Int
  basePrice_gte: Int
  averageWeekly: Int
  averageWeekly_not: Int
  averageWeekly_in: [Int!]
  averageWeekly_not_in: [Int!]
  averageWeekly_lt: Int
  averageWeekly_lte: Int
  averageWeekly_gt: Int
  averageWeekly_gte: Int
  averageMonthly: Int
  averageMonthly_not: Int
  averageMonthly_in: [Int!]
  averageMonthly_not_in: [Int!]
  averageMonthly_lt: Int
  averageMonthly_lte: Int
  averageMonthly_gt: Int
  averageMonthly_gte: Int
  cleaningFee: Int
  cleaningFee_not: Int
  cleaningFee_in: [Int!]
  cleaningFee_not_in: [Int!]
  cleaningFee_lt: Int
  cleaningFee_lte: Int
  cleaningFee_gt: Int
  cleaningFee_gte: Int
  securityDeposit: Int
  securityDeposit_not: Int
  securityDeposit_in: [Int!]
  securityDeposit_not_in: [Int!]
  securityDeposit_lt: Int
  securityDeposit_lte: Int
  securityDeposit_gt: Int
  securityDeposit_gte: Int
  extraGuests: Int
  extraGuests_not: Int
  extraGuests_in: [Int!]
  extraGuests_not_in: [Int!]
  extraGuests_lt: Int
  extraGuests_lte: Int
  extraGuests_gt: Int
  extraGuests_gte: Int
  weekendPricing: Int
  weekendPricing_not: Int
  weekendPricing_in: [Int!]
  weekendPricing_not_in: [Int!]
  weekendPricing_lt: Int
  weekendPricing_lte: Int
  weekendPricing_gt: Int
  weekendPricing_gte: Int
  currency: CURRENCY
  currency_not: CURRENCY
  currency_in: [CURRENCY!]
  currency_not_in: [CURRENCY!]
  AND: [PricingWhereInput!]
  OR: [PricingWhereInput!]
  NOT: [PricingWhereInput!]
}

input PricingWhereUniqueInput {
  id: ID
}

type Query {
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  foo(where: FooWhereUniqueInput!): Foo
  foos(where: FooWhereInput, orderBy: FooOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Foo]!
  foosConnection(where: FooWhereInput, orderBy: FooOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FooConnection!
  place(where: PlaceWhereUniqueInput!): Place
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place]!
  placesConnection(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaceConnection!
  pricing(where: PricingWhereUniqueInput!): Pricing
  pricings(where: PricingWhereInput, orderBy: PricingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pricing]!
  pricingsConnection(where: PricingWhereInput, orderBy: PricingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PricingConnection!
  guestRequirements(where: GuestRequirementsWhereUniqueInput!): GuestRequirements
  guestRequirementses(where: GuestRequirementsWhereInput, orderBy: GuestRequirementsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuestRequirements]!
  guestRequirementsesConnection(where: GuestRequirementsWhereInput, orderBy: GuestRequirementsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuestRequirementsConnection!
  policies(where: PoliciesWhereUniqueInput!): Policies
  policieses(where: PoliciesWhereInput, orderBy: PoliciesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Policies]!
  policiesesConnection(where: PoliciesWhereInput, orderBy: PoliciesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PoliciesConnection!
  houseRules(where: HouseRulesWhereUniqueInput!): HouseRules
  houseRuleses(where: HouseRulesWhereInput, orderBy: HouseRulesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [HouseRules]!
  houseRulesesConnection(where: HouseRulesWhereInput, orderBy: HouseRulesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HouseRulesConnection!
  views(where: ViewsWhereUniqueInput!): Views
  viewses(where: ViewsWhereInput, orderBy: ViewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Views]!
  viewsesConnection(where: ViewsWhereInput, orderBy: ViewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ViewsConnection!
  location(where: LocationWhereUniqueInput!): Location
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  neighbourhood(where: NeighbourhoodWhereUniqueInput!): Neighbourhood
  neighbourhoods(where: NeighbourhoodWhereInput, orderBy: NeighbourhoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Neighbourhood]!
  neighbourhoodsConnection(where: NeighbourhoodWhereInput, orderBy: NeighbourhoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NeighbourhoodConnection!
  city(where: CityWhereUniqueInput!): City
  cities(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [City]!
  citiesConnection(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CityConnection!
  picture(where: PictureWhereUniqueInput!): Picture
  pictures(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Picture]!
  picturesConnection(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PictureConnection!
  experience(where: ExperienceWhereUniqueInput!): Experience
  experiences(where: ExperienceWhereInput, orderBy: ExperienceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Experience]!
  experiencesConnection(where: ExperienceWhereInput, orderBy: ExperienceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExperienceConnection!
  experienceCategory(where: ExperienceCategoryWhereUniqueInput!): ExperienceCategory
  experienceCategories(where: ExperienceCategoryWhereInput, orderBy: ExperienceCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ExperienceCategory]!
  experienceCategoriesConnection(where: ExperienceCategoryWhereInput, orderBy: ExperienceCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExperienceCategoryConnection!
  amenities(where: AmenitiesWhereUniqueInput!): Amenities
  amenitieses(where: AmenitiesWhereInput, orderBy: AmenitiesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Amenities]!
  amenitiesesConnection(where: AmenitiesWhereInput, orderBy: AmenitiesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AmenitiesConnection!
  review(where: ReviewWhereUniqueInput!): Review
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  booking(where: BookingWhereUniqueInput!): Booking
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking]!
  bookingsConnection(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookingConnection!
  payment(where: PaymentWhereUniqueInput!): Payment
  payments(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Payment]!
  paymentsConnection(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentConnection!
  paymentAccount(where: PaymentAccountWhereUniqueInput!): PaymentAccount
  paymentAccounts(where: PaymentAccountWhereInput, orderBy: PaymentAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentAccount]!
  paymentAccountsConnection(where: PaymentAccountWhereInput, orderBy: PaymentAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentAccountConnection!
  paypalInformation(where: PaypalInformationWhereUniqueInput!): PaypalInformation
  paypalInformations(where: PaypalInformationWhereInput, orderBy: PaypalInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaypalInformation]!
  paypalInformationsConnection(where: PaypalInformationWhereInput, orderBy: PaypalInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaypalInformationConnection!
  creditCardInformation(where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  creditCardInformations(where: CreditCardInformationWhereInput, orderBy: CreditCardInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CreditCardInformation]!
  creditCardInformationsConnection(where: CreditCardInformationWhereInput, orderBy: CreditCardInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CreditCardInformationConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  notification(where: NotificationWhereUniqueInput!): Notification
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  restaurant(where: RestaurantWhereUniqueInput!): Restaurant
  restaurants(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Restaurant]!
  restaurantsConnection(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RestaurantConnection!
  node(id: ID!): Node
}

type Restaurant {
  id: ID!
  createdAt: DateTime!
  title: String!
  avgPricePerPerson: Int!
  pictures(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Picture!]
  location: Location!
  isCurated: Boolean!
  slug: String!
  popularity: Int!
}

type RestaurantConnection {
  pageInfo: PageInfo!
  edges: [RestaurantEdge]!
  aggregate: AggregateRestaurant!
}

input RestaurantCreateInput {
  title: String!
  avgPricePerPerson: Int!
  pictures: PictureCreateManyInput
  location: LocationCreateOneWithoutRestaurantInput!
  isCurated: Boolean
  slug: String!
  popularity: Int!
}

input RestaurantCreateOneWithoutLocationInput {
  create: RestaurantCreateWithoutLocationInput
  connect: RestaurantWhereUniqueInput
}

input RestaurantCreateWithoutLocationInput {
  title: String!
  avgPricePerPerson: Int!
  pictures: PictureCreateManyInput
  isCurated: Boolean
  slug: String!
  popularity: Int!
}

type RestaurantEdge {
  node: Restaurant!
  cursor: String!
}

enum RestaurantOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  title_ASC
  title_DESC
  avgPricePerPerson_ASC
  avgPricePerPerson_DESC
  isCurated_ASC
  isCurated_DESC
  slug_ASC
  slug_DESC
  popularity_ASC
  popularity_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RestaurantPreviousValues {
  id: ID!
  createdAt: DateTime!
  title: String!
  avgPricePerPerson: Int!
  isCurated: Boolean!
  slug: String!
  popularity: Int!
}

type RestaurantSubscriptionPayload {
  mutation: MutationType!
  node: Restaurant
  updatedFields: [String!]
  previousValues: RestaurantPreviousValues
}

input RestaurantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RestaurantWhereInput
  AND: [RestaurantSubscriptionWhereInput!]
  OR: [RestaurantSubscriptionWhereInput!]
  NOT: [RestaurantSubscriptionWhereInput!]
}

input RestaurantUpdateInput {
  title: String
  avgPricePerPerson: Int
  pictures: PictureUpdateManyInput
  location: LocationUpdateOneWithoutRestaurantInput
  isCurated: Boolean
  slug: String
  popularity: Int
}

input RestaurantUpdateOneWithoutLocationInput {
  create: RestaurantCreateWithoutLocationInput
  update: RestaurantUpdateWithoutLocationDataInput
  upsert: RestaurantUpsertWithoutLocationInput
  delete: Boolean
  disconnect: Boolean
  connect: RestaurantWhereUniqueInput
}

input RestaurantUpdateWithoutLocationDataInput {
  title: String
  avgPricePerPerson: Int
  pictures: PictureUpdateManyInput
  isCurated: Boolean
  slug: String
  popularity: Int
}

input RestaurantUpsertWithoutLocationInput {
  update: RestaurantUpdateWithoutLocationDataInput!
  create: RestaurantCreateWithoutLocationInput!
}

input RestaurantWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  avgPricePerPerson: Int
  avgPricePerPerson_not: Int
  avgPricePerPerson_in: [Int!]
  avgPricePerPerson_not_in: [Int!]
  avgPricePerPerson_lt: Int
  avgPricePerPerson_lte: Int
  avgPricePerPerson_gt: Int
  avgPricePerPerson_gte: Int
  pictures_every: PictureWhereInput
  pictures_some: PictureWhereInput
  pictures_none: PictureWhereInput
  location: LocationWhereInput
  isCurated: Boolean
  isCurated_not: Boolean
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  popularity: Int
  popularity_not: Int
  popularity_in: [Int!]
  popularity_not_in: [Int!]
  popularity_lt: Int
  popularity_lte: Int
  popularity_gt: Int
  popularity_gte: Int
  AND: [RestaurantWhereInput!]
  OR: [RestaurantWhereInput!]
  NOT: [RestaurantWhereInput!]
}

input RestaurantWhereUniqueInput {
  id: ID
}

type Review {
  id: ID!
  createdAt: DateTime!
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  cleanliness: Int!
  communication: Int!
  place: Place!
  experience: Experience
}

type ReviewConnection {
  pageInfo: PageInfo!
  edges: [ReviewEdge]!
  aggregate: AggregateReview!
}

input ReviewCreateInput {
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  cleanliness: Int!
  communication: Int!
  place: PlaceCreateOneWithoutReviewsInput!
  experience: ExperienceCreateOneWithoutReviewsInput
}

input ReviewCreateManyWithoutExperienceInput {
  create: [ReviewCreateWithoutExperienceInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateManyWithoutPlaceInput {
  create: [ReviewCreateWithoutPlaceInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateWithoutExperienceInput {
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  cleanliness: Int!
  communication: Int!
  place: PlaceCreateOneWithoutReviewsInput!
}

input ReviewCreateWithoutPlaceInput {
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  cleanliness: Int!
  communication: Int!
  experience: ExperienceCreateOneWithoutReviewsInput
}

type ReviewEdge {
  node: Review!
  cursor: String!
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  text_ASC
  text_DESC
  stars_ASC
  stars_DESC
  accuracy_ASC
  accuracy_DESC
  location_ASC
  location_DESC
  checkIn_ASC
  checkIn_DESC
  value_ASC
  value_DESC
  cleanliness_ASC
  cleanliness_DESC
  communication_ASC
  communication_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReviewPreviousValues {
  id: ID!
  createdAt: DateTime!
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  cleanliness: Int!
  communication: Int!
}

type ReviewSubscriptionPayload {
  mutation: MutationType!
  node: Review
  updatedFields: [String!]
  previousValues: ReviewPreviousValues
}

input ReviewSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReviewWhereInput
  AND: [ReviewSubscriptionWhereInput!]
  OR: [ReviewSubscriptionWhereInput!]
  NOT: [ReviewSubscriptionWhereInput!]
}

input ReviewUpdateInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  place: PlaceUpdateOneWithoutReviewsInput
  experience: ExperienceUpdateOneWithoutReviewsInput
}

input ReviewUpdateManyWithoutExperienceInput {
  create: [ReviewCreateWithoutExperienceInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutExperienceInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutExperienceInput!]
}

input ReviewUpdateManyWithoutPlaceInput {
  create: [ReviewCreateWithoutPlaceInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutPlaceInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutPlaceInput!]
}

input ReviewUpdateWithoutExperienceDataInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  place: PlaceUpdateOneWithoutReviewsInput
}

input ReviewUpdateWithoutPlaceDataInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  experience: ExperienceUpdateOneWithoutReviewsInput
}

input ReviewUpdateWithWhereUniqueWithoutExperienceInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutExperienceDataInput!
}

input ReviewUpdateWithWhereUniqueWithoutPlaceInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutPlaceDataInput!
}

input ReviewUpsertWithWhereUniqueWithoutExperienceInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutExperienceDataInput!
  create: ReviewCreateWithoutExperienceInput!
}

input ReviewUpsertWithWhereUniqueWithoutPlaceInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutPlaceDataInput!
  create: ReviewCreateWithoutPlaceInput!
}

input ReviewWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  stars: Int
  stars_not: Int
  stars_in: [Int!]
  stars_not_in: [Int!]
  stars_lt: Int
  stars_lte: Int
  stars_gt: Int
  stars_gte: Int
  accuracy: Int
  accuracy_not: Int
  accuracy_in: [Int!]
  accuracy_not_in: [Int!]
  accuracy_lt: Int
  accuracy_lte: Int
  accuracy_gt: Int
  accuracy_gte: Int
  location: Int
  location_not: Int
  location_in: [Int!]
  location_not_in: [Int!]
  location_lt: Int
  location_lte: Int
  location_gt: Int
  location_gte: Int
  checkIn: Int
  checkIn_not: Int
  checkIn_in: [Int!]
  checkIn_not_in: [Int!]
  checkIn_lt: Int
  checkIn_lte: Int
  checkIn_gt: Int
  checkIn_gte: Int
  value: Int
  value_not: Int
  value_in: [Int!]
  value_not_in: [Int!]
  value_lt: Int
  value_lte: Int
  value_gt: Int
  value_gte: Int
  cleanliness: Int
  cleanliness_not: Int
  cleanliness_in: [Int!]
  cleanliness_not_in: [Int!]
  cleanliness_lt: Int
  cleanliness_lte: Int
  cleanliness_gt: Int
  cleanliness_gte: Int
  communication: Int
  communication_not: Int
  communication_in: [Int!]
  communication_not_in: [Int!]
  communication_lt: Int
  communication_lte: Int
  communication_gt: Int
  communication_gte: Int
  place: PlaceWhereInput
  experience: ExperienceWhereInput
  AND: [ReviewWhereInput!]
  OR: [ReviewWhereInput!]
  NOT: [ReviewWhereInput!]
}

input ReviewWhereUniqueInput {
  id: ID
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  foo(where: FooSubscriptionWhereInput): FooSubscriptionPayload
  place(where: PlaceSubscriptionWhereInput): PlaceSubscriptionPayload
  pricing(where: PricingSubscriptionWhereInput): PricingSubscriptionPayload
  guestRequirements(where: GuestRequirementsSubscriptionWhereInput): GuestRequirementsSubscriptionPayload
  policies(where: PoliciesSubscriptionWhereInput): PoliciesSubscriptionPayload
  houseRules(where: HouseRulesSubscriptionWhereInput): HouseRulesSubscriptionPayload
  views(where: ViewsSubscriptionWhereInput): ViewsSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  neighbourhood(where: NeighbourhoodSubscriptionWhereInput): NeighbourhoodSubscriptionPayload
  city(where: CitySubscriptionWhereInput): CitySubscriptionPayload
  picture(where: PictureSubscriptionWhereInput): PictureSubscriptionPayload
  experience(where: ExperienceSubscriptionWhereInput): ExperienceSubscriptionPayload
  experienceCategory(where: ExperienceCategorySubscriptionWhereInput): ExperienceCategorySubscriptionPayload
  amenities(where: AmenitiesSubscriptionWhereInput): AmenitiesSubscriptionPayload
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
  booking(where: BookingSubscriptionWhereInput): BookingSubscriptionPayload
  payment(where: PaymentSubscriptionWhereInput): PaymentSubscriptionPayload
  paymentAccount(where: PaymentAccountSubscriptionWhereInput): PaymentAccountSubscriptionPayload
  paypalInformation(where: PaypalInformationSubscriptionWhereInput): PaypalInformationSubscriptionPayload
  creditCardInformation(where: CreditCardInformationSubscriptionWhereInput): CreditCardInformationSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  restaurant(where: RestaurantSubscriptionWhereInput): RestaurantSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean!
  ownedPlaces(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place!]
  location: Location
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking!]
  paymentAccount(where: PaymentAccountWhereInput, orderBy: PaymentAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentAccount!]
  sentMessages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  receivedMessages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
  profilePicture: Picture
  hostingExperiences(where: ExperienceWhereInput, orderBy: ExperienceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Experience!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  bookings: BookingCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateOneWithoutBookingsInput {
  create: UserCreateWithoutBookingsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutHostingExperiencesInput {
  create: UserCreateWithoutHostingExperiencesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLocationInput {
  create: UserCreateWithoutLocationInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnedPlacesInput {
  create: UserCreateWithoutOwnedPlacesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPaymentAccountInput {
  create: UserCreateWithoutPaymentAccountInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutReceivedMessagesInput {
  create: UserCreateWithoutReceivedMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSentMessagesInput {
  create: UserCreateWithoutSentMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBookingsInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutHostingExperiencesInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  bookings: BookingCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
}

input UserCreateWithoutLocationInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceCreateManyWithoutHostInput
  bookings: BookingCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutNotificationsInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  bookings: BookingCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutOwnedPlacesInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  location: LocationCreateOneWithoutUserInput
  bookings: BookingCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutPaymentAccountInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  bookings: BookingCreateManyWithoutBookeeInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutReceivedMessagesInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  bookings: BookingCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutSentMessagesInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  bookings: BookingCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  phone_ASC
  phone_DESC
  responseRate_ASC
  responseRate_DESC
  responseTime_ASC
  responseTime_DESC
  isSuperHost_ASC
  isSuperHost_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateOneWithoutBookingsInput {
  create: UserCreateWithoutBookingsInput
  update: UserUpdateWithoutBookingsDataInput
  upsert: UserUpsertWithoutBookingsInput
  delete: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutHostingExperiencesInput {
  create: UserCreateWithoutHostingExperiencesInput
  update: UserUpdateWithoutHostingExperiencesDataInput
  upsert: UserUpsertWithoutHostingExperiencesInput
  delete: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutLocationInput {
  create: UserCreateWithoutLocationInput
  update: UserUpdateWithoutLocationDataInput
  upsert: UserUpsertWithoutLocationInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  update: UserUpdateWithoutNotificationsDataInput
  upsert: UserUpsertWithoutNotificationsInput
  delete: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutOwnedPlacesInput {
  create: UserCreateWithoutOwnedPlacesInput
  update: UserUpdateWithoutOwnedPlacesDataInput
  upsert: UserUpsertWithoutOwnedPlacesInput
  delete: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutPaymentAccountInput {
  create: UserCreateWithoutPaymentAccountInput
  update: UserUpdateWithoutPaymentAccountDataInput
  upsert: UserUpsertWithoutPaymentAccountInput
  delete: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutReceivedMessagesInput {
  create: UserCreateWithoutReceivedMessagesInput
  update: UserUpdateWithoutReceivedMessagesDataInput
  upsert: UserUpsertWithoutReceivedMessagesInput
  delete: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutSentMessagesInput {
  create: UserCreateWithoutSentMessagesInput
  update: UserUpdateWithoutSentMessagesDataInput
  upsert: UserUpsertWithoutSentMessagesInput
  delete: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutBookingsDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutHostingExperiencesDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
}

input UserUpdateWithoutLocationDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutNotificationsDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutOwnedPlacesDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  location: LocationUpdateOneWithoutUserInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutPaymentAccountDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  bookings: BookingUpdateManyWithoutBookeeInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutReceivedMessagesDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutSentMessagesDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpsertWithoutBookingsInput {
  update: UserUpdateWithoutBookingsDataInput!
  create: UserCreateWithoutBookingsInput!
}

input UserUpsertWithoutHostingExperiencesInput {
  update: UserUpdateWithoutHostingExperiencesDataInput!
  create: UserCreateWithoutHostingExperiencesInput!
}

input UserUpsertWithoutLocationInput {
  update: UserUpdateWithoutLocationDataInput!
  create: UserCreateWithoutLocationInput!
}

input UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput!
  create: UserCreateWithoutNotificationsInput!
}

input UserUpsertWithoutOwnedPlacesInput {
  update: UserUpdateWithoutOwnedPlacesDataInput!
  create: UserCreateWithoutOwnedPlacesInput!
}

input UserUpsertWithoutPaymentAccountInput {
  update: UserUpdateWithoutPaymentAccountDataInput!
  create: UserCreateWithoutPaymentAccountInput!
}

input UserUpsertWithoutReceivedMessagesInput {
  update: UserUpdateWithoutReceivedMessagesDataInput!
  create: UserCreateWithoutReceivedMessagesInput!
}

input UserUpsertWithoutSentMessagesInput {
  update: UserUpdateWithoutSentMessagesDataInput!
  create: UserCreateWithoutSentMessagesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  responseRate: Float
  responseRate_not: Float
  responseRate_in: [Float!]
  responseRate_not_in: [Float!]
  responseRate_lt: Float
  responseRate_lte: Float
  responseRate_gt: Float
  responseRate_gte: Float
  responseTime: Int
  responseTime_not: Int
  responseTime_in: [Int!]
  responseTime_not_in: [Int!]
  responseTime_lt: Int
  responseTime_lte: Int
  responseTime_gt: Int
  responseTime_gte: Int
  isSuperHost: Boolean
  isSuperHost_not: Boolean
  ownedPlaces_every: PlaceWhereInput
  ownedPlaces_some: PlaceWhereInput
  ownedPlaces_none: PlaceWhereInput
  location: LocationWhereInput
  bookings_every: BookingWhereInput
  bookings_some: BookingWhereInput
  bookings_none: BookingWhereInput
  paymentAccount_every: PaymentAccountWhereInput
  paymentAccount_some: PaymentAccountWhereInput
  paymentAccount_none: PaymentAccountWhereInput
  sentMessages_every: MessageWhereInput
  sentMessages_some: MessageWhereInput
  sentMessages_none: MessageWhereInput
  receivedMessages_every: MessageWhereInput
  receivedMessages_some: MessageWhereInput
  receivedMessages_none: MessageWhereInput
  notifications_every: NotificationWhereInput
  notifications_some: NotificationWhereInput
  notifications_none: NotificationWhereInput
  profilePicture: PictureWhereInput
  hostingExperiences_every: ExperienceWhereInput
  hostingExperiences_some: ExperienceWhereInput
  hostingExperiences_none: ExperienceWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Views {
  id: ID!
  lastWeek: Int!
  place: Place!
}

type ViewsConnection {
  pageInfo: PageInfo!
  edges: [ViewsEdge]!
  aggregate: AggregateViews!
}

input ViewsCreateInput {
  lastWeek: Int!
  place: PlaceCreateOneWithoutViewsInput!
}

input ViewsCreateOneWithoutPlaceInput {
  create: ViewsCreateWithoutPlaceInput
  connect: ViewsWhereUniqueInput
}

input ViewsCreateWithoutPlaceInput {
  lastWeek: Int!
}

type ViewsEdge {
  node: Views!
  cursor: String!
}

enum ViewsOrderByInput {
  id_ASC
  id_DESC
  lastWeek_ASC
  lastWeek_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ViewsPreviousValues {
  id: ID!
  lastWeek: Int!
}

type ViewsSubscriptionPayload {
  mutation: MutationType!
  node: Views
  updatedFields: [String!]
  previousValues: ViewsPreviousValues
}

input ViewsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ViewsWhereInput
  AND: [ViewsSubscriptionWhereInput!]
  OR: [ViewsSubscriptionWhereInput!]
  NOT: [ViewsSubscriptionWhereInput!]
}

input ViewsUpdateInput {
  lastWeek: Int
  place: PlaceUpdateOneWithoutViewsInput
}

input ViewsUpdateOneWithoutPlaceInput {
  create: ViewsCreateWithoutPlaceInput
  update: ViewsUpdateWithoutPlaceDataInput
  upsert: ViewsUpsertWithoutPlaceInput
  delete: Boolean
  connect: ViewsWhereUniqueInput
}

input ViewsUpdateWithoutPlaceDataInput {
  lastWeek: Int
}

input ViewsUpsertWithoutPlaceInput {
  update: ViewsUpdateWithoutPlaceDataInput!
  create: ViewsCreateWithoutPlaceInput!
}

input ViewsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  lastWeek: Int
  lastWeek_not: Int
  lastWeek_in: [Int!]
  lastWeek_not_in: [Int!]
  lastWeek_lt: Int
  lastWeek_lte: Int
  lastWeek_gt: Int
  lastWeek_gte: Int
  place: PlaceWhereInput
  AND: [ViewsWhereInput!]
  OR: [ViewsWhereInput!]
  NOT: [ViewsWhereInput!]
}

input ViewsWhereUniqueInput {
  id: ID
}
`