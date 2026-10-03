const feLabels = [
  "FST W1",
  "FST W2",
  "PST W1",
  "PST W2",
  "PST W3",
  "PST W4",
  "PST W5",
];
const fsvLabels = [
  "PST W1",
  "PST W2",
  "PST W3",
  "PST W4",
  "PST W5",
  "OCP W1",
  "OCP W2",
  "OCP W3",
];

// Extracted Dataset from Fiserv Weekly Survey Data.xlsx
let database = {
  overall: {
    trainer: "Multiple",
    //"fe_data": [98.0, 96.9, 96.5, 96.0, 95.4, 89.7, 89.7],
    //"fsv_data": [98.3, 98.3, 95.0, 92.0, 92.0, 99.3, 99.0, 100.0]

    fe_data: [
      {
        week: "FST W1",
        day: "Day 1",
        score: 96.3,
      },

      {
        week: "FST W2",
        day: "Day 5",
        score: 96.3,
      },

      {
        week: "PST W1",
        day: "Day 10",
        score: 97.67,
      },

      {
        week: "PST W2",
        day: "Day 15",
        score: 97.67,
      },

      {
        week: "PST W3",
        day: "Day 20",
        score: 97.67,
      },

      {
        week: "PST W4",
        day: "Day 25",
        score: null,
      },

      {
        week: "PST W5",
        day: "Day 30",
        score: null,
      },
    ],
  },

  //QUARTERLY FILTER DATA
  //"BAG TCPA Wave 14": {
  //trainer: "Maureen Mariano",
  //fe_data: [100.0, 100.0, 100.0, null, null, null, null],
  //fsv_data: [null, null, null, null, null, 100.0, null, null] },

  "BAG TCPA Wave 14": {
    trainer: "Maureen Mariano",

    fe_data: [
      {
        week: "FST W1",
        day: "Day 1",
        score: 100,
      },

      {
        week: "FST W2",
        day: "Day 5",
        score: 100,
      },

      {
        week: "PST W1",
        day: "Day 10",
        score: 100,
      },

      {
        week: "PST W2",
        day: "Day 15",
        score: null,
      },

      {
        week: "PST W3",
        day: "Day 20",
        score: null,
      },

      {
        week: "PST W4",
        day: "Day 25",
        score: null,
      },

      {
        week: "PST W5",
        day: "Day 30",
        score: null,
      },
    ],
  },

  //"BAG Closed Loop Wave 23": { trainer: "Bryan Victoria", fe_data: [96.3, 96.3, 97.67, 97.67, 97.67, null, null], fsv_data: [null, null, null, null, null, 98.0, 98.0, null] },
  "BAG Closed Loop Wave 23": {
    trainer: "Bryan Victoria",

    fe_data: [
      {
        week: "FST W1",
        day: "Day 1",
        score: 100,
      },

      {
        week: "FST W2",
        day: "Day 5",
        score: 100,
      },

      {
        week: "PST W1",
        day: "Day 10",
        score: 100,
      },

      {
        week: "PST W2",
        day: "Day 15",
        score: null,
      },

      {
        week: "PST W3",
        day: "Day 20",
        score: null,
      },

      {
        week: "PST W4",
        day: "Day 25",
        score: null,
      },

      {
        week: "PST W5",
        day: "Day 30",
        score: null,
      },
    ],
  },

  //"BAG Universal Fraud Wave 47 [STAR/FRIS]": { trainer: "Dexter Dela Cruz", fe_data: [null, null, null, null, null, null, null], fsv_data: [100.0, 100.0, null, null, null, 100.0, 100.0, 100.0] },
  "BAG Universal Fraud Wave 47 [STAR/FRIS]": {
    trainer: "Dexter Dela Cruz",

    fe_data: [
      {
        week: "FST W1",
        day: "Day 1",
        score: 100,
      },

      {
        week: "FST W2",
        day: "Day 5",
        score: 100,
      },

      {
        week: "PST W1",
        day: "Day 10",
        score: 100,
      },

      {
        week: "PST W2",
        day: "Day 15",
        score: null,
      },

      {
        week: "PST W3",
        day: "Day 20",
        score: null,
      },

      {
        week: "PST W4",
        day: "Day 25",
        score: null,
      },

      {
        week: "PST W5",
        day: "Day 30",
        score: null,
      },
    ],
  },

  //"BAG Dialer Wave 13": { trainer: "Jeonard Marasigan", fe_data: [null, null, null, null, null, null, null], fsv_data: [null, null, null, null, null, null, null, null] },
  "BAG Dialer Wave 13": {
    trainer: "Jeonard Marasigan",

    fe_data: [
      {
        week: "FST W1",
        day: "Day 1",
        score: 100,
      },

      {
        week: "FST W2",
        day: "Day 5",
        score: 100,
      },

      {
        week: "PST W1",
        day: "Day 10",
        score: 100,
      },

      {
        week: "PST W2",
        day: "Day 15",
        score: null,
      },

      {
        week: "PST W3",
        day: "Day 20",
        score: null,
      },

      {
        week: "PST W4",
        day: "Day 25",
        score: null,
      },

      {
        week: "PST W5",
        day: "Day 30",
        score: null,
      },
    ],
  },

  //"PPS Universal Fraud Wave 23 [STAR/FRIS]": { trainer: "Nheanne Manalo", fe_data: [100.0, 100.0, 95.04, 95.04, null, null, null], fsv_data: [null, null, null, null, null, null, null, null] },
  "PPS Universal Fraud Wave 23 [STAR/FRIS]": {
    trainer: "Nheanne Manalo",

    fe_data: [
      {
        week: "FST W1",
        day: "Day 1",
        score: 100,
      },

      {
        week: "FST W2",
        day: "Day 5",
        score: 100,
      },

      {
        week: "PST W1",
        day: "Day 10",
        score: 100,
      },

      {
        week: "PST W2",
        day: "Day 15",
        score: null,
      },

      {
        week: "PST W3",
        day: "Day 20",
        score: null,
      },

      {
        week: "PST W4",
        day: "Day 25",
        score: null,
      },

      {
        week: "PST W5",
        day: "Day 30",
        score: null,
      },
    ],
  },

  //"BAG TCK Merchant Services Wave 18": { trainer: "Dexter Dela Cruz", fe_data: [94.44, 94.44, 94.44, 94.44, 94.44, null, null], fsv_data: [100.0, 100.0, null, null, null, null, null, null] },
  "BAG TCK Merchant Services Wave 18": {
    trainer: "Dexter Dela Cruz",

    fe_data: [
      {
        week: "FST W1",
        day: "Day 1",
        score: 100,
      },

      {
        week: "FST W2",
        day: "Day 5",
        score: 100,
      },

      {
        week: "PST W1",
        day: "Day 10",
        score: 100,
      },

      {
        week: "PST W2",
        day: "Day 15",
        score: null,
      },

      {
        week: "PST W3",
        day: "Day 20",
        score: null,
      },

      {
        week: "PST W4",
        day: "Day 25",
        score: null,
      },

      {
        week: "PST W5",
        day: "Day 30",
        score: null,
      },
    ],
  },

  //"BAG Money Network Wave 170": { trainer: "Raphael Agulto", fe_data: [97.78, 97.78, 97.78, 97.78, 97.78, null, null], fsv_data: [100.0, 100.0, null, null, null, null, null, null] },
  "BAG Money Network Wave 170": {
    trainer: "Raphael Agulto",

    fe_data: [
      {
        week: "FST W1",
        day: "Day 1",
        score: 100,
      },

      {
        week: "FST W2",
        day: "Day 5",
        score: 100,
      },

      {
        week: "PST W1",
        day: "Day 10",
        score: 100,
      },

      {
        week: "PST W2",
        day: "Day 15",
        score: null,
      },

      {
        week: "PST W3",
        day: "Day 20",
        score: null,
      },

      {
        week: "PST W4",
        day: "Day 25",
        score: null,
      },

      {
        week: "PST W5",
        day: "Day 30",
        score: null,
      },
    ],
  },

  //"PPS Voice Authorization Wave 14": { trainer: "Jamuel Doria", fe_data: [100.0, 100.0, 100.0, 100.0, null, null, null], fsv_data: [100.0, 100.0, null, null, null, null, null, null] },
  "PPS Voice Authorization Wave 14": {
    trainer: "Jamuel Doria",

    fe_data: [
      {
        week: "FST W1",
        day: "Day 1",
        score: 100,
      },

      {
        week: "FST W2",
        day: "Day 5",
        score: 100,
      },

      {
        week: "PST W1",
        day: "Day 10",
        score: 100,
      },

      {
        week: "PST W2",
        day: "Day 15",
        score: null,
      },

      {
        week: "PST W3",
        day: "Day 20",
        score: null,
      },

      {
        week: "PST W4",
        day: "Day 25",
        score: null,
      },

      {
        week: "PST W5",
        day: "Day 30",
        score: null,
      },
    ],
  },

  //"BAG RSA CS Wave 1": { trainer: "Bernard Bayong", fe_data: [null, 89.68, 89.68, 89.68, 89.68, 89.68, 89.68], fsv_data: [92.0, 92.0, 92.0, 92.0, 92.0, null, null, null] },
  "BAG RSA CS Wave 1": {
    trainer: "Bernard Bayong",

    fe_data: [
      {
        week: "FST W1",
        day: "Day 1",
        score: 100,
      },

      {
        week: "FST W2",
        day: "Day 5",
        score: 100,
      },

      {
        week: "PST W1",
        day: "Day 10",
        score: 100,
      },

      {
        week: "PST W2",
        day: "Day 15",
        score: null,
      },

      {
        week: "PST W3",
        day: "Day 20",
        score: null,
      },

      {
        week: "PST W4",
        day: "Day 25",
        score: null,
      },

      {
        week: "PST W5",
        day: "Day 30",
        score: null,
      },
    ],
  },

  //"BAG Closed Loop Wave 24": { trainer: "Jimrose Sarmiento", fe_data: [null, null, null, null, null, null, null], fsv_data: [null, null, null, null, null, null, null, null] },
  "BAG Closed Loop Wave 24": {
    trainer: "Jimrose Sarmiento",

    fe_data: [
      {
        week: "FST W1",
        day: "Day 1",
        score: 100,
      },

      {
        week: "FST W2",
        day: "Day 5",
        score: 100,
      },

      {
        week: "PST W1",
        day: "Day 10",
        score: 100,
      },

      {
        week: "PST W2",
        day: "Day 15",
        score: null,
      },

      {
        week: "PST W3",
        day: "Day 20",
        score: null,
      },

      {
        week: "PST W4",
        day: "Day 25",
        score: null,
      },

      {
        week: "PST W5",
        day: "Day 30",
        score: null,
      },
    ],
  },

  //"BAG Digital Payment Wave 21": { trainer: " AJ Mendoza", fe_data: [97.37, 97.37, 97.37, 97.37, 97.37, null, null], fsv_data: [98.0, 98.0, 98.0, null, null, null, null, null] }
  "BAG Digital Payment Wave 21": {
    trainer: "AJ Mendoza",

    fe_data: [
      {
        week: "FST W1",
        day: "Day 1",
        score: 100,
      },

      {
        week: "FST W2",
        day: "Day 5",
        score: 100,
      },

      {
        week: "PST W1",
        day: "Day 10",
        score: 100,
      },

      {
        week: "PST W2",
        day: "Day 15",
        score: null,
      },

      {
        week: "PST W3",
        day: "Day 20",
        score: null,
      },

      {
        week: "PST W4",
        day: "Day 25",
        score: null,
      },

      {
        week: "PST W5",
        day: "Day 30",
        score: null,
      },
    ],
  },
};

const missingClasses = [
  "BAG Universal Fraud Wave 47 [STAR/FRIS]",
  "BAG Dialer Wave 13",
  "BAG RSA CS Wave 1",
  "BAG Closed Loop Wave 24",
];

let feChartInstance, fsvChartInstance;

function initApp() {
  // Populate Dropdown
  const select = document.getElementById("classFilter");
  Object.keys(database).forEach((cls) => {
    if (cls !== "overall") {
      let opt = document.createElement("option");
      opt.value = cls;
      opt.textContent = `${cls} (${database[cls].trainer})`;
      select.appendChild(opt);
    }
  });

  // Populate Missing Callouts
  const calloutContainer = document.getElementById("missingSurveysList");
  missingClasses.forEach((cls) => {
    calloutContainer.innerHTML += `
                    <div class="bg-white px-4 py-2 border-l-4 border-danger rounded shadow-sm text-sm font-semibold text-gray-800">
                        ${cls}
                        <div class="text-xs text-gray-500 font-normal mt-0.5">Trainer: ${database[cls].trainer}</div>
                    </div>
                `;
  });

  initCharts();
  updateDashboard();
}

function initCharts() {
  const chartDefaults = {
    type: "line",
    options: {
      responsive: true,
      maintainAspectRatio: false,
      spanGaps: true, // Connect lines over null/missing data
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: { label: (ctx) => (ctx.raw ? `${ctx.raw}%` : "No Data") },
        },
      },
      scales: {
        y: { min: 70, max: 100, ticks: { callback: (v) => v + "%" } },
        x: { grid: { display: false } },
      },
      elements: {
        line: { tension: 0.3, borderWidth: 3 },
        point: { radius: 5, hoverRadius: 7 },
      },
    },
  };

  const ctxFE = document.getElementById("feChart").getContext("2d");
  feChartInstance = new Chart(ctxFE, {
    ...chartDefaults,
    data: {
      labels: feLabels,
      datasets: [
        {
          label: "Score",
          borderColor: "#0F4C81",
          backgroundColor: "rgba(15, 76, 129, 0.1)",
          fill: true,
          data: [],
        },
      ],
    },
  });

  const ctxFSV = document.getElementById("fsvChart").getContext("2d");
  fsvChartInstance = new Chart(ctxFSV, {
    ...chartDefaults,
    data: {
      labels: fsvLabels,
      datasets: [
        {
          label: "Score",
          borderColor: "#F59E0B",
          backgroundColor: "rgba(245, 158, 11, 0.1)",
          fill: true,
          data: [],
        },
      ],
    },
  });
}

function calculateAvg(arr) {
  const valid = arr.filter((v) => v !== null && !isNaN(v));
  if (valid.length === 0) return "--%";
  return (valid.reduce((a, b) => a + b, 0) / valid.length).toFixed(1) + "%";
}
//UPDATE DASHBOARD
function updateDashboard() {
  const selectedClass = document.getElementById("classFilter").value;
  const data = database[selectedClass];

  // Update Label
  document.getElementById("currentViewLabel").textContent =
    selectedClass === "overall" ? "Overall Averages" : selectedClass;

  // Update Analytics
  document.getElementById("fstAvg").textContent =
    `Avg: ${calculateAvg(data.fe_data.slice(0, 2))}`;
  document.getElementById("pstAvg").textContent =
    `Avg: ${calculateAvg([...data.fe_data.slice(2), ...data.fsv_data.slice(0, 5)])}`;
  document.getElementById("ocpAvg").textContent =
    `Avg: ${calculateAvg(data.fsv_data.slice(5))}`;

  // Update Charts
  feChartInstance.data.datasets[0].data = data.fe_data;
  feChartInstance.update();
  fsvChartInstance.data.datasets[0].data = data.fsv_data;
  fsvChartInstance.update();

  //additional calculations:
  document.getElementById("participationRate").textContent =
    calculateParticipation(data) + "%";

  document.getElementById("avgScore").textContent =
    calculateOverallAverage(data) + "%";

  document.getElementById("npsScore").textContent = calculateNPS(data);

  document.getElementById("surveyCount").textContent =
    calculateSurveyCount(data);

  document.getElementById("trainerEffectiveness").textContent =
    calculateTrainerEffectiveness(data) + "%";
}

/* --- Modal Edit Logic --- */
function openEditModal() {
  const selectedClass = document.getElementById("classFilter").value;
  document.getElementById("modalClassName").textContent =
    selectedClass === "overall" ? "Overall Averages" : selectedClass;
  const data = database[selectedClass];

  const feHtml = feLabels
    .map(
      (lbl, idx) => `
                <div class="flex flex-col">
                    <label class="text-xs text-gray-500 mb-1">${lbl}</label>
                    <input type="number" id="editFE_${idx}" class="border rounded px-2 py-1 text-sm outline-primary" value="${data.fe_data[idx] || ""}" placeholder="Null">
                </div>
            `,
    )
    .join("");
  document.getElementById("feInputs").innerHTML = feHtml;

  const fsvHtml = fsvLabels
    .map(
      (lbl, idx) => `
                <div class="flex flex-col">
                    <label class="text-xs text-gray-500 mb-1">${lbl}</label>
                    <input type="number" id="editFSV_${idx}" class="border rounded px-2 py-1 text-sm outline-primary" value="${data.fsv_data[idx] || ""}" placeholder="Null">
                </div>
            `,
    )
    .join("");
  document.getElementById("fsvInputs").innerHTML = fsvHtml;

  document.getElementById("editModal").classList.remove("hidden");
}

function closeEditModal() {
  document.getElementById("editModal").classList.add("hidden");
}

function saveEdits() {
  const selectedClass = document.getElementById("classFilter").value;

  for (let i = 0; i < feLabels.length; i++) {
    const val = document.getElementById(`editFE_${i}`).value;
    database[selectedClass].fe_data[i] = val ? parseFloat(val) : null;
  }

  for (let i = 0; i < fsvLabels.length; i++) {
    const val = document.getElementById(`editFSV_${i}`).value;
    database[selectedClass].fsv_data[i] = val ? parseFloat(val) : null;
  }

  updateDashboard();
  closeEditModal();
  alert("Data updated successfully for the current session!");
}

window.onload = initApp;

function getValidResponses(arr) {
  return arr.filter((x) => x !== null && !isNaN(x));
}

function calculateParticipation(data) {
  const total = data.fe_data.length + data.fsv_data.length;

  const completed =
    getValidResponses(data.fe_data).length +
    getValidResponses(data.fsv_data).length;

  return ((completed / total) * 100).toFixed(1);
}

function calculateOverallAverage(data) {
  const combined = [
    ...getValidResponses(data.fe_data),
    ...getValidResponses(data.fsv_data),
  ];

  if (combined.length === 0) return "--";

  return (combined.reduce((a, b) => a + b, 0) / combined.length).toFixed(1);
}

function calculateTrainerEffectiveness(data) {
  const valid = getValidResponses(data.fe_data);

  if (valid.length === 0) return "--";

  return (valid.reduce((a, b) => a + b, 0) / valid.length).toFixed(1);
}

function calculateNPS(data) {
  const avg = parseFloat(calculateOverallAverage(data));

  if (isNaN(avg)) return "--";

  return "+" + Math.round(avg - 20);
}

function calculateSurveyCount(data) {
  return (
    getValidResponses(data.fe_data).length +
    getValidResponses(data.fsv_data).length
  );
}
