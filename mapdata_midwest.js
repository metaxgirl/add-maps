var simplemaps_countymap_mapdata={
  main_settings: {
    //General
    width: "responsive",
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",

    //State defaults
    state_description: "Service Area",
    state_color: "#d3d3d3",
    state_hover_color: "#a9a9a9",
    state_url: "",

    //County defaults
    county_description: "County",
    county_color: "#e5e5e5",
    county_hover_color: "#c3c3c3",
    county_url: "",

    //Locations
    location_description: "Location",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,

    //Labels
    label_color: "#000000",
    label_size: "12",
    label_font: "Arial",
    hide_labels: "no",

    //Advanced
    div: "map-midwest",
    auto_load: "yes",

    //Zoom behavior
    zoom: "yes",
    manual_zoom: "yes",
    initial_zoom: "-1",
    initial_region: "0",
    initial_region_only: "yes",
    region_zoom_percentage: "1.0"
  },

  // *** DEFINE MIDWEST REGION ***
  regions: {
    "0": {
      name: "Midwest",
      states: ["SD", "ND", "IA", "MN"]
    }
  },

  // *** COUNTY DEFINITIONS (TRIMMED TO ONLY MIDWEST) ***
  state_specific: {

    /* ================================
       SOUTH DAKOTA (SD) SERVICE COUNTIES
       ================================ */

    // Hamlin County (Hayti)
    "46057": {
      name: "Hamlin County, SD",
      color: "#3b6ea5",
      description: "Service Area – Hamlin County"
    },

    "46029": { name: "Codington County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46025": { name: "Clark County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46077": { name: "Kingsbury County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46011": { name: "Brookings County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46039": { name: "Deuel County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46051": { name: "Grant County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46109": { name: "Roberts County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46037": { name: "Day County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46091": { name: "Marshall County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46115": { name: "Spink County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46005": { name: "Beadle County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46013": { name: "Brown County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46097": { name: "Miner County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46079": { name: "Lake County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46087": { name: "McCook County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46095": { name: "Mellette County, SD", inactive: "yes" }, 
    "46099": { name: "Minnehaha County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46111": { name: "Sanborn County, SD", inactive: "yes"},
    "46125": { name: "Turner County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46127": { name: "Union County, SD", inactive: "yes"},
    "46135": { name: "Yankton County, SD", inactive: "yes"},


    /* ================================
       MINNESOTA (MN) SERVICE COUNTIES
       ================================ */

    "27081": { name: "Lincoln County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27083": { name: "Lyon County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27117": { name: "Pipestone County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27133": { name: "Rock County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27101": { name: "Murray County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27105": { name: "Nobles County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27063": { name: "Jackson County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27033": { name: "Cottonwood County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27165": { name: "Watonwan County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27091": { name: "Martin County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27015": { name: "Brown County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27127": { name: "Redwood County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27143": { name: "Nicollet County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27013": { name: "Blue Earth County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27079": { name: "Le Sueur County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27161": { name: "Waseca County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27147": { name: "Steele County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27047": { name: "Freeborn County, MN", color: "#3b6ea5", url: "/minnesota" },
    "27043": { name: "Faribault County, MN", color: "#3b6ea5", url: "/minnesota" },


    /* ================================
       NORTH DAKOTA (ND) SERVICE COUNTIES
       ================================ */

    "38077": { name: "Richland County, ND", color: "#3b6ea5", url: "/north-dakota" },
    "38081": { name: "Sargent County, ND", color: "#3b6ea5", url: "/north-dakota" },
    "38073": { name: "Ransom County, ND", color: "#3b6ea5", url: "/north-dakota" },
    "38021": { name: "Dickey County, ND", color: "#3b6ea5", url: "/north-dakota" },
    "38045": { name: "LaMoure County, ND", color: "#3b6ea5", url: "/north-dakota" },


    /* ================================
       IOWA (IA) SERVICE COUNTIES
       ================================ */

    "19119": { name: "Lyon County, IA", color: "#3b6ea5", url: "/iowa" },
    "19143": { name: "Osceola County, IA", color: "#3b6ea5", url: "/iowa" },
    "19059": { name: "Dickinson County, IA", color: "#3b6ea5", url: "/iowa" },
    "19167": { name: "Sioux County, IA", color: "#3b6ea5", url: "/iowa" },
    "19141": { name: "O'Brien County, IA", color: "#3b6ea5", url: "/iowa" },

    /* Borderline counties you approved */
    "19149": { name: "Plymouth County, IA", color: "#3b6ea5", url: "/iowa" },
    "19035": { name: "Cherokee County, IA", color: "#3b6ea5", url: "/iowa" },
    "19041": { name: "Clay County, IA", color: "#3b6ea5" }
  },

  locations: {},
  labels: {},
  legend: { entries: [] }
};
