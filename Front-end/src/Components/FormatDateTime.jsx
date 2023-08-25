// ดีfunction แปลวันที่ MM/DD/YYYY เวลา AM ,PM

export const FormatDateTime = () => {
  //แปลงค่า วันที่
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthString = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = monthString[monthIndex];
    const year = date.getFullYear();
    return `${month}  ${day < 10 ? "0" + day : day}  ${year}`;
  };

  const formatTime = (time24Hour) => {
    const timeArr = time24Hour.split(":");
    let hours = parseInt(timeArr[0]);
    const minutes = timeArr[1];
    let amPm = "AM";

    if (hours === 0) {
      hours = 12;
    } else if (hours === 12) {
      amPm = "PM";
    } else if (hours > 12) {
      hours -= 12;
      amPm = "PM";
    }

    return `${hours}:${minutes} ${amPm}`;
  };

  return { formatDate, formatTime };
};
