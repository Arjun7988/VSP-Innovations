import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CalendarBooking = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {
        "cssVarsPerTheme": {
          "light": {"cal-brand": "#7C3AED"},
          "dark": {"cal-brand": "#8B5CF6"}
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);

  return (
    <div className="w-full h-full">
      <button 
        data-cal-namespace="30min"
        data-cal-link="vsp-innovations/30min"
        data-cal-config='{"layout":"month_view"}'
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg 
                 hover:opacity-90 transition-opacity font-medium"
      >
        Book a Consultation
      </button>
    </div>
  );
};

export default CalendarBooking;