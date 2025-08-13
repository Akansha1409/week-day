function transformData(inputMap) {
    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const result = {};
    const original = {};

    // Step 1: Initialize all weekdays as null
    weekDays.forEach(day => {
        result[day] = null;
        original[day] = null;
    });

    // Step 2: Aggregate values by weekday
    for (const dateStr in inputMap) {
        const dateObj = new Date(dateStr);
        if (isNaN(dateObj)) throw new Error(`Invalid date: ${dateStr}`);

        const idx = (dateObj.getDay() + 6) % 7;
        const dayName = weekDays[idx];

        result[dayName] = (result[dayName] ?? 0) + inputMap[dateStr];
        original[dayName] = result[dayName]; // track original before filling
    }

    // Step 3: Fill missing days from original snapshot
    for (let i = 0; i < weekDays.length; i++) {
        if (original[weekDays[i]] === null) {
            let prev = (i - 1 + 7) % 7;
            while (original[weekDays[prev]] === null) {
                prev = (prev - 1 + 7) % 7;
            }

            let next = (i + 1) % 7;
            while (original[weekDays[next]] === null) {
                next = (next + 1) % 7;
            }

            result[weekDays[i]] = Math.floor(
                (original[weekDays[prev]] + original[weekDays[next]]) / 2
            );
        }
    }

    return result;
}

module.exports = transformData;
