# Muscal Goggles

## About the System

This system allows users to generate reports based on data inputted into the system.

### Objects

Objects are representations of physical entities with associated data. A system administrator can define Object Templates for specific types of objects and their fields. Users can then input instances of these objects.

Object Template Examples:
```
Donor:
- Name: string
- Phone: number
- Email: string
- Income: number

Animal:
- Name: string
- Breed: string
- Birthdate: date
```

Object Instances:
```
Donor:
- Name: "John Smith"
- Phone: 4805554444
- Email: "johnsmith@email.com"
- Income: 400000

Animal:
- Name: "Fluffy"
- Breed: "Pomeranian"
- Birthdate: 10/11/2012
```

### Events

Events are representations of actions or occurences with associated data. These may or may not be linked to pre-existing Objects. A system administrator can define Event Templates for specific types of events. Users can then input instances of these events.

Event Template Examples:
```
Donation:
- Donation Date: date
- Donation Amount: number
- Donor: Donor

Vaccination:
- Vaccination Date: date
- Subject: Animal
- Cost: number
```

Event Instances:
```
Donation:
- Donation Date: 12/24/2005
- Donation Amount: 30000
- Donor: (reference to existing Donor object)
  - Name: "John Smith"
  - Phone: 4805554444
  - Email: "johnsmith@email.com"
  - Income: 400000
 
Vaccination:
- Vaccination Date: 09/01/2015
- Subject: (reference to existing Animal object)
  - Name: "Fluffy"
  - Breed: "Pomeranian"
  - Birthdate: 10/11/2012
- Cost: 250
```

### Metrics

Metrics reference specific fields of Event Templates that are used as data points. A system administrator can define relevant metrics that should be measured and used in report generation.

Example Metrics:
```
Metric:
- name: "ddate"
- template: "Donation"
- field: "Donation Date"

Metric:
- name: "damount"
- template: "Donation"
- field: "Donation Amount"
```

### Reports

Reports are a representation of the curated and organized data, displayed in graph form. Each type of report is dependant on one or more metrics. A system administrator can define Report Templates to specify the types of reports that can be generated. The end user can then set filters on the metrics to show only the relevant data for that report.

Example Report Template:
```
Report Template:
- name: "Donations per day"
- chart: bar
- metrics: ["ddate", "damount"]
```
This template will graph a bar chart with donation date on the x-axis, and donation amount on the y-axis. The end user can then filter out specific dates (ex. only donations in the past 6-months) and specific amounts (ex. don't show amounts lower than $100) to generate a relevant report.


## Setup and Installation

Create a copy of `.env` file in the `config/` directory and place in `root` directory

### Dependencies

At the root:

```
npm i
```

At the client:

```
cd clientSSR
npm i
```

At the test(optional):

```
cd test
npm i
```

### Running the Application

To run the client-side application from the root directory, use the following command:

```
npm run clientSSR
```

To run both the client-side application from the root directory in development mode, use the following command:

```
npm run devSSR
```

To run production, use the following command for linux-based system:

```
npm run clientSSRBuild
npm run prodSSR
```

To run production, user the following command for windows:

```
npm run clientSSRBuild
npm run prodSSRWindows
```
