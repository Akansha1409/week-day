# Weekday Data Transformation

## 📌 Overview
This project transforms a dictionary of date-value pairs into a dictionary keyed by weekdays (Mon–Sun) with summed values.  
If a weekday is missing in the input, its value is calculated as the **average of the nearest previous and next available days**.

---

## 🚀 Features
- Converts `YYYY-MM-DD` date keys into weekday names (`Mon`, `Tue`, ...).
- Aggregates multiple dates falling on the same weekday.
- Automatically fills missing weekdays with the average of the closest available days.
- Fully tested with **Jest**.

---

## 📂 Example

### Input:

{
  "2020-01-01": 6,
  "2020-01-04": 12,
  "2020-01-05": 14,
  "2020-01-06": 2,
  "2020-01-07": 4
}


### Output:
{
  "Mon": 2,
  "Tue": 4,
  "Wed": 6,
  "Thu": 8,
  "Fri": 10,
  "Sat": 12,
  "Sun": 14
}
