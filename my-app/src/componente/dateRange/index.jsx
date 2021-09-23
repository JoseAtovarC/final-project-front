import { addDays, format, isWeekend } from 'date-fns';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 



function CustomDayContent(day) {
    const [state, setState] = useState({
        selection1: {
          startDate: addDays(new Date(), -6),
          endDate: new Date(),
          key: 'selection1'
        },
        selection2: {
          startDate: addDays(new Date(), 1),
          endDate: addDays(new Date(), 7),
          key: 'selection2'
        }
      });

    function customDay(day) {
   
  let extraDot = null;
  if (isWeekend(day)) {
    extraDot = (
      <div
        style={{
          height: "5px",
          width: "5px",
          borderRadius: "100%",
          background: "orange",
          position: "absolute",
          top: 2,
          right: 2,
        }}
      />
    )
  }}
  return (
    <div>
      <DateRangePicker
  onChange={item => setState({ ...state, ...item })}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  months={2}
  ranges={[state.selection1, state.selection2]}
  direction="horizontal"
  dayContentRenderer={customDay}
  ariaLabels={{
    dateInput: {
      selection1: { startDate: "start date input of selction 1", endDate: "end date input of selction 1" },
      selection2: { startDate: "start date input of selction 2", endDate: "end date input of selction 2" }
    },
    monthPicker: "month picker",
    yearPicker: "year picker",
    prevButton: "previous month button",
    nextButton: "next month button",
  }}
/>;
      <span>{format(day, "d")}</span>
    </div>

  )}

  export default CustomDayContent