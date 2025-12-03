var simplemaps_countymap_mapdata = {
  main_settings: {
    // General
    width: "responsive",
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",

    // State defaults
    state_description: "Service Area",
    state_color: "#d3d3d3",
    state_hover_color: "#a9a9a9",
    state_url: "",

    // County defaults
    county_description: "County",
    county_color: "#e5e5e5",
    county_hover_color: "#c3c3c3",
    county_url: "",

    // Locations
    location_description: "Location",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,

    // Labels
    label_color: "#000000",
    label_size: "12",
    label_font: "Arial",
    hide_labels: "no",

    // Advanced
    div: "map-ne",
    auto_load: "no",

    // Zoom behavior
    zoom: "yes",
    manual_zoom: "yes",
    initial_zoom: "-1"
  },

  // *** SERVICE COUNTIES ONLY (TRIMMED) ***
  state_specific: {

    /* CONNECTICUT (CT) – ALL COUNTIES */
    "09001": { name: "Fairfield County, CT",  color: "#3b6ea5", url: "/connecticut" },
    "09003": { name: "Hartford County, CT",   color: "#3b6ea5", url: "/connecticut" },
    "09005": { name: "Litchfield County, CT", color: "#3b6ea5", url: "/connecticut" },
    "09007": { name: "Middlesex County, CT",  color: "#3b6ea5", url: "/connecticut" },
    "09009": { name: "New Haven County, CT",  color: "#3b6ea5", url: "/connecticut" },
    "09011": { name: "New London County, CT", color: "#3b6ea5", url: "/connecticut" },
    "09013": { name: "Tolland County, CT",    color: "#3b6ea5", url: "/connecticut" },
    "09015": { name: "Windham County, CT",    color: "#3b6ea5", url: "/connecticut" },

    /* RHODE ISLAND (RI) – ALL COUNTIES */
    "44001": { name: "Bristol County, RI",    color: "#3b6ea5", url: "/rhode-island" },
    "44003": { name: "Kent County, RI",       color: "#3b6ea5", url: "/rhode-island" },
    "44005": { name: "Newport County, RI",    color: "#3b6ea5", url: "/rhode-island" },
    "44007": { name: "Providence County, RI", color: "#3b6ea5", url: "/rhode-island" },
    "44009": { name: "Washington County, RI", color: "#3b6ea5", url: "/rhode-island" },

    /* VERMONT (VT) – SOUTHERN TWO COUNTIES */
    "50003": { name: "Bennington County, VT", color: "#3b6ea5", url: "/vermont" },
    "50025": { name: "Windham County, VT",    color: "#3b6ea5", url: "/vermont" },

    /* MASSACHUSETTS (MA) – WESTERN PORTION */
    "25003": { name: "Berkshire County, MA",  color: "#3b6ea5", url: "/massachusetts" },
    "25011": { name: "Franklin County, MA",   color: "#3b6ea5", url: "/massachusetts" },
    "25013": { name: "Hampden County, MA",    color: "#3b6ea5", url: "/massachusetts" },
    "25015": { name: "Hampshire County, MA",  color: "#3b6ea5", url: "/massachusetts" },
    "25027": { name: "Worcester County, MA",  color: "#3b6ea5", url: "/massachusetts" },

    /* NEW YORK (NY) – EASTERN, UP TO ALBANY */
    "36001": { name: "Albany County, NY",     color: "#3b6ea5", url: "/new-york" },
    "36021": { name: "Columbia County, NY",   color: "#3b6ea5", url: "/new-york" },
    "36027": { name: "Dutchess County, NY",   color: "#3b6ea5", url: "/new-york" },
    "36039": { name: "Greene County, NY",     color: "#3b6ea5", url: "/new-york" },
    "36071": { name: "Orange County, NY",     color: "#3b6ea5", url: "/new-york" },
    "36079": { name: "Putnam County, NY",     color: "#3b6ea5", url: "/new-york" },
    "36083": { name: "Rensselaer County, NY", color: "#3b6ea5", url: "/new-york" },
    "36087": { name: "Rockland County, NY",   color: "#3b6ea5", url: "/new-york" },
    "36111": { name: "Ulster County, NY",     color: "#3b6ea5", url: "/new-york" },
    "36119": { name: "Westchester County, NY",color: "#3b6ea5", url: "/new-york" }
  },

  locations: {},
  labels: {},
  legend: { entries: [] }
};
