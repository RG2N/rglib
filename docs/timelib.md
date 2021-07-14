* [Go Back](https://github.com/RG2N/rglib/blob/main/README.md)

# RGLib
## TimeLib

### Index:
[msToS](https://github.com/RG2N/rglib/blob/main/docs/timelib.md#libmstos)

[todaysDate](https://github.com/RG2N/rglib/blob/main/docs/timelib.md#libtodaysdate)

[formatDate](https://github.com/RG2N/rglib/blob/main/docs/timelib.md#libformatdate)

### Functions:
#### lib.msToS(); 
Converts milliseconds to seconds.

Example:
```
console.log(lib.msToS(5000)); // Returns 5
```
#### lib.todaysDate();
Gets raw date string.

Example:
```
console.log(lib.todaysDate()); // Returns Raw Date
```
#### lib.formatDate();
Formats raw date to date.

Example:
```
console.log(lib.formatDate(lib.todaysDate())); // Returns Date
```
